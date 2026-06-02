import { Matrix4, Vector2, Vector3 } from "three";
import rayMarchVertexShader from "./shaders/raymarch.vert";
import rayMarchFragmentShader from "./shaders/raymarch.frag";
import { ShaderUniformResources } from "./ShaderUniformResources.js";

export const rayMarchingVertexShaderSrc = rayMarchVertexShader;
export const rayMarchingFragmentShaderSrc = rayMarchFragmentShader;

/**
 * The name of the GLSL uniform block (must match the `layout(std140) uniform ...`
 * declaration in raymarch.frag).
 */
export const RAY_MARCH_UNIFORM_BLOCK_NAME = "RayMarchUniforms";

/**
 * Names and default values of the uniforms packed into the ray-march shader's
 * uniform buffer object. The ORDER of entries here must match the order of
 * declarations inside the `layout(std140) uniform RayMarchUniforms { ... }`
 * block in raymarch.frag — three.js computes std140 offsets from this order.
 *
 * Note: three.js's UniformsGroup writes every numeric uniform as Float32, so
 * the GLSL block declares former int/bool uniforms (BREAK_STEPS,
 * usingPositionTexture, maxProject, interpolationEnabled) as `float`.
 */
const RAY_MARCH_UNIFORM_DEFAULTS = {
  inverseModelViewMatrix: new Matrix4(),
  inverseProjMatrix: new Matrix4(),
  AABB_CLIP_MIN: new Vector3(-0.5, -0.5, -0.5),
  CLIP_NEAR: 0.1,
  AABB_CLIP_MAX: new Vector3(0.5, 0.5, 0.5),
  CLIP_FAR: 20.0,
  flipVolume: new Vector3(1.0, 1.0, 1.0),
  maskAlpha: 1.0,
  volumeScale: new Vector3(1.0, 1.0, 1.0),
  BRIGHTNESS: 0.0,
  iResolution: new Vector2(100, 100),
  textureRes: new Vector2(1.0, 1.0),
  ATLAS_DIMS: new Vector2(6, 6),
  DENSITY: 1.0,
  GAMMA_MIN: 0.0,
  GAMMA_MAX: 1.0,
  GAMMA_SCALE: 1.0,
  SLICES: 50,
  isOrtho: 0.0,
  orthoThickness: 1.0,
  // needs to come from ThreeJsPanel's setting
  orthoScale: 0.5,
  BREAK_STEPS: 128,
  usingPositionTexture: 0,
  maxProject: 0,
  interpolationEnabled: 1,
};

const RAY_MARCH_SAMPLER_NAMES = ["textureAtlas", "textureAtlasMask", "textureDepth"] as const;

export type RayMarchUniformName = keyof typeof RAY_MARCH_UNIFORM_DEFAULTS;
export type RayMarchUniformValueMap = typeof RAY_MARCH_UNIFORM_DEFAULTS;
export type RayMarchSamplerName = (typeof RAY_MARCH_SAMPLER_NAMES)[number];
export type RayMarchShaderResources = ShaderUniformResources<RayMarchUniformValueMap, RayMarchSamplerName>;

/**
 * Create the uniform resources used by the ray-march shader: a single
 * std140 uniform block for all non-sampler uniforms, plus standalone sampler
 * uniforms for the textures.
 */
export const createRayMarchShaderResources = (): RayMarchShaderResources =>
  new ShaderUniformResources(RAY_MARCH_UNIFORM_BLOCK_NAME, RAY_MARCH_UNIFORM_DEFAULTS, RAY_MARCH_SAMPLER_NAMES);
