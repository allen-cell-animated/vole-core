import { Vector3, Object3D, Euler, Vector2, Box3 } from "three";
import { Pane } from "tweakpane";

import MeshVolume from "./MeshVolume.js";
import RayMarchedAtlasVolume from "./RayMarchedAtlasVolume.js";
import PathTracedVolume from "./PathTracedVolume.js";
import { LUT_ARRAY_LENGTH } from "./Lut.js";
import Volume from "./Volume.js";
import type { VolumeDisplayOptions, VolumeChannelDisplayOptions, FuseChannel } from "./types.js";
import { RenderMode } from "./types.js";
import { ThreeJsPanel } from "./ThreeJsPanel.js";
import { Light } from "./Light.js";
import Channel from "./Channel.js";
import type { VolumeRenderImpl } from "./VolumeRenderImpl.js";
import Atlas2DSlice from "./Atlas2DSlice.js";
import { VolumeRenderSettings, SettingsFlags, Axis } from "./VolumeRenderSettings.js";

type ColorArray = [number, number, number];
type ColorObject = { r: number; g: number; b: number };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithObjectColors<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends ColorArray | undefined ? ColorObject : T[K];
};

export const colorArrayToObject = ([r, g, b]: ColorArray): ColorObject => ({ r, g, b });
export const colorObjectToArray = ({ r, g, b }: ColorObject): ColorArray => [r, g, b];

// A renderable multichannel volume image with 8-bits per channel intensity values.
export default class VolumeDrawable {
  public volume: Volume;
  private settings: VolumeRenderSettings;
  private onChannelDataReadyCallback?: () => void;
  private viewMode: Axis;
  private channelColors: [number, number, number][];
  private channelOptions: VolumeChannelDisplayOptions[];
  private fusion: FuseChannel[];
  public sceneRoot: Object3D;
  private meshVolume: MeshVolume;

  private volumeRendering: VolumeRenderImpl;
  private renderMode: RenderMode;

  private renderUpdateListener?: (iteration: number) => void;

  constructor(volume: Volume, options: VolumeDisplayOptions) {
    // THE VOLUME DATA
    this.volume = volume;
    this.settings = new VolumeRenderSettings(volume);

    this.onChannelDataReadyCallback = undefined;

    this.viewMode = Axis.NONE; // 3D mode

    this.channelColors = this.volume.channelColorsDefault.slice();

    this.channelOptions = new Array<VolumeChannelDisplayOptions>(this.volume.imageInfo.numChannels).fill({});

    this.fusion = this.channelColors.map((col, index) => {
      let rgbColor: number | [number, number, number];
      // take copy of original channel color
      if (col[0] === 0 && col[1] === 0 && col[2] === 0) {
        rgbColor = 0;
      } else {
        rgbColor = [col[0], col[1], col[2]];
      }
      return {
        chIndex: index,
        lut: new Uint8Array(LUT_ARRAY_LENGTH),
        rgbColor: rgbColor,
      };
    });

    this.sceneRoot = new Object3D(); //create an empty container

    this.meshVolume = new MeshVolume(this.volume);

    options.renderMode = options.renderMode || RenderMode.RAYMARCH;
    switch (options.renderMode) {
      case RenderMode.PATHTRACE:
        this.renderMode = RenderMode.PATHTRACE;
        this.volumeRendering = new PathTracedVolume(this.volume, this.settings);
        break;
      case RenderMode.SLICE: // default to raymarch even when slice is selected
      case RenderMode.RAYMARCH:
      default:
        this.renderMode = RenderMode.RAYMARCH;
        this.volumeRendering = new RayMarchedAtlasVolume(this.volume, this.settings);
    }

    // draw meshes first, and volume last, for blending and depth test reasons with raymarch
    if (options.renderMode === RenderMode.RAYMARCH || options.renderMode === RenderMode.SLICE) {
      this.sceneRoot.add(this.meshVolume.get3dObject());
    }
    this.sceneRoot.add(this.volumeRendering.get3dObject());
    // draw meshes last (as overlay) for pathtrace? (or not at all?)
    //this.PT && this.sceneRoot.add(this.meshVolume.get3dObject());

    this.sceneRoot.position.set(0, 0, 0);

    this.updateScale();

    // apply the volume's default transformation
    this.settings.translation = new Vector3().fromArray(this.volume.getTranslation());
    this.settings.rotation = new Euler().fromArray(this.volume.getRotation());

    this.setOptions(options);
    // this.volumeRendering.setZSlice(this.zSlice);
  }

