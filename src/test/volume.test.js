import { expect } from "chai";
import { Vector3 } from "three";

import Volume from "../Volume";
import VolumeMaker from "../VolumeMaker";
import { LUT_ARRAY_LENGTH } from "../Histogram";

/* eslint-disable @typescript-eslint/naming-convention */
// PREPARE SOME TEST DATA TO TRY TO DISPLAY A VOLUME.
const testimgdata = {
  width: 306,
  height: 494,
  channels: 9,
  channel_names: [
    "DRAQ5",
    "EGFP",
    "Hoechst 33258",
    "TL Brightfield",
    "SEG_STRUCT",
    "SEG_Memb",
    "SEG_DNA",
    "CON_Memb",
    "CON_DNA",
  ],
  rows: 7,
  cols: 10,
  tiles: 65,
  tile_width: 204,
  tile_height: 292,
  atlas_width: 2040,
  atlas_height: 2044,

  pixel_size_x: 0.065,
  pixel_size_y: 0.065,
  pixel_size_z: 0.29,

  images: [
    {
      name: "AICS-10_5_5.ome.tif_atlas_0.png",
      channels: [0, 1, 2],
    },
    {
      name: "AICS-10_5_5.ome.tif_atlas_1.png",
      channels: [3, 4, 5],
    },
    {
      name: "AICS-10_5_5.ome.tif_atlas_2.png",
      channels: [6, 7, 8],
    },
  ],
  name: "AICS-10_5_5",
  status: "OK",
  version: "0.0.0",
  aicsImageVersion: "0.3.0",
};
/* eslint-enable @typescript-eslint/naming-convention */

function checkVolumeConstruction(v, imgdata) {
  expect(v).to.be.a("Object");
  expect(v.loaded).to.not.be.ok;
  expect(v.physicalSize.x).to.equal(imgdata.pixel_size_x * imgdata.width);
  expect(v.physicalSize.y).to.equal(imgdata.pixel_size_y * imgdata.height);
  expect(v.physicalSize.z).to.equal(imgdata.pixel_size_z * imgdata.tiles);
  expect(v.channelNames().length).to.equal(imgdata.channels);
  expect(v.num_channels).to.equal(imgdata.channels);
  expect(v.channels.length).to.equal(imgdata.channels);

  const mx = Math.max(Math.max(v.normalizedPhysicalSize.x, v.normalizedPhysicalSize.y), v.normalizedPhysicalSize.z);
  expect(mx).to.equal(1.0);

  expect(v.x).to.equal(imgdata.tile_width);
  expect(v.y).to.equal(imgdata.tile_height);
  expect(v.z).to.equal(imgdata.tiles);
}

function checkChannelDataConstruction(c, index, imgdata) {
  expect(c.loaded).to.be.true;
  expect(c.name).to.equal(imgdata.channel_names[index]);
  expect(c.imgData.width).to.equal(imgdata.atlas_width);
  expect(c.imgData.height).to.equal(imgdata.atlas_height);
  expect(c.imgData.data).to.be.a("Uint8ClampedArray");
  expect(c.imgData.data.length).to.equal(imgdata.atlas_width * imgdata.atlas_height);
  expect(c.lut).to.be.a("Uint8Array");
  expect(c.lut.length).to.equal(LUT_ARRAY_LENGTH);
}

describe("test volume", () => {
  describe("creation", () => {
    const v = new Volume(testimgdata);

    it("is created", () => {
      checkVolumeConstruction(v, testimgdata);
    });

    it("loaded channel data", () => {
      const conedata = VolumeMaker.createCone(v.x, v.y, v.z, v.x / 8, v.z);

      v.setChannelDataFromVolume(0, conedata);

      const c0 = v.getChannel(0);
      checkChannelDataConstruction(c0, 0, testimgdata);

      const spheredata = VolumeMaker.createSphere(v.x, v.y, v.z, v.z / 4);

      v.setChannelDataFromVolume(1, spheredata);

      const c1 = v.getChannel(1);
      checkChannelDataConstruction(c1, 1, testimgdata);

      expect(v.getIntensity(1, Math.floor(v.x / 2), Math.floor(v.y / 2), Math.floor(v.z / 2))).to.equal(255);
      expect(v.getIntensity(1, 0, 0, 0)).to.equal(0);
    });
  });

  describe("property validation", () => {
    it("has a correct value for normalizedPhysicalSize", () => {
      // `Volume` formerly derived a `scale` property by a different means than `normalizedPhysicalSize`, but depended
      // on `scale` and `normalizedPhysicalSize` being equal. With `scale` gone, this test ensures the equality stays.
      const v = new Volume(testimgdata);
      /* eslint-disable-next-line @typescript-eslint/naming-convention */
      const { height, width, vol_size_z, tiles } = v.imageInfo;
      const sizez = vol_size_z || tiles;
      const sizemax = Math.max(height, width, sizez);

      const [pxx, pxy, pxz] = v.pixel_size;
      const pxmin = Math.min(pxx, pxy, pxz);

      const sx = ((pxx / pxmin) * width) / sizemax;
      const sy = ((pxy / pxmin) * height) / sizemax;
      const sz = ((pxz / pxmin) * sizez) / sizemax;

      const EPSILON = 0.000000001;
      expect(v.normalizedPhysicalSize.x).to.be.closeTo(sx, EPSILON);
      expect(v.normalizedPhysicalSize.y).to.be.closeTo(sy, EPSILON);
      expect(v.normalizedPhysicalSize.z).to.be.closeTo(sz, EPSILON);
    });
  });
});
