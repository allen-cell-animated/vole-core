import { serializeError } from "serialize-error";
import * as zarr from "zarrita";

import RequestQueue from "../utils/RequestQueue.js";
import { remapAxesToTCZYX } from "../loaders/zarr_utils/utils.js";
import { RelaxedFetchStore } from "../loaders/zarr_utils/wrappers.js";
import {
  assertMetadataHasMultiscales,
  toOMEZarrMetaV4,
  validateOMEZarrMetadata,
} from "../loaders/zarr_utils/validation.js";
import { matchSourceScaleLevels } from "../loaders/zarr_utils/utils.js";
import { VolumeLoadError } from "../loaders/VolumeLoadError.js";
import { wrapVolumeLoadError } from "../loaders/VolumeLoadError.js";
import { VolumeLoadErrorType } from "../loaders/VolumeLoadError.js";
import { remapUri } from "../utils/url_utils.js";

import type {
  WorkerMsgTypeWithLoader,
  WorkerRequest,
  WorkerRequestPayload,
  WorkerResponse,
  WorkerResponsePayload,
  ZarrOpenResult,
  ZarrSourceInfo,
  ZarrScaleLevelInfo,
} from "./types.js";
import { WorkerMsgType, WorkerResponseResult } from "./types.js";
import type { ZarrSource, NumericZarrArray } from "../loaders/zarr_utils/types.js";

// ── Worker state ─────────────────────────────────────────────────────────────

type LoaderEntry = {
  /** zarrita arrays keyed by [sourceIndex][scaleLevel] */
  arrays: zarr.Array<zarr.NumberDataType>[][];
  /** The ZarrSource metadata for each source (for reference, though mainly used during open) */
  urls: string[];
};

let queue: RequestQueue | undefined = undefined;

let loaderCount = 0;
const loaders: Map<number, LoaderEntry> = new Map();

let initialized = false;

// ── Message handlers ─────────────────────────────────────────────────────────

type MessageHandler<T extends WorkerMsgType> = (
  payload: WorkerRequestPayload<T>,
  loaderId: T extends WorkerMsgTypeWithLoader ? number : void
) => Promise<WorkerResponsePayload<T>>;