  setOptions(options: VolumeDisplayOptions): void {
    options = options || {};
    if (options.maskChannelIndex !== undefined) {
      this.setChannelAsMask(options.maskChannelIndex);
    }
    if (options.maskAlpha !== undefined) {
      this.setMaskAlpha(options.maskAlpha);
    }
    if (options.clipBounds !== undefined) {
      this.settings.bounds = {
        bmin: new Vector3(options.clipBounds[0], options.clipBounds[2], options.clipBounds[4]),
        bmax: new Vector3(options.clipBounds[1], options.clipBounds[3], options.clipBounds[5]),
      };
      // note: dropping isOrthoAxis argument
      this.setAxisClip(Axis.X, options.clipBounds[0], options.clipBounds[1]);
      this.setAxisClip(Axis.Y, options.clipBounds[2], options.clipBounds[3]);
      this.setAxisClip(Axis.Z, options.clipBounds[4], options.clipBounds[5]);
    }
    if (options.translation !== undefined) {
      this.setTranslation(new Vector3().fromArray(options.translation));
    }
    if (options.rotation !== undefined) {
      this.setRotation(new Euler().fromArray(options.rotation));
    }

    if (options.renderMode !== undefined) {
      this.setVolumeRendering(options.renderMode);
    }
    if (options.primaryRayStepSize !== undefined || options.secondaryRayStepSize !== undefined) {
      this.setRayStepSizes(options.primaryRayStepSize, options.secondaryRayStepSize);
    }
    if (options.showBoundingBox !== undefined) {
      this.setShowBoundingBox(options.showBoundingBox);
    }
    if (options.boundingBoxColor !== undefined) {
      this.setBoundingBoxColor(options.boundingBoxColor);
    }

    if (options.channels !== undefined) {
      // store channel options here!
      this.channelOptions = options.channels;
      this.channelOptions.forEach((channelOptions, channelIndex) => {
        this.setChannelOptions(channelIndex, channelOptions);
      });
    }
  }

  setChannelOptions(channelIndex: number, options: VolumeChannelDisplayOptions): void {
    // merge to current channel options
    this.channelOptions[channelIndex] = Object.assign(this.channelOptions[channelIndex], options);

    if (options.enabled !== undefined) {
      this.setVolumeChannelEnabled(channelIndex, options.enabled);
    }
    if (options.color !== undefined) {
      this.updateChannelColor(channelIndex, options.color);
    }
    if (options.isosurfaceEnabled !== undefined) {
      const hasIso = this.hasIsosurface(channelIndex);
      if (hasIso !== options.isosurfaceEnabled) {
        if (hasIso && !options.isosurfaceEnabled) {
          this.destroyIsosurface(channelIndex);
        } else if (!hasIso && options.isosurfaceEnabled && this.volume.channels[channelIndex].loaded) {
          const { isovalue, isosurfaceOpacity } = options;
          this.createIsosurface(channelIndex, isovalue, isosurfaceOpacity);
        }
        this.updateChannelDataRequired(channelIndex);
      } else if (options.isosurfaceEnabled) {
        if (options.isovalue !== undefined) {
          this.updateIsovalue(channelIndex, options.isovalue);
        }
        if (options.isosurfaceOpacity !== undefined) {
          this.updateOpacity(channelIndex, options.isosurfaceOpacity);
        }
      }
    } else {
      if (options.isovalue !== undefined) {
        this.updateIsovalue(channelIndex, options.isovalue);
      }
      if (options.isosurfaceOpacity !== undefined) {
        this.updateOpacity(channelIndex, options.isosurfaceOpacity);
      }
    }
  }

