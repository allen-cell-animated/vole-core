import { fromUrl } from "geotiff";
import { serializeError } from "serialize-error";

import type { TiffLoadResult, TiffWorkerParams } from "../loaders/TiffLoader.js";
import { VolumeLoadError, VolumeLoadErrorType } from "../loaders/VolumeLoadError.js";
import { NumberType } from "../types.js";

type TypedArray =
  | Uint8Array
  | Int8Array
  | Uint16Array
  | Int16Array
  | Uint32Array
  | Int32Array
  | Float32Array
  | Float64Array;

// from TIFF
const SAMPLEFORMAT_UINT = 1;
const SAMPLEFORMAT_INT = 2;
const SAMPLEFORMAT_IEEEFP = 3;

function getDtype(sampleFormat: number, bytesPerPixel: number): NumberType {
  if (sampleFormat === SAMPLEFORMAT_IEEEFP) {
    if (bytesPerPixel === 4) {
      return "float32";
    }
  } else if (sampleFormat === SAMPLEFORMAT_INT) {
    if (bytesPerPixel === 1) {
      return "int8";
    } else if (bytesPerPixel === 2) {
      return "int16";
    } else if (bytesPerPixel === 4) {
      return "int32";
    }
  } else if (sampleFormat === SAMPLEFORMAT_UINT) {
    if (bytesPerPixel === 1) {
      return "uint8";
    } else if (bytesPerPixel === 2) {
      return "uint16";
    } else if (bytesPerPixel === 4) {
      return "uint32";
    }
  }
  console.error(`TIFF Worker: unsupported sample format ${sampleFormat} and bytes per pixel ${bytesPerPixel}`);
  return "uint8";
}
function castToArray(buf: ArrayBuffer, bytesPerPixel: number, sampleFormat: number): TypedArray {
  if (sampleFormat === SAMPLEFORMAT_IEEEFP) {
    if (bytesPerPixel === 4) {
      return new Float32Array(buf);
    }
  } else if (sampleFormat === SAMPLEFORMAT_INT) {
    if (bytesPerPixel === 1) {
      return new Int8Array(buf);
    } else if (bytesPerPixel === 2) {
      return new Int16Array(buf);
    } else if (bytesPerPixel === 4) {
      return new Int32Array(buf);
    }
  } else if (sampleFormat === SAMPLEFORMAT_UINT) {
    if (bytesPerPixel === 1) {
      return new Uint8Array(buf);
    } else if (bytesPerPixel === 2) {
      return new Uint16Array(buf);
    } else if (bytesPerPixel === 4) {
      return new Uint32Array(buf);
    }
  }
  console.error(`TIFF Worker: unsupported sample format ${sampleFormat} and bytes per pixel ${bytesPerPixel}`);
  return new Uint8Array(buf);
}

async function loadTiffChannel(e: MessageEvent<TiffWorkerParams>): Promise<TiffLoadResult> {
  // TODO index images by time
  // const time = e.data.time;

  const channelIndex = e.data.channel;
  const tilesizex = e.data.tilesizex;
  const tilesizey = e.data.tilesizey;
  const sizez = e.data.sizez;
  const sizec = e.data.sizec;
  const dimensionOrder = e.data.dimensionOrder;
  const bytesPerSample = e.data.bytesPerSample;

  const tiff = await fromUrl(e.data.url, { allowFullFile: true });

  // load the images of this channel from the tiff
  // today assume TCZYX so the slices are already in order.
  let startindex = 0;
  let incrementz = 1;
  if (dimensionOrder === "XYZCT") {
    // we have XYZCT which is the "good" case
    // TCZYX
    startindex = sizez * channelIndex;
    incrementz = 1;
  } else if (dimensionOrder === "XYCZT") {
    // we have to loop differently to increment channels
    // TZCYX
    startindex = channelIndex;
    incrementz = sizec;
  }

  // huge assumption: planes are in a particular order relative to z and c

  // get first plane, to get some details about the image
  const image = await tiff.getImage(startindex);
  // on first image, set up some stuff:
  const sampleFormat = image.getSampleFormat();
  const bytesPerPixel = image.getBytesPerPixel();
  // allocate a buffer for one channel
  const buffer = new ArrayBuffer(tilesizex * tilesizey * sizez * bytesPerPixel);
  const u8 = new Uint8Array(buffer);

  for (let imageIndex = startindex, zslice = 0; zslice < sizez; imageIndex += incrementz, ++zslice) {
    const image = await tiff.getImage(imageIndex);
    // download and downsample on client
    const result = await image.readRasters({ width: tilesizex, height: tilesizey });
    const arrayresult: TypedArray = Array.isArray(result) ? result[0] : result;
    // deposit in full channel array in the right place
    const offset = zslice * tilesizex * tilesizey;
    if (arrayresult.BYTES_PER_ELEMENT > 4) {
      throw new VolumeLoadError("byte size not supported yet: " + arrayresult.BYTES_PER_ELEMENT, {
        type: VolumeLoadErrorType.INVALID_METADATA,
      });
    } else if (arrayresult.BYTES_PER_ELEMENT !== bytesPerSample) {
      throw new VolumeLoadError("tiff bytes per element mismatch with OME metadata", {
        type: VolumeLoadErrorType.INVALID_METADATA,
      });
    } else {
      u8.set(new Uint8Array(arrayresult.buffer), offset * arrayresult.BYTES_PER_ELEMENT);
    }
  }
  // all slices collected, now resample to 8 bits full data range
  const src = castToArray(buffer, bytesPerPixel, sampleFormat);
  const dtype = getDtype(sampleFormat, bytesPerPixel);
  let chmin = src[0];
  let chmax = src[0];
  for (let j = 0; j < src.length; ++j) {
    const val = src[j];
    if (val < chmin) {
      chmin = val;
    }
    if (val > chmax) {
      chmax = val;
    }
  }

  return { data: src, channel: channelIndex, range: [chmin, chmax], dtype: dtype, isError: false };
}

self.onmessage = async (e) => {
  try {
    const result = await loadTiffChannel(e);
    (self as unknown as Worker).postMessage(result, [result.data.buffer]);
  } catch (err) {
    self.postMessage({ isError: true, error: serializeError(err) });
  }
};
