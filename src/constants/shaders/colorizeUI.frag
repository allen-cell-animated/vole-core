precision highp float;
precision highp int;
precision highp usampler2D;
precision highp sampler3D;

uniform sampler2D featureData;
/** Min and max feature values that define the endpoints of the color map. Values
 * outside the range will be clamped to the nearest endpoint.
 */
uniform float featureColorRampMin;
uniform float featureColorRampMax;
uniform sampler2D colorRamp;
uniform usampler2D inRangeIds;
uniform usampler2D outlierData;

/** 
 * Offsets raw IDs sampled from the volume data to get the global
 * ID used to index into the feature and outlier data.
*/
uniform uint idOffset;

uniform vec3 outlineColor;

/** MUST be synchronized with the DrawMode enum in ColorizeCanvas! */
const uint DRAW_MODE_HIDE = 0u;
const uint DRAW_MODE_COLOR = 1u;

uniform vec3 outlierColor;
uniform uint outlierDrawMode;
uniform vec3 outOfRangeColor;
uniform uint outOfRangeDrawMode;

uniform uint highlightedId;

uniform bool hideOutOfRange;

// src texture is the raw volume intensity data
uniform usampler2D srcTexture;

uint getId(ivec2 uv) {
  uint rawId = texelFetch(srcTexture, uv, 0).r;
  if (rawId == 0u) {
    return 0u;
  }
  return rawId + idOffset;
}
vec4 getFloatFromTex(sampler2D tex, int index) {
  int width = textureSize(tex, 0).x;
  ivec2 featurePos = ivec2(index % width, index / width);
  return texelFetch(tex, featurePos, 0);
}
uvec4 getUintFromTex(usampler2D tex, int index) {
  int width = textureSize(tex, 0).x;
  ivec2 featurePos = ivec2(index % width, index / width);
  return texelFetch(tex, featurePos, 0);
}
vec4 getColorRamp(float val) {
  float width = float(textureSize(colorRamp, 0).x);
  float range = (width - 1.0) / width;
  float adjustedVal = (0.5 / width) + (val * range);
  return texture(colorRamp, vec2(adjustedVal, 0.5));
}
vec4 getColorFromDrawMode(uint drawMode, vec3 defaultColor) {
  const uint DRAW_MODE_HIDE = 0u;
  vec3 backgroundColor = vec3(0.0, 0.0, 0.0);
  if (drawMode == DRAW_MODE_HIDE) {
    return vec4(backgroundColor, 0.0);
  } else {
    return vec4(defaultColor, 1.0);
  }
}

float getFeatureVal(uint id) {
  // Data buffer starts at 0, non-background segmentation IDs start at 1
  return getFloatFromTex(featureData, int(id) - 1).r;
}
uint getOutlierVal(uint id) {
  // Data buffer starts at 0, non-background segmentation IDs start at 1
  return getUintFromTex(outlierData, int(id) - 1).r;
}
bool getIsInRange(uint id) {
  return getUintFromTex(inRangeIds, int(id) - 1).r == 1u;
}
bool getIsOutlier(float featureVal, uint outlierVal) {
  return isinf(featureVal) || outlierVal != 0u;
}

vec4 getObjectColor(ivec2 sUv, float opacity) {
  // Get the segmentation id at this pixel
  uint id = getId(sUv);

  // A segmentation id of 0 represents background
  if (id == 0u) {
    return vec4(0, 0, 0, 0);
  }

  // color the highlighted object
  if (id == highlightedId) {
    return vec4(outlineColor, 1.0);
  }

  float featureVal = getFeatureVal(id);
  uint outlierVal = getOutlierVal(id);
  float normFeatureVal = (featureVal - featureColorRampMin) / (featureColorRampMax - featureColorRampMin);

  // Use the selected draw mode to handle out of range and outlier values;
  // otherwise color with the color ramp as usual.
  bool isInRange = getIsInRange(id);
  bool isOutlier = getIsOutlier(featureVal, outlierVal);

  // Features outside the filtered/thresholded range will all be treated the same (use `outOfRangeDrawColor`).
  // Features inside the range can either be outliers or standard values, and are colored accordingly.
  vec4 color;
  if (isInRange) {
    if (isOutlier) {
      color = getColorFromDrawMode(outlierDrawMode, outlierColor);
    } else {
      color = getColorRamp(normFeatureVal);
    }
  } else {
    color = getColorFromDrawMode(outOfRangeDrawMode, outOfRangeColor);
  }
  color.a *= opacity;
  return color;
}

void main() {
  ivec2 vUv = ivec2(int(gl_FragCoord.x), int(gl_FragCoord.y));
  gl_FragColor = getObjectColor(vUv, 1.0);
}
