precision highp float;
precision highp int;
precision highp usampler2D;
precision highp sampler3D;

/**
 * LUT mapping from the segmentation ID (raw pixel value) to the
 * global ID (index in data buffers like `featureData` and `outlierData`).
 * 
 * For a given local pixel ID `localId`, the global ID is given by:
 * `localIdToGlobalId[localId - localIdOffset] - 1`.
*/
uniform usampler2D localIdToGlobalId;
uniform uint localIdOffset;
uniform bool useGlobalIdLookup;
/* Pick buffer. Used to determine IDs. */
uniform sampler2D pickBuffer;

uniform int highlightedId;
uniform int outlineThickness;
uniform float outlineAlpha;
uniform vec3 outlineColor;
uniform float devicePixelRatio;

const uint BACKGROUND_ID = 0u;
const uint MISSING_DATA_ID = 0xFFFFFFFFu;
const int ID_OFFSET = 1;

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
  int localId = int(rawId) - int(localIdOffset);
  if (!useGlobalIdLookup) {
    return uint(localId + ID_OFFSET);
  }
  uvec4 c = getUintFromTex(localIdToGlobalId, localId);
  // Note: IDs are offset by `ID_OFFSET` (`=1`) to reserve `0` for local IDs
  // that don't have associated data in the global lookup. `ID_OFFSET` MUST be
  // subtracted from the ID when accessing data buffers.
  uint globalId = c.r;
  if (globalId == 0u) {
    return MISSING_DATA_ID;
  }
  return globalId;
}

bool isEdge(ivec2 uv, int id, int thickness) {
  float wStep = 1.0;
  float hStep = 1.0;
  float thicknessFloat = float(thickness);
  // sample around the pixel to see if we are on an edge
  int R = int(getId(uv + ivec2(thicknessFloat * wStep, 0))) - ID_OFFSET;
  int L = int(getId(uv + ivec2(-thicknessFloat * wStep, 0))) - ID_OFFSET;
  int T = int(getId(uv + ivec2(0, thicknessFloat * hStep))) - ID_OFFSET;
  int B = int(getId(uv + ivec2(0, -thicknessFloat * hStep))) - ID_OFFSET;
  // if any neighbors are not id then this is an edge
  return id != -1 && (R != id || L != id || T != id || B != id);
}

void main(void) {
  ivec2 vUv = ivec2(int(gl_FragCoord.x / devicePixelRatio), int(gl_FragCoord.y / devicePixelRatio));

  uint rawId = getId(vUv);
  int id = int(rawId) - ID_OFFSET;

  if (id == highlightedId && isEdge(vUv, id, outlineThickness)) {
    gl_FragColor = vec4(outlineColor, outlineAlpha);
  } else {
    gl_FragColor = vec4(0, 0, 0, 0.0);
  }
}