export function getSquarestTextureDimensions(size: number): [number, number] {
  // Set a minimum size of 1 to prevent zero-dimension textures
  const safeSize = Math.max(1, size);
  const width = Math.ceil(Math.sqrt(safeSize));
  const height = Math.ceil(safeSize / width);

  return [width, height];
}
