import { describe, it, expect } from "vitest";

import { getFileTypeHintCandidates, remapUri } from "../utils/url_utils";

describe("remapUrl", () => {
  it("does not map HTTP URLs", () => {
    expect(remapUri("http://example.com/image.tif")).toBe("http://example.com/image.tif");
  });

  it("does not map HTTPS URLs", () => {
    expect(remapUri("https://example.com/image.tif")).toBe("https://example.com/image.tif");
  });

  it("trims whitespace from the URL", () => {
    expect(remapUri(" https://example.com/image.tif ")).toBe("https://example.com/image.tif");
  });

  it("maps S3 URLs", () => {
    expect(remapUri("s3://allencell/aics/example/data.zarr")).toBe(
      "https://allencell.s3.amazonaws.com/aics/example/data.zarr"
    );
  });

  it("maps GCS URLs", () => {
    expect(remapUri("gs://my-bucket/path/to/data.ome.tif")).toBe(
      "https://storage.googleapis.com/my-bucket/path/to/data.ome.tif"
    );
  });

  it("maps VAST file paths", () => {
    expect(remapUri("/allen/aics/example/data.zarr")).toBe("https://vast-files.int.allencell.org/example/data.zarr");
  });

  it("maps example Human Organ Atlas GCS URL", () => {
    expect(
      remapUri(
        "gs://ucl-hip-ct-35a68e99feaae8932b1d44da0358940b/A186/lung-right/24.132um_complete-organ_bm18.ome.zarr/"
      )
    ).toBe(
      "https://storage.googleapis.com/ucl-hip-ct-35a68e99feaae8932b1d44da0358940b/A186/lung-right/24.132um_complete-organ_bm18.ome.zarr/"
    );
  });
});

describe("getFileTypeHintCandidates", () => {
  it("includes the pathname for a normal TIFF URL", () => {
    expect(getFileTypeHintCandidates("http://example.com/image.tif")).toContain("/image.tif");
  });

  it("includes query-param path hints for Filestash proxy URLs", () => {
    expect(
      getFileTypeHintCandidates(
        "http://localhost:8334/api/plg_application_volumeexplorer/cat?path=%2Fzhome%2F15%2Fb%2F200707%2FMarineGastropod1_DOWNSAMPLED.tif&authorization=token"
      )
    ).toContain("/zhome/15/b/200707/marinegastropod1_downsampled.tif");
  });

  it("includes nested src hints when the source itself is passed through a query param", () => {
    expect(
      getFileTypeHintCandidates(
        "http://localhost:8334/assets/plugin/app/index.html?src=http%3A%2F%2Flocalhost%3A8334%2Fapi%2Fplg_application_volumeexplorer%2Fcat%3Fpath%3D%252Fdata%252Fsample.ome.tiff"
      )
    ).toContain("http://localhost:8334/api/plg_application_volumeexplorer/cat?path=%2fdata%2fsample.ome.tiff");
  });
});
