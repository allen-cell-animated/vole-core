import { Texture, Vector2, Vector3 } from "three";

import RenderToBuffer from "./RenderToBuffer";
import raycastPickUI from "./constants/shaders/volumePick.frag";
import Volume from "./Volume";

export default class RenderPickBuffer {
  pass: RenderToBuffer;
  constructor(volume: Volume, channelIndex: number, slice: number) {
    this.pass = new RenderToBuffer(raycastPickUI, {
      textureRes: { value: [100, 100] },
      ATLAS_DIMS: { value: [100, 100] },
      AABB_CLIP_MIN: { value: new Vector3() },
      AABB_CLIP_MAX: { value: new Vector3() },
      textureAtlas: { value: new Texture() },
      Z_SLICE: { value: 0 },
      SLICES: { value: 0 },
      flipVolume: { value: new Vector3() },
    });

    const channel = volume.channels[channelIndex];

    const u = this.pass.material.uniforms;

    const { atlasTileDims, subregionSize, volumeSize } = volume.imageInfo;
    const atlasSize = new Vector2(subregionSize.x, subregionSize.y).multiply(atlasTileDims);

    u.textureAtlas.value = channel.dataTexture;
    u.textureRes.value = atlasSize; //[channel.dataTexture.image.width, channel.dataTexture.image.height];
    u.ATLAS_DIMS.value = atlasTileDims;
    u.SLICES.value = volumeSize.z;
    u.Z_SLICE.value = slice;

    u.flipVolume.value = new Vector3(1, 1, 1);

    const bounds = { bmin: new Vector3(0, 0, 0), bmax: new Vector3(1, 1, 1) };
    const { normRegionSize, normRegionOffset } = volume;
    const offsetToCenter = normRegionSize.clone().divideScalar(2).add(normRegionOffset).subScalar(0.5);
    const bmin = bounds.bmin.clone().sub(offsetToCenter).divide(normRegionSize).clampScalar(-0.5, 0.5);
    const bmax = bounds.bmax.clone().sub(offsetToCenter).divide(normRegionSize).clampScalar(-0.5, 0.5);

    u.AABB_CLIP_MIN.value = bmin;
    u.AABB_CLIP_MAX.value = bmax;
  }
}
