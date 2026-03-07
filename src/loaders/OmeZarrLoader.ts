import { Box3, Vector3 } from "three";

import type { ImageInfo } from "../ImageInfo.js";
import type { VolumeDims } from "../VolumeDims.js";
import type { NumberType, TypedArray } from "../types.js";
import VolumeCache from "../VolumeCache.js";
import { getDataRange } from "../utils/num_utils.js";
import SubscribableRequestQueue from "../utils/SubscribableRequestQueue.js";
import {
  ThreadableVolumeLoader,
  LoadSpec,
  type RawChannelDataCallback,
  type LoadedVolumeInfo,
} from "./IVolumeLoader.js";
import {
  composeSubregion,
  computePackedAtlasDims,
  convertSubregionToPixels,
  pickLevelToLoad,
  unitNameToSymbol,
} from "./VolumeLoaderUtils.js";
import ChunkPrefetchIterator from "./zarr_utils/ChunkPrefetchIterator.js";
import { getScale, getSourceChannelMeta, orderByDimension, orderByTCZYX } from "./zarr_utils/utils.js";
import type { PrefetchDirection, SubscriberId, TCZYX, ZarrSource } from "./zarr_utils/types.js";
import { VolumeLoadError, VolumeLoadErrorType, wrapVolumeLoadError } from "./VolumeLoadError.js";
import type { ZarrSourceInfo, FetchChunkResponse } from "../workers/types.js";
import {
  computeChunkCoords,
  assembleChunks,
  chunkCacheKey,
  type ChannelSliceSpec,
  type ChunkData,
} from "./zarr_utils/ChunkAssembler.js";

const CHUNK_REQUEST_CANCEL_REASON = "chunk request cancelled";

/**
 * A function that fetches a single chunk from the worker. Provided by VolumeLoaderContext.
 */
export type ChunkFetcher = (
  loaderId: number,
  sourceIndex: number,
  scaleLevel: number,
  coords: number[],
  key: string,
  lowPriority?: boolean
) => Promise<FetchChunkResponse>;

/**
 * A function that cancels pending fetch requests on the worker by key.
 */
export type ChunkFetchCanceller = (keys: string[]) => void;

// returns the converted data and the original min and max values
function convertChannel(
  channelData: TypedArray<NumberType>,
  dtype: NumberType
): { data: TypedArray<NumberType>; dtype: NumberType; min: number; max: number } {
  const [min, max] = getDataRange(channelData as ArrayLike<number>);

  if (dtype === "float64") {
    const f32 = new Float32Array(channelData.length);
    for (let i = 0; i < channelData.length; i++) {
      f32[i] = (channelData as Float64Array)[i];
    }
    return { data: f32, dtype: "float32", min, max };
  }

  return { data: channelData, dtype, min, max };
}

export type ZarrLoaderFetchOptions = {
  /** The max. number of requests the loader can issue at a time. Ignored if the constructor also receives a queue. */
  concurrencyLimit?: number;
  /**
   * The max. number of *prefetch* requests the loader can issue at a time. Set lower than `concurrencyLimit` to ensure
   * that prefetching leaves room in the queue for actual loads. Ignored if the constructor also receives a queue.
   */
  prefetchConcurrencyLimit?: number;
  /**
   * The max. number of chunks to prefetch outward in either direction. E.g. if a load requests chunks with z coords 3
   * and 4 and `maxPrefetchDistance` in z is 2, the loader will prefetch similar chunks with z coords 1, 2, 5, and 6
   * (or until it hits `maxPrefetchChunks`). Ordered TZYX.
   */
  maxPrefetchDistance: [number, number, number, number];
  /** The max. number of total chunks that can be prefetched after any load. */
  maxPrefetchChunks: number;
  /** The initial directions to prioritize when prefetching */
  priorityDirections?: PrefetchDirection[];
  /** only use priority directions */
  onlyPriorityDirections?: boolean;
};

type ZarrChunkFetchInfo = {
  sourceIdx: number;
  coords: number[];
};

const DEFAULT_FETCH_OPTIONS: ZarrLoaderFetchOptions = {
  maxPrefetchDistance: [5, 5, 5, 5] as [number, number, number, number],
  maxPrefetchChunks: 30,
};

