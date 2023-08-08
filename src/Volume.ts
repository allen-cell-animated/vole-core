import { Vector2, Vector3 } from "three";

import Channel from "./Channel";
import Histogram from "./Histogram";
import { getColorByChannelIndex } from "./constants/colors";
import { LoadSpec } from "./loaders/IVolumeLoader";

export type ImageInfo = {
  // TODO necessary?
  name: string;
  version: string;

  /** XY size of the *original* (not downsampled) volume, in pixels */
  // If we ever allow downsampling in z, replace with Vector3
  originalSize: Vector2;
  /** Number of rows and columns (of full xy slices, not pixels) in the texture atlas */
  atlasDims: Vector2;
  /** Size of the volume, in pixels */
  volumeSize: Vector3;
  /** Size of the currently loaded subregion, in pixels */
  regionSize: Vector3;
  /** Offset of the loaded subregion into the total volume, in pixels */
  regionOffset: Vector3;
  /** Size of a single *original* (not downsampled) pixel, in spatial units */
  pixelSize: Vector3;
  /** Symbol of physical spatial unit used by `pixelSize` */
  spatialUnit: string;

  numChannels: number;
  channelNames: string[];
  // TODO type? Use THREE.Color?
  channelColors?: [number, number, number][];

  times: number;
  timeScale: number;
  timeUnit: string;

  transform: {
    translation: Vector3;
    rotation: Vector3;
  };

  userData?: Record<string, unknown>;
};

export const getDefaultImageInfo = (): ImageInfo => ({
  name: "",
  version: "",
  originalSize: new Vector2(1, 1),
  atlasDims: new Vector2(1, 1),
  volumeSize: new Vector3(1, 1, 1),
  regionSize: new Vector3(1, 1, 1),
  regionOffset: new Vector3(1, 1, 1),
  pixelSize: new Vector3(1, 1, 1),
  spatialUnit: "",
  numChannels: 0,
  channelNames: [],
  channelColors: [],
  times: 1,
  timeScale: 1,
  timeUnit: "",
  transform: {
    translation: new Vector3(0, 0, 0),
    rotation: new Vector3(0, 0, 0),
  },
});

/**
 * Volumes may be downsampled in X and Y but not Z.
 * Construct a `Vector3` of original volume size using `x` and `y` from `originalSize` and `z` from `volumeSize`.
 */
const getOriginalSize3 = ({ originalSize: { x, y }, volumeSize: { z } }: ImageInfo) => new Vector3(x, y, z);

interface VolumeDataObserver {
  onVolumeData: (vol: Volume, batch: number[]) => void;
  onVolumeChannelAdded: (vol: Volume, idx: number) => void;
}

// TODO update docs
/**
 * Provide dimensions of the volume data, including dimensions for texture atlas data in which the volume z slices
 * are tiled across a single large 2d image plane.
 * @typedef {Object} ImageInfo
 * @property {string} name Base name of image
 * @property {string} version schema version preferably in semver format.
 * @property {number} width Width of original volumetric data prior to downsampling
 * @property {number} height Height of original volumetric data prior to downsampling
 * @property {number} channels Number of channels
 * @property {number} times Number of times (default = 1)
 * @property {number} tiles Number of tiles, which must be equal to the number of z-slices in original volumetric data
 * @property {number} pixel_size_x Size of pixel in volumetric data to be rendered, in x-dimension, unitless
 * @property {number} pixel_size_y Size of pixel in volumetric data to be rendered, in y-dimension, unitless
 * @property {number} pixel_size_z Size of pixel in volumetric data to be rendered, in z-dimension, unitless
 * @property {Array.<string>} channel_names Names of each of the channels to be rendered, in order. Unique identifier expected
 * @property {number} rows Number of rows in tile array in each image.  Note tiles <= rows*cols
 * @property {number} cols Number of columns in tile array in each image.  Note tiles <= rows*cols
 * @property {number} tile_width Width of each tile in volumetric dataset to be rendered, in pixels
 * @property {number} tile_height Height of each tile in volumetric dataset to be rendered, in pixels
 * @property {number} atlas_width Total width of image containing all the tiles, in pixels.  Note atlas_width === cols*tile_width
 * @property {number} atlas_height Total height of image containing all the tiles, in pixels. Note atlas_height === rows*tile_height
 * @property {Object} transform translation and rotation as arrays of 3 numbers. Translation is in voxels (to be multiplied by pixel_size values). Rotation is Euler angles in radians, appled in XYZ order.
 * @example let imgdata = {
  "width": 306,
  "height": 494,
  "channels": 9,
  "channel_names": ["DRAQ5", "EGFP", "Hoechst 33258", "TL Brightfield", "SEG_STRUCT", "SEG_Memb", "SEG_DNA", "CON_Memb", "CON_DNA"],
  "rows": 7,
  "cols": 10,
  "tiles": 65,
  "tile_width": 204,
  "tile_height": 292,
  // for webgl reasons, it is best for atlas_width and atlas_height to be <= 2048
  // and ideally a power of 2.  This generally implies downsampling the original volume data for display in this viewer.
  "atlas_width": 2040,
  "atlas_height": 2044,
  "pixel_size_x": 0.065,
  "pixel_size_y": 0.065,
  "pixel_size_z": 0.29,
  "name": "AICS-10_5_5",
  "status": "OK",
  "version": "0.0.0",
  "aicsImageVersion": "0.3.0",
  "transform": {
    "translation": [5, 5, 1],
    "rotation": [0, 3.14159, 1.57]
  }
  };
 */

