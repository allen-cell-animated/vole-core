import type { NumberDataType } from "zarrita";
import type { TCZYX } from "./types.js";

/**
 * A slice range [start, end) along one dimension, or a single integer index.
 */
export type SliceSpec = number | [number, number];

/**
 * Describes the region to load from one channel of a zarr array: fixed T and C values plus ZYX ranges.
 */
export type ChannelSliceSpec = {
  /** Time index */
  t: number;
  /** Channel index (within a single source) */
  c: number;
  /** Z range [start, end) or single index. If the Z dimension doesn't exist, use 0. */
  z: SliceSpec;
  /** Y range [start, end) */
  y: SliceSpec;
  /** X range [start, end) */
  x: SliceSpec;
};

/**
 * The data we receive for a single chunk from the worker.
 */
export type ChunkData = {
  /** Flat typed array data as an ArrayBuffer */
  data: ArrayBuffer;
  /** Data type */
  dtype: NumberDataType;
  /** Actual shape of this chunk (may differ from nominal chunk shape at array boundaries) */
  shape: number[];
};

// ── Typed array construction ────────────────────────────────────────────────

function createTypedArray(dtype: NumberDataType, buffer: ArrayBuffer): TypedArrayForDtype {
  switch (dtype) {
    case "int8":
      return new Int8Array(buffer);
    case "int16":
      return new Int16Array(buffer);
    case "int32":
      return new Int32Array(buffer);
    case "uint8":
      return new Uint8Array(buffer);
    case "uint16":
      return new Uint16Array(buffer);
    case "uint32":
      return new Uint32Array(buffer);
    case "float32":
      return new Float32Array(buffer);
    case "float64":
      return new Float64Array(buffer);
    default:
      throw new Error(`Unsupported dtype: ${dtype}`);
  }
}

function createTypedArrayOfLength(dtype: NumberDataType, length: number): TypedArrayForDtype {
  switch (dtype) {
    case "int8":
      return new Int8Array(length);
    case "int16":
      return new Int16Array(length);
    case "int32":
      return new Int32Array(length);
    case "uint8":
      return new Uint8Array(length);
    case "uint16":
      return new Uint16Array(length);
    case "uint32":
      return new Uint32Array(length);
    case "float32":
      return new Float32Array(length);
    case "float64":
      return new Float64Array(length);
    default:
      throw new Error(`Unsupported dtype: ${dtype}`);
  }
}

type TypedArrayForDtype =
  | Int8Array
  | Int16Array
  | Int32Array
  | Uint8Array
  | Uint16Array
  | Uint32Array
  | Float32Array
  | Float64Array;

// ── Helper: spec range extraction ───────────────────────────────────────────

function sliceStart(s: SliceSpec): number {
  return Array.isArray(s) ? s[0] : s;
}
function sliceEnd(s: SliceSpec): number {
  return Array.isArray(s) ? s[1] : s + 1;
}
function sliceSize(s: SliceSpec): number {
  return sliceEnd(s) - sliceStart(s);
}

// ── Compute which chunks are needed ─────────────────────────────────────────

/**
 * Given a `ChannelSliceSpec` and array/chunk shape in native dimension order,
 * compute all chunk coordinates needed to cover the requested region.
 *
 * @param spec The region to load (in TCZYX semantics)
 * @param arrayShape Shape of the zarr array (native dimension order)
 * @param chunkShape Chunk shape of the zarr array (native dimension order)
 * @param axesTCZYX Mapping from TCZYX to native dimension indices. -1 means absent.
 * @returns An array of chunk coordinate arrays (each in native dimension order)
 */
