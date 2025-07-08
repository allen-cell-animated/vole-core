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
  useGlobalIdLookup: IUniform<boolean>;
  segIdToGlobalId: IUniform<Texture>;
  segIdOffset: IUniform<number>;
  devicePixelRatio: IUniform<number>;
};

const defaultUniforms: ContourUniforms = {
  pickBuffer: new Uniform(new DataTexture(new Float32Array([1, 0, 0, 0]), 1, 1, RGBAFormat, FloatType)),
  highlightedId: new Uniform(94),
  outlineThickness: new Uniform(2.0),
  outlineColor: new Uniform(new Color(1, 0, 1)),
  outlineAlpha: new Uniform(1.0),
  useGlobalIdLookup: new Uniform(false),
  segIdToGlobalId: new Uniform(new DataTexture(new Uint32Array([0]), 1, 1, RGBAFormat, UnsignedByteType)),
  segIdOffset: new Uniform(0),
  devicePixelRatio: new Uniform(1.0),
};

export default class ContourPass {
  private pass: RenderToBuffer;
  private featureInfo: ColorizeFeature | null;
  private time: number;

  constructor() {
    this.pass = new RenderToBuffer(contourFragShader, defaultUniforms, true);
    this.featureInfo = null;
    this.time = 0;
  }

  setHighlightedId(id: number) {
    (this.pass.material.uniforms.highlightedId as IUniform<number>).value = id;
  }

  syncGlobalIdLookup() {
    const uniforms = this.pass.material.uniforms as ContourUniforms;
    console.log("Has featureInfo:", !!this.featureInfo);
    console.log("Time:", this.time);
    if (this.featureInfo) {
      const globalIdLookupInfo = this.featureInfo.frameToGlobalIdLookup.get(this.time);
      if (globalIdLookupInfo) {
        console.log("Using global ID lookup");
        uniforms.useGlobalIdLookup.value = true;
        uniforms.segIdToGlobalId.value = globalIdLookupInfo.texture;
        uniforms.segIdOffset.value = globalIdLookupInfo.minSegId;
      } else {
        console.log("No global ID lookup for this time, using segmentation IDs directly");
        uniforms.useGlobalIdLookup.value = false;
      }
    } else {
      uniforms.useGlobalIdLookup.value = false;
    }
  }

  setColorizeFeature(featureInfo: ColorizeFeature | null): void {
    if (this.featureInfo !== featureInfo) {
      this.featureInfo = featureInfo;
      if (featureInfo) {
        this.pass.material.uniforms.outlineColor.value = featureInfo.outlineColor;
      }
      this.syncGlobalIdLookup();
    }
  }

  setTime(time: number) {
    if (this.time !== time) {
      this.time = time;
      this.syncGlobalIdLookup();
    }
  }

  render(renderer: WebGLRenderer, target: WebGLRenderTarget | null, pickBuffer: WebGLRenderTarget) {
    // Setup uniforms
    const uniforms = this.pass.material.uniforms as ContourUniforms;
    uniforms.devicePixelRatio.value = window.devicePixelRatio;
    uniforms.pickBuffer.value = pickBuffer.texture;

    renderer.autoClear = false;
    // Render to screen
    this.pass.render(renderer, target ?? undefined);
    renderer.autoClear = true;
  }
}