/**
 * A renderable multichannel volume image with 8-bits per channel intensity values.
 * @class
 * @param {ImageInfo} imageInfo
 */
export default class Volume {
  public imageInfo: ImageInfo;
  public loadSpec: LoadSpec;
  public imageMetadata: Record<string, unknown>;
  public name: string;
  // public x: number;
  // public y: number;
  // public z: number;
  public channels: Channel[];
  private volumeDataObservers: VolumeDataObserver[];
  public physicalScale: number;
  public physicalSize: Vector3;
  public normPhysicalSize: Vector3;
  public normRegionSize: Vector3;
  public normRegionOffset: Vector3;
  public physicalUnitSymbol: string;
  public tickMarkPhysicalLength: number;
  private loaded: boolean;
  /* eslint-disable @typescript-eslint/naming-convention */
  // public num_channels: number;
  public channelNames: string[];
  public channel_colors_default: [number, number, number][];
  // public pixel_size: [number, number, number];
  /* eslint-enable @typescript-eslint/naming-convention */

  constructor(imageInfo: ImageInfo = getDefaultImageInfo(), loadSpec: LoadSpec = new LoadSpec()) {
    // imageMetadata to be filled in by Volume Loaders
    this.imageMetadata = {};
    this.normRegionSize = new Vector3(1, 1, 1);
    this.normRegionOffset = new Vector3(0, 0, 0);
    this.physicalSize = new Vector3(1, 1, 1);
    this.physicalScale = 1;
    this.normPhysicalSize = new Vector3(1, 1, 1);

    this.loaded = false;
    this.imageInfo = imageInfo;
    this.name = this.imageInfo.name;
    this.loadSpec = loadSpec;

    // clean up some possibly bad data.
    this.validatePixelSize();

    // TODO clean up these unused properties or replace them with whatever seems most sensible
    // this.pixel_size = [this.imageInfo.pixel_size_x, this.imageInfo.pixel_size_y, this.imageInfo.pixel_size_z];
    // this.x = this.imageInfo.tile_width;
    // this.y = this.imageInfo.tile_height;
    // this.z = this.imageInfo.tiles;

    // this.num_channels = this.imageInfo.channels;

    // TODO do we really want this copied value?
    this.channelNames = this.imageInfo.channelNames.slice();
    this.channel_colors_default = this.imageInfo.channelColors
      ? this.imageInfo.channelColors.slice()
      : this.channelNames.map((name, index) => getColorByChannelIndex(index));
    // fill in gaps
    if (this.channel_colors_default.length < this.imageInfo.numChannels) {
      for (let i = this.channel_colors_default.length - 1; i < this.imageInfo.numChannels; ++i) {
        this.channel_colors_default[i] = getColorByChannelIndex(i);
      }
    }

    this.channels = [];
    for (let i = 0; i < this.imageInfo.numChannels; ++i) {
      const channel = new Channel(this.channelNames[i]);
      this.channels.push(channel);
      // TODO pass in channel constructor...
      channel.dims = this.imageInfo.regionSize.toArray();
    }

    this.physicalUnitSymbol = this.imageInfo.spatialUnit;
    this.tickMarkPhysicalLength = 1;
    this.setVoxelSize(this.imageInfo.pixelSize);

    this.volumeDataObservers = [];
  }

