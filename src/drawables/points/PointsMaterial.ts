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

export class PointMaterial extends ShaderMaterial {
  constructor(params: Partial<ShaderMaterialParameters> = {}) {
    super({
      vertexShader,
      fragmentShader,
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

  /**
   * Base scale for the points in world space, multiplied against the
   * instance position's `w` component.
   */
  set baseScale(value: number) {
    this.uniforms.baseScale.value = value;
  }
}

export class PointPickMaterial extends PointMaterial {
  constructor() {
    super({
      // Override fragment shader
      fragmentShader: pickFragmentShader,
    });
  }
}
