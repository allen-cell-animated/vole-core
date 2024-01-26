import { Box3, Vector3 } from "three";

import Volume, { ImageInfo } from "../Volume";
import { buildDefaultMetadata } from "./VolumeLoaderUtils";

export class LoadSpec {
  time = 0;
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

export type RawChannelDataCallback = (channelIndex: number, data: Uint8Array, atlasDims?: [number, number]) => void;

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
   * Pass a callback to respond when this request loads a new channel. This callback will execute after the
   * one assigned in `createVolume`, if any.
   */
  // TODO make this return a promise that resolves when loading is done?
  // TODO this is not cancellable in the sense that any async requests initiated here are not stored
  // in a way that they can be interrupted.
  // TODO explicitly passing a `LoadSpec` is now rarely useful. Remove?
  loadVolumeData(volume: Volume, loadSpec?: LoadSpec, onChannelLoaded?: PerChannelCallback): void;
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
   * Returns a promise that resolves to reflect any modifications to `imageInfo` and/or `loadSpec` that need to be made
   * based on this load. Actual loaded channel data is passed to `onData` as it is loaded. Depending on the format,
   * the returned array may be in simple 3d dimension order or reflect a 2d atlas. If the latter, the dimensions of the
   * atlas are passed as the third argument to `onData`.
   */
  abstract loadRawChannelData(
    imageInfo: ImageInfo,
    loadSpec: LoadSpec,
    onData: RawChannelDataCallback
  ): Promise<Partial<LoadedVolumeInfo>>;

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
    const onChannelData: RawChannelDataCallback = (channelIndex, data, atlasDims) => {
      if (atlasDims) {
        volume.setChannelDataFromAtlas(channelIndex, data, atlasDims[0], atlasDims[1]);
      } else {
        volume.setChannelDataFromVolume(channelIndex, data);
      }
      onChannelLoaded?.(volume, channelIndex);
    };

    const spec = { ...loadSpecOverride, ...volume.loadSpec };
    const { imageInfo, loadSpec } = await this.loadRawChannelData(volume.imageInfo, spec, onChannelData);

    if (imageInfo) {
      volume.imageInfo = imageInfo;
      volume.updateDimensions();
    }
    volume.loadSpec = { ...loadSpec, ...spec };
  }
}
