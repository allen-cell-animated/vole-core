import { DataTexture, RGBAFormat, FloatType, RedIntegerFormat, UnsignedIntType, UnsignedByteType } from "three/webgpu";
import type { TextureNode, Node, UniformNode, Color } from "three/webgpu";
import type { FnNode } from "three/src/nodes/TSL.js";
import {
  add,
  color,
  float,
  Fn,
  If,
  int,
  ivec2,
  screenCoordinate,
  texture,
  textureLoad,
  textureSize,
  uint,
  uniform,
  uvec4,
  vec2,
  vec4,
} from "three/tsl";

import type { Args } from "./tsl_utils.js";

export type ContourUniforms = {
  pickBuffer: TextureNode;

  selectedId: UniformNode<"float", number>;
  selectedIds: TextureNode;
  useGlobalIdLookup: UniformNode<"bool", boolean>;
  localIdToGlobalId: TextureNode;
  localIdOffset: UniformNode<"float", number>;

  outlineColor: UniformNode<"color", Color>;
  outlineAlpha: UniformNode<"float", number>;
  outlinePalette: TextureNode;
  useOutlinePalette: UniformNode<"bool", boolean>;
  outlineThickness: UniformNode<"int", number>;
  innerOutlineThickness: UniformNode<"int", number>;
  innerOutlineColor: UniformNode<"color", Color>;

  devicePixelRatio: UniformNode<"float", number>;
};

