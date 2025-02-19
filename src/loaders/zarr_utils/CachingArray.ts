import { Array, ArrayMetadata, Chunk, DataType } from "@zarrita/core";
import VolumeCache, { CacheData } from "../../VolumeCache";
import { AbsolutePath, Readable } from "@zarrita/storage";

const ZARR_EXTS = [".zarray", ".zgroup", ".zattrs", "zarr.json"];

const isChunk = (data: CacheData): data is Chunk<DataType> => (data as Chunk<DataType>).data !== undefined;

export default class CachingArray<T extends DataType, Store extends Readable = Readable> extends Array<T, Store> {
  constructor(store: Store, path: AbsolutePath, metadata: ArrayMetadata<T>, private cache?: VolumeCache) {
    super(store, path, metadata);
  }

  async getChunk(coords: number[], opts?: Parameters<Store["get"]>[1]): Promise<Chunk<T>> {
    if (!this.cache || ZARR_EXTS.some((s) => this.path.endsWith(s))) {
      return super.getChunk(coords, opts);
    }

    const trailingSlash = this.path.endsWith("/") ? "" : "/";
    const fullKey = this.path + trailingSlash + coords.join(",");
    const cacheResult = this.cache.get(fullKey);
    if (cacheResult && isChunk(cacheResult)) {
      return cacheResult;
    }

    const result = await super.getChunk(coords, opts);
    this.cache.insert(fullKey, result);
    return result;
  }
}
