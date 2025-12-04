const S3_URL_PREFIX = "s3://";
const GCS_URL_PREFIX = "gs://";
const VAST_FILES_PREFIX = "/allen/aics/";
const VAST_FILES_URL = "https://vast-files.int.allencell.org/";

/**
 * Remaps non-standard URIs (e.g. S3 (`s3://`), Google Cloud Storage (`gs://`), or
 * VAST files (`/allen/aics/`)) to a standard HTTPS URL.
 */
export function remapUri(url: string): string {
  let newUrl = url.trim();

  if (newUrl.startsWith(S3_URL_PREFIX)) {
    // remap s3://bucket/key to https://bucket.s3.amazonaws.com/key
    const s3Path = newUrl.slice(S3_URL_PREFIX.length);
    const pathSegments = s3Path.split("/");
    newUrl = `https://${pathSegments[0]}.s3.amazonaws.com/${pathSegments.slice(1).join("/")}`;
  } else if (newUrl.startsWith(GCS_URL_PREFIX)) {
    // remap gs://bucket/key to https://storage.googleapis.com/bucket/key
    newUrl = newUrl.replace(GCS_URL_PREFIX, "https://storage.googleapis.com/");
  } else if (newUrl.startsWith(VAST_FILES_PREFIX)) {
    // remap /allen/aics/... to https://vast-files.int.allencell.org/...
    newUrl = newUrl.replace(VAST_FILES_PREFIX, VAST_FILES_URL);
  }

  return newUrl;
}