export const contourNode = (): { fragment: FnNode<[], Node<"vec4">>; uniforms: ContourUniforms } => {
  // RGBA float texture for pick buffer
  const pickBufferTex = new DataTexture(new Float32Array([0, 0, 0, 0]), 1, 1, RGBAFormat, FloatType);
  pickBufferTex.internalFormat = "RGBA32F";
  pickBufferTex.needsUpdate = true;
  // R32UI texture for local ID to global ID lookup
  const localIdToGlobalId = new DataTexture(new Uint32Array([0]), 1, 1, RedIntegerFormat, UnsignedIntType);
  localIdToGlobalId.internalFormat = "R32UI";
  localIdToGlobalId.needsUpdate = true;
  // RGBA float texture for outline palette
  const outlinePaletteTex = new DataTexture(new Float32Array([1, 1, 1, 0]), 1, 1, RGBAFormat, FloatType);
  outlinePaletteTex.internalFormat = "RGBA32F";
  outlinePaletteTex.needsUpdate = true;
  // R8UI texture for selected IDs
  const selectedIds = new DataTexture(new Uint8Array([0]), 1, 1, RedIntegerFormat, UnsignedByteType);
  selectedIds.internalFormat = "R8UI";
  selectedIds.needsUpdate = true;

  const uniforms = {
    pickBuffer: texture(pickBufferTex),

    selectedId: uniform(-1),
    selectedIds: texture(selectedIds),
    useGlobalIdLookup: uniform(false),
    localIdToGlobalId: texture(localIdToGlobalId),
    localIdOffset: uniform(0),

    outlineColor: uniform(color(1.0, 1.0, 1.0)),
    outlineAlpha: uniform(1.0),
    outlinePalette: texture(outlinePaletteTex),
    useOutlinePalette: uniform(false),
    outlineThickness: uniform(int(2)),
    innerOutlineThickness: uniform(int(2)),
    innerOutlineColor: uniform(color(1.0, 1.0, 1.0)),

    devicePixelRatio: uniform(1.0),
  };

  const BACKGROUND_ID = uint(0);
  const MISSING_DATA_ID = int(-1);
  const ID_OFFSET = int(1);

  const getUintFromTex = Fn(
    ([index, tex]: Args<["int", TextureNode]>) => {
      const width = (textureSize(tex, uint(0)) as unknown as Node<"vec2">).x;
      const featurePos = ivec2(index.mod(width), index.div(width));
      return uvec4(textureLoad(tex, featurePos));
    },
    { index: "int", return: "uvec4" }
  );

  const getOutlineColor = Fn(
    ([colorIdx]: Args<["int"]>) => {
      If(uniforms.useOutlinePalette.not(), () => {
        return vec4(uniforms.outlineColor, 1);
      });

      const width = float((textureSize(uniforms.outlinePalette, uint(0)) as unknown as Node<"vec2">).x);
      const adjustedIdx = add(0.5, float(colorIdx)).div(width);
      return uniforms.outlinePalette.sample(vec2(adjustedIdx, 0.5));
    },
    { colorIdx: "int", return: "vec4" }
  );

  const getLabelId = Fn(
    ([uv]: Args<["ivec2"]>) => {
      return uint(textureLoad(uniforms.pickBuffer, uv).g);
    },
    { uv: "ivec2", return: "uint" }
  );

  const getGlobalId = Fn(
    ([labelId]: Args<["uint"]>) => {
      If(labelId.equal(BACKGROUND_ID), () => {
        return MISSING_DATA_ID;
      });

      const localId = int(labelId).sub(int(uniforms.localIdOffset));

      If(uniforms.useGlobalIdLookup.not(), () => {
        return localId.sub(ID_OFFSET);
      });

      const globalId = getUintFromTex(localId, uniforms.localIdToGlobalId).r;

      If(globalId.equal(0), () => {
        return MISSING_DATA_ID;
      });

      return int(globalId).sub(ID_OFFSET);
    },
    { labelId: "uint", return: "int" }
  );

  const isEdge = Fn(
    ([uv, labelId, thickness]: Args<["ivec2", "uint", "int"]>) => {
      const wStep = 1.0;
      const hStep = 1.0;
      const thicknessFloat = float(thickness);
      // sample around the pixel to see if we are on the edge
      const r = getLabelId(uv.add(ivec2(int(thicknessFloat.mul(wStep)), 0)));
      const l = getLabelId(uv.add(ivec2(int(thicknessFloat.negate().mul(wStep)))));
      const t = getLabelId(uv.add(ivec2(0, int(thicknessFloat.mul(hStep)))));
      const b = getLabelId(uv.add(ivec2(0, int(thicknessFloat.negate().mul(hStep)))));
      // if any neighbors are not id then this is an edge
      return labelId
        .notEqual(BACKGROUND_ID)
        .and(r.notEqual(labelId).or(l.notEqual(labelId)).or(t.notEqual(labelId)).or(b.notEqual(labelId)));
    },
    { uv: "ivec2", labelId: "uint", thickness: "int", return: "bool" }
  );

  const fragment = Fn(
    () => {
      const result = vec4(0.0, 0.0, 0.0, 0.0).toVar();
      const vUv = ivec2(
        int(screenCoordinate.x.div(uniforms.devicePixelRatio)),
        int(screenCoordinate.y.oneMinus().div(uniforms.devicePixelRatio))
      );

      const labelId = getLabelId(vUv);
      const globalId = getGlobalId(labelId);

      If(globalId.notEqual(MISSING_DATA_ID).and(labelId.notEqual(BACKGROUND_ID)), () => {
        const selectionIdx = getUintFromTex(globalId, uniforms.selectedIds).r.toVar();
        If(selectionIdx.greaterThan(0).or(globalId.equal(uniforms.selectedId)), () => {
          If(isEdge(vUv, labelId, uniforms.outlineThickness), () => {
            const colorIdx = int(selectionIdx.sub(1));
            const color = getOutlineColor(colorIdx);
            result.assign(vec4(color.rgb, uniforms.outlineAlpha));
          }).ElseIf(
            uniforms.innerOutlineThickness
              .greaterThan(0)
              .and(isEdge(vUv, labelId, uniforms.outlineThickness.add(uniforms.innerOutlineThickness))),
            () => {
              result.assign(vec4(uniforms.innerOutlineColor.rgb, uniforms.outlineAlpha));
            }
          );
        });
      });

      return result;
    },
    { return: "vec4" }
  );

  return { fragment, uniforms };
};
