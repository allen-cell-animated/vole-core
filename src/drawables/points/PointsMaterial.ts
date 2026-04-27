import fragmentShader from "./points.frag";
import vertexShader from "./points.vert";
import pickFragmentShader from "./pointsPick.frag";
import { GLSL3, ShaderMaterial, ShaderMaterialParameters, UniformsUtils } from "three";

export const enum PointMaterialInstanceAttributes {
  POSITION = "instancePosition",
  SCALE = "instanceScale",
  LABEL_ID = "instanceId",
  COLOR = "instanceColor",
}

export class PointPickMaterial extends ShaderMaterial {
  constructor(params: Partial<ShaderMaterialParameters> = {}) {
    super({
      fragmentShader: pickFragmentShader,
      glslVersion: GLSL3,
      ...params,
    });

    this.uniforms = UniformsUtils.merge([
      this.uniforms,
      {
        baseScale: { value: 1 },
      },
    ]);
  }
}
