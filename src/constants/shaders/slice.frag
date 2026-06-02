precision highp float;
precision highp int;
precision highp sampler2D;

// All non-sampler uniforms used by the slice shader are packed into a single
// std140 uniform block so they can be uploaded as one UBO via three.js's
// UniformsGroup. The order of declarations here MUST match the order of
// Uniform entries added to the UniformsGroup on the JS side
// (see createSliceShaderResources in volumeSliceShader.ts).
// Note: three.js's UniformsGroup writes every scalar as Float32, so what
// would naturally be `int` or `bool` uniforms (Z_SLICE, interpolationEnabled)
// are declared as `float` and compared against numeric thresholds below.
layout(std140) uniform SliceUniforms {
  vec3 AABB_CLIP_MIN;
  float maskAlpha;
  vec3 AABB_CLIP_MAX;
  float BRIGHTNESS;
  vec3 flipVolume;
  float SLICES;
  vec2 ATLAS_DIMS;
  vec2 textureRes;
  float GAMMA_MIN;
  float GAMMA_MAX;
  float GAMMA_SCALE;
  float Z_SLICE;
  float interpolationEnabled;
};

// Samplers can't live inside a UBO, so they remain standalone uniforms.
uniform sampler2D textureAtlas;
uniform sampler2D textureAtlasMask;

in vec2 vUv;

out vec4 fragColor;

// for atlased texture, we need to find the uv offset for the slice at t
vec2 offsetFrontBack(float t) {
  int a = int(t);
  int ax = int(ATLAS_DIMS.x);
  vec2 os = vec2(float(a - (a / ax) * ax), float(a / ax)) / ATLAS_DIMS;
  return clamp(os, vec2(0.0), vec2(1.0) - vec2(1.0) / ATLAS_DIMS);
}

vec4 sampleAtlas(sampler2D tex, vec4 pos) {
  float bounds = float(pos[0] >= 0.0 && pos[0] <= 1.0 &&
    pos[1] >= 0.0 && pos[1] <= 1.0 &&
    pos[2] >= 0.0 && pos[2] <= 1.0);

  float nSlices = float(SLICES);

  vec2 loc0 = ((pos.xy - 0.5) * flipVolume.xy + 0.5) / ATLAS_DIMS;

  if (interpolationEnabled > 0.5) {
    // loc ranges from 0 to 1/ATLAS_DIMS
    // shrink loc0 to within one half edge texel - so as not to sample across edges of tiles.
    loc0 = loc0 * (vec2(1.0) - ATLAS_DIMS / textureRes);
  } else {
    // No interpolation - sample just one slice at a pixel center.
    loc0 = floor(loc0 * textureRes) / textureRes;
  }
  loc0 += vec2(0.5) / textureRes;

  float z = min(floor(pos.z * nSlices), nSlices - 1.0);

  if (flipVolume.z == -1.0) {
    z = nSlices - z - 1.0;
  }

  vec2 o = offsetFrontBack(z) + loc0;
  vec4 voxelColor = texture(tex, o);

  // Apply mask
  float voxelMask = texture(textureAtlasMask, o).x;
  voxelMask = mix(voxelMask, 1.0, maskAlpha);
  voxelColor.rgb *= voxelMask;

  return bounds * voxelColor;
}

void main() {
  fragColor = vec4(0.0);

  vec3 boxMin = AABB_CLIP_MIN;
  vec3 boxMax = AABB_CLIP_MAX;
  // Normalize UV for [-0.5, 0.5] range
  vec2 normUv = vUv - vec2(0.5);

  // Return background color if outside of clipping box
  if (normUv.x < boxMin.x || normUv.x > boxMax.x || normUv.y < boxMin.y || normUv.y > boxMax.y) {
    fragColor = vec4(0.0);
    return;
  }

  // Normalize z-slice by total slices
  int zSliceInt = int(Z_SLICE);
  vec4 pos = vec4(vUv, (SLICES == 1.0 && zSliceInt == 0) ? 0.0 : Z_SLICE / (SLICES - 1.0), 0.0);

  vec4 C;
  C = sampleAtlas(textureAtlas, pos);
  C.xyz *= BRIGHTNESS;

  C = clamp(C, 0.0, 1.0);
  fragColor = C;
  return;
}