  /**
   * Updates whether a channel's data must be loaded for rendering, based on if its volume or isosurface is enabled.
   * Calls `Volume.updateRequiredData` to update the list of required channels if necessary.
   */
  private updateChannelDataRequired(channelIndex: number): void {
    const { enabled, isosurfaceEnabled } = this.channelOptions[channelIndex];
    const channelIsRequired = enabled || isosurfaceEnabled;
    const requiredChannels = this.volume.loadSpecRequired.channels;

    if (requiredChannels.includes(channelIndex)) {
      if (!channelIsRequired) {
        // This channel is currently marked required, but both its volume and isosurface are off. Remove it!
        this.volume.updateRequiredData({ channels: requiredChannels.filter((i) => i !== channelIndex) });
      }
    } else {
      if (channelIsRequired) {
        // This channel is not marked required, but either its volume or isosurface is on. Add it!
        this.volume.updateRequiredData({ channels: [...requiredChannels, channelIndex] });
      }
    }
  }

  setRayStepSizes(primary?: number, secondary?: number): void {
    if (primary === this.settings.primaryRayStepSize && secondary === this.settings.secondaryRayStepSize) {
      return;
    }
    if (primary !== undefined) {
      this.settings.primaryRayStepSize = primary;
    }
    if (secondary !== undefined) {
      this.settings.secondaryRayStepSize = secondary;
    }
    this.volumeRendering.updateSettings(this.settings, SettingsFlags.SAMPLING);
  }

  updateScale(): void {
    const { normPhysicalSize, normRegionSize } = this.volume;
    this.meshVolume.setScale(normPhysicalSize.clone().multiply(normRegionSize), this.volume.getContentCenter());
    this.volumeRendering.updateVolumeDimensions();
  }

  setOrthoScale(value: number): void {
    if (this.settings.orthoScale === value) {
      return;
    }
    this.settings.orthoScale = value;
    this.volumeRendering.updateSettings(this.settings, SettingsFlags.VIEW);
  }

  setResolution(viewObj: ThreeJsPanel): void {
    const x = viewObj.getWidth();
    const y = viewObj.getHeight();
    const resolution = new Vector2(x, y);
    if (!this.settings.resolution.equals(resolution)) {
      this.meshVolume.setResolution(x, y);
      this.settings.resolution = resolution;
      this.volumeRendering.updateSettings(this.settings, SettingsFlags.SAMPLING);
    }
  }

  // Set clipping range (between -0.5 and 0.5) for a given axis.
  // Calling this allows the rendering to compensate for changes in thickness in orthographic views that affect how bright the volume is.
  // @param {number} axis 0, 1, or 2 for x, y, or z axis
  // @param {number} minval -0.5..0.5, should be less than maxval
  // @param {number} maxval -0.5..0.5, should be greater than minval
  // @param {boolean} isOrthoAxis is this an orthographic projection or just a clipping of the range for perspective view
  setAxisClip(axis: Axis, minval: number, maxval: number, isOrthoAxis?: boolean): void {
    // Skip settings update if nothing has changed
    if (
      this.settings.bounds.bmax[axis] === maxval &&
      this.settings.bounds.bmin[axis] === minval &&
      this.settings.viewAxis === axis &&
      this.settings.isOrtho === (isOrthoAxis || false)
    ) {
      return;
    }
    this.settings.bounds.bmax[axis] = maxval;
    this.settings.bounds.bmin[axis] = minval;
    this.settings.viewAxis = axis;
    this.settings.isOrtho = isOrthoAxis || false;

    // Configure mesh volume when in an orthographic axis alignment
    if (axis !== Axis.NONE && this.renderMode !== RenderMode.PATHTRACE) {
      this.meshVolume.setAxisClip(axis, minval, maxval, !!isOrthoAxis);
    }
    this.volumeRendering.updateSettings(this.settings, SettingsFlags.ROI | SettingsFlags.VIEW);
  }

