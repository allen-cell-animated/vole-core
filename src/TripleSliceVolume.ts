import {
  Box3,
  BufferGeometry,
  DepthTexture,
  Float32BufferAttribute,
  Group,
  Line,
  LineBasicMaterial,
  Object3D,
  OrthographicCamera,
  PerspectiveCamera,
  Texture,
  Vector3,
  WebGLRenderer,
} from "three";

import Atlas2DSlice from "./Atlas2DSlice.js";
import Channel from "./Channel.js";
import { OVERLAY_LAYER } from "./ThreeJsPanel.js";
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
  private currentPane = 0;

  // Crosshair lines: 2 per pane (vertical + horizontal)
  private crosshairMaterial: LineBasicMaterial;
  private crosshairLines: [Line, Line, Line, Line, Line, Line]; // [xyV, xyH, yzV, yzH, xzV, xzH]

  constructor(volume: Volume, settings: VolumeRenderSettings) {
    this.volume = volume;
    this.baseSettings = settings;

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

    // Create crosshair overlay lines (2 per pane, on OVERLAY_LAYER)
    this.crosshairMaterial = new LineBasicMaterial({ color: 0xffffff, depthTest: false, depthWrite: false });
    this.crosshairLines = [
      this.createCrosshairLine(),
      this.createCrosshairLine(),
      this.createCrosshairLine(),
      this.createCrosshairLine(),
      this.createCrosshairLine(),
      this.createCrosshairLine(),
    ];
    // Add each pair to its renderer's Group
    this.renderers[0].get3dObject().add(this.crosshairLines[0], this.crosshairLines[1]);
    this.renderers[1].get3dObject().add(this.crosshairLines[2], this.crosshairLines[3]);
    this.renderers[2].get3dObject().add(this.crosshairLines[4], this.crosshairLines[5]);

    // Apply initial slice indices to renderers
    this.applyAllSliceIndices();
    this.updateCrosshairs();
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

    // Clamp indices to current volume bounds (resolution may differ across mode switches)
    const volSize = this.volume.imageInfo.volumeSize;
    const indices = this.baseSettings.tripleSliceIndices;
    indices.x = Math.min(indices.x, Math.max(0, volSize.x - 1));
    indices.y = Math.min(indices.y, Math.max(0, volSize.y - 1));
    indices.z = Math.min(indices.z, Math.max(0, volSize.z - 1));
    this.applyAllSliceIndices();
    this.updateCrosshairs();
  }

  cleanup(): void {
    // Dispose crosshair resources
    this.crosshairMaterial.dispose();
    for (const line of this.crosshairLines) {
      line.geometry.dispose();
    }
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
    this.updateCrosshairs();
  }

  /** Updates crosshair line positions based on current indices, volume size, and physical size. */
  updateCrosshairs(): void {
    const indices = this.baseSettings.tripleSliceIndices;
    const volumeSize = this.volume.imageInfo.volumeSize;
    const phys = this.volume.normPhysicalSize;

    const nx = volumeSize.x > 1 ? (indices.x / (volumeSize.x - 1) - 0.5) * phys.x : 0;
    const ny = volumeSize.y > 1 ? (indices.y / (volumeSize.y - 1) - 0.5) * phys.y : 0;
    const nz = volumeSize.z > 1 ? (indices.z / (volumeSize.z - 1) - 0.5) * phys.z : 0;

    const halfPx = phys.x * 0.5;
    const halfPy = phys.y * 0.5;
    const halfPz = phys.z * 0.5;

    const [xyV, xyH, yzV, yzH, xzV, xzH] = this.crosshairLines;

    // XY pane: vertical at x=nx spanning Y, horizontal at y=ny spanning X
    this.setCrosshairEndpoints(xyV, [nx, -halfPy, 0], [nx, halfPy, 0]);
    this.setCrosshairEndpoints(xyH, [-halfPx, ny, 0], [halfPx, ny, 0]);

    // YZ pane: vertical at display X=nz spanning Y, horizontal at y=ny spanning Z
    this.setCrosshairEndpoints(yzV, [nz, -halfPy, 0], [nz, halfPy, 0]);
    this.setCrosshairEndpoints(yzH, [-halfPz, ny, 0], [halfPz, ny, 0]);

    // XZ pane: vertical at display X=nx spanning Z, horizontal at y=nz spanning X
    this.setCrosshairEndpoints(xzV, [nx, -halfPz, 0], [nx, halfPz, 0]);
    this.setCrosshairEndpoints(xzH, [-halfPx, nz, 0], [halfPx, nz, 0]);
  }

  private createCrosshairLine(): Line {
    const geom = new BufferGeometry();
    geom.setAttribute("position", new Float32BufferAttribute([0, 0, 0, 0, 0, 0], 3));
    const line = new Line(geom, this.crosshairMaterial);
    line.layers.set(OVERLAY_LAYER);
    line.frustumCulled = false;
    return line;
  }

  private setCrosshairEndpoints(line: Line, p1: [number, number, number], p2: [number, number, number]): void {
    const posAttr = line.geometry.getAttribute("position");
    posAttr.setXYZ(0, p1[0], p1[1], p1[2]);
    posAttr.setXYZ(1, p2[0], p2[1], p2[2]);
    posAttr.needsUpdate = true;
  }

  /** Returns the three internal Atlas2DSlice renderers [XY, YZ, XZ]. */
  getRenderers(): [Atlas2DSlice, Atlas2DSlice, Atlas2DSlice] {
    return this.renderers;
  }
}
