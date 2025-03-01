import { Array as ZarrArray, Chunk, DataType } from "@zarrita/core";
import { Readable } from "@zarrita/storage";

import VolumeCache, { isChunk } from "../../VolumeCache";
import { pathIsToMetadata } from "./utils";

export default function cachingArray<T extends DataType, Store extends Readable = Readable>(
  array: ZarrArray<T, Store>,
  cache: VolumeCache
): ZarrArray<T, Store> {
  const getChunk = async (coords: number[], opts?: Parameters<Store["get"]>[1]): Promise<Chunk<T>> => {
    if (pathIsToMetadata(array.path)) {
      return array.getChunk(coords, opts);
    }

    const trailingSlash = array.path.endsWith("/") ? "" : "/";
    const fullKey = array.path + trailingSlash + coords.join(",");
    const cacheResult = cache.get(fullKey);
    if (cacheResult && isChunk(cacheResult)) {
      return cacheResult;
    }

    const result = await array.getChunk(coords, opts);
    cache.insert(fullKey, result);
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
