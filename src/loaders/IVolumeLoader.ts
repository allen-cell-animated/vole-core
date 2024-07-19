import { Box3, Vector3 } from "three";

import Volume, { ImageInfo } from "../Volume.js";
import { buildDefaultMetadata } from "./VolumeLoaderUtils.js";
import { PrefetchDirection } from "./zarr_utils/types.js";
import { ZarrLoaderFetchOptions } from "./OmeZarrLoader.js";

export class LoadSpec {
  time = 0;
  /** The max size of a volume atlas that may be produced by a load. Used to pick the appropriate multiscale level. */
  maxAtlasEdge?: number;
  /** An optional bias added to the scale level index after the optimal level is picked based on `maxAtlasEdge`. */
  scaleLevelBias?: number;
  /**
   * The max scale level to load. Even when this is specified, the loader may pick a *lower* scale level based on
   * limits imposed by `scaleLevelBias` and `maxAtlasEdge` (or their defaults if unspecified).
   */
  multiscaleLevel?: number;
  /** Subregion of volume to load. If not specified, the entire volume is loaded. Specify as floats between 0-1. */
  subregion = new Box3(new Vector3(0, 0, 0), new Vector3(1, 1, 1));
  channels?: number[];
}

export function loadSpecToString(spec: LoadSpec): string {
  const { min, max } = spec.subregion;
  return `${spec.multiscaleLevel}:${spec.time}:x(${min.x},${max.x}):y(${min.y},${max.y}):z(${min.z},${max.z})`;
}

export class VolumeDims {
  // shape: [t, c, z, y, x]
  shape: number[] = [0, 0, 0, 0, 0];
  // spacing: [t, c, z, y, x]; generally expect 1 for non-spatial dimensions
  spacing: number[] = [1, 1, 1, 1, 1];
  spaceUnit = "μm";
  timeUnit = "s";
  // TODO make this an enum?
  dataType = "uint8";
}

export type LoadedVolumeInfo = {
  imageInfo: ImageInfo;
  loadSpec: LoadSpec;
};

/**
 * @callback PerChannelCallback
 * @param {string} imageurl
 * @param {Volume} volume
 * @param {number} channelindex
 */
export type PerChannelCallback = (volume: Volume, channelIndex: number) => void;

/**
 * @callback RawChannelDataCallback - allow lists of channel indices and data arrays to be passed to the callback
 * @param {number[]} channelIndex - The indices of the channels that were loaded
 * @param {Uint8Array[]} data - The raw data for each channel (renormalized to 0-255 range)
 * @param {[number, number][]} ranges - The min and max values for each channel in their original range
 * @param {[number, number]} atlasDims - The dimensions of the atlas, if the data is in an atlas format
 */
export type RawChannelDataCallback = (
  channelIndex: number[],
  data: Uint8Array[],
  ranges: [number, number][],
  atlasDims?: [number, number]
) => void;

/**
 * Loads volume data from a source specified by a `LoadSpec`.
 *
 * Loaders may keep state for reuse between volume creation and volume loading, and should be kept alive until volume
 * loading is complete. (See `createVolume`)
 */
export interface IVolumeLoader {
  /** Use VolumeDims to further refine a `LoadSpec` for use in `createVolume` */
  loadDims(loadSpec: LoadSpec): Promise<VolumeDims[]>;

  /**
   * Create an empty `Volume` from a `LoadSpec`, which must be passed to `loadVolumeData` to begin loading.
   * Optionally pass a callback to respond whenever new channel data is loaded into the volume.
   */
  createVolume(loadSpec: LoadSpec, onChannelLoaded?: PerChannelCallback): Promise<Volume>;

  /**
   * Begin loading a volume's data, as specified in its `LoadSpec`.
   *
   * Pass a callback to respond when this request loads a new channel. This callback will execute after the one
   * assigned in `createVolume`, if any.
   *
   * The returned `Promise` resolves once all channels load, or rejects with any error that occurs during loading.
   */
  // TODO make this return a promise that resolves when loading is done?
  // TODO this is not cancellable in the sense that any async requests initiated here are not stored
  // in a way that they can be interrupted.
  // TODO explicitly passing a `LoadSpec` is now rarely useful. Remove?
  loadVolumeData(volume: Volume, loadSpec?: LoadSpec, onChannelLoaded?: PerChannelCallback): Promise<void>;