  private modeStringToAxis(mode: string): Axis {
    const modeToAxis = {
      X: Axis.X,
      YZ: Axis.X,
      Y: Axis.Y,
      XZ: Axis.Y,
      Z: Axis.Z,
      XY: Axis.Z,
    };
    return modeToAxis[mode] || Axis.NONE;
  }
  /**
   * Sets the camera mode of the VolumeDrawable.
   * @param mode Mode can be "3D", or "XY" or "Z", or "YZ" or "X", or "XZ" or "Y".
   */
  setViewMode(mode: string, volumeRenderModeHint: RenderMode.PATHTRACE | RenderMode.RAYMARCH): void {
    const axis = this.modeStringToAxis(mode);
    this.viewMode = axis;
    // Force a volume render reset if we have switched to or from Z mode while raymarching is enabled.
    if (axis === Axis.Z) {
      // If currently in 3D raymarch mode, hotswap the 2D slice
      if (this.renderMode === RenderMode.RAYMARCH || this.renderMode === RenderMode.PATHTRACE) {
        this.setVolumeRendering(RenderMode.SLICE);
      }
    } else {
      // If in 2D slice mode, switch back to 3D raymarch mode
      if (this.renderMode === RenderMode.SLICE) {
        this.setVolumeRendering(volumeRenderModeHint);
      }
    }
    if (this.settings.viewAxis !== axis) {
      this.settings.viewAxis = axis;
      this.volumeRendering.updateSettings(this.settings, SettingsFlags.VIEW);
    }
  }

  // Tell this image that it needs to be drawn in an orthographic mode
  // @param {boolean} isOrtho is this an orthographic projection or a perspective view
  setIsOrtho(isOrtho: boolean): void {
    if (this.settings.isOrtho === isOrtho) {
      return;
    }
    this.settings.isOrtho = isOrtho;
    this.volumeRendering.updateSettings(this.settings, SettingsFlags.VIEW);
  }

  setInterpolationEnabled(active: boolean): void {
    if (this.settings.useInterpolation === active) {
      return;
    }
    this.settings.useInterpolation = active;
    this.volumeRendering.updateSettings(this.settings, SettingsFlags.SAMPLING);
  }

  setOrthoThickness(value: number): void {
    if (this.renderMode === RenderMode.PATHTRACE) {
      return;
    }
    this.meshVolume.setOrthoThickness(value);
    // No settings update because ortho thickness is calculated in the renderers
  }

  // Set parameters for gamma curve for volume rendering.
  // @param {number} gmin 0..1
  // @param {number} glevel 0..1
  // @param {number} gmax 0..1, should be > gmin
  setGamma(gmin: number, glevel: number, gmax: number): void {
    if (this.settings.gammaMin === gmin && this.settings.gammaLevel === glevel && this.settings.gammaMax === gmax) {
      return;
    }
    this.settings.gammaMin = gmin;
    this.settings.gammaLevel = glevel;
    this.settings.gammaMax = gmax;
    this.volumeRendering.updateSettings(this.settings, SettingsFlags.CAMERA);
  }

  setFlipAxes(flipX: -1 | 1, flipY: -1 | 1, flipZ: -1 | 1): void {
    const flipAxes = new Vector3(flipX, flipY, flipZ);
    if (!this.settings.flipAxes.equals(flipAxes)) {
      this.settings.flipAxes = flipAxes;
      this.meshVolume.setFlipAxes(flipX, flipY, flipZ);
      this.volumeRendering.updateSettings(this.settings, SettingsFlags.TRANSFORM);
    }
  }

  setMaxProjectMode(isMaxProject: boolean): void {
    if (this.settings.maxProjectMode === isMaxProject) {
      return;
    }
    this.settings.maxProjectMode = isMaxProject;
    this.volumeRendering.updateSettings(this.settings, SettingsFlags.VIEW);
  }

