import { deserializeError } from "serialize-error";

import { CreateLoaderOptions, VolumeFileFormat, pathToFileType } from "../loaders/index.js";
import { ThreadableVolumeLoader } from "../loaders/IVolumeLoader.js";
import { RawArrayLoader } from "../loaders/RawArrayLoader.js";
import { TiffLoader } from "../loaders/TiffLoader.js";
import { JsonImageInfoLoader } from "../loaders/JsonImageInfoLoader.js";
import { OMEZarrLoader, type ChunkFetcher, type ChunkFetchCanceller } from "../loaders/OmeZarrLoader.js";
import type {
  WorkerMsgTypeGlobal,
  WorkerMsgTypeWithLoader,
  WorkerRequestPayload,
  WorkerResponse,
  WorkerResponsePayload,
} from "./types.js";
import { WorkerMsgType, WorkerResponseResult } from "./types.js";
import VolumeCache from "../VolumeCache.js";
import SubscribableRequestQueue from "../utils/SubscribableRequestQueue.js";

type StoredPromise<T extends WorkerMsgType> = {
  type: T;
  resolve: (value: WorkerResponsePayload<T>) => void;
  reject: (reason?: unknown) => void;
};

/**
 * Holds the worker and manages the request/response protocol defined in ./types.ts.
 * Converts `postMessage` calls into Promises.
 */
class SharedLoadWorkerHandle {
  private worker: Worker;
  private pendingRequests: (StoredPromise<WorkerMsgType> | undefined)[] = [];
  private workerOpen = true;

  constructor() {
    this.worker = new Worker(new URL("./VolumeLoadWorker", import.meta.url), { type: "module" });
    this.worker.onmessage = this.receiveMessage.bind(this);
  }

  private registerMessagePromise(prom: StoredPromise<WorkerMsgType>): number {
    for (const [i, pendingPromise] of this.pendingRequests.entries()) {
      if (pendingPromise === undefined) {
        this.pendingRequests[i] = prom;
        return i;
      }
    }
    return this.pendingRequests.push(prom) - 1;
  }

  get isOpen(): boolean {
    return this.workerOpen;
  }

  close(): void {
    this.worker.terminate();
    this.workerOpen = false;
  }

  // overload 1: global actions (no loader ID)
  sendMessage<T extends WorkerMsgTypeGlobal>(
    type: T,
    payload: WorkerRequestPayload<T>
  ): Promise<WorkerResponsePayload<T>>;
  // overload 2: loader-specific actions
  sendMessage<T extends WorkerMsgTypeWithLoader>(
    type: T,
    payload: WorkerRequestPayload<T>,
    loaderId: number
  ): Promise<WorkerResponsePayload<T>>;
  sendMessage<T extends WorkerMsgType>(
    type: T,
    payload: WorkerRequestPayload<T>,
    loaderId: T extends WorkerMsgTypeWithLoader ? number : void
  ): Promise<WorkerResponsePayload<T>> {
    let msgId = -1;
    const promise = new Promise<WorkerResponsePayload<T>>((resolve, reject) => {
      msgId = this.registerMessagePromise({ type, resolve, reject } as StoredPromise<WorkerMsgType>);
    });

    this.worker.postMessage({ msgId, type, payload, loaderId });
    return promise;
  }

  private receiveMessage<T extends WorkerMsgType>({ data }: MessageEvent<WorkerResponse<T>>): void {
    const prom = this.pendingRequests[data.msgId];
    if (prom === undefined) {
      throw new Error(`Received response for unknown message ID ${data.msgId}`);
    }
    if (prom.type !== data.type) {
      throw new Error(`Received response of type ${data.type} for message of type ${prom.type}`);
    }

    if (data.responseResult === WorkerResponseResult.ERROR) {
      prom.reject(deserializeError(data.payload));
    } else {
      prom.resolve(data.payload);
    }
    this.pendingRequests[data.msgId] = undefined;
  }
}

