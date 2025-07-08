precision highp float;
precision highp int;
precision highp usampler2D;
precision highp sampler3D;

/**
 * LUT mapping from the segmentation ID (raw pixel value) to the
 * global ID (index in data buffers like `featureData` and `outlierData`).
 * 
 * For a given segmentation ID `segId`, the global ID is given by:
 * `segIdToGlobalId[segId - segIdOffset] - 1`.
*/
uniform usampler2D segIdToGlobalId;
uniform uint segIdOffset;
uniform bool useGlobalIdLookup;
uniform sampler2D pickBuffer;

/* Pick buffer. Used to determine IDs. */
uniform int highlightedId;
uniform float outlineThickness;
uniform float outlineAlpha;
uniform vec3 outlineColor;
uniform float devicePixelRatio;

const uint BACKGROUND_ID = 0u;
const uint MISSING_DATA_ID = 0xFFFFFFFFu;
const int ID_OFFSET = 1;

varying vec2 vUv;

vec4 alphaBlend(vec4 a, vec4 b) {
  // Implements a over b operation. See https://en.wikipedia.org/wiki/Alpha_compositing
  float alpha = a.a + b.a * (1.0 - a.a);
  return vec4((a.rgb * a.a + b.rgb * b.a * (1.0 - a.a)) / alpha, alpha);
}

uvec4 getUintFromTex(usampler2D tex, int index) {
  int width = textureSize(tex, 0).x;
  ivec2 featurePos = ivec2(index % width, index / width);
  return uvec4(texelFetch(tex, featurePos, 0));
}

uint getId(ivec2 uv) {
  float rawId = texelFetch(pickBuffer, uv, 0).g;
  if (rawId == 0.0) {
    return BACKGROUND_ID;
  }
  int segId = int(rawId) - int(segIdOffset);
  if (!useGlobalIdLookup) {
    return uint(segId + ID_OFFSET);
  }
  uvec4 c = getUintFromTex(segIdToGlobalId, segId);
  // Note: IDs are offset by `ID_OFFSET` (`=1`) to reserve `0` for segmentations that don't
  // have associated data. `ID_OFFSET` MUST be subtracted from the ID when accessing
  // data buffers.
  uint globalId = c.r;
  if (globalId == 0u) {
    return MISSING_DATA_ID;
  }
  return globalId;
}

bool isEdge(ivec2 uv, int id, float thickness) {
  float wStep = 1.0;
  float hStep = 1.0;
  // sample around the pixel to see if we are on an edge
  int R = int(getId(uv + ivec2(thickness * wStep, 0))) - ID_OFFSET;
  int L = int(getId(uv + ivec2(-thickness * wStep, 0))) - ID_OFFSET;
  int T = int(getId(uv + ivec2(0, thickness * hStep))) - ID_OFFSET;
  int B = int(getId(uv + ivec2(0, -thickness * hStep))) - ID_OFFSET;
  // if any neighbors are not highlightedId then color this as edge
  return id != -1 && (R != id || L != id || T != id || B != id);
}

void main(void) {
  ivec2 vUv = ivec2(int(gl_FragCoord.x / devicePixelRatio), int(gl_FragCoord.y / devicePixelRatio));
  vec4 finalColor = vec4(0, 0, 0, 0.0);

  uint rawId = getId(vUv);
  int id = int(rawId) - ID_OFFSET;
  if (id == highlightedId && isEdge(vUv, id, outlineThickness)) {
    finalColor = vec4(outlineColor, 1);
  }

  gl_FragColor = finalColor;
}