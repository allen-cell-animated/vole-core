import { Vector2, Vector3, Matrix4, Texture } from "three";
import rayMarchVertexShader from "./shaders/raymarch.vert";
import rayMarchFragmentShader from "./shaders/volumePick.frag";

export const pickVertexShaderSrc = rayMarchVertexShader;
export const pickFragmentShaderSrc = rayMarchFragmentShader;

export const pickShaderUniforms = () => {
  return {
    iResolution: {
      type: "v2",
      value: new Vector2(100, 100),
    },
    textureRes: {
      type: "v2",
      value: new Vector2(1.0, 1.0),
    },
    ATLAS_DIMS: {
      type: "v2",
      value: new Vector2(6, 6),
    },
    AABB_CLIP_MIN: {
      type: "v3",
      value: new Vector3(-0.5, -0.5, -0.5),
    },
    CLIP_NEAR: {
      type: "f",
      value: 0.1,
    },
    AABB_CLIP_MAX: {
      type: "v3",
      value: new Vector3(0.5, 0.5, 0.5),
    },
    CLIP_FAR: {
      type: "f",
      value: 20.0,
    },
    textureAtlas: {
      type: "t",
      value: new Texture(),
    },
    textureDepth: {
      type: "t",
      value: new Texture(),
    },
    usingPositionTexture: {
      type: "i",
      value: 0,
    },
    BREAK_STEPS: {
      type: "i",
      value: 128,
    },
    SLICES: {
      type: "f",
      value: 50,
    },
    isOrtho: {
      type: "f",
      value: 0.0,
    },
    orthoThickness: {
      type: "f",
      value: 1.0,
    },
    orthoScale: {
      type: "f",
      value: 0.5, // needs to come from ThreeJsPanel's setting
    },
    maxProject: {
      type: "i",
      value: 0,
    },
    flipVolume: {
      type: "v3",
      value: new Vector3(1.0, 1.0, 1.0),
    },
    volumeScale: {
      type: "v3",
      value: new Vector3(1.0, 1.0, 1.0),
    },
    inverseModelViewMatrix: {
      type: "m4",
      value: new Matrix4(),
    },
    inverseProjMatrix: {
      type: "m4",
      value: new Matrix4(),
    },
  };
};
