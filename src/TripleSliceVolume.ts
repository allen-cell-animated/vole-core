import {
  Box3,
  DepthTexture,
  Group,
  Object3D,
  OrthographicCamera,
  PerspectiveCamera,
  Texture,
  Vector3,
  WebGLRenderer,
} from "three";

import Atlas2DSlice from "./Atlas2DSlice.js";
import Channel from "./Channel.js";
import Volume from "./Volume.js";
import type { FuseChannel } from "./types.js";
import type { VolumeRenderImpl, TripleSliceSource } from "./VolumeRenderImpl.js";
import { SettingsFlags, VolumeRenderSettings } from "./VolumeRenderSettings.js";

/**
 * A VolumeRenderImpl that manages three Atlas2DSlice renderers (XY, YZ, XZ)
 * for triple-slice mode. All three share the XY renderer's fused channel data
 * so only one GPU texture fusion is needed.
 */
export default class TripleSliceVolume implements VolumeRenderImpl, TripleSliceSource {
  private renderers: [Atlas2DSlice, Atlas2DSlice, Atlas2DSlice];
  private group: Group;
  private volume: Volume;
  private baseSettings: VolumeRenderSettings;
  private lastVolumeSize: Vector3;
  private currentPane = 0;

  constructor(volume: Volume, settings: VolumeRenderSettings) {
    this.volume = volume;
    this.baseSettings = settings;
    this.lastVolumeSize = volume.imageInfo.volumeSize.clone();

    const xySlice = new Atlas2DSlice(volume, settings.clone());
    xySlice.setViewAxis(0);
    xySlice.setRequireFullVolume(true);

    const yzSlice = new Atlas2DSlice(volume, settings.clone());
    yzSlice.setViewAxis(1);

    const xzSlice = new Atlas2DSlice(volume, settings.clone());
    xzSlice.setViewAxis(2);

    this.renderers = [xySlice, yzSlice, xzSlice];

    // Share the XY renderer's fused texture atlas with YZ and XZ renderers
    yzSlice.setSharedChannelData(xySlice.getChannelData());
    xzSlice.setSharedChannelData(xySlice.getChannelData());

    // Parent group so get3dObject() returns a single Object3D containing all 3
    this.group = new Group();
    this.group.add(xySlice.get3dObject());
    this.group.add(yzSlice.get3dObject());
    this.group.add(xzSlice.get3dObject());

    // Request full volume data for YZ/XZ slicing
    volume.updateRequiredData({ subregion: new Box3(new Vector3(0, 0, 0), new Vector3(1, 1, 1)) });

    // Apply initial slice indices to renderers
    this.applyAllSliceIndices();
  }

  // --- VolumeRenderImpl interface ---

  updateSettings(settings: VolumeRenderSettings, dirtyFlags?: number | SettingsFlags): void {
    if (dirtyFlags !== undefined && dirtyFlags & SettingsFlags.ROI) {
      // Apply per-axis slice indices to each renderer
      this.applyAllSliceIndices();
    }
    // Forward non-ROI flags to primary (XY) renderer
    const nonRoiFlags = dirtyFlags !== undefined ? dirtyFlags & ~SettingsFlags.ROI : dirtyFlags;
    if (nonRoiFlags === undefined || nonRoiFlags !== 0) {
      this.renderers[0].updateSettings(settings, nonRoiFlags);
    }
  }

  get3dObject(): Object3D {
    return this.group;
  }

  doRender(
    _renderer: WebGLRenderer,
    _camera: PerspectiveCamera | OrthographicCamera,
    _depthTexture?: DepthTexture | Texture | null
  ): void {
    const pane = this.currentPane;
    // Toggle visibility so only the active pane's geometry renders
    for (let i = 0; i < 3; i++) {
      this.renderers[i].get3dObject().visible = i === pane;
    }
    this.renderers[pane].doRender(_renderer, _camera);
    this.currentPane = (this.currentPane + 1) % 3;
  }

