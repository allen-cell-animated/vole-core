import {
  Color,
  DataTexture,
  FloatType,
  IUniform,
  RedFormat,
  RedIntegerFormat,
  RGBAFormat,
  Texture,
  Uniform,
  UnsignedByteType,
  UnsignedIntType,
  WebGLRenderer,
  WebGLRenderTarget,
} from "three";
import { clamp } from "three/src/math/MathUtils.js";

import RenderToBuffer, { RenderPassType } from "./RenderToBuffer.js";
import contourFragShader from "./constants/shaders/contour.frag";
import { ColorizeFeature } from "./types.js";
import { getSquarestTextureDimensions } from "./utils/texture_utils.js";

type ContourUniforms = {
  // Base image (pick buffer)
  pickBuffer: IUniform<Texture>;
  // ID information
  selectedId: IUniform<number>;
  selectedIds: IUniform<Texture>;
  useGlobalIdLookup: IUniform<boolean>;
  localIdToGlobalId: IUniform<Texture>;
  localIdOffset: IUniform<number>;
  // Outline style
  outlineThickness: IUniform<number>;
  innerOutlineThickness: IUniform<number>;
  backgroundColor: IUniform<Color>;
  outlineColor: IUniform<Color>;
  outlinePalette: IUniform<Texture>;
  useOutlinePalette: IUniform<boolean>;
  outlineAlpha: IUniform<number>;

  devicePixelRatio: IUniform<number>;
};

const makeDefaultUniforms = (): ContourUniforms => {
  const pickBufferTex = new DataTexture(new Float32Array([1, 0, 0, 0]), 1, 1, RGBAFormat, FloatType);
  const localIdToGlobalId = new DataTexture(new Uint32Array([0]), 1, 1, RedIntegerFormat, UnsignedIntType);
  localIdToGlobalId.needsUpdate = true;
  const outlinePaletteTex = new DataTexture(new Float32Array([1, 0, 0, 0]), 1, 1, RGBAFormat, FloatType);
  outlinePaletteTex.needsUpdate = true;
  const selectedIds = new DataTexture(new Uint8Array([0]), 1, 1, RedIntegerFormat, UnsignedByteType);
  selectedIds.internalFormat = "R8UI";
  selectedIds.needsUpdate = true;
  return {
    pickBuffer: new Uniform(pickBufferTex),
    selectedId: new Uniform(-1),
    selectedIds: new Uniform(selectedIds),
    outlineThickness: new Uniform(2.0),
    innerOutlineThickness: new Uniform(2.0),
    useOutlinePalette: new Uniform(false),
    backgroundColor: new Uniform(new Color(1, 1, 1)),
    outlineColor: new Uniform(new Color(1, 0, 1)),
    outlineAlpha: new Uniform(1.0),
    outlinePalette: new Uniform(outlinePaletteTex),
    useGlobalIdLookup: new Uniform(false),
    localIdToGlobalId: new Uniform(localIdToGlobalId),
    localIdOffset: new Uniform(0),
    devicePixelRatio: new Uniform(1.0),
  };
};

export default class ContourPass {
  private pass: RenderToBuffer;
  private frameToGlobalIdLookup: ColorizeFeature["frameToGlobalIdLookup"] | null;
  private frame: number;

  private selectedIdsTexture: DataTexture | null = null;

  constructor() {
    this.pass = new RenderToBuffer(contourFragShader, makeDefaultUniforms(), RenderPassType.TRANSPARENT);
    this.frameToGlobalIdLookup = null;
    this.frame = 0;
  }

  public setOutlineColor(color: Color, alpha = 1.0): void {
    this.pass.material.uniforms.outlineColor.value = color;
    this.pass.material.uniforms.outlineAlpha.value = clamp(alpha, 0, 1);
  }

  public setOutlineThickness(thickness: number): void {
    this.pass.material.uniforms.outlineThickness.value = Math.floor(thickness);
  }

  public setInnerOutlineThickness(thickness: number): void {
    this.pass.material.uniforms.innerOutlineThickness.value = Math.floor(thickness);
  }