export function computeChunkCoords(
  spec: ChannelSliceSpec,
  arrayShape: number[],
  chunkShape: number[],
  axesTCZYX: TCZYX<number>
): number[][] {
  const [tIdx, cIdx, zIdx, yIdx, xIdx] = axesTCZYX;
  const ndim = arrayShape.length;

  // Build per-dimension chunk ranges
  const dimChunkRanges: { start: number; end: number }[] = new Array(ndim);
  for (let d = 0; d < ndim; d++) {
    dimChunkRanges[d] = { start: 0, end: 1 };
  }

  // Map TCZYX spec to native dimensions
  const setChunkRange = (dimIdx: number, s: SliceSpec) => {
    if (dimIdx < 0) return;
    const cs = chunkShape[dimIdx];
    const start = Math.floor(sliceStart(s) / cs);
    const end = Math.ceil(sliceEnd(s) / cs);
    dimChunkRanges[dimIdx] = { start, end };
  };

  if (tIdx >= 0) setChunkRange(tIdx, spec.t);
  if (cIdx >= 0) setChunkRange(cIdx, spec.c);
  setChunkRange(zIdx, spec.z);
  setChunkRange(yIdx, spec.y);
  setChunkRange(xIdx, spec.x);

  // Cartesian product of all dimension ranges
  const coords: number[][] = [];
  const current = new Array(ndim).fill(0);

  function enumerate(dim: number): void {
    if (dim === ndim) {
      coords.push(current.slice());
      return;
    }
    const { start, end } = dimChunkRanges[dim];
    for (let i = start; i < end; i++) {
      current[dim] = i;
      enumerate(dim + 1);
    }
  }
  enumerate(0);

  return coords;
}

/**
 * Construct a cache key for a chunk, matching the format used by the existing wrapArray/VolumeCache system:
 * `"{url}{arrayPath}/{coords_comma_separated}"`
 */
export function chunkCacheKey(url: string, datasetPath: string, coords: number[]): string {
  const base = url.endsWith("/") ? url.slice(0, -1) : url;
  const sep = datasetPath.startsWith("/") ? "" : "/";
  return `${base}${sep}${datasetPath}/${coords.join(",")}`;
}

// ── Assemble chunks into a contiguous output ────────────────────────────────

/**
 * Stitches fetched chunks into a single contiguous typed array covering the requested region.
 *
 * @param spec The region that was loaded (TCZYX semantics)
 * @param chunkDataMap Map from chunk coordinate key (comma-separated) to ChunkData
 * @param chunkCoords All chunk coordinates (native dimension order) that were fetched
 * @param arrayShape Full array shape (native dimension order)
 * @param chunkShape Nominal chunk shape (native dimension order)
 * @param axesTCZYX Dimension mapping
 * @param dtype Data type of the output
 * @returns A contiguous typed array for the requested region (ZYX C-order)
 */
export function assembleChunks(
  spec: ChannelSliceSpec,
  chunkDataMap: Map<string, ChunkData>,
  chunkCoords: number[][],
  arrayShape: number[],
  chunkShape: number[],
  axesTCZYX: TCZYX<number>,
  dtype: NumberDataType
): TypedArrayForDtype {
  // Output dimensions (just ZYX)
  const outZ = sliceSize(spec.z);
  const outY = sliceSize(spec.y);
  const outX = sliceSize(spec.x);
  const outSize = outZ * outY * outX;

  // Fast path: single chunk that exactly covers the output
  if (chunkCoords.length === 1) {
    const key = chunkCoords[0].join(",");
    const chunk = chunkDataMap.get(key);
    if (!chunk) {
      throw new Error(`Missing chunk data for coords ${key}`);
    }

    const chunkArr = createTypedArray(chunk.dtype, chunk.data);

    // If the chunk covers exactly the requested region, we might be able to return a slice directly
    if (chunkArr.length === outSize) {
      return chunkArr;
    }

    // Otherwise, the chunk is larger and we need to extract the subregion
    const output = createTypedArrayOfLength(dtype, outSize);
    copyChunkRegion(output, chunkArr, spec, chunkCoords[0], chunk.shape, arrayShape, chunkShape, axesTCZYX);
    return output;
  }

  // General case: multiple chunks
  const output = createTypedArrayOfLength(dtype, outSize);

  for (const coords of chunkCoords) {
    const key = coords.join(",");
    const chunk = chunkDataMap.get(key);
    if (!chunk) {
      throw new Error(`Missing chunk data for coords ${key}`);
    }
    const chunkArr = createTypedArray(chunk.dtype, chunk.data);
    copyChunkRegion(output, chunkArr, spec, coords, chunk.shape, arrayShape, chunkShape, axesTCZYX);
  }

  return output;
}

/**
 * Copy the overlapping region of one chunk into the output array.
 *
 * Both arrays are in C-order (row-major). The output is always in ZYX order.
 * The chunk data is in the array's native dimension order.
 */