const messageHandlers: { [T in WorkerMsgType]: MessageHandler<T> } = {
  [WorkerMsgType.INIT]: ({ maxActiveRequests, maxLowPriorityRequests }) => {
    if (!initialized) {
      queue = new RequestQueue(maxActiveRequests, maxLowPriorityRequests);
      initialized = true;
    }
    return Promise.resolve();
  },

  [WorkerMsgType.OPEN_ZARR]: async ({ urls, scenes }): Promise<ZarrOpenResult> => {
    const urlsArr = urls.map(remapUri);

    // Open each URL as a ZarrSource to get metadata and arrays
    const sourceProms = urlsArr.map(async (url, i) => {
      const store = new RelaxedFetchStore(url);
      const root = zarr.root(store);

      const group = await zarr
        .open(root, { kind: "group" })
        .catch(wrapVolumeLoadError(`Failed to open OME-Zarr data at ${url}`, VolumeLoadErrorType.NOT_FOUND));

      const sourceName = urlsArr.length > 1 ? `Zarr source ${i}` : "Zarr";
      const meta = toOMEZarrMetaV4(group.attrs);
      assertMetadataHasMultiscales(meta, sourceName);

      let scene = scenes[Math.min(i, scenes.length - 1)];
      if (scene > meta.multiscales?.length) {
        console.warn(`WARNING: OMEZarrLoader: scene ${scene} is invalid. Using scene 0.`);
        scene = 0;
      }
      validateOMEZarrMetadata(meta, scene, sourceName);

      const { multiscales, omero } = meta;
      const multiscaleMetadata = multiscales[scene];

      // Open all scale levels
      const lvlProms = multiscaleMetadata.datasets.map(({ path }) =>
        zarr
          .open(root.resolve(path), { kind: "array" })
          .catch(
            wrapVolumeLoadError(
              `Failed to open scale level ${path} of OME-Zarr data at ${url}`,
              VolumeLoadErrorType.NOT_FOUND
            )
          )
      );
      const scaleLevels = (await Promise.all(lvlProms)) as NumericZarrArray[];
      const axesTCZYX = remapAxesToTCZYX(multiscaleMetadata.axes);

      return {
        source: {
          scaleLevels,
          multiscaleMetadata,
          omeroMetadata: omero,
          axesTCZYX,
          channelOffset: 0,
        } as ZarrSource,
        url,
      };
    });

    const sourceResults = await Promise.all(sourceProms);
    const zarrSources = sourceResults.map((r) => r.source);

    // Set channelOffsets
    let channelCount = 0;
    for (const s of zarrSources) {
      s.channelOffset = channelCount;
      if (s.omeroMetadata !== undefined) {
        channelCount += s.omeroMetadata.channels.length;
      } else if (s.axesTCZYX[1] > -1) {
        channelCount += s.scaleLevels[0].shape[s.axesTCZYX[1]];
      } else {
        channelCount += 1;
      }
    }

    // Match scale levels across sources
    matchSourceScaleLevels(zarrSources);

    // Store arrays for future FETCH_CHUNK calls
    const loaderId = loaderCount++;
    const arrays = zarrSources.map((src) => src.scaleLevels as zarr.Array<zarr.NumberDataType>[]);
    loaders.set(loaderId, { arrays, urls: sourceResults.map((r) => r.url) });

    // Build the serializable result
    const sources: ZarrSourceInfo[] = zarrSources.map((src, idx) => {
      const scaleLevelInfos: ZarrScaleLevelInfo[] = src.scaleLevels.map((level, lvlIdx) => ({
        shape: level.shape.slice(),
        chunks: level.chunks.slice(),
        dtype: level.dtype,
        datasetPath: src.multiscaleMetadata.datasets[lvlIdx].path,
      }));

      return {
        axesTCZYX: src.axesTCZYX,
        url: sourceResults[idx].url,
        channelOffset: src.channelOffset,
        scaleLevels: scaleLevelInfos,
        multiscaleMetadata: src.multiscaleMetadata,
        omeroMetadata: src.omeroMetadata,
      };
    });

    return { loaderId, sources };
  },

  [WorkerMsgType.CLOSE_LOADER]: (_, loaderId) => {
    loaders.delete(loaderId);
    return Promise.resolve();
  },

  [WorkerMsgType.FETCH_CHUNK]: async ({ sourceIndex, scaleLevel, coords, key, lowPriority }, loaderId) => {
    const entry = loaders.get(loaderId);
    if (!entry) {
      throw new VolumeLoadError(`Loader with ID ${loaderId} does not exist`);
    }

    const sourceArrays = entry.arrays[sourceIndex];
    if (!sourceArrays) {
      throw new VolumeLoadError(`Source index ${sourceIndex} does not exist on loader ${loaderId}`);
    }
    const array = sourceArrays[scaleLevel];
    if (!array) {
      throw new VolumeLoadError(
        `Scale level ${scaleLevel} does not exist on source ${sourceIndex} of loader ${loaderId}`
      );
    }

    // Use the RequestQueue for HTTP concurrency control and dedup
    if (!queue) {
      throw new Error("Worker not initialized: no RequestQueue available");
    }
    const chunk = await queue.addRequest(key, () => array.getChunk(coords), lowPriority);

    // `chunk.data` is a TypedArray; we transfer its underlying ArrayBuffer
    const buffer = chunk.data.buffer as ArrayBuffer;
    return {
      data: buffer,
      dtype: array.dtype,
      shape: chunk.shape.slice(),
    };
  },

  [WorkerMsgType.CANCEL_REQUESTS]: ({ keys }) => {
    if (queue) {
      for (const key of keys) {
        queue.cancelRequest(key);
      }
    }
    return Promise.resolve();
  },
};

// ── Worker message loop ──────────────────────────────────────────────────────

self.onmessage = async <T extends WorkerMsgType>({ data }: MessageEvent<WorkerRequest<T>>) => {
  let message: WorkerResponse<T>;

  try {
    const response = await messageHandlers[data.type](data.payload, data.loaderId);
    message = { ...data, responseResult: WorkerResponseResult.SUCCESS, payload: response };
  } catch (e) {
    message = { ...data, responseResult: WorkerResponseResult.ERROR, payload: serializeError(e) };
  }

  // Transfer ArrayBuffer for FETCH_CHUNK responses
  if (data.type === WorkerMsgType.FETCH_CHUNK && message.responseResult === WorkerResponseResult.SUCCESS) {
    const payload = (
      message as WorkerResponse<WorkerMsgType.FETCH_CHUNK> & { responseResult: WorkerResponseResult.SUCCESS }
    ).payload;
    (self as unknown as Worker).postMessage(message, [payload.data]);
  } else {
    self.postMessage(message);
  }
};