  onAnimate(canvas: ThreeJsPanel): void {
    // TODO: this is inefficient, as this work is duplicated by threejs.
    // we need camera matrix up to date before giving the 3d objects a chance to use it.
    canvas.camera.updateMatrixWorld(true);

    canvas.camera.matrixWorldInverse.copy(canvas.camera.matrixWorld).invert();

    // TODO confirm sequence
    this.volumeRendering.doRender(canvas);
    if (this.renderMode !== RenderMode.PATHTRACE) {
      this.meshVolume.doRender(canvas);
    }
  }

  getViewMode(): Axis {
    return this.viewMode;
  }

  // If an isosurface exists, update its isovalue and regenerate the surface. Otherwise do nothing.
  updateIsovalue(channel: number, value: number): void {
    this.meshVolume.updateIsovalue(channel, value);
  }

  getIsovalue(channel: number): number | undefined {
    return this.meshVolume.getIsovalue(channel);
  }

  // Set opacity for isosurface
  updateOpacity(channel: number, value: number): void {
    this.meshVolume.updateOpacity(channel, value);
  }

  hasIsosurface(channel: number): boolean {
    return this.meshVolume.hasIsosurface(channel);
  }

  /**
   * If an isosurface is not already created, then create one.  Otherwise do nothing.
   * @param {number} channel The channel to create an isosurface for
   * @param {number} value The isovalue to use for the isosurface. Default: 127 (middle of 0-255 range)
   * @param {number} alpha The opacity of the isosurface. Default: 1.0 (opaque)
   * @param {boolean} transp Whether the isosurface should be transparent. Determined from `alpha` if not provided.
   */
  createIsosurface(channel: number, value = 127, alpha = 1.0, transp = alpha < 1.0): void {
    this.meshVolume.createIsosurface(channel, this.channelColors[channel], value, alpha, transp);
  }

  // If an isosurface exists for this channel, destroy it now. Don't just hide it - assume we can free up some resources.
  destroyIsosurface(channel: number): void {
    this.meshVolume.destroyIsosurface(channel);
  }

  fuse(): void {
    if (!this.volume) {
      return;
    }
    this.volumeRendering.updateActiveChannels(this.fusion, this.volume.channels);
  }

  setRenderUpdateListener(callback?: (iteration: number) => void): void {
    this.renderUpdateListener = callback;
    if (this.renderMode === RenderMode.PATHTRACE) {
      (this.volumeRendering as PathTracedVolume).setRenderUpdateListener(callback);
    }
  }

  updateShadingMethod(isbrdf: boolean): void {
    if (this.renderMode === RenderMode.PATHTRACE) {
      (this.volumeRendering as PathTracedVolume).updateShadingMethod(isbrdf ? 1 : 0);
    }
  }

  updateMaterial(): void {
    this.volumeRendering.updateActiveChannels(this.fusion, this.volume.channels);
    this.volumeRendering.updateSettings(this.settings, SettingsFlags.MATERIAL);
  }

  updateLuts(): void {
    this.volumeRendering.updateActiveChannels(this.fusion, this.volume.channels);
    this.volumeRendering.updateSettings(this.settings, SettingsFlags.MATERIAL);
  }

  setVoxelSize(values: Vector3): void {
    this.volume.setVoxelSize(values);
    this.updateScale();
  }

  cleanup(): void {
    this.meshVolume.cleanup();
    this.volumeRendering.cleanup();
  }

  getChannel(channelIndex: number): Channel {
    return this.volume.getChannel(channelIndex);
  }

  onChannelLoaded(batch: number[]): void {
    this.meshVolume.onChannelData(batch);

    for (let j = 0; j < batch.length; ++j) {
      const idx = batch[j];
      this.setChannelOptions(idx, this.channelOptions[idx]);
    }

    // let the outside world have a chance
    if (this.onChannelDataReadyCallback) {
      this.onChannelDataReadyCallback();
    }
  }

