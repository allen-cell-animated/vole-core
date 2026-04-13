
#ifdef GL_ES
precision highp float;
precision highp sampler3D;
#endif

#define M_PI 3.14159265358979323846

uniform vec2 iResolution;
uniform float GAMMA_MIN;
uniform float GAMMA_MAX;
uniform float GAMMA_SCALE;
uniform float BRIGHTNESS;
uniform float DENSITY;
uniform float maskAlpha;
uniform vec3 AABB_CLIP_MIN;
uniform float CLIP_NEAR;
uniform vec3 AABB_CLIP_MAX;
uniform float CLIP_FAR;
uniform sampler3D volumeTexture;
uniform sampler2D gLutTexture;
uniform int gNChannels;
uniform sampler2D textureDepth;
uniform int usingPositionTexture;
uniform int BREAK_STEPS;
uniform float isOrtho;
uniform float orthoThickness;
uniform float orthoScale;
uniform int maxProject;
uniform bool interpolationEnabled;
uniform vec3 flipVolume;
uniform vec3 volumeScale;

// view space to axis-aligned volume box
uniform mat4 inverseModelViewMatrix;
uniform mat4 inverseProjMatrix;

varying vec3 pObj;

float powf(float a, float b) {
  return pow(a, b);
}

float rand(vec2 co) {
  float threadId = gl_FragCoord.x / (gl_FragCoord.y + 1.0);
  float bigVal = threadId * 1299721.0 / 911.0;
  vec2 smallVal = vec2(threadId * 7927.0 / 577.0, threadId * 104743.0 / 1039.0);
  return fract(sin(dot(co, smallVal)) * bigVal);
}

vec4 luma2Alpha(vec4 color, float vmin, float vmax, float C) {
  float x = dot(color.rgb, vec3(0.2125, 0.7154, 0.0721));
  float xi = (x - vmin) / (vmax - vmin);
  xi = clamp(xi, 0.0, 1.0);
  float y = pow(xi, C);
  y = clamp(y, 0.0, 1.0);
  color[3] = y;
  return color;
}

// Transform position to volume texture coordinates, applying flip
vec3 PtoVolumeTex(vec3 pos) {
  // pos is in 0..1 range
  // if flipVolume = 1, uvw is unchanged.
  // if flipVolume = -1, uvw = 1 - uvw
  vec3 uvw = (flipVolume * (pos - 0.5) + 0.5);
  return uvw;
}

// Sample the 3D volume texture and compute color from LUT
// Returns RGBA color after applying per-channel LUTs and combining channels
// The output has premultiplied alpha to match the old fused texture format
vec4 sampleVolume(vec3 pos) {
  float bounds = float(pos.x >= 0.0 && pos.x <= 1.0 &&
    pos.y >= 0.0 && pos.y <= 1.0 &&
    pos.z >= 0.0 && pos.z <= 1.0);
  
  vec3 uvw = PtoVolumeTex(pos);
  vec4 intensity = texture(volumeTexture, uvw);
  
  // Accumulate color from all active channels using their LUTs
  // Output is premultiplied alpha (rgb * alpha, alpha) like the old fused texture
  vec4 color = vec4(0.0);
  for (int i = 0; i < min(gNChannels, 4); ++i) {
    float channelIntensity = intensity[i];
    // Sample the LUT for this channel (LUT texture is 256x4, each row is a channel)
    vec4 lutColor = texture2D(gLutTexture, vec2(channelIntensity, (0.5 + float(i)) / 4.0));
    // Premultiply alpha: rgb * alpha
    vec4 premultiplied = vec4(lutColor.rgb * lutColor.a, lutColor.a);
    // Use max blending to combine channels (similar to the atlas fuse approach)
    color = max(color, premultiplied);
  }
  
  return bounds * color;
}

bool intersectBox(
  in vec3 r_o,
  in vec3 r_d,
  in vec3 boxMin,
  in vec3 boxMax,
  out float tnear,
  out float tfar
) {
  // compute intersection of ray with all six bbox planes
  vec3 invR = vec3(1.0, 1.0, 1.0) / r_d;
  vec3 tbot = invR * (boxMin - r_o);
  vec3 ttop = invR * (boxMax - r_o);

  // re-order intersections to find smallest and largest on each axis
  vec3 tmin = min(ttop, tbot);
  vec3 tmax = max(ttop, tbot);

  // find the largest tmin and the smallest tmax
  float largest_tmin = max(max(tmin.x, tmin.y), tmin.z);
  float smallest_tmax = min(min(tmax.x, tmax.y), tmax.z);

  tnear = largest_tmin;
  tfar = smallest_tmax;

  // use >= here?
  return (smallest_tmax > largest_tmin);
}

vec4 accumulate(vec4 col, float s, vec4 C) {
  float stepScale = (1.0 - powf((1.0 - col.w), s));
  col.w = stepScale;
  col.xyz *= col.w;
  col = clamp(col, 0.0, 1.0);

  C = (1.0 - C.w) * col + C;
  return C;
}