  private syncGlobalIdLookup(): void {
    const uniforms = this.pass.material.uniforms as ContourUniforms;
    const globalIdLookupInfo = this.frameToGlobalIdLookup?.get(this.frame);
    if (!globalIdLookupInfo) {
      uniforms.useGlobalIdLookup.value = false;
      return;
    }
    uniforms.useGlobalIdLookup.value = true;
    uniforms.localIdToGlobalId.value = globalIdLookupInfo.texture;
    uniforms.localIdOffset.value = globalIdLookupInfo.minSegId;
  }

  /**
   * Sets a frame-dependent lookup for global IDs. Set to a non-null value if
   * the `selectedId` represents a global ID instead of a local (pixel) ID.
   * @param frameToGlobalIdLookup A map from a frame number to a lookup object,
   * containing a texture and an offset value; see `ColorizeFeature` for more
   * details. If `null`, the pass will not use a global ID lookup.
   */
  public setGlobalIdLookup(frameToGlobalIdLookup: ColorizeFeature["frameToGlobalIdLookup"] | null): void {
    if (this.frameToGlobalIdLookup !== frameToGlobalIdLookup) {
      this.frameToGlobalIdLookup = frameToGlobalIdLookup;
      this.syncGlobalIdLookup();
    }
  }

  /**
   * Sets the current frame number. If a global ID lookup has been set
   * (`setGlobalIdLookup`), this must be updated on every frame.
   */
  public setFrame(frame: number) {
    if (this.frame !== frame) {
      this.frame = frame;
      this.syncGlobalIdLookup();
    }
  }

  /**
   * Sets the current ID that should be highlighted with a contour.
   * @param id The ID to highlight. If a global ID lookup has been set
   * (`setGlobalIdLookup`), this should be a global ID.
   */
  public setHighlightedId(id: number) {
    this.pass.material.uniforms.selectedId.value = id;
  }

  public setSelectedIdLut(selectedIds: Uint8Array) {
    if (this.selectedIdsTexture) {
      this.selectedIdsTexture.dispose();
    }
    const [width, height] = getSquarestTextureDimensions(selectedIds.length);
    let paddedSelectedIds = selectedIds;
    if (selectedIds.length < width * height) {
      // Pad the array with zeros to fit the texture size
      paddedSelectedIds = new Uint8Array(width * height);
      paddedSelectedIds.set(selectedIds);
    }
    this.selectedIdsTexture = new DataTexture(paddedSelectedIds, width, height, RedIntegerFormat, UnsignedByteType);
    this.selectedIdsTexture.internalFormat = "R8UI";
    this.selectedIdsTexture.needsUpdate = true;
    this.pass.material.uniforms.selectedIds.value = this.selectedIdsTexture;
  }

  public setUseOutlinePalette(usePalette: boolean) {
    this.pass.material.uniforms.useOutlinePalette.value = usePalette;
  }

  public setOutlinePaletteTexture(texture: DataTexture) {
    console.log("Setting outline palette texture", texture.image.width, texture.image.height, texture);
    this.pass.material.uniforms.outlinePalette.value = texture;
    this.pass.material.needsUpdate = true;
  }

  /**
   * Renders the contour as a transparent pass on the specified target.
   * @param renderer The WebGL renderer to render with.
   * @param target The render target to render to.
   * @param pickBuffer The pick buffer containing the pixel IDs to highlight,
   * e.g. `PickVolume.getPickBuffer()`.
   */
  public render(renderer: WebGLRenderer, target: WebGLRenderTarget | null, pickBuffer: WebGLRenderTarget) {
    // Setup uniforms
    const uniforms = this.pass.material.uniforms as ContourUniforms;
    uniforms.devicePixelRatio.value = window.devicePixelRatio;
    uniforms.pickBuffer.value = pickBuffer.texture;

    const startingAutoClearState = renderer.autoClear;
    renderer.autoClear = false;
    this.pass.render(renderer, target ?? undefined);
    renderer.autoClear = startingAutoClearState;
  }
}
