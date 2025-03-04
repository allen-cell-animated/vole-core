import { Array as ZarrArray, type Chunk, type DataType } from "@zarrita/core";
import type { AsyncReadable } from "@zarrita/storage";

import VolumeCache, { isChunk } from "../../VolumeCache.js";
import { pathIsToMetadata } from "./utils.js";
import type { CachingArrayOpts } from "./types.js";
import SubscribableRequestQueue from "../../utils/SubscribableRequestQueue.js";

type AsyncReadableExt<Opts> = AsyncReadable<Opts & CachingArrayOpts>;

export default function wrapArray<
  T extends DataType,
  Opts = unknown,
  Store extends AsyncReadable<Opts> = AsyncReadable<Opts>
>(
  array: ZarrArray<T, Store>,
  basePath: string,
  cache?: VolumeCache,
  queue?: SubscribableRequestQueue
): ZarrArray<T, AsyncReadableExt<Opts>> {
  const path = basePath.endsWith("/") ? basePath.slice(0, -1) : basePath;
  const keyBase = path + array.path + (array.path.endsWith("/") ? "" : "/");

  const getChunk = async (coords: number[], opts?: Parameters<AsyncReadableExt<Opts>["get"]>[1]): Promise<Chunk<T>> => {
    if (pathIsToMetadata(array.path)) {
      // TODO do we ever hit this...? or are we always getting actual chunks?
      console.log(array.path);
      return array.getChunk(coords, opts);
    }
    if (opts?.subscriber && opts.reportChunk) {
      opts.reportChunk(coords, opts.subscriber);
    }

    const fullKey = keyBase + coords.join(",");
    const cacheResult = cache?.get(fullKey);
    if (cacheResult && isChunk(cacheResult)) {
      return cacheResult;
    }

    let result: Chunk<T>;
    if (queue && opts?.subscriber) {
      result = await queue.addRequest(fullKey, opts?.subscriber, () => array.getChunk(coords, opts), opts.isPrefetch);
    } else {
      result = await array.getChunk(coords, opts);
    }

    cache?.insert(fullKey, result);
    return result;
  };

  return new Proxy(array, {
    get: (target, prop) => {
      if (prop === "getChunk") {
        return getChunk;
      }

      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#no_private_property_forwarding
      const value = target[prop];
      if (value instanceof Function) {
        return function (...args: unknown[]) {
          return value.apply(target, args);
        };
      }
      return value;
    },
  });
}