  onChannelAdded(newChannelIndex: number): void {
    this.channelColors[newChannelIndex] = this.volume.channelColorsDefault[newChannelIndex];

    this.fusion[newChannelIndex] = {
      chIndex: newChannelIndex,
      lut: new Uint8Array[LUT_ARRAY_LENGTH](),
      rgbColor: [
        this.channelColors[newChannelIndex][0],
        this.channelColors[newChannelIndex][1],
        this.channelColors[newChannelIndex][2],
      ],
    };

    this.settings.diffuse[newChannelIndex] = [
      this.channelColors[newChannelIndex][0],
      this.channelColors[newChannelIndex][1],
      this.channelColors[newChannelIndex][2],
    ];
    this.settings.specular[newChannelIndex] = [0, 0, 0];
    this.settings.emissive[newChannelIndex] = [0, 0, 0];
    this.settings.glossiness[newChannelIndex] = 0;
  }

  // Save a channel's isosurface as a triangle mesh to either STL or GLTF2 format.  File will be named automatically, using image name and channel name.
  // @param {string} type Either 'GLTF' or 'STL'
  saveChannelIsosurface(channelIndex: number, type: string): void {
    this.meshVolume.saveChannelIsosurface(channelIndex, type, this.volume.name);
  }

  // Hide or display volume data for a channel
  setVolumeChannelEnabled(channelIndex: number, enabled: boolean): void {
    // flip the color to the "null" value
    this.fusion[channelIndex].rgbColor = enabled ? this.channelColors[channelIndex] : 0;
    // if all are nulled out, then hide the volume element from the scene.
    this.settings.visible = !this.fusion.every((elem) => elem.rgbColor === 0);
    this.volumeRendering.updateSettings(this.settings, SettingsFlags.VIEW);

    // add or remove this channel from the list of required channels to load
    this.updateChannelDataRequired(channelIndex);
  }

  isVolumeChannelEnabled(channelIndex: number): boolean {
    // the zero value for the fusion rgbColor is the indicator that a channel is hidden.
    return this.fusion[channelIndex].rgbColor !== 0;
  }

  // Set the color for a channel
  // @param {Array.<number>} colorrgb [r,g,b]
  updateChannelColor(channelIndex: number, colorrgb: [number, number, number]): void {
    if (!this.channelColors[channelIndex]) {
      return;
    }
    this.channelColors[channelIndex] = colorrgb;
    this.settings.diffuse[channelIndex] = colorrgb;
    // if volume channel is zero'ed out, then don't update it until it is switched on again.
    if (this.fusion[channelIndex].rgbColor !== 0) {
      this.fusion[channelIndex].rgbColor = colorrgb;
    }
    this.meshVolume.updateMeshColors(this.channelColors);
  }

  // TODO remove this from public interface?
  updateMeshColors(): void {
    this.meshVolume.updateMeshColors(this.channelColors);
  }

  // Get the color for a channel
  // @return {Array.<number>} The color as array of [r,g,b]
  getChannelColor(channelIndex: number): [number, number, number] {
    return this.channelColors[channelIndex];
  }

  // Set the material for a channel
  // @param {number} channelIndex
  // @param {Array.<number>} colorrgb [r,g,b]
  // @param {Array.<number>} specularrgb [r,g,b]
  // @param {Array.<number>} emissivergb [r,g,b]
  // @param {number} glossiness
  updateChannelMaterial(
    channelIndex: number,
    colorrgb: [number, number, number],
    specularrgb: [number, number, number],
    emissivergb: [number, number, number],
    glossiness: number
  ): void {
    if (!this.channelColors[channelIndex]) {
      return;
    }
    this.updateChannelColor(channelIndex, colorrgb);
    this.settings.diffuse[channelIndex] = colorrgb;
    this.settings.specular[channelIndex] = specularrgb;
    this.settings.emissive[channelIndex] = emissivergb;
    this.settings.glossiness[channelIndex] = glossiness;
  }