  private validatePixelSize() {
    this.imageInfo.pixelSize.x = this.imageInfo.pixelSize.x || 1.0;
    this.imageInfo.pixelSize.y = this.imageInfo.pixelSize.y || 1.0;
    this.imageInfo.pixelSize.z = this.imageInfo.pixelSize.z || 1.0;
  }

  updateDimensions() {
    // TODO cleanup here too!
    // this.x = this.imageInfo.tile_width;
    // this.y = this.imageInfo.tile_height;
    // this.z = this.imageInfo.tiles;
    const { pixelSize, volumeSize, regionSize, regionOffset } = this.imageInfo;

    this.setVoxelSize(pixelSize);

    this.normRegionSize = regionSize.clone().divide(volumeSize);
    this.normRegionOffset = regionOffset.clone().divide(volumeSize);
  }

  // we calculate the physical size of the volume (voxels*pixel_size)
  // and then normalize to the max physical dimension
  setVoxelSize(size: Vector3): void {
    // only set the data if it is > 0.  zero is not an allowed value.
    // TODO this indicates that maybe pixel size should stick around?
    this.imageInfo.pixelSize = size;
    this.validatePixelSize();

    this.physicalSize = getOriginalSize3(this.imageInfo).multiply(this.imageInfo.pixelSize);
    // Volume is scaled such that its largest physical dimension is 1 world unit - save that dimension for conversions
    this.physicalScale = Math.max(this.physicalSize.x, this.physicalSize.y, this.physicalSize.z);
    // Compute the volume's max extent - scaled to max dimension.
    this.normPhysicalSize = this.physicalSize.clone().divideScalar(this.physicalScale);
    // While we're here, pick a power of 10 that divides into our max dimension a reasonable number of times
    // and save it to be the length of tick marks in 3d.
    this.tickMarkPhysicalLength = 10 ** Math.floor(Math.log10(this.physicalScale / 2));
  }

  setUnitSymbol(symbol: string): void {
    this.physicalUnitSymbol = symbol;
  }

  /** Computes the center of the volume subset */
  getContentCenter(): Vector3 {
    // center point: (normRegionSize / 2 + normRegionOffset - 0.5) * normPhysicalSize;
    return this.normRegionSize
      .clone()
      .divideScalar(2)
      .add(this.normRegionOffset)
      .subScalar(0.5)
      .multiply(this.normPhysicalSize);
  }

  cleanup(): void {
    // no op
  }

  getChannel(channelIndex: number): Channel {
    return this.channels[channelIndex];
  }

  onChannelLoaded(batch: number[]): void {
    // check to see if all channels are now loaded, and fire an event(?)
    if (this.channels.every((element) => element.loaded)) {
      this.loaded = true;
    }
    for (let i = 0; i < this.volumeDataObservers.length; ++i) {
      this.volumeDataObservers[i].onVolumeData(this, batch);
    }
  }

  /**
   * Assign volume data via a 2d array containing the z slices as tiles across it.  Assumes that the incoming data is consistent with the image's pre-existing imageInfo tile metadata.
   * @param {number} channelIndex
   * @param {Uint8Array} atlasdata
   * @param {number} atlaswidth
   * @param {number} atlasheight
   */
  setChannelDataFromAtlas(channelIndex: number, atlasdata: Uint8Array, atlaswidth: number, atlasheight: number): void {
    this.channels[channelIndex].setBits(atlasdata, atlaswidth, atlasheight);
    const { x, y, z } = this.imageInfo.regionSize;
    this.channels[channelIndex].unpackVolumeFromAtlas(x, y, z);
    this.onChannelLoaded([channelIndex]);
  }

  // ASSUMES that this.channelData.options is already set and incoming data is consistent with it
  /**
   * Assign volume data as a 3d array ordered x,y,z. The xy size must be equal to tilewidth*tileheight from the imageInfo used to construct this Volume.  Assumes that the incoming data is consistent with the image's pre-existing imageInfo tile metadata.
   * @param {number} channelIndex
   * @param {Uint8Array} volumeData
   */
  setChannelDataFromVolume(channelIndex: number, volumeData: Uint8Array): void {
    const { regionSize, atlasDims } = this.imageInfo;
    this.channels[channelIndex].setFromVolumeData(
      volumeData,
      regionSize.x,
      regionSize.y,
      regionSize.z,
      atlasDims.x * regionSize.x,
      atlasDims.y * regionSize.y
    );
    this.onChannelLoaded([channelIndex]);
  }

