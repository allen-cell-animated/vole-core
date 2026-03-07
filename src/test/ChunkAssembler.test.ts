import type { TCZYX } from "../loaders/zarr_utils/types";
import {
  computeChunkCoords,
  chunkCacheKey,
  assembleChunks,
  type ChannelSliceSpec,
  type ChunkData,
} from "../loaders/zarr_utils/ChunkAssembler";

// ── Helper ──────────────────────────────────────────────────────────────────

/** Create a ChunkData from a plain number array */
function makeChunk(values: number[], shape: number[], dtype = "uint8" as const): ChunkData {
  const arr = new Uint8Array(values);
  return { data: arr.buffer, dtype, shape };
}

function makeChunkFloat32(values: number[], shape: number[]): ChunkData {
  const arr = new Float32Array(values);
  return { data: arr.buffer, dtype: "float32", shape };
}

// ── Standard TCZYX axis mapping for a 5D array ─────────────────────────────
// native dimension order: [T, C, Z, Y, X] → indices [0, 1, 2, 3, 4]
const AXES_5D: TCZYX<number> = [0, 1, 2, 3, 4];
// 3D only (ZYX) → indices [-1, -1, 0, 1, 2]
const AXES_3D: TCZYX<number> = [-1, -1, 0, 1, 2];
// CZYX → [-1, 0, 1, 2, 3]
const AXES_4D_CZYX: TCZYX<number> = [-1, 0, 1, 2, 3];

// ═══════════════════════════════════════════════════════════════════════════
// computeChunkCoords
// ═══════════════════════════════════════════════════════════════════════════

describe("computeChunkCoords", () => {
  it("returns a single chunk when everything fits in one chunk", () => {
    const spec: ChannelSliceSpec = { t: 0, c: 0, z: [0, 4], y: [0, 8], x: [0, 8] };
    // array shape 1×1×4×8×8, chunk shape 1×1×4×8×8 → single chunk
    const coords = computeChunkCoords(spec, [1, 1, 4, 8, 8], [1, 1, 4, 8, 8], AXES_5D);
    expect(coords).toEqual([[0, 0, 0, 0, 0]]);
  });

  it("returns multiple chunks when the region spans chunk boundaries", () => {
    const spec: ChannelSliceSpec = { t: 0, c: 0, z: [0, 4], y: [0, 16], x: [0, 16] };
    // array 1×1×4×16×16, chunks 1×1×4×8×8 → 2×2 = 4 chunks in YX
    const coords = computeChunkCoords(spec, [1, 1, 4, 16, 16], [1, 1, 4, 8, 8], AXES_5D);
    expect(coords).toHaveLength(4);
    expect(coords).toContainEqual([0, 0, 0, 0, 0]);
    expect(coords).toContainEqual([0, 0, 0, 0, 1]);
    expect(coords).toContainEqual([0, 0, 0, 1, 0]);
    expect(coords).toContainEqual([0, 0, 0, 1, 1]);
  });

  it("handles a subregion that doesn't start at zero", () => {
    const spec: ChannelSliceSpec = { t: 0, c: 0, z: 0, y: [4, 12], x: [4, 12] };
    // array 1×1×1×16×16, chunks 1×1×1×8×8 → y spans chunk 0 and 1, x spans chunk 0 and 1
    const coords = computeChunkCoords(spec, [1, 1, 1, 16, 16], [1, 1, 1, 8, 8], AXES_5D);
    expect(coords).toHaveLength(4);
  });

  it("handles 3D arrays (no T or C dimension)", () => {
    const spec: ChannelSliceSpec = { t: 0, c: 0, z: [0, 4], y: [0, 8], x: [0, 8] };
    // native shape [4, 8, 8], chunks [4, 8, 8]
    const coords = computeChunkCoords(spec, [4, 8, 8], [4, 8, 8], AXES_3D);
    expect(coords).toEqual([[0, 0, 0]]);
  });

  it("handles a Z slice (single integer Z)", () => {
    const spec: ChannelSliceSpec = { t: 0, c: 0, z: 2, y: [0, 8], x: [0, 8] };
    // array 1×1×8×8×8, chunks 1×1×4×8×8 → z=2 is in chunk 0
    const coords = computeChunkCoords(spec, [1, 1, 8, 8, 8], [1, 1, 4, 8, 8], AXES_5D);
    expect(coords).toEqual([[0, 0, 0, 0, 0]]);
  });

  it("respects Z chunk boundaries", () => {
    const spec: ChannelSliceSpec = { t: 0, c: 0, z: [2, 6], y: [0, 8], x: [0, 8] };
    // array 1×1×8×8×8, chunks 1×1×4×8×8 → z range [2,6) spans chunk 0 and 1
    const coords = computeChunkCoords(spec, [1, 1, 8, 8, 8], [1, 1, 4, 8, 8], AXES_5D);
    expect(coords).toHaveLength(2);
    expect(coords).toContainEqual([0, 0, 0, 0, 0]);
    expect(coords).toContainEqual([0, 0, 1, 0, 0]);
  });

  it("handles 4D CZYX arrays", () => {
    const spec: ChannelSliceSpec = { t: 0, c: 1, z: [0, 4], y: [0, 8], x: [0, 8] };
    const coords = computeChunkCoords(spec, [3, 4, 8, 8], [1, 4, 8, 8], AXES_4D_CZYX);
    expect(coords).toEqual([[1, 0, 0, 0]]);
  });
});