  setDensity(density: number): void {
    this.settings.density = density;
    this.volumeRendering.updateSettings(this.settings, SettingsFlags.MATERIAL);
  }

  /**
   * Get the global density of the volume data
   */
  getDensity(): number {
    return this.settings.density;
  }

  setBrightness(brightness: number): void {
    this.settings.brightness = brightness;
    this.volumeRendering.updateSettings(this.settings, SettingsFlags.CAMERA);
  }

  getBrightness(): number {
    return this.settings.brightness;
  }

  setChannelAsMask(channelIndex: number): void {
    if (!this.volume.channels[channelIndex] || !this.volume.channels[channelIndex].loaded) {
      return;
    }
    this.settings.maskChannelIndex = channelIndex;
    this.volumeRendering.updateSettings(this.settings, SettingsFlags.MASK_DATA);
  }

  setMaskAlpha(maskAlpha: number): void {
    this.settings.maskAlpha = maskAlpha;
    this.volumeRendering.updateSettings(this.settings, SettingsFlags.MASK_ALPHA);
  }

  setShowBoundingBox(showBoundingBox: boolean): void {
    this.settings.showBoundingBox = showBoundingBox;
    this.volumeRendering.updateSettings(this.settings, SettingsFlags.BOUNDING_BOX);
  }

  setBoundingBoxColor(color: [number, number, number]): void {
    this.settings.boundingBoxColor = color;
    this.volumeRendering.updateSettings(this.settings, SettingsFlags.BOUNDING_BOX);
  }

  getIntensity(c: number, x: number, y: number, z: number): number {
    return this.volume.getIntensity(c, x, y, z);
  }

  onStartControls(): void {
    if (this.renderMode === RenderMode.PATHTRACE) {
      (this.volumeRendering as PathTracedVolume).onStartControls();
    }
  }

  onChangeControls(): void {
    if (this.renderMode === RenderMode.PATHTRACE) {
      (this.volumeRendering as PathTracedVolume).onChangeControls();
    }
  }

  onEndControls(): void {
    if (this.renderMode === RenderMode.PATHTRACE) {
      (this.volumeRendering as PathTracedVolume).onEndControls();
    }
  }

  onResetCamera(): void {
    this.volumeRendering.viewpointMoved();
  }

  onCameraChanged(fov: number, focalDistance: number, apertureSize: number): void {
    if (this.renderMode === RenderMode.PATHTRACE) {
      (this.volumeRendering as PathTracedVolume).updateCamera(fov, focalDistance, apertureSize);
    }
  }

  // values are in 0..1 range
  updateClipRegion(xmin: number, xmax: number, ymin: number, ymax: number, zmin: number, zmax: number): void {
    this.settings.bounds.bmin = new Vector3(xmin - 0.5, ymin - 0.5, zmin - 0.5);
    this.settings.bounds.bmax = new Vector3(xmax - 0.5, ymax - 0.5, zmax - 0.5);
    this.meshVolume.updateClipRegion(xmin, xmax, ymin, ymax, zmin, zmax);
    this.volumeRendering.updateSettings(this.settings, SettingsFlags.ROI);
  }

  updateLights(state: Light[]): void {
    if (this.renderMode === RenderMode.PATHTRACE) {
      (this.volumeRendering as PathTracedVolume).updateLights(state);
    }
  }

  setPixelSamplingRate(value: number): void {
    this.settings.pixelSamplingRate = value;
    this.volumeRendering.updateSettings(this.settings, SettingsFlags.SAMPLING);
  }

