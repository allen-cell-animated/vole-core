import { fromUrl, type GeoTIFF, type GeoTIFFImage } from "geotiff";
import { ErrorObject, deserializeError } from "serialize-error";

import {
  ThreadableVolumeLoader,
  LoadSpec,
  type RawChannelDataCallback,
  type LoadedVolumeInfo,
} from "./IVolumeLoader.js";
import { computePackedAtlasDims, MAX_ATLAS_EDGE } from "./VolumeLoaderUtils.js";
import { VolumeLoadError, VolumeLoadErrorType, wrapVolumeLoadError } from "./VolumeLoadError.js";
import { type ImageInfo, CImageInfo } from "../ImageInfo.js";
import type { VolumeDims } from "../VolumeDims.js";
import { TypedArray, NumberType } from "../types.js";

function prepareXML(xml: string): string {
  // trim trailing unicode zeros?
  // eslint-disable-next-line no-control-regex
  const expr = /[\u0000]$/g;
  return xml.trim().replace(expr, "").trim();
}

function getOME(xml: string): Element {
  const parser = new DOMParser();
  try {
    const xmlDoc = parser.parseFromString(xml, "text/xml");
    return xmlDoc.getElementsByTagName("OME")[0];
  } catch (e) {
    throw new VolumeLoadError("Could not find OME metadata in TIFF file", {
      type: VolumeLoadErrorType.INVALID_METADATA,
      cause: e,
    });
  }
}

class OMEDims {
  sizex = 0;
  sizey = 0;
  sizez = 1;
  sizec = 1;
  sizet = 1;
  unit = "";
  pixeltype = "";
  dimensionorder = "";
  pixelsizex = 1;
  pixelsizey = 1;
  pixelsizez = 1;
  channelnames: string[] = [];
}

function getDtype(omepixeltype: string): NumberType {
  const mapping: Record<string, NumberType> = {
    uint8: "uint8",
    uint16: "uint16",
    uint32: "uint32",
    int8: "int8",
    int16: "int16",
    int32: "int32",
    float: "float32",
  };
  const dtype = mapping[omepixeltype];
  if (dtype === undefined) {
    console.warn(`Unsupported OME pixel type ${omepixeltype}; defaulting to uint8`);
    return "uint8";
  }
  return dtype;
}

export type TiffWorkerParams = {
  channel: number;
  tilesizex: number;
  tilesizey: number;
  sizec: number;
  sizez: number;
  dimensionOrder: string;
  bytesPerSample: number;
  url: string;
};

export type TiffLoadResult = {
  isError: false;
  data: TypedArray<NumberType>;
  dtype: NumberType;
  channel: number;
  range: [number, number];
};

function getAttributeOrError(el: Element, attr: string): string {
  const val = el.getAttribute(attr);
  if (val === null) {
    throw new VolumeLoadError(`Missing attribute ${attr} in OME-TIFF metadata`, {
      type: VolumeLoadErrorType.INVALID_METADATA,
    });
  }
  return val;
}

function getOMEDims(imageEl: Element): OMEDims {
  const dims = new OMEDims();

  const pixelsEl = imageEl.getElementsByTagName("Pixels")[0];
  dims.sizex = Number(getAttributeOrError(pixelsEl, "SizeX"));
  dims.sizey = Number(getAttributeOrError(pixelsEl, "SizeY"));
  dims.sizez = Number(pixelsEl.getAttribute("SizeZ"));
  dims.sizec = Number(pixelsEl.getAttribute("SizeC"));
  dims.sizet = Number(pixelsEl.getAttribute("SizeT"));
  dims.unit = pixelsEl.getAttribute("PhysicalSizeXUnit") || "";
  dims.pixeltype = pixelsEl.getAttribute("Type") || "";
  dims.dimensionorder = pixelsEl.getAttribute("DimensionOrder") || "XYZCT";
  dims.pixelsizex = Number(pixelsEl.getAttribute("PhysicalSizeX"));
  dims.pixelsizey = Number(pixelsEl.getAttribute("PhysicalSizeY"));
  dims.pixelsizez = Number(pixelsEl.getAttribute("PhysicalSizeZ"));
  const channelsEls = pixelsEl.getElementsByTagName("Channel");
  for (let i = 0; i < channelsEls.length; ++i) {
    const name = channelsEls[i].getAttribute("Name");
    const id = channelsEls[i].getAttribute("ID");
    dims.channelnames.push(name ? name : id ? id : "Channel" + i);
  }

  return dims;
}

const getBytesPerSample = (type: string): number => (type === "uint8" ? 1 : type === "uint16" ? 2 : 4);

// Despite the class `TiffLoader` extends, this loader is not threadable, since geotiff internally uses features that
// aren't available on workers. It uses its own specialized workers anyways.
class TiffLoader extends ThreadableVolumeLoader {
  url: string;
  dims?: OMEDims;

  constructor(url: string) {
    super();
    this.url = url;
  }

