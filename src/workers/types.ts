import type { ErrorObject } from "serialize-error";
import type { NumberDataType } from "zarrita";

import type { OMEMultiscale, OmeroTransitionalMetadata, TCZYX } from "../loaders/zarr_utils/types.js";

/** The types of requests that can be made to the worker. */
export const enum WorkerMsgType {
  /** Initialize the worker with concurrency settings. */
  INIT,
  /** Open an OME-Zarr dataset — fetches metadata, opens scale levels, returns structured result. */
  OPEN_ZARR,
  /** Close a previously opened zarr loader and release its resources on the worker. */
  CLOSE_LOADER,
  /** Fetch and decompress a single chunk from a zarr array. Returns the raw typed array via transferable. */
  FETCH_CHUNK,
  /** Cancel pending chunk fetch requests by key. */
  CANCEL_REQUESTS,
}

/** The variants of `WorkerMsgType` which represent "global" actions that don't require a specific loader */
export type WorkerMsgTypeGlobal = WorkerMsgType.INIT | WorkerMsgType.OPEN_ZARR;
/** The variants of `WorkerMsgType` which represent actions on a specific loader */
export type WorkerMsgTypeWithLoader =
  | WorkerMsgType.CLOSE_LOADER
  | WorkerMsgType.FETCH_CHUNK
  | WorkerMsgType.CANCEL_REQUESTS;

/** The kind of response a worker can return - `SUCCESS` or `ERROR`. */
export const enum WorkerResponseResult {
  SUCCESS,
  ERROR,
}

/**
 * All messages to/from a worker carry a `msgId`, a `type`, and a `payload` (whose type is determined by `type`).
 * Messages which operate on a specific loader also require a `loaderId`.
 */
type WorkerMsgBase<T extends WorkerMsgType, P> = {
  msgId: number;
  loaderId: T extends WorkerMsgTypeWithLoader ? number : undefined;
  type: T;
  payload: P;
};

// ── Zarr open result types ──────────────────────────────────────────────────

/** Metadata for a single scale level, extracted from a zarrita Array for transfer to the main thread. */
export type ZarrScaleLevelInfo = {
  /** Shape of the array at this level (in the array's native dimension order). */
  shape: number[];
  /** Chunk shape of the array at this level (in the array's native dimension order). */
  chunks: number[];
  /** Data type string (e.g. "uint8", "float32"). */
  dtype: NumberDataType;
  /** The dataset path within the zarr group (used for cache key construction). */
  datasetPath: string;
};

/** Per-source metadata returned from the worker after opening an OME-Zarr dataset. */
export type ZarrSourceInfo = {
  /** Mapping from TCZYX to the indices in dimension-ordered arrays. -1 means the dimension is absent. */
  axesTCZYX: TCZYX<number>;
  /** The base URL for this source (used for cache key construction). */
  url: string;
  /** Index of the first channel in this source within the combined volume. */
  channelOffset: number;
  /** Metadata for each scale level. */
  scaleLevels: ZarrScaleLevelInfo[];
  /** OME multiscale metadata record. */
  multiscaleMetadata: OMEMultiscale;
  /** Optional OMERO transitional metadata (channel names, colors, etc.). */
  omeroMetadata?: OmeroTransitionalMetadata;
};

/** The full result of an OPEN_ZARR request — everything the main thread needs to drive loading. */
export type ZarrOpenResult = {
  /** The worker-assigned loader ID for subsequent FETCH_CHUNK / CLOSE_LOADER calls. */
  loaderId: number;
  /** Per-source metadata, one per URL provided to OPEN_ZARR. */
  sources: ZarrSourceInfo[];
};

// ── Chunk fetch types ───────────────────────────────────────────────────────

/** Payload for a FETCH_CHUNK request. */
export type FetchChunkRequest = {
  /** Index of the source within the opened loader. */
  sourceIndex: number;
  /** Scale level index within the source. */
  scaleLevel: number;
  /** Chunk coordinates in the array's native dimension order. */
  coords: number[];
  /** Cache key to use for request deduplication. */
  key: string;
  /** Whether this is a low-priority (prefetch) request. */
  lowPriority?: boolean;
};

/** Response payload for a FETCH_CHUNK request — transferred, not copied. */
export type FetchChunkResponse = {
  /** The decompressed chunk data as a flat typed array buffer. */
  data: ArrayBuffer;
  /** The data type of the chunk. */
  dtype: NumberDataType;
  /** The shape of this particular chunk (may be smaller than chunk shape at array edges). */
  shape: number[];
};

// ── Message payload maps ────────────────────────────────────────────────────

/** Maps each `WorkerMsgType` to the type of the payload of requests of that type. */
export type WorkerRequestPayload<T extends WorkerMsgType> = {
  [WorkerMsgType.INIT]: {
    maxActiveRequests?: number;
    maxLowPriorityRequests?: number;
  };
  [WorkerMsgType.OPEN_ZARR]: {
    urls: string[];
    scenes: number[];
  };
  [WorkerMsgType.CLOSE_LOADER]: void;
  [WorkerMsgType.FETCH_CHUNK]: FetchChunkRequest;
  [WorkerMsgType.CANCEL_REQUESTS]: { keys: string[] };
}[T];

/** Maps each `WorkerMsgType` to the type of the payload of responses of that type. */
export type WorkerResponsePayload<T extends WorkerMsgType> = {
  [WorkerMsgType.INIT]: void;
  [WorkerMsgType.OPEN_ZARR]: ZarrOpenResult;
  [WorkerMsgType.CLOSE_LOADER]: void;
  [WorkerMsgType.FETCH_CHUNK]: FetchChunkResponse;
  [WorkerMsgType.CANCEL_REQUESTS]: void;
}[T];

/** All valid types of worker requests, with some `WorkerMsgType` and a matching payload type. */
export type WorkerRequest<T extends WorkerMsgType> = WorkerMsgBase<T, WorkerRequestPayload<T>>;
/** All valid types of worker responses: `SUCCESS` with a matching payload, or `ERROR`. */
export type WorkerResponse<T extends WorkerMsgType> =
  | ({ responseResult: WorkerResponseResult.SUCCESS } & WorkerMsgBase<T, WorkerResponsePayload<T>>)
  | ({ responseResult: WorkerResponseResult.ERROR } & WorkerMsgBase<T, ErrorObject>);
