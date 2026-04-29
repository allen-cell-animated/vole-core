import pickFragmentShader from "./pointsPick.frag";
import depthFragmentShader from "./points.frag";
import vertexShader from "./points.vert";
import { ShaderMaterial, ShaderMaterialParameters, UniformsUtils } from "three";

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
      fragmentShader: depthFragmentShader,
      ...params,
    });
  }
}

export class PointPickMaterial extends ShaderMaterial {
  constructor(params: Partial<ShaderMaterialParameters> = {}) {
    super({
      vertexShader,
      fragmentShader: pickFragmentShader,
      ...params,
    });
  }
}
