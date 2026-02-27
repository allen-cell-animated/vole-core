export function getSquarestTextureDimensions(size: number): [number, number] {
  const safeSize = Math.max(1, size);
  const width = Math.ceil(Math.sqrt(safeSize));
  const height = Math.ceil(safeSize / width);

  return [width, height];
}