/**
 * An OME-Zarr loader that runs entirely on the main thread.
 *
 * It uses metadata from a `ZarrOpenResult` (obtained by the worker via `OPEN_ZARR`) and fetches individual
 * decompressed chunks from the worker via a `ChunkFetcher` callback. Chunk assembly (stitching chunks into
 * a contiguous channel array) and caching happen on the main thread.
 */
class OMEZarrLoader extends ThreadableVolumeLoader {
  /** The ID of the subscriber responsible for "actual loads" (non-prefetch requests) */
  private loadSubscriber: SubscriberId | undefined;
  /** The ID of the subscriber responsible for prefetches */
  private prefetchSubscriber: SubscriberId | undefined;

  private maxExtent?: Box3;
  private syncChannels = false;

  constructor(
    /** Worker-assigned loader ID for FETCH_CHUNK calls */
    private readonly loaderId: number,
    /** Per-source metadata from ZarrOpenResult */
    private readonly sources: ZarrSourceInfo[],
    /** Main-thread cache for decompressed chunk data */
    private readonly cache: VolumeCache,
    /** Main-thread request queue for subscriber/cancellation management */
    private readonly requestQueue: SubscribableRequestQueue,
    /** Fetches a single chunk from the worker */
    private readonly fetchChunk: ChunkFetcher,
    /** Cancels pending fetch requests on the worker */
    private readonly cancelFetches: ChunkFetchCanceller,
    /** Options to configure (pre)fetching behavior */
    private fetchOptions: ZarrLoaderFetchOptions = DEFAULT_FETCH_OPTIONS,
    /** Directions to prioritize when prefetching */
    private priorityDirections: PrefetchDirection[] = []
  ) {
    super();
  }

  // ── Helpers ─────────────────────────────────────────────────────────────

  private getUnitSymbols(): [string, string] {
    const source = this.sources[0];
    const xi = source.axesTCZYX[4];
    const spaceUnitName = source.multiscaleMetadata.axes[xi].unit;
    const spaceUnitSymbol = unitNameToSymbol(spaceUnitName) || spaceUnitName || "";

    const ti = source.axesTCZYX[0];
    const timeUnitName = ti > -1 ? source.multiscaleMetadata.axes[ti].unit : undefined;
    const timeUnitSymbol = unitNameToSymbol(timeUnitName) || timeUnitName || "";

    return [spaceUnitSymbol, timeUnitSymbol];
  }

  private getLevelShapesZYX(): [number, number, number][] {
    const source = this.sources[0];
    const [z, y, x] = source.axesTCZYX.slice(-3);
    return source.scaleLevels.map(({ shape }) => [z === -1 ? 1 : shape[z], shape[y], shape[x]]);
  }

  private getScaleForLevel(level: number): TCZYX<number> {
    return getScale(this.sources[0].multiscaleMetadata.datasets[level], this.sources[0].axesTCZYX);
  }

  private orderByDimensionForSource<T>(valsTCZYX: TCZYX<T>, sourceIdx = 0): T[] {
    return orderByDimension(valsTCZYX, this.sources[sourceIdx].axesTCZYX);
  }

  private orderByTCZYXForSource<T>(valsDimension: T[], defaultValue: T, sourceIdx = 0): TCZYX<T> {
    return orderByTCZYX(valsDimension, this.sources[sourceIdx].axesTCZYX, defaultValue);
  }

  /**
   * Convert ZarrSourceInfo to a minimal ZarrSource-shaped object for getSourceChannelMeta.
   */
  private toChannelMetaSource(src: ZarrSourceInfo): ZarrSource {
    return {
      scaleLevels: src.scaleLevels.map((lvl) => ({ shape: lvl.shape })) as ZarrSource["scaleLevels"],
      axesTCZYX: src.axesTCZYX,
      multiscaleMetadata: src.multiscaleMetadata,
      omeroMetadata: src.omeroMetadata,
      channelOffset: src.channelOffset,
    };
  }