  setVolumeRendering(newRenderMode: RenderMode): void {
    // Skip reassignment of Pathtrace renderer if already using
    if (newRenderMode === RenderMode.PATHTRACE && this.renderMode === RenderMode.PATHTRACE) {
      return;
    }

    // remove old 3d object from scene
    if (this.renderMode === RenderMode.SLICE || this.renderMode === RenderMode.RAYMARCH) {
      this.sceneRoot.remove(this.meshVolume.get3dObject());
    }
    this.sceneRoot.remove(this.volumeRendering.get3dObject());

    // destroy old resources.
    this.volumeRendering.cleanup();

    // create new
    switch (newRenderMode) {
      case RenderMode.PATHTRACE:
        this.volumeRendering = new PathTracedVolume(this.volume, this.settings);
        this.volume.updateRequiredData({ subregion: new Box3(new Vector3(0, 0, 0), new Vector3(1, 1, 1)) });
        this.volumeRendering.setRenderUpdateListener(this.renderUpdateListener);
        break;
      case RenderMode.SLICE:
        this.volumeRendering = new Atlas2DSlice(this.volume, this.settings);
        // `updateRequiredData` called on construction, via `updateSettings`
        break;
      case RenderMode.RAYMARCH:
      default:
        this.volumeRendering = new RayMarchedAtlasVolume(this.volume, this.settings);
        this.volume.updateRequiredData({ subregion: new Box3(new Vector3(0, 0, 0), new Vector3(1, 1, 1)) });
        break;
    }

    if (newRenderMode === RenderMode.RAYMARCH || newRenderMode === RenderMode.SLICE) {
      if (this.renderUpdateListener) {
        this.renderUpdateListener(0);
      }
      this.sceneRoot.add(this.meshVolume.get3dObject());
    }

    // add new 3d object to scene
    this.sceneRoot.add(this.volumeRendering.get3dObject());
    this.renderMode = newRenderMode;
    this.fuse();
  }

  setTranslation(xyz: Vector3): void {
    this.settings.translation.copy(xyz);
    this.meshVolume.setTranslation(this.settings.translation);
    this.volumeRendering.updateSettings(this.settings, SettingsFlags.TRANSFORM);
  }

  setRotation(eulerXYZ: Euler): void {
    this.settings.rotation.copy(eulerXYZ);
    this.meshVolume.setRotation(this.settings.rotation);
    this.volumeRendering.updateSettings(this.settings, SettingsFlags.TRANSFORM);
  }

  setupGui(pane: Pane): void {
    pane.addInput(this.settings, "translation").on("change", ({ value }) => this.setTranslation(value));
    pane.addInput(this.settings, "rotation").on("change", ({ value }) => this.setRotation(value));

    const scaleFolder = pane.addFolder({ title: "Multiscale loading" });
    scaleFolder
      .addInput(this.volume.loadSpecRequired, "maxAtlasEdge")
      .on("change", ({ value }) => this.volume.updateRequiredData({ maxAtlasEdge: value }));
    scaleFolder
      .addInput(this.volume.loadSpecRequired, "scaleLevelBias")
      .on("change", ({ value }) => this.volume.updateRequiredData({ scaleLevelBias: value }));
    scaleFolder
      .addInput(this.volume.loadSpecRequired, "multiscaleLevel")
      .on("change", ({ value }) => this.volume.updateRequiredData({ multiscaleLevel: value }));

    const pathtrace = pane.addFolder({ title: "Pathtrace", expanded: false });
    pathtrace
      .addInput(this.settings, "primaryRayStepSize", { min: 1, max: 100 })
      .on("change", ({ value }) => this.setRayStepSizes(value));
    pathtrace
      .addInput(this.settings, "secondaryRayStepSize", { min: 1, max: 100 })
      .on("change", ({ value }) => this.setRayStepSizes(undefined, value));
  }

  setZSlice(slice: number): boolean {
    const sizez = this.volume.imageInfo.volumeSize.z;
    if (this.settings.zSlice !== slice && slice < sizez && slice >= 0) {
      this.settings.zSlice = slice;
      this.volumeRendering.updateSettings(this.settings, SettingsFlags.ROI);
      return true;
    }
    return false;
  }

  get showBoundingBox(): boolean {
    return this.settings.showBoundingBox;
  }
}
