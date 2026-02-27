export function getSquarestTextureDimensions(size: number): [number, number] {
  const width = Math.ceil(Math.sqrt(size));
  const height = Math.ceil(size / width);

  return [width, height];
}
