
#ifdef GL_ES
precision highp float;
precision highp usampler2D;
#endif

#define M_PI 3.14159265358979323846

uniform vec2 iResolution;
uniform vec2 textureRes;

//uniform float maskAlpha;
uniform uvec2 ATLAS_DIMS;
uniform vec3 AABB_CLIP_MIN;
uniform float CLIP_NEAR;
uniform vec3 AABB_CLIP_MAX;
uniform float CLIP_FAR;
// one raw channel atlas that has segmentation data
uniform usampler2D textureAtlas;
//uniform sampler2D textureAtlasMask;
uniform sampler2D textureDepth;
uniform int usingPositionTexture;
uniform int BREAK_STEPS;
uniform float SLICES;
uniform float isOrtho;
uniform float orthoThickness;
uniform float orthoScale;
uniform int maxProject;
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

// get the uv offset into the atlas for the given z slice
// ATLAS_DIMS is the number of z slices across the atlas texture
vec2 offsetFrontBack(uint a) {
  uint ax = ATLAS_DIMS.x;
  vec2 tiles = vec2(1.0 / float(ATLAS_DIMS.x), 1.0 / float(ATLAS_DIMS.y));
  vec2 os = vec2(float(a % ax), float(a / ax)) * tiles;
  return clamp(os, vec2(0.0), vec2(1.0) - vec2(1.0) * tiles);
}

uint sampleAtlasNearest(usampler2D tex, vec4 pos) {
  uint bounds = uint(pos[0] >= 0.0 && pos[0] <= 1.0 &&
    pos[1] >= 0.0 && pos[1] <= 1.0 &&
    pos[2] >= 0.0 && pos[2] <= 1.0);
  float nSlices = float(SLICES);

  // ascii art of a texture atlas:
  //  +------------------+
  //  | 0  | 1  | 2  | 3 |
  //  +------------------+
  //  | 4  | 5  | 6  | 7 | 
  //  +------------------+
  //  | 8  | 9  |10  |11 |
  //  +------------------+
  //  |12  |13  |14  |15 |
  //  +------------------+
  // Each tile is one z-slice of the 3D texture, which has been flattened
  // into an atlased 2D texture.

  // pos.xy is 0-1 range. Apply the xy flip here and then divide by number of tiles in x and y to normalize
  // to a single tile. This results in a uv coordinate that's in the correct X and Y position but only for
  // the first tile (z slice) of the atlas texture, z=0.
  vec2 loc0 = ((pos.xy - 0.5) * flipVolume.xy + 0.5) / vec2(float(ATLAS_DIMS.x), float(ATLAS_DIMS.y));

  // Next, offset the UV coordinate so we are sampling in the correct Z slice.
  // Round z to the nearest (floor) slice
  float z = min(floor(pos.z * nSlices), nSlices - 1.0);
  // flip z coordinate if needed
  if (flipVolume.z == -1.0) {
    z = nSlices - z - 1.0;
  }

  // calculate the offset to the z slice in the atlas texture
  vec2 o = offsetFrontBack(uint(z)) + loc0;
  //uint voxelColor = texture2D(tex, o).x;
  uint voxelColor = texelFetch(tex, ivec2(o * textureRes), 0).x;

  // Apply mask
  // float voxelMask = texture2D(textureAtlasMask, o).x;
  // voxelMask = mix(voxelMask, 1.0, maskAlpha);
  // voxelColor.rgb *= voxelMask;

  return bounds * voxelColor;
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

vec4 integrateVolume(
  vec4 eye_o,
  vec4 eye_d,
  float tnear,
  float tfar,
  float clipNear,
  float clipFar,
  usampler2D textureAtlas
) {
  uint C = 0u;
  // march along ray from front to back, accumulating color

  // estimate step length
  const int maxSteps = 512;
  // modify the 3 components of eye_d by volume scale
  float scaledSteps = float(BREAK_STEPS) * length((eye_d.xyz / volumeScale));
  float csteps = clamp(float(scaledSteps), 1.0, float(maxSteps));
  float invstep = (tfar - tnear) / csteps;
  // Removed random ray dither to prevent artifacting
  float r = 0.0; // (SLICES==1.0) ? 0.0 : rand(eye_d.xy);
  // if ortho and clipped, make step size smaller so we still get same number of steps
  float tstep = invstep * orthoThickness;
  float tfarsurf = r * tstep;
  float overflow = mod((tfarsurf - tfar), tstep); // random dithering offset
  float t = tnear + overflow;
  t += r * tstep; // random dithering offset
  float tdist = 0.0;
  int numSteps = 0;
  vec4 pos, col;
  for (int i = 0; i < maxSteps; i++) {
    pos = eye_o + eye_d * t;
    // !!! assume box bounds are -0.5 .. 0.5.  pos = (pos-min)/(max-min)
    // scaling is handled by model transform and already accounted for before we get here.
    // AABB clip is independent of this and is only used to determine tnear and tfar.
    pos.xyz = (pos.xyz - (-0.5)) / ((0.5) - (-0.5)); //0.5 * (pos + 1.0); // map position from [boxMin, boxMax] to [0, 1] coordinates

    uint col = sampleAtlasNearest(textureAtlas, pos);

    // FOR INTERSECTION / PICKING, the FIRST nonzero intensity terminates the raymarch

    if (maxProject != 0) {
      C = max(col, C);
    } else {
      if (col > 0u) {
        C = col;
        break;
      }
    }
    t += tstep;
    numSteps = i;

    if (t > tfar || t > tnear + clipFar)
      break;
  }

  return vec4(float(C));
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

  vec4 C = integrateVolume(vec4(eyeRay_o, 1.0), vec4(eyeRay_d, 0.0), tnear, tfar, //intersections of box
  clipNear, clipFar, textureAtlas);

  gl_FragColor = C;
  return;
}