  private matchChannelToSource(absoluteChannelIndex: number): { sourceIndex: number; channelIndexInSource: number } {
    const lastSrcIdx = this.sources.length - 1;
    const lastSrc = this.sources[lastSrcIdx];
    const cIdx = lastSrc.axesTCZYX[1];
    const lastSrcNumChannels = cIdx > -1 ? lastSrc.scaleLevels[0].shape[cIdx] : 1;

    const maxChannelIndex = lastSrc.channelOffset + lastSrcNumChannels;
    if (absoluteChannelIndex > maxChannelIndex) {
      throw new VolumeLoadError(
        `Volume channel index ${absoluteChannelIndex} out of range (${maxChannelIndex} channels available)`,
        { type: VolumeLoadErrorType.INVALID_METADATA }
      );
    }

    const firstGreaterIdx = this.sources.findIndex((src) => src.channelOffset > absoluteChannelIndex);
    const sourceIndex = firstGreaterIdx === -1 ? lastSrcIdx : firstGreaterIdx - 1;
    const channelIndexInSource = absoluteChannelIndex - this.sources[sourceIndex].channelOffset;
    return { sourceIndex, channelIndexInSource };
  }

  // ── Public API ──────────────────────────────────────────────────────────

  setPrefetchPriority(directions: PrefetchDirection[]): void {
    this.priorityDirections = directions;
  }

  syncMultichannelLoading(sync: boolean): void {
    this.syncChannels = sync;
  }

  updateFetchOptions(options: Partial<ZarrLoaderFetchOptions>): void {
    this.fetchOptions = { ...this.fetchOptions, ...options };
  }

  loadDims(loadSpec: LoadSpec): Promise<VolumeDims[]> {
    const [spaceUnit, timeUnit] = this.getUnitSymbols();
    const maxExtent = this.maxExtent ?? new Box3(new Vector3(0, 0, 0), new Vector3(1, 1, 1));
    const subregion = composeSubregion(loadSpec.subregion, maxExtent);
    const regionSize = subregion.getSize(new Vector3());
    const regionArr = [1, 1, regionSize.z, regionSize.y, regionSize.x];

    const result = this.sources[0].scaleLevels.map((level, i) => {
      const scale = this.getScaleForLevel(i);
      const dims: VolumeDims = {
        spaceUnit,
        timeUnit,
        shape: this.orderByTCZYXForSource(level.shape, 1).map((val, idx) =>
          Math.max(Math.ceil(val * regionArr[idx]), 1)
        ) as TCZYX<number>,
        spacing: this.orderByTCZYXForSource(scale, 1),
        dataType: level.dtype,
      };
      return dims;
    });

    return Promise.resolve(result);
  }