  // TODO: decide if this should update imageInfo or not. For now, leave imageInfo alone as the "original" data
  /**
   * Add a new channel ready to receive data from one of the setChannelDataFrom* calls.
   * Name and color will be defaulted if not provided. For now, leave imageInfo alone as the "original" data
   * @param {string} name
   * @param {Array.<number>} color [r,g,b]
   */
  appendEmptyChannel(name: string, color?: [number, number, number]): number {
    const idx = this.imageInfo.numChannels;
    const chname = name || "channel_" + idx;
    const chcolor = color || getColorByChannelIndex(idx);
    this.imageInfo.numChannels += 1;
    this.channelNames.push(chname);
    this.channel_colors_default.push(chcolor);

    this.channels.push(new Channel(chname));

    for (let i = 0; i < this.volumeDataObservers.length; ++i) {
      this.volumeDataObservers[i].onVolumeChannelAdded(this, idx);
    }

    return idx;
  }

  /**
   * Get a value from the volume data
   * @return {number} the intensity value from the given channel at the given xyz location
   * @param {number} c The channel index
   * @param {number} x
   * @param {number} y
   * @param {number} z
   */
  getIntensity(c: number, x: number, y: number, z: number): number {
    return this.channels[c].getIntensity(x, y, z);
  }

  /**
   * Get the 256-bin histogram for the given channel
   * @return {Histogram} the histogram
   * @param {number} c The channel index
   */
  getHistogram(c: number): Histogram {
    return this.channels[c].getHistogram();
  }

  /**
   * Set the lut for the given channel
   * @param {number} c The channel index
   * @param {Array.<number>} lut The lut as a 256 element array
   */
  setLut(c: number, lut: Uint8Array): void {
    this.channels[c].setLut(lut);
  }

  /**
   * Set the color palette for the given channel
   * @param {number} c The channel index
   * @param {Array.<number>} palette The colors as a 256 element array * RGBA
   */
  setColorPalette(c: number, palette: Uint8Array): void {
    this.channels[c].setColorPalette(palette);
  }

  /**
   * Set the color palette alpha multiplier for the given channel.
   * This will blend between the ordinary color lut and this colorPalette lut.
   * @param {number} c The channel index
   * @param {number} alpha The alpha value as a number from 0 to 1
   */
  setColorPaletteAlpha(c: number, alpha: number): void {
    this.channels[c].setColorPaletteAlpha(alpha);
  }

  /**
   * Return the intrinsic rotation associated with this volume (radians)
   * @return {Array.<number>} the xyz Euler angles (radians)
   */
  getRotation(): [number, number, number] {
    // default axis order is XYZ
    return this.imageInfo.transform.rotation.toArray();
  }

  /**
   * Return the intrinsic translation (pivot center delta) associated with this volume, in normalized volume units
   * @return {Array.<number>} the xyz translation in normalized volume units
   */
  getTranslation(): [number, number, number] {
    return this.voxelsToWorldSpace(this.imageInfo.transform.translation.toArray());
  }

  /**
   * Return a translation in normalized volume units, given a translation in image voxels
   * @return {Array.<number>} the xyz translation in normalized volume units
   */
  voxelsToWorldSpace(xyz: [number, number, number]): [number, number, number] {
    // ASSUME: translation is in original image voxels.
    // account for pixel_size and normalized scaling in the threejs volume representation we're using
    const m = 1.0 / Math.max(this.physicalSize.x, Math.max(this.physicalSize.y, this.physicalSize.z));
    return new Vector3().fromArray(xyz).multiply(this.imageInfo.pixelSize).multiplyScalar(m).toArray();
  }

  addVolumeDataObserver(o: VolumeDataObserver): void {
    this.volumeDataObservers.push(o);
  }

  removeVolumeDataObserver(o: VolumeDataObserver): void {
    if (o) {
      const i = this.volumeDataObservers.indexOf(o);
      if (i !== -1) {
        this.volumeDataObservers.splice(i, 1);
      }
    }
  }

  removeAllVolumeDataObservers(): void {
    this.volumeDataObservers = [];
  }

  isLoaded(): boolean {
    return this.loaded;
  }

  setIsLoaded(loaded: boolean): void {
    this.loaded = loaded;
  }
}
