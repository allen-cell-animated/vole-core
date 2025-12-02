const S3_URL_PREFIX = "s3://";
const GCS_URL_PREFIX = "gs://";

/**
 * Remaps non-standard URIs (e.g. S3 (s3://) or Google Cloud Storage (gs://)) to
 * a standard HTTPS URL.
 */
export function remapUri(url: string): string {
  url = url.trim();
  if (url.startsWith(S3_URL_PREFIX)) {
    // remap s3://bucket/key to https://bucket.s3.amazonaws.com/key
    const s3Path = url.slice(S3_URL_PREFIX.length);
    const pathSegments = s3Path.split("/");
    url = `https://${pathSegments[0]}.s3.amazonaws.com/${pathSegments.slice(1).join("/")}`;
  } else if (url.startsWith(GCS_URL_PREFIX)) {
    // remap gs://bucket/key to https://storage.googleapis.com/bucket/key
    url = url.replace(GCS_URL_PREFIX, "https://storage.googleapis.com/");
  }
  return url;
}
