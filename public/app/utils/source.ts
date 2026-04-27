import { VolumeFileFormat } from "../../../src";
import { getFileTypeHintCandidates } from "../../../src/utils/url_utils";

export function inferVolumeFileFormat(sourceUrl: string): VolumeFileFormat | null {
  const candidates = getFileTypeHintCandidates(sourceUrl);
  if (
    candidates.some(
      (candidate) => candidate.includes(".ome.zarr") || candidate.endsWith(".zarr") || candidate.includes(".zarr/")
    )
  ) {
    return VolumeFileFormat.ZARR;
  }
  if (
    candidates.some(
      (candidate) =>
        candidate.endsWith(".ome.tiff") ||
        candidate.endsWith(".tiff") ||
        candidate.endsWith(".ome.tif") ||
        candidate.endsWith(".tif")
    )
  ) {
    return VolumeFileFormat.TIFF;
  }
  return null;
}