  createImageInfo(loadSpec: LoadSpec): Promise<LoadedVolumeInfo> {
    const source0 = this.sources[0];
    const [t, , z, y, x] = source0.axesTCZYX;
    const hasT = t > -1;
    const hasZ = z > -1;

    const levelToLoad = pickLevelToLoad(loadSpec, this.getLevelShapesZYX());
    const shapeLv = source0.scaleLevels[levelToLoad].shape;

    const [spatialUnit, timeUnit] = this.getUnitSymbols();

    const numChannelsPerSource: number[] = [];
    for (let i = 0; i < this.sources.length; i++) {
      const source = this.sources[i];
      const cIndex = source.axesTCZYX[1];
      const sourceChannelCount = cIndex > -1 ? source.scaleLevels[levelToLoad].shape[cIndex] : 1;
      numChannelsPerSource.push(sourceChannelCount);
    }

    let times = 1;
    if (hasT) {
      times = shapeLv[t];
      for (let i = 0; i < this.sources.length; i++) {
        const shape = this.sources[i].scaleLevels[levelToLoad].shape;
        const tindex = this.sources[i].axesTCZYX[0];
        if (shape[tindex] < times) {
          console.warn("The number of time points is not consistent across sources: ", shape[tindex], times);
          times = shape[tindex];
        }
      }
    }

    if (!this.maxExtent) {
      this.maxExtent = loadSpec.subregion.clone();
    }

    const pxDimsLv = convertSubregionToPixels(
      loadSpec.subregion,
      new Vector3(shapeLv[x], shapeLv[y], hasZ ? shapeLv[z] : 1)
    );
    const pxSizeLv = pxDimsLv.getSize(new Vector3());

    const atlasTileDims = computePackedAtlasDims(pxSizeLv.z, pxSizeLv.x, pxSizeLv.y);

    const channelNamesMap = new Map<string, number>();
    const channelNames: string[] = [];
    const channelColors: ([number, number, number] | undefined)[] = [];
    for (const src of this.sources) {
      const { names, colors } = getSourceChannelMeta(this.toChannelMetaSource(src));

      const resolvedNames = names.map((channelName) => {
        const numMatchingChannels = channelNamesMap.get(channelName);
        if (numMatchingChannels !== undefined) {
          channelNamesMap.set(channelName, numMatchingChannels + 1);
          return `${channelName} (${numMatchingChannels})`;
        } else {
          channelNamesMap.set(channelName, 1);
          return channelName;
        }
      });

      channelNames.push(...resolvedNames);
      channelColors.push(...colors);
    }

    const alldims: VolumeDims[] = source0.scaleLevels.map((level, i) => ({
      spaceUnit: spatialUnit,
      timeUnit,
      shape: this.orderByTCZYXForSource(level.shape, 1),
      spacing: this.getScaleForLevel(i),
      dataType: level.dtype,
    }));

    const imgdata: ImageInfo = {
      name: source0.omeroMetadata?.name,
      atlasTileDims: [atlasTileDims.x, atlasTileDims.y],
      subregionSize: [pxSizeLv.x, pxSizeLv.y, pxSizeLv.z],
      subregionOffset: [0, 0, 0],
      numChannelsPerSource,
      channelNames,
      channelColors,
      multiscaleLevel: levelToLoad,
      multiscaleLevelDims: alldims,
      transform: {
        translation: [0, 0, 0],
        rotation: [0, 0, 0],
        scale: [1, 1, 1],
      },
    };

    const fullExtentLoadSpec: LoadSpec = {
      ...loadSpec,
      subregion: new Box3(new Vector3(0, 0, 0), new Vector3(1, 1, 1)),
    };

    return Promise.resolve({ imageInfo: imgdata, loadSpec: fullExtentLoadSpec });
  }

  // ── Chunk fetching with cache ───────────────────────────────────────────

  /**
   * Attempt to get a chunk directly from the cache, bypassing the request queue.
   * Returns the ChunkData if cached, or undefined if not.
   */
  private tryGetCachedChunk(
    sourceIndex: number,
    scaleLevel: number,
    coords: number[],
    key: string
  ): ChunkData | undefined {
    const cached = this.cache.get(key);
    if (!cached) {
      return undefined;
    }
    const level = this.sources[sourceIndex].scaleLevels[scaleLevel];
    const chunkShape = coords.map((c, i) => Math.min(level.chunks[i], level.shape[i] - c * level.chunks[i]));
    return { data: cached as ArrayBuffer, dtype: level.dtype, shape: chunkShape };
  }

  /**
   * Fetch a single chunk from the worker and cache the result.
   * The caller should check the cache first via `tryGetCachedChunk` before queuing this.
   */
  private async fetchAndCacheChunk(
    sourceIndex: number,
    scaleLevel: number,
    coords: number[],
    key: string,
    lowPriority?: boolean
  ): Promise<ChunkData> {
    // Double-check cache in case data arrived while this request was queued
    const hit = this.tryGetCachedChunk(sourceIndex, scaleLevel, coords, key);
    if (hit) {
      return hit;
    }

    // Cache miss — fetch from worker
    const response = await this.fetchChunk(this.loaderId, sourceIndex, scaleLevel, coords, key, lowPriority);

    const chunkData: ChunkData = {
      data: response.data,
      dtype: response.dtype,
      shape: response.shape,
    };

    // Store in cache. We use the ArrayBuffer for size accounting.
    this.cache.insert(key, response.data);

    return chunkData;
  }

  // ── Prefetch ────────────────────────────────────────────────────────────