  updateVolumeDimensions(): void {
    for (const r of this.renderers) {
      r.updateVolumeDimensions();
    }
    // Re-share channel data in case the primary's was recreated
    this.renderers[1].setSharedChannelData(this.renderers[0].getChannelData());
    this.renderers[2].setSharedChannelData(this.renderers[0].getChannelData());

    // Rescale indices if volumeSize changed (resolution change during async load)
    const newVolSize = this.volume.imageInfo.volumeSize;
    const oldVolSize = this.lastVolumeSize;
    if (newVolSize.x !== oldVolSize.x || newVolSize.y !== oldVolSize.y || newVolSize.z !== oldVolSize.z) {
      const rescale = (idx: number, oldMax: number, newMax: number) =>
        Math.round(oldMax > 1 && newMax > 1 ? (idx * (newMax - 1)) / (oldMax - 1) : Math.floor(newMax / 2));
      const indices = this.baseSettings.tripleSliceIndices;
      indices.x = rescale(indices.x, oldVolSize.x, newVolSize.x);
      indices.y = rescale(indices.y, oldVolSize.y, newVolSize.y);
      indices.z = rescale(indices.z, oldVolSize.z, newVolSize.z);
      this.lastVolumeSize.copy(newVolSize);
      this.applyAllSliceIndices();
    }
  }

  cleanup(): void {
    // Clean up non-primary renderers first (they share primary's channel data)
    this.renderers[1].cleanup();
    this.renderers[2].cleanup();
    // Then clean up primary (owns the fused channel data)
    this.renderers[0].cleanup();
  }

  viewpointMoved(): void {
    // No-op for slice rendering
  }

  setRenderUpdateListener(_listener?: (iteration: number) => void): void {
    // No-op: triple slice doesn't do progressive rendering
  }

  updateActiveChannels(channelcolors: FuseChannel[], channeldata: Channel[]): void {
    // Only fuse on the XY (primary) renderer; YZ/XZ share its texture
    this.renderers[0].updateActiveChannels(channelcolors, channeldata);
  }

  // --- Triple-slice-specific methods ---

  /**
   * Applies one axis's slice index to its corresponding renderer.
   * XY renderer (index 0) slices along Z, YZ (index 1) along X, XZ (index 2) along Y.
   */
  private applySliceToRenderer(axis: "x" | "y" | "z"): void {
    const index = this.baseSettings.tripleSliceIndices[axis];
    const rendererIndex = axis === "z" ? 0 : axis === "x" ? 1 : 2;
    const settings = this.baseSettings.clone();
    settings.zSlice = index;
    this.renderers[rendererIndex].updateSettings(settings, SettingsFlags.ROI);
  }

  /** Applies all three axis slice indices to their renderers. */
  private applyAllSliceIndices(): void {
    this.applySliceToRenderer("x");
    this.applySliceToRenderer("y");
    this.applySliceToRenderer("z");
  }

  /** Returns the current per-axis slice indices. */
  getIndices(): { x: number; y: number; z: number } {
    return this.baseSettings.tripleSliceIndices;
  }

  /** Returns the volume dimensions in voxels. */
  getVolumeSize(): Vector3 {
    return this.volume.imageInfo.volumeSize;
  }

  /** Returns the normalized physical size of the volume. */
  getPhysicalSize(): Vector3 {
    return this.volume.normPhysicalSize;
  }

  /**
   * Sets the slice index for a given axis, clamping to valid range.
   * Updates the corresponding internal renderer.
   */
  setSliceIndex(axis: "x" | "y" | "z", index: number): void {
    const volSize = this.volume.imageInfo.volumeSize;
    const maxIndex = axis === "x" ? volSize.x : axis === "y" ? volSize.y : volSize.z;
    this.baseSettings.tripleSliceIndices[axis] = Math.max(0, Math.min(Math.floor(index), maxIndex - 1));
    this.applySliceToRenderer(axis);
  }

  /** Returns the three internal Atlas2DSlice renderers [XY, YZ, XZ]. */
  getRenderers(): [Atlas2DSlice, Atlas2DSlice, Atlas2DSlice] {
    return this.renderers;
  }
}