  /** Change which directions to prioritize when prefetching. Currently only implemented on `OMEZarrLoader`. */
  setPrefetchPriority(directions: PrefetchDirection[]): void;

  /**
   * By default channel data can arrive out of order and at different times.
   * This can cause the rendering to update in a way that is not visually appealing.
   * In particular, during time series playback or Z slice playback, we would like
   * to see all channels update at the same time.
   * @param sync Set true to force all requested channels to load at the same time
   */
  syncMultichannelLoading(sync: boolean): void;
}

/** Abstract class which allows loaders to accept and return types that are easier to transfer to/from a worker. */
export abstract class ThreadableVolumeLoader implements IVolumeLoader {
  /** Unchanged from `IVolumeLoader`. See that interface for details. */
  abstract loadDims(loadSpec: LoadSpec): Promise<VolumeDims[]>;

  /**
   * Creates an `ImageInfo` object from a `LoadSpec`, which may be passed to the `Volume` constructor to create an
   * empty volume that can accept data loaded with the given `LoadSpec`.
   *
   * Also returns a new `LoadSpec` that may have been modified from the input `LoadSpec` to reflect the constraints or
   * abilities of the loader. This new `LoadSpec` should be used when constructing the `Volume`, _not_ the original.
   */
  abstract createImageInfo(loadSpec: LoadSpec): Promise<LoadedVolumeInfo>;

  /**
   * Begins loading per-channel data for the volume specified by `imageInfo` and `loadSpec`.
   *
   * This function accepts two required callbacks. The first, `onUpdateVolumeMetadata`, should be called at most once
   * to modify the `Volume`'s `imageInfo` and/or `loadSpec` properties based on changes made by this load. Actual
   * loaded channel data is passed to `onData` as it is loaded.
   *
   * Depending on the loader, the array passed to `onData` may be in simple 3d dimension order or reflect a 2d atlas.
   * If the latter, the dimensions of the atlas are passed as the third argument to `onData`.
   *
   * The returned promise should resolve when all data has been loaded, or reject if any error occurs while loading.
   */
  abstract loadRawChannelData(
    imageInfo: ImageInfo,
    loadSpec: LoadSpec,
    onUpdateVolumeMetadata: (imageInfo?: ImageInfo, loadSpec?: LoadSpec) => void,
    onData: RawChannelDataCallback
  ): Promise<void>;

  setPrefetchPriority(_directions: PrefetchDirection[]): void {
    // no-op by default
  }

  syncMultichannelLoading(_sync: boolean): void {
    // default behavior is async, to update channels as they arrive, depending on each
    // loader's implementation details.
  }

  updateFetchOptions(_options: Partial<ZarrLoaderFetchOptions>): void {
    // no-op by default
  }

  async createVolume(loadSpec: LoadSpec, onChannelLoaded?: PerChannelCallback): Promise<Volume> {
    const { imageInfo, loadSpec: adjustedLoadSpec } = await this.createImageInfo(loadSpec);
    const vol = new Volume(imageInfo, adjustedLoadSpec, this);
    vol.channelLoadCallback = onChannelLoaded;
    vol.imageMetadata = buildDefaultMetadata(imageInfo);
    return vol;
  }

  async loadVolumeData(
    volume: Volume,
    loadSpecOverride?: LoadSpec,
    onChannelLoaded?: PerChannelCallback
  ): Promise<void> {
    const onUpdateMetadata = (imageInfo?: ImageInfo, loadSpec?: LoadSpec): void => {
      if (imageInfo) {
        volume.imageInfo = imageInfo;
        volume.updateDimensions();
      }
      volume.loadSpec = { ...loadSpec, ...spec };
    };

    const onChannelData: RawChannelDataCallback = (channelIndices, dataArrays, ranges, atlasDims) => {
      for (let i = 0; i < channelIndices.length; i++) {
        const channelIndex = channelIndices[i];
        const data = dataArrays[i];
        const range = ranges[i];
        if (atlasDims) {
          volume.setChannelDataFromAtlas(channelIndex, data, atlasDims[0], atlasDims[1]);
        } else {
          volume.setChannelDataFromVolume(channelIndex, data, range);
        }
        onChannelLoaded?.(volume, channelIndex);
      }
    };

    const spec = { ...loadSpecOverride, ...volume.loadSpec };
    return this.loadRawChannelData(volume.imageInfo, spec, onUpdateMetadata, onChannelData);
  }
}