  private beginPrefetch(loadedChunkInfos: ZarrChunkFetchInfo[], scaleLevel: number): void {
    if (loadedChunkInfos.length === 0) {
      return;
    }

    const chunkCoords = loadedChunkInfos.map(({ sourceIdx, coords }) => {
      const sourceCoords = this.orderByTCZYXForSource(coords, 0, sourceIdx);
      sourceCoords[1] += this.sources[sourceIdx].channelOffset;
      return sourceCoords;
    });

    // Get number of chunks per dimension in every source
    const chunkDimsTCZYX = this.sources.map((source, sourceIndex) => {
      const level = source.scaleLevels[scaleLevel];
      const chunkDimsUnordered = level.shape.map((dim, idx) => Math.ceil(dim / level.chunks[idx]));
      return this.orderByTCZYXForSource(chunkDimsUnordered, 1, sourceIndex);
    });

    const prefetchIterator = new ChunkPrefetchIterator(
      chunkCoords,
      this.fetchOptions.maxPrefetchDistance,
      chunkDimsTCZYX,
      this.priorityDirections,
      this.fetchOptions.onlyPriorityDirections
    );

    const subscriber = this.requestQueue.addSubscriber();
    let prefetchCount = 0;

    for (const chunk of prefetchIterator) {
      if (prefetchCount >= this.fetchOptions.maxPrefetchChunks) {
        break;
      }

      const { sourceIndex, channelIndexInSource } = this.matchChannelToSource(chunk[1]);
      chunk[1] = channelIndexInSource;
      const nativeCoords = this.orderByDimensionForSource(chunk, sourceIndex);

      const source = this.sources[sourceIndex];
      const levelInfo = source.scaleLevels[scaleLevel];
      const key = chunkCacheKey(source.url, levelInfo.datasetPath, nativeCoords);

      // Only prefetch if not already cached
      if (!this.cache.get(key)) {
        this.requestQueue
          .addRequest(
            key,
            subscriber,
            () => this.fetchAndCacheChunk(sourceIndex, scaleLevel, nativeCoords, key, true),
            true // low priority
          )
          .catch(
            wrapVolumeLoadError(
              `Unable to prefetch chunk with coords ${nativeCoords.join(", ")}`,
              VolumeLoadErrorType.LOAD_DATA_FAILED,
              CHUNK_REQUEST_CANCEL_REASON
            )
          );
      }

      prefetchCount++;
    }

    // Cancel old prefetch subscriber
    if (this.prefetchSubscriber !== undefined) {
      this.requestQueue.removeSubscriber(this.prefetchSubscriber, CHUNK_REQUEST_CANCEL_REASON);
    }
    this.prefetchSubscriber = subscriber;
  }

  // ── Image info update for a specific load ───────────────────────────────

  private updateImageInfoForLoad(imageInfo: ImageInfo, loadSpec: LoadSpec): ImageInfo {
    const maxExtent = this.maxExtent ?? new Box3(new Vector3(0, 0, 0), new Vector3(1, 1, 1));
    const subregion = composeSubregion(loadSpec.subregion, maxExtent);

    const multiscaleLevel = pickLevelToLoad({ ...loadSpec, subregion }, this.getLevelShapesZYX());
    const array0Shape = this.sources[0].scaleLevels[multiscaleLevel].shape;

    const [z, y, x] = this.sources[0].axesTCZYX.slice(2);
    const regionPx = convertSubregionToPixels(
      subregion,
      new Vector3(array0Shape[x], array0Shape[y], z === -1 ? 1 : array0Shape[z])
    );

    const subregionSize = regionPx.getSize(new Vector3());
    const atlasTileDims = computePackedAtlasDims(subregionSize.z, subregionSize.x, subregionSize.y);

    return {
      ...imageInfo,
      atlasTileDims: [atlasTileDims.x, atlasTileDims.y],
      subregionSize: [subregionSize.x, subregionSize.y, subregionSize.z],
      subregionOffset: [regionPx.min.x, regionPx.min.y, regionPx.min.z],
      multiscaleLevel,
    };
  }

  // ── Main load method ────────────────────────────────────────────────────

