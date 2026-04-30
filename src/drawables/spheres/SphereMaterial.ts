import pickFragmentShader from "../../constants/shaders/meshPick.frag";
import sphereFragmentShader from "./sphere.frag";
import vertexShader from "./sphere.vert";
import { ShaderMaterial, ShaderMaterialParameters } from "three";

export const enum SphereMaterialInstanceAttributes {
  LABEL_ID = "instanceId",
}

export class SphereMaterial extends ShaderMaterial {
  constructor(params: Partial<ShaderMaterialParameters> = {}) {
    super({
      vertexShader,
      fragmentShader: sphereFragmentShader,
      ...params,
    });
  }
}

export class SpherePickMaterial extends ShaderMaterial {
  constructor(params: Partial<ShaderMaterialParameters> = {}) {
    super({
      vertexShader,
      fragmentShader: pickFragmentShader,
      ...params,
    });
  }
}
