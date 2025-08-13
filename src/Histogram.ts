import type { TypedArray, NumberType } from "./types.js";

const NBINS = 256;

type HistogramData = {
  bins: Uint32Array;
  min: number;
  max: number;
  binSize: number;
};

/**
 * Builds a histogram with 256 bins from a data array. Assume data is 8 bit single channel grayscale.
 * @class
 * @param {Array.<number>} data
 */
export default class Histogram {
  // no more than 2^32 pixels of any one intensity in the data!?!?!
  private bins: Uint32Array;
  /** Min value in the original raw data. */
  private min: number;
  /** Max value in the original raw data. */
  private max: number;
  /** Size of each histogram bin in the scale of the original data. */
  private binSize: number;
  /** Index of the first bin (other than 0) with at least 1 value. */
  private dataMinBin: number;
  /** Index of the last bin (other than 0) with at least 1 value. */
  private dataMaxBin: number;
  private pixelCount: number;

  /**
   * Whether the Histogram represents continuous floating point data.
   *
   * If true, the histogram's last bin will have the max value of the data as
   * its inclusive upper bound. If false, the histogram represents integer data,
   * and the last bin will have an (exclusive) upper bound of `max + 1`.
   */
  private isFloatType: boolean;
  public maxBin: number;

  constructor(data: TypedArray<NumberType>) {
    this.dataMinBin = 0;
    this.dataMaxBin = 0;
    this.maxBin = 0;
    this.bins = new Uint32Array();
    this.min = 0;
    this.max = 0;
    this.binSize = 0;
    this.isFloatType = data instanceof Float32Array || data instanceof Float64Array;

    // build up the histogram
    const hinfo = Histogram.calculateHistogram(data, NBINS);
    this.bins = hinfo.bins;
    this.min = hinfo.min;
    this.max = hinfo.max;
    this.binSize = hinfo.binSize;

    // TODO: These should always return 0 and NBINS - 1, respectively. Test if these
    // can be removed.
    for (let i = 0; i < this.bins.length; i++) {
      if (this.bins[i] > 0) {
        this.dataMinBin = i;
        break;
      }
    }
    for (let i = this.bins.length - 1; i >= 0; i--) {
      if (this.bins[i] > 0) {
        this.dataMaxBin = i;
        break;
      }
    }

    this.pixelCount = data.length;

    // get the bin with the most frequently occurring NONZERO value
    this.maxBin = 1;
    let max = this.bins[1];
    for (let i = 1; i < this.bins.length; i++) {
      if (this.bins[i] > max) {
        this.maxBin = i;
        max = this.bins[i];
      }
    }
  }

  private static findBin(
    dataValue: number,
    dataMin: number,
    dataMax: number,
    binSize: number,
    isFloatType: boolean,
    castToInt: boolean
  ): number {
    const binIndex = (dataValue - dataMin) / binSize;
    if (!castToInt) {
      return binIndex;
    }
    if (isFloatType && Math.abs(dataValue - dataMax) < 1e-6) {
      // Max is inclusive, so near-exact matches should return the last bin.
      return Math.round(binIndex) - 1;
    }
    if (Math.abs(binIndex) < 1e-6) {
      // Handle float imprecision
      return 0;
    }
    return Math.floor(binIndex);
  }

  /** Returns the integer bin index for the given value. */
  public findBinOfValue(value: number): number {
    return Histogram.findBin(value, this.min, this.max, this.binSize, this.isFloatType, true);
  }

  /**
   * Returns a fractional bin index for the given value. If a value is not a bin
   * boundary, returns an interpolated index. Note that this can return a value
   * outside the range of 0 to NBINS - 1.
   */
  public findFractionalBinOfValue(value: number): number {
    return Histogram.findBin(value, this.min, this.max, this.binSize, this.isFloatType, false);
  }

  /** Returns a raw data value from a given (integer or fractional) bin index. */
  public getValueFromBin(binIndex: number): number {
    return this.min + binIndex * this.binSize;
  }

  /**
   * Return the min data value
   * @return {number}
   */
  getDataMin(): number {
    return this.min;
  }

  /**
   * Return the max data value
   * @return {number}
   */
  getDataMax(): number {
    return this.max;
  }

  /**
   * Returns the first bin index with at least 1 value, other than the 0th bin.
   * @return {number}
   */
  getMin(): number {
    return this.dataMinBin;
  }

  /**
   * Returns the last bin index with at least 1 value, other than the 0th bin.
   * @return {number}
   */
  getMax(): number {
    // Note that this will always return `NBINS - 1`.
    return this.dataMaxBin;
  }

  getNumBins(): number {
    return this.bins.length;
  }

  getBin(i: number): number {
    return this.bins[i];
  }

  getBinRange(i: number): [number, number] {
    return [this.min + i * this.binSize, this.min + (i + 1) * this.binSize];
  }

