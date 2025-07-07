import {
  Color,
  DataTexture,
  FloatType,
  IUniform,
  RGBAFormat,
  Texture,
  Uniform,
  UnsignedByteType,
  WebGLRenderer,
  WebGLRenderTarget,
} from "three";
import RenderToBuffer from "./RenderToBuffer";

import contourFragShader from "./constants/shaders/contour.frag";
import { ColorizeFeature } from "./types";

type ContourUniforms = {
  pickBuffer: IUniform<Texture>;
  highlightedId: IUniform<number>;
  outlineThickness: IUniform<number>;
  outlineColor: IUniform<Color>;
  outlineAlpha: IUniform<number>;
  segIdToGlobalId: IUniform<Texture>;
  segIdOffset: IUniform<number>;
};

const defaultUniforms: ContourUniforms = {
  pickBuffer: new Uniform(new DataTexture(new Float32Array([1, 0, 0, 0]), 1, 1, RGBAFormat, FloatType)),
  highlightedId: new Uniform(94),
  outlineThickness: new Uniform(2.0),
  outlineColor: new Uniform(new Color(1, 0, 1)),
  outlineAlpha: new Uniform(1.0),
  segIdToGlobalId: new Uniform(new DataTexture(new Uint32Array([0]), 1, 1, RGBAFormat, UnsignedByteType)),
  segIdOffset: new Uniform(0),
};

export default class ContourPass {
  private pass: RenderToBuffer;

  constructor() {
    this.pass = new RenderToBuffer(contourFragShader, defaultUniforms, true);
  }

  setHighlightedId(id: number) {
    (this.pass.material.uniforms.highlightedId as IUniform<number>).value = id;
  }

  setColorizeFeature(featureInfo: ColorizeFeature): void {
    // TODO: needs access to time to read out the correct segIdToGlobalId texture....
    this.pass.material.uniforms.outlineColor.value = featureInfo.outlineColor;
  }

  render(renderer: WebGLRenderer, target: WebGLRenderTarget | null, pickBuffer: WebGLRenderTarget) {
    this.pass.material.uniforms.pickBuffer.value = pickBuffer.texture;
    renderer.autoClear = false;
    this.pass.render(renderer);
    renderer.autoClear = true;
  }
}