/**
 * A context in which volume loaders can be run. Uses a WebWorker for zarr chunk fetching/decompression,
 * while cache management and channel assembly happen on the main thread.
 *
 * # To use:
 * 1. Create a `VolumeLoaderContext` with the desired cache and queue configuration.
 * 2. Before creating a loader, await `onOpen` to ensure the worker is ready.
 * 3. Create a loader with `createLoader`.
 */
class VolumeLoaderContext {
  private workerHandle: SharedLoadWorkerHandle;
  private cache: VolumeCache;
  private requestQueue: SubscribableRequestQueue;
  private openPromise: Promise<void>;

  constructor(maxCacheSize?: number, maxActiveRequests?: number, maxLowPriorityRequests?: number) {
    this.workerHandle = new SharedLoadWorkerHandle();
    this.cache = new VolumeCache(maxCacheSize);
    this.requestQueue = new SubscribableRequestQueue(maxActiveRequests, maxLowPriorityRequests);
    this.openPromise = this.workerHandle.sendMessage(WorkerMsgType.INIT, {
      maxActiveRequests,
      maxLowPriorityRequests,
    });
  }

  /** Returns a `Promise` that resolves when the worker is ready. `await` it before trying to create a loader. */
  onOpen(): Promise<void> {
    if (!this.workerHandle.isOpen) {
      return Promise.reject("Worker is closed");
    }
    return this.openPromise;
  }

  /** Close this context and its worker. */
  close(): void {
    this.workerHandle.close();
  }

  /**
   * Create a new loader within this context.
   *
   * For OME-Zarr data, the worker opens the zarr metadata and the returned `OMEZarrLoader` drives loading on the
   * main thread, fetching individual chunks from the worker as needed.
   */
  async createLoader(
    path: string | string[],
    options?: Omit<CreateLoaderOptions, "cache" | "queue">
  ): Promise<ThreadableVolumeLoader> {
    const pathString = Array.isArray(path) ? path[0] : path;
    const fileType = options?.fileType || pathToFileType(pathString);

    if (fileType === VolumeFileFormat.TIFF) {
      const pathArray = Array.isArray(path) ? path : [path];
      return new TiffLoader(pathArray);
    } else if (fileType === VolumeFileFormat.DATA) {
      if (!options?.rawArrayOptions) {
        throw new Error("Failed to create loader: Must provide RawArrayOptions for RawArrayLoader");
      }
      return new RawArrayLoader(options.rawArrayOptions.data, options.rawArrayOptions.metadata);
    } else if (fileType === VolumeFileFormat.JSON) {
      return new JsonImageInfoLoader(path, this.cache);
    }

    // OME-Zarr: open on worker, create loader on main thread
    const urls = Array.isArray(path) ? path : [path];
    const scene = options?.scene ?? 0;
    const scenes = Array.isArray(scene) ? scene : [scene];

    const result = await this.workerHandle.sendMessage(WorkerMsgType.OPEN_ZARR, { urls, scenes });

    const fetchChunk: ChunkFetcher = (loaderId, sourceIndex, scaleLevel, coords, key, lowPriority) => {
      return this.workerHandle.sendMessage(
        WorkerMsgType.FETCH_CHUNK,
        { sourceIndex, scaleLevel, coords, key, lowPriority },
        loaderId
      );
    };

    const cancelFetches: ChunkFetchCanceller = (keys) => {
      this.workerHandle.sendMessage(WorkerMsgType.CANCEL_REQUESTS, { keys }, result.loaderId);
    };

    const loader = new OMEZarrLoader(
      result.loaderId,
      result.sources,
      this.cache,
      this.requestQueue,
      fetchChunk,
      cancelFetches,
      options?.fetchOptions,
      options?.fetchOptions?.priorityDirections?.slice()
    );

    return loader;
  }
}

export default VolumeLoaderContext;