vec4 integrateVolume(
  vec4 eye_o,
  vec4 eye_d,
  float tnear,
  float tfar,
  float clipNear,
  float clipFar
) {
  vec4 C = vec4(0.0);
  // march along ray from front to back, accumulating color

  // estimate step length
  const int maxSteps = 512;
  // modify the 3 components of eye_d by volume scale
  float scaledSteps = float(BREAK_STEPS) * length((eye_d.xyz / volumeScale));
  float csteps = clamp(float(scaledSteps), 1.0, float(maxSteps));
  float invstep = (tfar - tnear) / csteps;
  float r = rand(eye_d.xy);
  // if ortho and clipped, make step size smaller so we still get same number of steps
  float tstep = invstep * orthoThickness;
  float tfarsurf = r * tstep;
  float overflow = mod((tfarsurf - tfar), tstep); // random dithering offset
  float t = tnear + overflow;
  t += r * tstep; // random dithering offset
  float tdist = 0.0;
  int numSteps = 0;
  vec4 pos, col;
  // We need to be able to scale the alpha contrib with number of ray steps,
  // in order to make the final color invariant to the step size(?)
  // use maxSteps (a constant) as the numerator... Not sure if this is sound.
  float s = 0.5 * float(maxSteps) / csteps;
  for (int i = 0; i < maxSteps; i++) {
    pos = eye_o + eye_d * t;
    // !!! assume box bounds are -0.5 .. 0.5.  pos = (pos-min)/(max-min)
    // scaling is handled by model transform and already accounted for before we get here.
    // AABB clip is independent of this and is only used to determine tnear and tfar.
    pos.xyz = (pos.xyz - (-0.5)) / ((0.5) - (-0.5)); //0.5 * (pos + 1.0); // map position from [boxMin, boxMax] to [0, 1] coordinates

    vec4 col = sampleVolume(pos.xyz);

    if (maxProject != 0) {
      col.xyz *= BRIGHTNESS;
      C = max(col, C);
    } else {
      col = luma2Alpha(col, GAMMA_MIN, GAMMA_MAX, GAMMA_SCALE);
      col.xyz *= BRIGHTNESS;
      // for practical use the density only matters for regular volume integration
      col.w *= DENSITY;
      C = accumulate(col, s, C);
    }
    t += tstep;
    numSteps = i;

    if (t > tfar || t > tnear + clipFar)
      break;
    if (C.w > 1.0)
      break;
  }

  return C;
}

void main() {
  gl_FragColor = vec4(0.0);
  vec2 vUv = gl_FragCoord.xy / iResolution.xy;

  vec3 eyeRay_o, eyeRay_d;

  if (isOrtho == 0.0) {
    // for perspective rays:
    // world space camera coordinates
    // transform to object space
    eyeRay_o = (inverseModelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
    eyeRay_d = normalize(pObj - eyeRay_o);
  } else {
    // for ortho rays:
    float zDist = 2.0;
    eyeRay_d = (inverseModelViewMatrix * vec4(0.0, 0.0, -zDist, 0.0)).xyz;
    vec4 ray_o = vec4(2.0 * vUv - 1.0, 1.0, 1.0);
    ray_o.xy *= orthoScale;
    ray_o.x *= iResolution.x / iResolution.y;
    eyeRay_o = (inverseModelViewMatrix * ray_o).xyz;
  }

  // -0.5..0.5 is full box. AABB_CLIP lets us clip to a box shaped ROI to look at
  // I am applying it here at the earliest point so that the ray march does
  // not waste steps.  For general shaped ROI, this has to be handled more
  // generally (obviously)
  vec3 boxMin = AABB_CLIP_MIN;
  vec3 boxMax = AABB_CLIP_MAX;

  float tnear, tfar;
  bool hit = intersectBox(eyeRay_o, eyeRay_d, boxMin, boxMax, tnear, tfar);

  if (!hit) {
    // return background color if ray misses the cube
    // is this safe to do when there is other geometry / gObjects drawn?
    gl_FragColor = vec4(0.0); //C1;//vec4(0.0);
    return;
  }

  float clipNear = 0.0;//-(dot(eyeRay_o.xyz, eyeNorm) + dNear) / dot(eyeRay_d.xyz, eyeNorm);
  float clipFar = 10000.0;//-(dot(eyeRay_o.xyz,-eyeNorm) + dFar ) / dot(eyeRay_d.xyz,-eyeNorm);

  // Sample the depth/position texture
  // If this is a depth texture, the r component is a depth value. If this is a position texture,
  // the xyz components are a view space position and w is 1.0 iff there's a mesh at this fragment.
  vec4 meshPosSample = texture2D(textureDepth, vUv);
  // Note: we make a different check for whether a mesh is present with depth vs. position textures.
  // Here's the check for depth textures:
  bool hasDepthValue = usingPositionTexture == 0 && meshPosSample.r < 1.0;

  // If there's a depth-contributing mesh at this fragment, we may need to terminate the ray early
  if (hasDepthValue || (usingPositionTexture == 1 && meshPosSample.a > 0.0)) {
    if (hasDepthValue) {
      // We're working with a depth value, so we need to convert back to view space position
      // Get a projection space position from depth and uv, and unproject back to view space
      vec4 meshProj = vec4(vUv * 2.0 - 1.0, meshPosSample.r * 2.0 - 1.0, 1.0);
      vec4 meshView = inverseProjMatrix * meshProj;
      meshPosSample = vec4(meshView.xyz / meshView.w, 1.0);
    }
    // Transform the mesh position to object space
    vec4 meshObj = inverseModelViewMatrix * meshPosSample;

    // Derive a t value for the mesh intersection
    // NOTE: divides by 0 when `eyeRay_d.z` is 0. Could be mitigated by picking another component
    //   to derive with when z is 0, but I found this was rare enough in practice to be acceptable.
    float tMesh = (meshObj.z - eyeRay_o.z) / eyeRay_d.z;
    if (tMesh < tfar) {
      clipFar = tMesh - tnear;
    }
  }

  //tnear and tfar are intersections of box
  vec4 C = integrateVolume(vec4(eyeRay_o, 1.0), vec4(eyeRay_d, 0.0), tnear, tfar, clipNear, clipFar);

  C = clamp(C, 0.0, 1.0);
  gl_FragColor = C;
  return;
}