// ═══════════════════════════════════════════════════════════════════════════
// chunkCacheKey
// ═══════════════════════════════════════════════════════════════════════════

describe("chunkCacheKey", () => {
  it("produces the expected key format", () => {
    const key = chunkCacheKey("https://example.com/data", "0/path", [0, 1, 2]);
    expect(key).toBe("https://example.com/data/0/path/0,1,2");
  });

  it("handles trailing slash on URL", () => {
    const key = chunkCacheKey("https://example.com/data/", "s0", [3, 4]);
    expect(key).toBe("https://example.com/data/s0/3,4");
  });

  it("handles leading slash on dataset path", () => {
    const key = chunkCacheKey("https://example.com/data", "/0", [0, 0, 0]);
    expect(key).toBe("https://example.com/data/0/0,0,0");
  });
});

// ═══════════════════════════════════════════════════════════════════════════
// assembleChunks
// ═══════════════════════════════════════════════════════════════════════════

describe("assembleChunks", () => {
  describe("single chunk, fast path", () => {
    it("returns chunk data directly when chunk exactly matches output size", () => {
      // 3D array, shape [2, 4, 4], chunk [2, 4, 4] — request whole array
      const spec: ChannelSliceSpec = { t: 0, c: 0, z: [0, 2], y: [0, 4], x: [0, 4] };
      const chunkCoords = [[0, 0, 0]];
      const values = Array.from({ length: 32 }, (_, i) => i);
      const chunkMap = new Map([["0,0,0", makeChunk(values, [2, 4, 4])]]);

      const result = assembleChunks(spec, chunkMap, chunkCoords, [2, 4, 4], [2, 4, 4], AXES_3D, "uint8");
      expect(result).toHaveLength(32);
      expect(Array.from(result)).toEqual(values);
    });

    it("extracts a subregion from a single chunk", () => {
      // 3D array [4, 4, 4], chunk [4, 4, 4], request z=[1,3], y=[0,4], x=[0,4]
      const spec: ChannelSliceSpec = { t: 0, c: 0, z: [1, 3], y: [0, 4], x: [0, 4] };
      const chunkCoords = [[0, 0, 0]];
      const values = Array.from({ length: 64 }, (_, i) => i);
      const chunkMap = new Map([["0,0,0", makeChunk(values, [4, 4, 4])]]);

      const result = assembleChunks(spec, chunkMap, chunkCoords, [4, 4, 4], [4, 4, 4], AXES_3D, "uint8");
      // Output is z=[1,3) → size 2×4×4 = 32
      expect(result).toHaveLength(32);
      // First element should be values[1*16 + 0*4 + 0] = 16
      expect(result[0]).toBe(16);
      // Last element should be values[2*16 + 3*4 + 3] = 47
      expect(result[31]).toBe(47);
    });
  });

  describe("multiple chunks", () => {
    it("stitches two chunks along X", () => {
      // 3D array [1, 2, 8], chunk [1, 2, 4], request full region
      const spec: ChannelSliceSpec = { t: 0, c: 0, z: 0, y: [0, 2], x: [0, 8] };
      const arrayShape = [1, 2, 8];
      const chunkShape = [1, 2, 4];
      const chunkCoords = [
        [0, 0, 0],
        [0, 0, 1],
      ];

      // chunk 0: x=[0,4), chunk 1: x=[4,8)
      // Each chunk has 1×2×4 = 8 elements
      const chunk0Vals = [10, 11, 12, 13, 20, 21, 22, 23]; // y0: 10-13, y1: 20-23
      const chunk1Vals = [14, 15, 16, 17, 24, 25, 26, 27]; // y0: 14-17, y1: 24-27

      const chunkMap = new Map([
        ["0,0,0", makeChunk(chunk0Vals, [1, 2, 4])],
        ["0,0,1", makeChunk(chunk1Vals, [1, 2, 4])],
      ]);

      const result = assembleChunks(spec, chunkMap, chunkCoords, arrayShape, chunkShape, AXES_3D, "uint8");
      // Output: z=1, y=2, x=8 → 16 elements
      expect(result).toHaveLength(16);
      // Row y=0: [10, 11, 12, 13, 14, 15, 16, 17]
      expect(Array.from(result.slice(0, 8))).toEqual([10, 11, 12, 13, 14, 15, 16, 17]);
      // Row y=1: [20, 21, 22, 23, 24, 25, 26, 27]
      expect(Array.from(result.slice(8, 16))).toEqual([20, 21, 22, 23, 24, 25, 26, 27]);
    });

    it("stitches four chunks in a 2×2 grid (YX)", () => {
      // 3D array [1, 4, 4], chunk [1, 2, 2], request full region
      const spec: ChannelSliceSpec = { t: 0, c: 0, z: 0, y: [0, 4], x: [0, 4] };
      const arrayShape = [1, 4, 4];
      const chunkShape = [1, 2, 2];
      const chunkCoords = [
        [0, 0, 0],
        [0, 0, 1],
        [0, 1, 0],
        [0, 1, 1],
      ];

      // chunks row-major within each chunk: (z=0 dropped for these)
      // chunk(y=0,x=0): 2×2 → [1,2, 5,6]
      // chunk(y=0,x=1): 2×2 → [3,4, 7,8]
      // chunk(y=1,x=0): 2×2 → [9,10, 13,14]
      // chunk(y=1,x=1): 2×2 → [11,12, 15,16]
      const chunkMap = new Map([
        ["0,0,0", makeChunk([1, 2, 5, 6], [1, 2, 2])],
        ["0,0,1", makeChunk([3, 4, 7, 8], [1, 2, 2])],
        ["0,1,0", makeChunk([9, 10, 13, 14], [1, 2, 2])],
        ["0,1,1", makeChunk([11, 12, 15, 16], [1, 2, 2])],
      ]);

      const result = assembleChunks(spec, chunkMap, chunkCoords, arrayShape, chunkShape, AXES_3D, "uint8");
      expect(result).toHaveLength(16);
      // Expected 4×4 grid in row-major:
      // y=0: [1, 2, 3, 4]
      // y=1: [5, 6, 7, 8]
      // y=2: [9, 10, 11, 12]
      // y=3: [13, 14, 15, 16]
      expect(Array.from(result)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
    });

    it("handles edge chunks that are smaller than nominal chunk size", () => {
      // 3D array [1, 2, 3], chunk [1, 2, 2], request full region
      // chunk(0,0,0) covers x=[0,2), chunk(0,0,1) covers x=[2,3) — edge chunk has shape [1,2,1]
      const spec: ChannelSliceSpec = { t: 0, c: 0, z: 0, y: [0, 2], x: [0, 3] };
      const arrayShape = [1, 2, 3];
      const chunkShape = [1, 2, 2];
      const chunkCoords = [
        [0, 0, 0],
        [0, 0, 1],
      ];

      const chunkMap = new Map([
        ["0,0,0", makeChunk([1, 2, 4, 5], [1, 2, 2])],
        ["0,0,1", makeChunk([3, 6], [1, 2, 1])], // edge chunk: only 1 x-element
      ]);

      const result = assembleChunks(spec, chunkMap, chunkCoords, arrayShape, chunkShape, AXES_3D, "uint8");
      expect(result).toHaveLength(6);
      // y=0: [1, 2, 3], y=1: [4, 5, 6]
      expect(Array.from(result)).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  describe("5D arrays", () => {
    it("assembles from a 5D TCZYX array with a single chunk", () => {
      // shape [1, 1, 2, 2, 2], chunk [1, 1, 2, 2, 2]
      const spec: ChannelSliceSpec = { t: 0, c: 0, z: [0, 2], y: [0, 2], x: [0, 2] };
      const values = [1, 2, 3, 4, 5, 6, 7, 8];
      const chunkMap = new Map([["0,0,0,0,0", makeChunk(values, [1, 1, 2, 2, 2])]]);

      const result = assembleChunks(
        spec,
        chunkMap,
        [[0, 0, 0, 0, 0]],
        [1, 1, 2, 2, 2],
        [1, 1, 2, 2, 2],
        AXES_5D,
        "uint8"
      );
      expect(Array.from(result)).toEqual(values);
    });

    it("selects correct channel from multi-channel chunk", () => {
      // shape [1, 3, 1, 2, 2], chunk [1, 3, 1, 2, 2] — 3 channels in one chunk
      // Requesting c=1
      const spec: ChannelSliceSpec = { t: 0, c: 1, z: 0, y: [0, 2], x: [0, 2] };
      // 1×3×1×2×2 = 12 values. Channel 0: [0,1,2,3], Channel 1: [10,11,12,13], Channel 2: [20,21,22,23]
      const values = [0, 1, 2, 3, 10, 11, 12, 13, 20, 21, 22, 23];
      const chunkMap = new Map([["0,0,0,0,0", makeChunk(values, [1, 3, 1, 2, 2])]]);

      const result = assembleChunks(
        spec,
        chunkMap,
        [[0, 0, 0, 0, 0]],
        [1, 3, 1, 2, 2],
        [1, 3, 1, 2, 2],
        AXES_5D,
        "uint8"
      );
      // Should get channel 1 data: [10, 11, 12, 13]
      expect(result).toHaveLength(4);
      expect(Array.from(result)).toEqual([10, 11, 12, 13]);
    });
  });

  describe("float32 data type", () => {
    it("handles float32 chunks correctly", () => {
      const spec: ChannelSliceSpec = { t: 0, c: 0, z: 0, y: [0, 2], x: [0, 2] };
      const values = [1.5, 2.5, 3.5, 4.5];
      const chunkMap = new Map([["0,0,0", makeChunkFloat32(values, [1, 2, 2])]]);

      const result = assembleChunks(spec, chunkMap, [[0, 0, 0]], [1, 2, 2], [1, 2, 2], AXES_3D, "float32");
      expect(result).toBeInstanceOf(Float32Array);
      expect(result).toHaveLength(4);
      expect(result[0]).toBeCloseTo(1.5);
      expect(result[3]).toBeCloseTo(4.5);
    });
  });

  describe("error handling", () => {
    it("throws when chunk data is missing", () => {
      const spec: ChannelSliceSpec = { t: 0, c: 0, z: 0, y: [0, 2], x: [0, 2] };
      const emptyMap = new Map<string, ChunkData>();

      expect(() => assembleChunks(spec, emptyMap, [[0, 0, 0]], [1, 2, 2], [1, 2, 2], AXES_3D, "uint8")).toThrow(
        "Missing chunk data"
      );
    });
  });
});