  async loadRawChannelData(
    imageInfo: ImageInfo,
    loadSpec: LoadSpec,
    onUpdateMetadata: (imageInfo: ImageInfo) => void,
    onData: RawChannelDataCallback
  ): Promise<void> {
    const syncChannels = this.syncChannels;

    const updatedImageInfo = this.updateImageInfoForLoad(imageInfo, loadSpec);
    onUpdateMetadata(updatedImageInfo);
    const { numChannelsPerSource, multiscaleLevel } = updatedImageInfo;
    const combinedNumChannels = numChannelsPerSource.reduce((a, b) => a + b, 0);
    const channelIndexes = loadSpec.channels ?? Array.from({ length: combinedNumChannels }, (_, i) => i);

    const subscriber = this.requestQueue.addSubscriber();

    // Track all chunk infos for prefetch seeding
    const allChunkInfos: ZarrChunkFetchInfo[] = [];

    const resultChannelIndices: number[] = [];
    const resultChannelData: TypedArray<NumberType>[] = [];
    const resultChannelDtype: NumberType[] = [];
    const resultChannelRanges: [number, number][] = [];

    const channelPromises = channelIndexes.map(async (ch) => {
      const min = new Vector3(...updatedImageInfo.subregionOffset);
      const max = min.clone().add(new Vector3(...updatedImageInfo.subregionSize));
      const { sourceIndex: sourceIdx, channelIndexInSource: sourceCh } = this.matchChannelToSource(ch);

      const source = this.sources[sourceIdx];
      const levelInfo = source.scaleLevels[multiscaleLevel];
      const zIdx = source.axesTCZYX[2];

      // Build channel slice spec
      const spec: ChannelSliceSpec = {
        t: loadSpec.time,
        c: sourceCh,
        z: zIdx >= 0 ? [min.z, max.z] : 0,
        y: [min.y, max.y],
        x: [min.x, max.x],
      };

      // Compute needed chunk coordinates
      const coords = computeChunkCoords(spec, levelInfo.shape, levelInfo.chunks, source.axesTCZYX);

      // Collect chunk infos for prefetch
      for (const c of coords) {
        allChunkInfos.push({ sourceIdx, coords: c });
      }

      // Fetch all chunks (cache-first, then worker)
      const chunkDataMap = new Map<string, ChunkData>();
      const fetchPromises = coords.map(async (chunkCoord) => {
        const key = chunkCacheKey(source.url, levelInfo.datasetPath, chunkCoord);
        const coordKey = chunkCoord.join(",");

        // Check cache before entering the request queue so cache hits
        // bypass the queue entirely and never occupy a queue slot.
        const hit = this.tryGetCachedChunk(sourceIdx, multiscaleLevel, chunkCoord, key);
        if (hit) {
          chunkDataMap.set(coordKey, hit);
          return;
        }

        try {
          const chunkData = await this.requestQueue.addRequest(
            key,
            subscriber,
            () => this.fetchAndCacheChunk(sourceIdx, multiscaleLevel, chunkCoord, key),
            false
          );
          chunkDataMap.set(coordKey, chunkData);
        } catch (e) {
          // Re-throw non-cancellation errors
          if (e !== CHUNK_REQUEST_CANCEL_REASON) {
            throw e;
          }
        }
      });

      await Promise.all(fetchPromises);

      // If all chunks were cancelled, skip assembly
      if (chunkDataMap.size === 0) {
        return;
      }

      // Assemble chunks into a contiguous typed array
      const assembled = assembleChunks(
        spec,
        chunkDataMap,
        coords,
        levelInfo.shape,
        levelInfo.chunks,
        source.axesTCZYX,
        levelInfo.dtype
      );

      const converted = convertChannel(assembled as TypedArray<NumberType>, levelInfo.dtype as NumberType);
      if (syncChannels) {
        resultChannelDtype.push(converted.dtype);
        resultChannelData.push(converted.data);
        resultChannelIndices.push(ch);
        resultChannelRanges.push([converted.min, converted.max]);
      } else {
        onData([ch], [converted.dtype], [converted.data], [[converted.min, converted.max]]);
      }
    });

    // Cancel any in-flight requests from previous loads
    if (this.loadSubscriber !== undefined) {
      this.requestQueue.removeSubscriber(this.loadSubscriber, CHUNK_REQUEST_CANCEL_REASON);
    }
    this.loadSubscriber = subscriber;

    this.beginPrefetch(allChunkInfos, multiscaleLevel);

    await Promise.all(channelPromises);

    if (syncChannels) {
      onData(resultChannelIndices, resultChannelDtype, resultChannelData, resultChannelRanges);
    }
    this.requestQueue.removeSubscriber(subscriber, CHUNK_REQUEST_CANCEL_REASON);
  }
}

export { OMEZarrLoader };
