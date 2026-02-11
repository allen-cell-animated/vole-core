import { DataTexture, FloatType, LinearFilter, RGBAFormat, type Texture, UniformsUtils } from "three";
import { LineMaterial, type LineMaterialParameters } from "three/addons/lines/LineMaterial.js";

import vertexShader from "./constants/shaders/track.vert";

type SubrangeLineMaterialParameters = LineMaterialParameters & {
  minInstance?: number;
};

const PLACEHOLDER_COLOR_RAMP = new DataTexture(new Float32Array([0, 0, 0, 1, 1, 1]), 2, 1, RGBAFormat, FloatType);
PLACEHOLDER_COLOR_RAMP.minFilter = LinearFilter;
PLACEHOLDER_COLOR_RAMP.magFilter = LinearFilter;
PLACEHOLDER_COLOR_RAMP.internalFormat = "RGBA32F";
PLACEHOLDER_COLOR_RAMP.needsUpdate = true;

/**
 * Replacement for LineMaterial with custom vertex shader to support showing
 * only a subrange of line segments. Use with `instanceCount` on the geometry
 * and the `minInstance` uniform to control the visible range.
 */
export default class SubrangeLineMaterial extends LineMaterial {
  constructor(params?: SubrangeLineMaterialParameters) {
    super(params);

    this.vertexShader = vertexShader;
    this.uniforms = UniformsUtils.merge([
      this.uniforms,
      {
        minInstance: { value: params?.minInstance ?? 0 },
        useColorRamp: { value: false },
        colorRamp: { value: PLACEHOLDER_COLOR_RAMP },
        colorRampVertexScale: { value: 1 },
        colorRampVertexOffset: { value: 0 },
      },
    ]);
    this.uniformsNeedUpdate = true;
  }

  /**
   * The minimum instance index to render, inclusive. Instances below this index
   * will not be visible. Use with `instanceCount` on the geometry to show a
   * subrange of line segments.
   */
  set minInstance(value: number) {
    this.uniforms.minInstance.value = value;
  }

  set useColorRamp(value: boolean) {
    this.uniforms.useColorRamp.value = value;
  }

  set colorRamp(value: Texture) {
    this.uniforms.colorRamp.value = value;
  }

  /** The number of vertices that the color ramp spans. */
  set colorRampVertexScale(value: number) {
    this.uniforms.colorRampVertexScale.value = value;
  }

  /**
   * The vertex index that will be assigned the middle of the color ramp. Vertex
   * indices start at 0 for the first vertex in the line segments geometry.
   *
   * For example, if the color ramp spans 10 vertices, setting
   * `colorRampVertexOffset` to 5 will center the color ramp on the 5th vertex,
   * with the starting color at vertex 0 and the ending color at vertex 10.
   */
  set colorRampVertexOffset(value: number) {
    this.uniforms.colorRampVertexOffset.value = value;
  }
}
