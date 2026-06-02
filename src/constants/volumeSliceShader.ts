import { Vector2, Vector3 } from "three";
import sliceVertexShader from "./shaders/slice.vert";
import sliceFragShader from "./shaders/slice.frag";
import { ShaderUniformResources } from "./ShaderUniformResources.js";

export const sliceVertexShaderSrc = sliceVertexShader;
export const sliceFragmentShaderSrc = sliceFragShader;

/**
 * The name of the GLSL uniform block (must match the `layout(std140) uniform ...`
 * declaration in slice.frag).
 */
export const SLICE_UNIFORM_BLOCK_NAME = "SliceUniforms";

/**
 * Names and default values of the uniforms packed into the slice shader's
 * uniform buffer object. The ORDER of entries here must match the order of
 * declarations inside the `layout(std140) uniform SliceUniforms { ... }`
 * block in slice.frag — three.js computes std140 offsets from this order.
 *
 * Note: three.js's UniformsGroup writes every numeric uniform as Float32, so
 * the GLSL block declares former int/bool uniforms (Z_SLICE,
 * interpolationEnabled) as `float`.
 */
const SLICE_UNIFORM_DEFAULTS = {
  AABB_CLIP_MIN: new Vector3(-0.5, -0.5, -0.5),
  maskAlpha: 1.0,
  AABB_CLIP_MAX: new Vector3(0.5, 0.5, 0.5),
  BRIGHTNESS: 0.0,
  flipVolume: new Vector3(1.0, 1.0, 1.0),
  SLICES: 50,
  ATLAS_DIMS: new Vector2(6, 6),
  textureRes: new Vector2(1.0, 1.0),
  GAMMA_MIN: 0.0,
  GAMMA_MAX: 1.0,
  GAMMA_SCALE: 1.0,
  Z_SLICE: 0,
  interpolationEnabled: 1,
};

const SLICE_SAMPLER_NAMES = ["textureAtlas", "textureAtlasMask"] as const;

export type SliceUniformName = keyof typeof SLICE_UNIFORM_DEFAULTS;
export type SliceUniformValueMap = typeof SLICE_UNIFORM_DEFAULTS;
export type SliceSamplerName = (typeof SLICE_SAMPLER_NAMES)[number];
export type SliceShaderResources = ShaderUniformResources<SliceUniformValueMap, SliceSamplerName>;

/**
 * Create the uniform resources used by the slice shader: a single std140
 * uniform block for all non-sampler uniforms, plus standalone sampler
 * uniforms for the textures.
 */
export const createSliceShaderResources = (): SliceShaderResources =>
  new ShaderUniformResources(SLICE_UNIFORM_BLOCK_NAME, SLICE_UNIFORM_DEFAULTS, SLICE_SAMPLER_NAMES);
