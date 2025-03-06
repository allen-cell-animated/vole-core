import { VolumeLoadError, VolumeLoadErrorType } from "../VolumeLoadError.js";
import { OMEZarrMetadata } from "./types.js";

/**
 * If `meta` is the top-level metadata of a zarr node formatted according to the OME-Zarr spec version 0.5, returns
 * the object formatted according to v0.4 of the spec. For our purposes this just means flattening out the `ome` key.
 *
 * Return type is `unknown` because this does no actual validation; use `validateOMEZarrMetadata` for that.
 */
export const toOMEZarrMetaV4 = (meta: unknown): unknown => (meta as { ome?: unknown }).ome ?? meta;

function isObjectWithProp<P extends string>(obj: unknown, prop: P): obj is Record<P, unknown> {
  return typeof obj === "object" && obj !== null && prop in obj;
}

function assertMetadataHasProp<P extends string>(
  obj: unknown,
  prop: P,
  name = "zarr"
): asserts obj is Record<P, unknown> {
  if (!isObjectWithProp(obj, prop)) {
    throw new VolumeLoadError(`${name} metadata is missing required entry "${prop}"`, {
      type: VolumeLoadErrorType.INVALID_METADATA,
    });
  }
}

function assertPropIsArray<P extends string>(
  obj: Record<P, unknown>,
  prop: P,
  name = "zarr"
): asserts obj is Record<P, unknown[]> {
  if (!Array.isArray(obj[prop])) {
    throw new VolumeLoadError(`${name} metadata entry "${prop}" is not an array`, {
      type: VolumeLoadErrorType.INVALID_METADATA,
    });
  }
}

/** Intermediate stage of validation, before we've picked a single multiscale to validate */
export type MultiscaleRecord = { multiscales: unknown[] };

export function assertMetadataHasMultiscales(meta: unknown, name = "zarr"): asserts meta is MultiscaleRecord {
  // data is an object with a key "multiscales", which is a non-empty array
  assertMetadataHasProp(meta, "multiscales", name);
  assertPropIsArray(meta, "multiscales", name);
}

/**
 * Validates that the `OMEZarrMetadata` record `meta` has the minimal amount of data required to open a volume. Since
 * we only ever open one multiscale, we only validate the multiscale metadata record at index `multiscaleIdx` here.
 * `name` is used in error messages to identify the source of the metadata.
 */
export function validateOMEZarrMetadata(
  meta: MultiscaleRecord,
  multiscaleIdx = 0,
  name = "zarr"
): asserts meta is OMEZarrMetadata {
  // check that a multiscale metadata entry exists at `multiscaleIdx`
  const multiscaleMeta = meta.multiscales[multiscaleIdx];
  if (!multiscaleMeta) {
    throw new VolumeLoadError(`${name} metadata does not have requested multiscale level ${multiscaleIdx}`, {
      type: VolumeLoadErrorType.INVALID_METADATA,
    });
  }

  const multiscaleMetaName = isObjectWithProp(multiscaleMeta, "name") ? ` ("${multiscaleMeta.name})` : "";
  const multiscaleName = `${name} multiscale ${multiscaleIdx}${multiscaleMetaName}`;

  // multiscale has a key "axes", which is an array. Each axis has a "name".
  assertMetadataHasProp(multiscaleMeta, "axes", multiscaleName);
  assertPropIsArray(multiscaleMeta, "axes", multiscaleName);
  multiscaleMeta.axes.forEach((axis, i) => assertMetadataHasProp(axis, "name", `${multiscaleName} axis ${i}`));

  // multiscale has a key "datasets", which is an array. Each dataset has a "path".
  assertMetadataHasProp(multiscaleMeta, "datasets", name);
  assertPropIsArray(multiscaleMeta, "datasets", name);
  multiscaleMeta.datasets.forEach((data, i) => assertMetadataHasProp(data, "path", `${multiscaleName} dataset ${i}`));
}