  /**
   * Find the bin that contains the percentage of pixels below it
   * @return {number}
   * @param {number} pct
   */
  findBinOfPercentile(pct: number): number {
    const limit = this.pixelCount * pct;

    let i = 0;
    let count = 0;
    for (i = 0; i < this.bins.length; ++i) {
      count += this.bins[i];
      if (count > limit) {
        break;
      }
    }
    return i;
  }

  // Find bins at 10th / 90th percentile
  findBestFitBins(): [number, number] {
    const pixcount = this.pixelCount;
    //const pixcount = this.imgData.data.length;
    const limit = pixcount / 10;

    let i = 0;
    let count = 0;
    for (i = 1; i < this.bins.length; ++i) {
      count += this.bins[i];
      if (count > limit) {
        break;
      }
    }
    const hmin = i;

    count = 0;
    for (i = this.bins.length - 1; i >= 1; --i) {
      count += this.bins[i];
      if (count > limit) {
        break;
      }
    }
    const hmax = i;

    return [hmin, hmax];
  }

  // Find min and max bins attempting to replicate ImageJ's "Auto" button
  findAutoIJBins(): [number, number] {
    // note that consecutive applications of this should modify the auto threshold. see:
    // https://github.com/imagej/ImageJ/blob/7746fcb0f5744a7a7758244c5dcd2193459e6e0e/ij/plugin/frame/ContrastAdjuster.java#L816
    const AUTO_THRESHOLD = 5000;
    const pixcount = this.pixelCount;
    //  const pixcount = this.imgData.data.length;
    const limit = pixcount / 10;
    const threshold = pixcount / AUTO_THRESHOLD;

    // this will skip the "zero" bin which contains pixels of zero intensity.
    let hmin = this.bins.length - 1;
    let hmax = 1;
    for (let i = 1; i < this.bins.length; ++i) {
      if (this.bins[i] > threshold && this.bins[i] <= limit) {
        hmin = i;
        break;
      }
    }
    for (let i = this.bins.length - 1; i >= 1; --i) {
      if (this.bins[i] > threshold && this.bins[i] <= limit) {
        hmax = i;
        break;
      }
    }

    if (hmax < hmin) {
      hmin = 0;
      hmax = 255;
    }

    return [hmin, hmax];
  }

  // Find min and max bins using a percentile of the most commonly occurring value
  findAutoMinMax(): [number, number] {
    // simple linear mapping cutting elements with small appearence
    // get 10% threshold
    const PERCENTAGE = 0.1;
    const th = Math.floor(this.bins[this.maxBin] * PERCENTAGE);
    let b = 0;
    let e = this.bins.length - 1;
    for (let x = 1; x < this.bins.length; ++x) {
      if (this.bins[x] > th) {
        b = x;
        break;
      }
    }
    for (let x = this.bins.length - 1; x >= 1; --x) {
      if (this.bins[x] > th) {
        e = x;
        break;
      }
    }
    return [b, e];
  }

  private static calculateHistogram(arr: TypedArray<NumberType>, numBins = 1): HistogramData {
    if (numBins < 1) {
      numBins = 1;
    }

    // calculate min and max of arr
    // TODO See convertChannel, which will also compute min and max!
    // We could save a whole extra loop over the data, or have convertChannel compute the whole histogram.
    // need to be careful about computing over chunks or whole ready-to-display volume

    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      } else if (arr[i] > max) {
        max = arr[i];
      }
    }

    const bins = new Uint32Array(numBins).fill(0);

    // In the ideal case for both float and integer data, we want to distribute
    // values evenly across the bins. For example, if we have a data range of
    // `[min=0, max=3]` and 4 bins, the ranges of the bins should differ based
    // on the type of data.
    //
    // For integer data, the ideal case is where we have a number of bins equal
    // to the range of the data. In this case, we want each bin to hold a single
    // integer value, with a range of `[n, n+1)` for some integer `n`. To do so,
    // we add 1 to the max value when calculating the bin size, so the last bin
    // has a range from `[max, max + 1)`.
    //
    // In the example case, we would want the bins to have ranges [0, 1), [1,
    // 2), [2, 3), [3, 4), and a bin size of `(max + 1 - min) / numBins = (4 -
    // 0) / 4 = 1`.
    //
    // |----|----|----|----|
    // 0    1    2    3    4 <- exclusive
    //
    // For continuous (float) data, where values are randomly distributed across
    // the ranges, our bins would need to have ranges [0, 0.75), [0.75, 1.5),
    // [1.5, 2.25), [2.25, 3], and our bin size is `(max - min) / numBins = (3 -
    // 0) / 4 = 0.75`.
    //
    // |----|----|----|----|
    // 0  0.75  1.5  2.25  3 <- inclusive
    //
    const isFloatType = arr instanceof Float32Array || arr instanceof Float64Array;
    let binSize: number;
    if (isFloatType) {
      binSize = max - min === 0 ? 1 : (max - min) / numBins;
    } else {
      binSize = max + 1 - min === 0 ? 1 : (max + 1 - min) / numBins;
    }

    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];

      const binIndex = Histogram.findBin(item, min, max, binSize, isFloatType, true);
      bins[binIndex]++;
    }

    return { bins, min, max, binSize };
  }
}
