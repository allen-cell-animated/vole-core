import { Box3, Vector3 } from "three";

import {
  ThreadableVolumeLoader,
  type LoadSpec,
  type RawChannelDataCallback,
  type LoadedVolumeInfo,
} from "./IVolumeLoader.js";
import { computePackedAtlasDims } from "./VolumeLoaderUtils.js";
import type { ImageInfo } from "../ImageInfo.js";
import type { VolumeDims } from "../VolumeDims.js";
import { ARRAY_CONSTRUCTORS, NumberType } from "../types.js";
import { getDataRange } from "../utils/num_utils.js";

// this is the form in which a 4D numpy array arrives as converted
// by jupyterlab into a js object.
// This loader does not yet support multiple time samples.
export type RawArrayData = {
  // expected to be "uint8" always
  dtype: NumberType;
  // [c,z,y,x]
  shape: [number, number, number, number];
  // the bits
  buffer: DataView;
};

// minimal metadata for visualization
export type RawArrayInfo = {
  name: string;
  sizeX: number;
  sizeY: number;
  sizeZ: number;
  sizeC: number;
  dtype: NumberType;
  physicalPixelSize: [number, number, number];
  spatialUnit: string;
  channelNames: string[];
  userData?: Record<string, unknown>;
};

export interface RawArrayLoaderOptions {
  data: RawArrayData;
  metadata: RawArrayInfo;
}

function getBytesPerPixel(dtype: NumberType): number {
  switch (dtype) {
    case "uint8":
    case "int8":
      return 1;
    case "uint16":
    case "int16":
      return 2;
    case "uint32":
    case "int32":
      return 4;
    case "uint64":
    case "int64":
      return 8;
    case "float32":
      return 4;
    case "float64":
      return 8;
    default:
      throw new Error(`Unsupported dtype: ${dtype}`);
  }
}

const convertImageInfo = (json: RawArrayInfo): ImageInfo => {
  const atlasTileDims = computePackedAtlasDims(json.sizeZ, json.sizeX, json.sizeY);
  return {
    name: json.name,

    // assumption: the data is already sized to fit in our viewer's preferred
    // memory footprint (a tiled atlas texture as of this writing)
    atlasTileDims: [atlasTileDims.x, atlasTileDims.y],
    subregionSize: [json.sizeX, json.sizeY, json.sizeZ],
    subregionOffset: [0, 0, 0],

    combinedNumChannels: json.sizeC,
    channelNames: json.channelNames,
    channelColors: undefined,

    multiscaleLevel: 0,
    multiscaleLevelDims: [
      {
        shape: [1, json.sizeC, json.sizeZ, json.sizeY, json.sizeX],
        spacing: [1, 1, json.physicalPixelSize[2], json.physicalPixelSize[1], json.physicalPixelSize[0]],
        spaceUnit: json.spatialUnit || "μm",
        timeUnit: "s",
        dataType: json.dtype,
      },
    ],

    transform: {
      translation: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },

    userData: json.userData,
  };
};

class RawArrayLoader extends ThreadableVolumeLoader {
  data: RawArrayData;
  jsonInfo: RawArrayInfo;

  constructor(rawData: RawArrayData, rawDataInfo: RawArrayInfo) {
    super();
    this.jsonInfo = rawDataInfo;
    this.data = rawData;
    // check consistent dims
    if (
      this.data.shape[0] !== this.jsonInfo.sizeC ||
      this.data.shape[1] !== this.jsonInfo.sizeZ ||
      this.data.shape[2] !== this.jsonInfo.sizeY ||
      this.data.shape[3] !== this.jsonInfo.sizeX
    ) {
      throw new Error("RawArrayLoader: data shape does not match metadata");
    }
  }

  async loadDims(_loadSpec: LoadSpec): Promise<VolumeDims[]> {
    const jsonInfo = this.jsonInfo;

    const d: VolumeDims = {
      shape: [1, jsonInfo.sizeC, jsonInfo.sizeZ, jsonInfo.sizeY, jsonInfo.sizeX],
      spacing: [1, 1, jsonInfo.physicalPixelSize[2], jsonInfo.physicalPixelSize[1], jsonInfo.physicalPixelSize[0]],
      spaceUnit: jsonInfo.spatialUnit || "μm",
      dataType: jsonInfo.dtype,
      timeUnit: "s", // time unit not specified
    };
    return [d];
  }

  async createImageInfo(loadSpec: LoadSpec): Promise<LoadedVolumeInfo> {
    return { imageInfo: convertImageInfo(this.jsonInfo), loadSpec };
  }

  loadRawChannelData(
    imageInfo: ImageInfo,
    loadSpec: LoadSpec,
    onUpdateMetadata: (imageInfo: undefined, loadSpec: LoadSpec) => void,
    onData: RawChannelDataCallback
  ): Promise<void> {
    const requestedChannels = loadSpec.channels;

    const adjustedLoadSpec = {
      ...loadSpec,
      // `subregion` and `multiscaleLevel` are unused by this loader
      subregion: new Box3(new Vector3(0, 0, 0), new Vector3(1, 1, 1)),
      multiscaleLevel: 0,
    };
    onUpdateMetadata(undefined, adjustedLoadSpec);

    for (let chindex = 0; chindex < imageInfo.combinedNumChannels; ++chindex) {
      if (requestedChannels && requestedChannels.length > 0 && !requestedChannels.includes(chindex)) {
        continue;
      }
      const volSizePixels = this.data.shape[3] * this.data.shape[2] * this.data.shape[1]; // x*y*z pixels * 1 byte/pixel
      const ctor = ARRAY_CONSTRUCTORS[this.data.dtype];
      const channelData = new ctor(
        this.data.buffer.buffer,
        chindex * volSizePixels * getBytesPerPixel(this.data.dtype),
        volSizePixels
      );
      const range = getDataRange(channelData);
      onData([chindex], [this.data.dtype], [channelData], [range]);
    }

    return Promise.resolve();
  }
}

export { RawArrayLoader };
