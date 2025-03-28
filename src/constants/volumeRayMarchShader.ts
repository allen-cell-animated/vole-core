import { Vector2, Vector3, Matrix4, Texture } from "three";
import rayMarchVertexShader from "./shaders/raymarch.vert";
import rayMarchFragmentShader from "./shaders/raymarch.frag";

export const rayMarchingVertexShaderSrc = rayMarchVertexShader;
export const rayMarchingFragmentShaderSrc = rayMarchFragmentShader;

export const rayMarchingShaderUniforms = () => {
  return {
    iResolution: {
      type: "v2",
      value: new Vector2(100, 100),
    },
    CLIP_NEAR: {
      type: "f",
      value: 0.1,
    },
    CLIP_FAR: {
      type: "f",
      value: 20.0,
    },
    maskAlpha: {
      type: "f",
      value: 1.0,
    },
    BRIGHTNESS: {
      type: "f",
      value: 0.0,
    },
    DENSITY: {
      type: "f",
      value: 1.0,
    },
    GAMMA_MIN: {
      type: "f",
      value: 0.0,
    },
    GAMMA_MAX: {
      type: "f",
      value: 1.0,
    },
    GAMMA_SCALE: {
      type: "f",
      value: 1.0,
    },
    BREAK_STEPS: {
      type: "i",
      value: 128,
    },
    ATLAS_DIMS: {
      type: "v2",
      value: new Vector2(6, 6),
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
    AABB_CLIP_MIN: {
      type: "v3",
      value: new Vector3(-0.5, -0.5, -0.5),
    },
    AABB_CLIP_MAX: {
      type: "v3",
      value: new Vector3(0.5, 0.5, 0.5),
    },
    inverseModelViewMatrix: {
      type: "m4",
      value: new Matrix4(),
    },
    inverseProjMatrix: {
      type: "m4",
      value: new Matrix4(),
    },
    textureAtlas: {
      type: "t",
      value: new Texture(),
    },
    textureAtlasMask: {
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
    maxProject: {
      type: "i",
      value: 0,
    },
    interpolationEnabled: {
      type: "b",
      value: true,
    },
    flipVolume: {
      type: "v3",
      value: new Vector3(1.0, 1.0, 1.0),
    },
    volumeScale: {
      type: "v3",
      value: new Vector3(1.0, 1.0, 1.0),
    },
    textureRes: {
      type: "v2",
      value: new Vector2(1.0, 1.0),
    },
  };
};
