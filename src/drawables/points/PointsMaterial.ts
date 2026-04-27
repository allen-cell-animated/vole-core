import pickFragmentShader from "./pointsPick.frag";
import vertexShader from "./points.vert";
import { ShaderMaterial, ShaderMaterialParameters, UniformsUtils } from "three";

export const enum PointMaterialInstanceAttributes {
  POSITION = "instancePosition",
  SCALE = "instanceScale",
  LABEL_ID = "instanceId",
  COLOR = "instanceColor",
}

export class PointPickMaterial extends ShaderMaterial {
  constructor(params: Partial<ShaderMaterialParameters> = {}) {
    super({
      vertexShader,
      fragmentShader: pickFragmentShader,
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
