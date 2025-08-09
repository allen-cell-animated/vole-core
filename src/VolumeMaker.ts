import { type NumberType, type TypedArray, ARRAY_CONSTRUCTORS } from "./types.js";

/**
 * Basic utility functions to create sample volume data
 * @class
 */
export default class VolumeMaker {
  /**
   * Rasterize a signed distance function into a volume of vx * vy * vz dimensions. This is a binary filling operation.
   * @param {number} vx
   * @param {number} vy
   * @param {number} vz
   * @param {function} sdFunc A function f(x,y,z) that returns a distance. f < 0 will be the interior of the volume, and f>=0 will be outside.
   * @param {NumberType} dtype The data type for the output array
   */
  static createVolume(
    vx: number,
    vy: number,
    vz: number,
    sdFunc: (px: number, py: number, pz: number) => number,
    dtype: NumberType = "uint8"
  ): TypedArray<NumberType> {
    const ctor = ARRAY_CONSTRUCTORS[dtype];
    const data = new ctor(vx * vy * vz).fill(0);
    const cx = vx / 2;
    const cy = vy / 2;
    const cz = vz / 2;
    let offset, px, py, pz;
    for (let i = 0; i < vz; ++i) {
      for (let j = 0; j < vy; ++j) {
        for (let k = 0; k < vx; ++k) {
          offset = i * (vx * vy) + j * vx + k;
          px = k - cx;
          py = j - cy;
          pz = i - cz;
          if (sdFunc(px, py, pz) < 0) {
            data[offset] = 255;
          } else {
            data[offset] = 0;
          }
        }
      }
    }
    return data;
  }

  /**
   * Create a volume filled with a sphere in the center
   * @param {number} vx
   * @param {number} vy
   * @param {number} vz
   * @param {number} radius
   * @param {NumberType} dtype The data type for the output array
   */
  static createSphere(
    vx: number,
    vy: number,
    vz: number,
    radius: number,
    dtype: NumberType = "uint8"
  ): TypedArray<NumberType> {
    return VolumeMaker.createVolume(
      vx,
      vy,
      vz,
      (px, py, pz) => {
        return Math.sqrt(px * px + py * py + pz * pz) - radius;
      },
      dtype
    );
  }

  /**
   * Create a volume with a cylinder centered inside.
   * @param {number} vx
   * @param {number} vy
   * @param {number} vz
   * @param {number} hx width of cap (?)
   * @param {number} hy depth of cap (?)
   * @param {NumberType} dtype The data type for the output array
   */
  static createCylinder(
    vx: number,
    vy: number,
    vz: number,
    hx: number,
    hy: number,
    dtype: NumberType = "uint8"
  ): TypedArray<NumberType> {
    let dx, dy, mdx, mdy;
    return VolumeMaker.createVolume(
      vx,
      vy,
      vz,
      (px, py, pz) => {
        dx = Math.abs(Math.sqrt(px * px + pz * pz)) - hx;
        dy = Math.abs(py) - hy;
        mdx = Math.max(dx, 0.0);
        mdy = Math.max(dy, 0.0);
        return Math.min(Math.max(dx, dy), 0.0) + Math.sqrt(mdx * mdx + mdy * mdy);
      },
      dtype
    );
  }

  /**
   * Create a volume with a torus centered inside
   * @param {number} vx
   * @param {number} vy
   * @param {number} vz
   * @param {number} tx inner radius
   * @param {number} ty outer radius
   * @param {NumberType} dtype The data type for the output array
   */
  static createTorus(
    vx: number,
    vy: number,
    vz: number,
    tx: number,
    ty: number,
    dtype: NumberType = "uint8"
  ): TypedArray<NumberType> {
    let qx, qy;
    return VolumeMaker.createVolume(
      vx,
      vy,
      vz,
      (px, py, pz) => {
        qx = Math.sqrt(px * px + pz * pz) - tx;
        qy = py;
        return Math.sqrt(qx * qx + qy * qy) - ty;
      },
      dtype
    );
  }

  /**
   * Create a volume with a cone centered inside.  cx, cy must be a 2d normalized pair...?
   * @param {number} vx
   * @param {number} vy
   * @param {number} vz
   * @param {number} cx base radius
   * @param {number} cy height
   * @param {NumberType} dtype The data type for the output array
   */
  static createCone(
    vx: number,
    vy: number,
    vz: number,
    cx: number,
    cy: number,
    dtype: NumberType = "uint8"
  ): TypedArray<NumberType> {
    let q;
    return VolumeMaker.createVolume(
      vx,
      vy,
      vz,
      (px, py, pz) => {
        q = Math.sqrt(px * px + py * py);
        return cx * q + cy * pz;
      },
      dtype
    );
  }

  // take a list of TypedArrays and concatenate them into a single TypedArray of the same Type:
  static concatenateArrays(arrays: TypedArray<NumberType>[], dtype: NumberType): TypedArray<NumberType> {
    if (arrays.length === 0) {
      throw new Error("Cannot concatenate empty array list");
    }

    const totalLength = arrays.reduce((acc, arr) => acc + arr.length, 0);

    // Create a new array of the same type as the input arrays
    const result = new ARRAY_CONSTRUCTORS[dtype](totalLength);

    let offset = 0;
    for (const arr of arrays) {
      result.set(arr, offset);
      offset += arr.length;
    }
    return result;
  }
}
