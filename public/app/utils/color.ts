export type RgbTuple = [number, number, number];

export function rgb255ToHex(color: RgbTuple): string {
  return `#${color
    .map((component) => Math.max(0, Math.min(255, Math.round(component))).toString(16).padStart(2, "0"))
    .join("")}`;
}

export function rgb01ToHex(color: RgbTuple): string {
  return rgb255ToHex([color[0] * 255, color[1] * 255, color[2] * 255]);
}

export function hexToRgb01(hex: string, fallback: RgbTuple): RgbTuple {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [parseInt(result[1], 16) / 255.0, parseInt(result[2], 16) / 255.0, parseInt(result[3], 16) / 255.0]
    : fallback;
}

export function hexToRgb255(hex: string, fallback: RgbTuple): RgbTuple {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : fallback;
}