function copyChunkRegion(
  output: TypedArrayForDtype,
  chunkData: TypedArrayForDtype,
  spec: ChannelSliceSpec,
  chunkCoords: number[],
  chunkActualShape: number[],
  arrayShape: number[],
  chunkNominalShape: number[],
  axesTCZYX: TCZYX<number>
): void {
  const [tIdx, cIdx, zIdx, yIdx, xIdx] = axesTCZYX;

  // The region requested in pixel coords
  const reqZStart = sliceStart(spec.z);
  const reqYStart = sliceStart(spec.y);
  const reqXStart = sliceStart(spec.x);
  const outZ = sliceSize(spec.z);
  const outY = sliceSize(spec.y);
  const outX = sliceSize(spec.x);

  // Where this chunk starts in array pixel coords (per TCZYX dimension mapped to native)
  const chunkPixelStart = (dimIdx: number): number =>
    dimIdx < 0 ? 0 : chunkCoords[dimIdx] * chunkNominalShape[dimIdx];

  const chunkZStart = chunkPixelStart(zIdx);
  const chunkYStart = chunkPixelStart(yIdx);
  const chunkXStart = chunkPixelStart(xIdx);

  // Actual size of this chunk in each spatial dimension
  const chunkZSize = zIdx >= 0 ? chunkActualShape[zIdx] : 1;
  const chunkYSize = chunkActualShape[yIdx];
  const chunkXSize = chunkActualShape[xIdx];

  // Overlap between chunk and requested region
  const overlapZStart = Math.max(reqZStart, chunkZStart);
  const overlapYStart = Math.max(reqYStart, chunkYStart);
  const overlapXStart = Math.max(reqXStart, chunkXStart);
  const overlapZEnd = Math.min(reqZStart + outZ, chunkZStart + chunkZSize);
  const overlapYEnd = Math.min(reqYStart + outY, chunkYStart + chunkYSize);
  const overlapXEnd = Math.min(reqXStart + outX, chunkXStart + chunkXSize);

  if (overlapZEnd <= overlapZStart || overlapYEnd <= overlapYStart || overlapXEnd <= overlapXStart) {
    return; // No overlap
  }

  // Compute strides for the chunk's native dimension order
  // Chunk data is stored in C-order of the native dimensions
  const ndim = chunkActualShape.length;
  const chunkStrides = new Array(ndim);
  chunkStrides[ndim - 1] = 1;
  for (let d = ndim - 2; d >= 0; d--) {
    chunkStrides[d] = chunkStrides[d + 1] * chunkActualShape[d + 1];
  }

  // Output strides (ZYX C-order)
  const outStrideZ = outY * outX;
  const outStrideY = outX;

  // Chunk strides for spatial dimensions
  const chunkStrideZ = zIdx >= 0 ? chunkStrides[zIdx] : 0;
  const chunkStrideY = chunkStrides[yIdx];
  const chunkStrideX = chunkStrides[xIdx];

  // Base offset in chunk for T and C dimensions
  let chunkBaseOffset = 0;
  if (tIdx >= 0) {
    chunkBaseOffset += (spec.t - chunkPixelStart(tIdx)) * chunkStrides[tIdx];
  }
  if (cIdx >= 0) {
    chunkBaseOffset += (spec.c - chunkPixelStart(cIdx)) * chunkStrides[cIdx];
  }

  // Copy row-by-row (contiguous along X for maximum efficiency)
  const rowLen = overlapXEnd - overlapXStart;
  for (let iz = overlapZStart; iz < overlapZEnd; iz++) {
    for (let iy = overlapYStart; iy < overlapYEnd; iy++) {
      const srcOffset =
        chunkBaseOffset +
        (iz - chunkZStart) * chunkStrideZ +
        (iy - chunkYStart) * chunkStrideY +
        (overlapXStart - chunkXStart) * chunkStrideX;

      const dstOffset = (iz - reqZStart) * outStrideZ + (iy - reqYStart) * outStrideY + (overlapXStart - reqXStart);

      // Use subarray + set for efficient copying
      output.set(chunkData.subarray(srcOffset, srcOffset + rowLen) as unknown as ArrayLike<number>, dstOffset);
    }
  }
}
