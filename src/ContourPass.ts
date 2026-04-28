import { Color, DataTexture, RedIntegerFormat, UnsignedByteType, WebGPURenderer, RenderTarget } from "three/webgpu";
import { clamp } from "three/src/math/MathUtils.js";

import RenderToBuffer, { RenderPassType } from "./RenderToBuffer.js";
import { ColorizeFeature } from "./types.js";
import { getSquarestTextureDimensions } from "./utils/texture_utils.js";
import { contourNode, type ContourUniforms } from "./constants/shaders/contour.js";

export default class ContourPass {
  private pass: RenderToBuffer;
  private frameToGlobalIdLookup: ColorizeFeature["frameToGlobalIdLookup"] | null;
  private frame: number;
  private uniforms: ContourUniforms;

  private selectedIdsTexture: DataTexture | null = null;

  constructor() {
    const { fragment, uniforms } = contourNode();
    this.uniforms = uniforms;
    this.pass = new RenderToBuffer(fragment, RenderPassType.TRANSPARENT);
    this.frameToGlobalIdLookup = null;
    this.frame = 0;
  }

  public setOutlineColor(color: Color, alpha = 1.0): void {
    this.uniforms.outlineColor.value = color;
    this.uniforms.outlineAlpha.value = clamp(alpha, 0, 1);
  }

  public setOutlineThickness(thickness: number): void {
    this.uniforms.outlineThickness.value = Math.floor(thickness);
  }

  public setInnerOutlineColor(color: Color): void {
    this.uniforms.innerOutlineColor.value = color;
  }

  /**
   * Optional inner outline shown for better contrast, specified in integer
   * pixels. Disabled if `thicknessPx` is 0.
   */
  public setInnerOutlineThickness(thicknessPx: number): void {
    this.uniforms.innerOutlineThickness.value = Math.floor(Math.max(0, thicknessPx));
  }

  private syncGlobalIdLookup(): void {
    const globalIdLookupInfo = this.frameToGlobalIdLookup?.get(this.frame);
    if (!globalIdLookupInfo) {
      this.uniforms.useGlobalIdLookup.value = false;
      return;
    }
    this.uniforms.useGlobalIdLookup.value = true;
    this.uniforms.localIdToGlobalId.value = globalIdLookupInfo.texture;
    this.uniforms.localIdOffset.value = globalIdLookupInfo.minSegId;
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
    this.uniforms.selectedId.value = id;
  }

  /**
   * Sets the lookup table that maps from an ID to whether the ID is selected or
   * not.
   *
   * For some ID `i`, if `selectedIds[i] > 0`, the ID is selected. When
   * `useOutlinePalette` is true, `selectedIds[i] - 1` is the index of the
   * outline color in the outline palette.
   *
   * By default, the ID is a local (pixel) ID. If a global ID lookup has been
   * set (`setGlobalIdLookup`), the ID is parsed as a global ID.
   */
  public setSelectedIdLut(selectedIds: Uint8Array) {
    if (this.selectedIdsTexture) {
      this.selectedIdsTexture.dispose();
    }
    // Pack into square texture
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
    this.uniforms.selectedIds.value = this.selectedIdsTexture;
  }

  /**
   * Whether to use the outline palette texture for coloring outlines.
   * Otherwise, a solid outline color is used.
   */
  public setUseOutlinePalette(usePalette: boolean) {
    this.uniforms.useOutlinePalette.value = usePalette;
  }

  /**
   * Sets a texture containing the outline palette colors.
   */
  public setOutlinePaletteTexture(texture: DataTexture) {
    this.uniforms.outlinePalette.value = texture;
    this.pass.material.needsUpdate = true;
  }

  /**
   * Renders the contour as a transparent pass on the specified target.
   * @param renderer The WebGL renderer to render with.
   * @param target The render target to render to.
   * @param pickBuffer The pick buffer containing the pixel IDs to highlight,
   * e.g. `PickVolume.getPickBuffer()`.
   */
  public render(renderer: WebGPURenderer, target: RenderTarget | null, pickBuffer: RenderTarget) {
    // Setup uniforms
    this.uniforms.devicePixelRatio.value = window.devicePixelRatio;
    this.uniforms.pickBuffer.value = pickBuffer.texture;

    const startingAutoClearState = renderer.autoClear;
    renderer.autoClear = false;
    this.pass.render(renderer, target ?? undefined);
    renderer.autoClear = startingAutoClearState;
  }
}
