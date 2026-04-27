export function clamp01(value: number): number {
  if (!Number.isFinite(value)) {
    return 0;
  }

  return Math.min(1, Math.max(0, value));
}

export function densitySliderToView3D(density: number): number {
  return density / 50.0;
}

export function gammaSliderToImageValues(sliderValues: [number, number, number]): [number, number, number] {
  let min = Number(sliderValues[0]);
  let mid = Number(sliderValues[1]);
  let max = Number(sliderValues[2]);

  if (mid > max || mid < min) {
    mid = 0.5 * (min + max);
  }
  const div = 255;
  min /= div;
  max /= div;
  mid /= div;
  const diff = max - min;
  const x = (mid - min) / diff;
  let scale = 4 * x * x;
  if ((mid - 0.5) * (mid - 0.5) < 0.0005) {
    scale = 1.0;
  }
  return [min, max, scale];
}

export function histogramBinFromX(x: number, canvas: HTMLCanvasElement, binCount: number): number {
  const displayWidth = canvas.getBoundingClientRect().width;
  const t = x / displayWidth;
  const b = Math.floor(t * binCount);
  return Math.max(0, Math.min(binCount - 1, b));
}
