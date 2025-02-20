import { Array as ZarrArray, Chunk, DataType } from "@zarrita/core";
import VolumeCache, { CacheData } from "../../VolumeCache";
import { Readable } from "@zarrita/storage";
import { pathIsToMetadata } from "./utils";

const isChunk = (data: CacheData): data is Chunk<DataType> => (data as Chunk<DataType>).data !== undefined;

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
    get: (target, prop, reciever) => (prop === "getChunk" ? getChunk : Reflect.get(target, prop, reciever)),
  });
}
