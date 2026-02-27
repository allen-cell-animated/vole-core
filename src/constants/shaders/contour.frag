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

/** 
 * A mapping of IDs that are selected in the current track(s). If an object's
 * index is `i`, `selectedIds[i] >= 1` if the object is selected.
 *
 * For selected objects, `selectedIds[i] - 1` is the index into the
 * `selectedTracksPalette` for the outline color that should be used when
 * `useTracksPalette` is true.
 */
uniform usampler2D selectedIds;
uniform int selectedId;
uniform int outlineThickness;
uniform int innerOutlineThickness;
uniform float outlineAlpha;
/**
 * If true, uses the `outlinePalette` to outline selected tracks, and
 * shows an additional inner outline. When false, uses `outlineColor` for
 * outlines.
 */
uniform bool useOutlinePalette;
uniform vec3 outlineColor;
uniform sampler2D outlinePalette;
uniform float devicePixelRatio;
uniform vec3 backgroundColor;

const uint BACKGROUND_ID = 0u;
const int MISSING_DATA_ID = -1;
const int ID_OFFSET = 1;

uvec4 getUintFromTex(usampler2D tex, int index) {
  int width = textureSize(tex, 0).x;
  ivec2 featurePos = ivec2(index % width, index / width);
  return uvec4(texelFetch(tex, featurePos, 0));
}

vec4 getOutlineColor(int colorIdx) {
  if (!useOutlinePalette) {
    return vec4(outlineColor, 1);
  }
  float width = float(textureSize(outlinePalette, 0).x);
  float adjustedIdx = (0.5 + float(colorIdx)) / width;
  return texture(outlinePalette, vec2(adjustedIdx, 0.5));
}

/**
 * Gets the label ID of the pixel at the given scaled UV
 * coordinates.
 */
uint getLabelId(ivec2 uv) {
  return uint(texelFetch(pickBuffer, uv, 0).g);
}

/**
 * Looks up the global ID value from its label ID. The global ID can be used to
 * get data about this object from data buffers like `featureData` and
 * `outlierData`.
 * @returns The global ID at the given coordinates, or -1 (=MISSING_DATA_ID) if
 *     the pixel is background or missing data.
 */
int getGlobalId(uint labelId) {
  if (labelId == 0u) {
    return int(BACKGROUND_ID);
  }
  int localId = int(labelId) - int(localIdOffset);
  if (!useGlobalIdLookup) {
    return (localId + ID_OFFSET);
  }
  uvec4 c = getUintFromTex(localIdToGlobalId, localId);
  // Note: IDs are offset by `ID_OFFSET` (`=1`) to reserve `0` for local IDs
  // that don't have associated data in the global lookup. `ID_OFFSET` MUST be
  // subtracted from the ID when accessing data buffers.
  uint globalId = c.r;
  if (globalId == 0u) {
    return MISSING_DATA_ID;
  }
  return int(globalId) - ID_OFFSET;
}

bool isEdge(ivec2 uv, uint labelId, int thickness) {
  float wStep = 1.0;
  float hStep = 1.0;
  float thicknessFloat = float(thickness);
  // sample around the pixel to see if we are on an edge
  uint R = (getLabelId(uv + ivec2(thicknessFloat * wStep, 0)));
  uint L = (getLabelId(uv + ivec2(-thicknessFloat * wStep, 0)));
  uint T = (getLabelId(uv + ivec2(0, thicknessFloat * hStep)));
  uint B = (getLabelId(uv + ivec2(0, -thicknessFloat * hStep)));
  // if any neighbors are not id then this is an edge
  return labelId != BACKGROUND_ID && (R != labelId || L != labelId || T != labelId || B != labelId);
}

void main(void) {
  ivec2 vUv = ivec2(int(gl_FragCoord.x / devicePixelRatio), int(gl_FragCoord.y / devicePixelRatio));

  uint labelId = getLabelId(vUv);
  int id = getGlobalId(labelId);

  if (id == MISSING_DATA_ID || labelId == BACKGROUND_ID) {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
    return;
  }

  uint selectionIdx = getUintFromTex(selectedIds, id).r;
  if (selectionIdx > 0u || id == selectedId) {
    if (isEdge(vUv, labelId, outlineThickness)) {
      int colorIdx = int(selectionIdx) - 1;
      vec4 color = getOutlineColor(colorIdx);
      gl_FragColor = vec4(color.rgb, outlineAlpha);
    } else if (isEdge(vUv, labelId, outlineThickness + innerOutlineThickness) && useOutlinePalette) {
      // When coloring with the track palette, apply an additional inner outline
      // using the background color for better contrast against the track
      // outline color.
      gl_FragColor = vec4(backgroundColor.rgb, outlineAlpha);
    }
  } else {
    gl_FragColor = vec4(0, 0, 0, 0.0);
  }
}