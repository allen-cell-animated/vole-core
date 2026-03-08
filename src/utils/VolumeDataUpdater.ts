import type { Data3DTexture } from "three";

import type Volume from "../Volume.js";

export class VolumeDataUpdater {
  private scratch?: Uint8Array;

  public update(
    volume: Volume,
    viewChannels: number[],
    maskChannelIndex: number,
    maskAlpha: number,
    volumeTexture: Data3DTexture
  ): void {
    const { x: sx, y: sy, z: sz } = volume.imageInfo.subregionSize;
    const dataSize = sx * sy * sz * 4;

    if (!this.scratch || this.scratch.length !== dataSize) {
      const existing = volumeTexture.image.data as Uint8Array | undefined;
      if (existing && existing.length === dataSize) {
        this.scratch = existing;
      } else {
        this.scratch = new Uint8Array(dataSize);
        volumeTexture.image.data = this.scratch;
      }
    }

    const data = this.scratch;
    data.fill(0);

    for (let i = 0; i < 4; ++i) {
      const ch = viewChannels[i];
      if (ch === -1) {
        continue;
      }

      const volumeChannel = volume.getChannel(ch);
      for (let iz = 0; iz < sz; ++iz) {
        for (let iy = 0; iy < sy; ++iy) {
          for (let ix = 0; ix < sx; ++ix) {
            data[i + ix * 4 + iy * 4 * sx + iz * 4 * sx * sy] =
              255 * volumeChannel.normalizeRaw(volumeChannel.getIntensity(ix, iy, iz));
          }
        }
      }
      if (maskChannelIndex !== -1 && maskAlpha < 1.0) {
        const maskChannel = volume.getChannel(maskChannelIndex);
        let maskVal = 1.0;
        for (let iz = 0; iz < sz; ++iz) {
          for (let iy = 0; iy < sy; ++iy) {
            for (let ix = 0; ix < sx; ++ix) {
              // binary masking
              maskVal = maskChannel.getIntensity(ix, iy, iz) > 0 ? 1.0 : maskAlpha;
              data[i + ix * 4 + iy * 4 * sx + iz * 4 * sx * sy] *= maskVal;
            }
          }
        }
      }
    }

    volumeTexture.needsUpdate = true;
  }
}
