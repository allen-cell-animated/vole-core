import {
  Color,
  DataTexture,
  FloatType,
  IUniform,
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
  // Outline style
  outlineThickness: IUniform<number>;
  innerOutlineThickness: IUniform<number>;
  innerOutlineColor: IUniform<Color>;
  outlineColor: IUniform<Color>;
  outlinePalette: IUniform<Texture>;
  useOutlinePalette: IUniform<boolean>;
  outlineAlpha: IUniform<number>;
  // ID information
  selectedId: IUniform<number>;
  selectedIds: IUniform<Texture>;
  useGlobalIdLookup: IUniform<boolean>;
  localIdToGlobalId: IUniform<Texture>;
  localIdOffset: IUniform<number>;

  devicePixelRatio: IUniform<number>;
};

const makeDefaultUniforms = (): ContourUniforms => {
  // RGBA float texture for pick buffer
  const pickBufferTex = new DataTexture(new Float32Array([0, 0, 0, 0]), 1, 1, RGBAFormat, FloatType);
  // R32UI texture for local ID to global ID lookup
  const localIdToGlobalId = new DataTexture(new Uint32Array([0]), 1, 1, RedIntegerFormat, UnsignedIntType);
  localIdToGlobalId.needsUpdate = true;
  // RGBA float texture for outline palette
  const outlinePaletteTex = new DataTexture(new Float32Array([1, 1, 1, 0]), 1, 1, RGBAFormat, FloatType);
  outlinePaletteTex.needsUpdate = true;
  // R8UI texture for selected IDs
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
    innerOutlineColor: new Uniform(new Color(1, 1, 1)),
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

  public setInnerOutlineColor(color: Color): void {
    this.pass.material.uniforms.innerOutlineColor.value = color;
  }

  /**
   * Optional inner outline shown when using outline palettes for better contrast.
   */
  public setInnerOutlineThickness(thicknessPx: number): void {
    this.pass.material.uniforms.innerOutlineThickness.value = Math.floor(thicknessPx);
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
  public setSelectedId(id: number) {
    this.pass.material.uniforms.selectedId.value = id;
  }

  /**
   * Sets the lookup table that maps from an ID to whether the ID is
   * selected or not.
   *
   * For some ID `i`, if `selectedIds[i] > 0`, the ID is selected. When
   * `useOutlinePalette` is true, the value of `selectedIds[i]` is used
   * as the index of the outline color in the outline palette.
   *
   * By default, the ID is a local (pixel) ID. If a global ID
   * lookup has been set (`setGlobalIdLookup`), the ID is parsed as a global ID.
   */
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
    this.selectedIdsTexture.unpackAlignment = 1;
    this.selectedIdsTexture.needsUpdate = true;
    this.pass.material.uniforms.selectedIds.value = this.selectedIdsTexture;
  }

  /**
   * Whether to use the outline palette texture for coloring outlines.
   * Otherwise, a solid outline color is used.
   */
  public setUseOutlinePalette(usePalette: boolean) {
    this.pass.material.uniforms.useOutlinePalette.value = usePalette;
  }

  /**
   * Sets a texture containing the outline palette colors.
   */
  public setOutlinePaletteTexture(texture: DataTexture) {
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