  private async loadOmeDims(): Promise<OMEDims> {
    if (!this.dims) {
      const tiff = await fromUrl(this.url, { allowFullFile: true }).catch<GeoTIFF>(
        wrapVolumeLoadError(`Could not open TIFF file at ${this.url}`, VolumeLoadErrorType.NOT_FOUND)
      );
      // DO NOT DO THIS, ITS SLOW
      // const imagecount = await tiff.getImageCount();
      // read the FIRST image
      const image = await tiff
        .getImage()
        .catch<GeoTIFFImage>(wrapVolumeLoadError("Failed to open TIFF image", VolumeLoadErrorType.NOT_FOUND));

      const tiffimgdesc = prepareXML(image.getFileDirectory().ImageDescription);
      const omeEl = getOME(tiffimgdesc);

      const image0El = omeEl.getElementsByTagName("Image")[0];
      this.dims = getOMEDims(image0El);
    }
    return this.dims;
  }

  async loadDims(_loadSpec: LoadSpec): Promise<VolumeDims[]> {
    const dims = await this.loadOmeDims();

    const atlasDims = computePackedAtlasDims(dims.sizez, dims.sizex, dims.sizey);
    // fit tiles to max of 2048x2048?
    const targetSize = MAX_ATLAS_EDGE;
    const tilesizex = Math.floor(targetSize / atlasDims.x);
    const tilesizey = Math.floor(targetSize / atlasDims.y);

    const d: VolumeDims = {
      shape: [dims.sizet, dims.sizec, dims.sizez, tilesizey, tilesizex],
      spacing: [
        1,
        1,
        dims.pixelsizez,
        (dims.pixelsizey * dims.sizey) / tilesizey,
        (dims.pixelsizex * dims.sizex) / tilesizex,
      ],
      spaceUnit: dims.unit ? dims.unit : "micron",
      dataType: getDtype(dims.pixeltype),
      timeUnit: "s",
    };
    return [d];
  }

  async createImageInfo(_loadSpec: LoadSpec): Promise<LoadedVolumeInfo> {
    const dims = await this.loadOmeDims();
    // compare with sizex, sizey
    //const width = image.getWidth();
    //const height = image.getHeight();

    // TODO allow user setting of this downsampling info?
    // TODO allow ROI selection: range of x,y,z,c for a given t
    const atlasDims = computePackedAtlasDims(dims.sizez, dims.sizex, dims.sizey);
    // fit tiles to max of 2048x2048?
    const targetSize = MAX_ATLAS_EDGE;
    const tilesizex = Math.floor(targetSize / atlasDims.x);
    const tilesizey = Math.floor(targetSize / atlasDims.y);

    // load tiff and check metadata

    const imgdata: ImageInfo = {
      name: "TEST",

      atlasTileDims: [atlasDims.x, atlasDims.y],
      subregionSize: [tilesizex, tilesizey, dims.sizez],
      subregionOffset: [0, 0, 0],
      combinedNumChannels: dims.sizec,
      channelNames: dims.channelnames,
      multiscaleLevel: 0,
      multiscaleLevelDims: [
        {
          shape: [dims.sizet, dims.sizec, dims.sizez, tilesizey, tilesizex],
          spacing: [
            1,
            1,
            dims.pixelsizez,
            (dims.pixelsizey * dims.sizey) / tilesizey,
            (dims.pixelsizex * dims.sizex) / tilesizex,
          ],
          spaceUnit: dims.unit || "",
          timeUnit: "",
          dataType: getDtype(dims.pixeltype),
        },
      ],

      transform: {
        translation: [0, 0, 0],
        rotation: [0, 0, 0],
        scale: [1, 1, 1],
      },
    };

    // This loader uses no fields from `LoadSpec`. Initialize volume with defaults.
    return { imageInfo: imgdata, loadSpec: new LoadSpec() };
  }

  async loadRawChannelData(
    imageInfo: ImageInfo,
    _loadSpec: LoadSpec,
    _onUpdateMetadata: () => void,
    onData: RawChannelDataCallback
  ): Promise<void> {
    const dims = await this.loadOmeDims();

    // get some size info.
    const cimageinfo = new CImageInfo(imageInfo);
    const volumeSize = cimageinfo.volumeSize;

    const channelProms: Promise<void>[] = [];
    // do each channel on a worker?
    for (let channel = 0; channel < imageInfo.combinedNumChannels; ++channel) {
      const thisChannelProm = new Promise<void>((resolve, reject) => {
        const params: TiffWorkerParams = {
          channel: channel,
          // these are target xy sizes for the in-memory volume data
          // they may or may not be the same size as original xy sizes
          tilesizex: volumeSize.x,
          tilesizey: volumeSize.y,
          sizec: imageInfo.combinedNumChannels,
          sizez: volumeSize.z,
          dimensionOrder: dims.dimensionorder,
          bytesPerSample: getBytesPerSample(dims.pixeltype),
          url: this.url,
        };

        const worker = new Worker(new URL("../workers/FetchTiffWorker", import.meta.url), { type: "module" });
        worker.onmessage = (e: MessageEvent<TiffLoadResult | { isError: true; error: ErrorObject }>) => {
          if (e.data.isError) {
            reject(deserializeError(e.data.error));
            return;
          }
          const { data, dtype, channel, range } = e.data;
          onData([channel], [dtype], [data], [range]);
          worker.terminate();
          resolve();
        };

        worker.postMessage(params);
      });

      channelProms.push(thisChannelProm);
    }

    // waiting for all channels to load allows errors to propagate to the caller via this promise
    await Promise.all(channelProms);
  }
}

export { TiffLoader };
