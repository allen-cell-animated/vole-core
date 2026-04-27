import { float, int, ivec2, screenCoordinate, texture, textureLoad, uniform, vec2, vec4 } from "three/tsl";
import type { TextureNode } from "three/webgpu";

export const fuseNode = (srcTexture: TextureNode<"vec4" | "ivec4" | "uvec4">) => {
  const uniforms = {
    lut: texture(),
    lutMinMax: uniform(vec2()),
    srcTexture,
  };

  const vUv = ivec2(int(screenCoordinate.x), int(screenCoordinate.y.oneMinus()));
  const intensity = textureLoad(uniforms.srcTexture, vUv, 0).r;
  const lutRange = float(uniforms.lutMinMax.y.sub(uniforms.lutMinMax.x));
  const iLookup = float(float(intensity).sub(uniforms.lutMinMax.x).div(lutRange));
  const pix = uniforms.lut.sample(vec2(iLookup, 0.5)).toVar("pix");
  const fragment = vec4(pix.xyz.mul(pix.w), pix.w);

  return { uniforms, fragment };
};
