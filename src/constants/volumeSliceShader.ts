import { Matrix4, Texture, Uniform, UniformsGroup, Vector2, Vector3 } from "three";
import sliceVertexShader from "./shaders/slice.vert";
import sliceFragShader from "./shaders/slice.frag";

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
} as const;

export type SliceUniformName = keyof typeof SLICE_UNIFORM_DEFAULTS;
export type SliceUniformValueMap = { [K in SliceUniformName]: (typeof SLICE_UNIFORM_DEFAULTS)[K] };

const SLICE_UNIFORM_ORDER = Object.keys(SLICE_UNIFORM_DEFAULTS) as SliceUniformName[];

/** Samplers cannot live in a UBO; they remain standalone shader uniforms. */
export type SliceSamplerName = "textureAtlas" | "textureAtlasMask";

export type SliceSamplerUniforms = { [K in SliceSamplerName]: { value: Texture } };

export interface SliceShaderResources {
  /** The std140 uniform block, ready to pass to `ShaderMaterial.uniformsGroups`. */
  uniformsGroup: UniformsGroup;
  /** Standalone sampler uniforms, ready to pass to `ShaderMaterial.uniforms`. */
  samplerUniforms: SliceSamplerUniforms;
  /** Update a uniform inside the UBO by name. Silently no-ops on unknown names. */
  setBlockUniform: <K extends SliceUniformName>(name: K, value: SliceUniformValueMap[K] | number) => void;
  /** Update a sampler uniform by name. */
  setSamplerUniform: (name: SliceSamplerName, value: Texture) => void;
}

/**
 * Create the uniform resources used by the slice shader: a single std140
 * uniform block for all non-sampler uniforms, plus standalone sampler
 * uniforms for the textures.
 */
export const createSliceShaderResources = (): SliceShaderResources => {
  const group = new UniformsGroup();
  group.setName(SLICE_UNIFORM_BLOCK_NAME);

  const indexByName = new Map<SliceUniformName, number>();
  SLICE_UNIFORM_ORDER.forEach((name, i) => {
    // Clone reference values so each instance gets its own mutable defaults.
    const def = SLICE_UNIFORM_DEFAULTS[name];
    const value: Matrix4 | Vector2 | Vector3 | number =
      typeof def === "number" ? def : (def as Vector2 | Vector3).clone();
    group.add(new Uniform(value));
    indexByName.set(name, i);
  });

  const samplerUniforms: SliceSamplerUniforms = {
    textureAtlas: { value: new Texture() },
    textureAtlasMask: { value: new Texture() },
  };

  const setBlockUniform: SliceShaderResources["setBlockUniform"] = (name, value) => {
    const idx = indexByName.get(name);
    if (idx === undefined) {
      return;
    }
    const uniform = group.uniforms[idx] as Uniform;
    const current = uniform.value;
    if (typeof value === "number") {
      uniform.value = value;
    } else if (
      current !== null &&
      typeof current === "object" &&
      typeof (current as { copy?: unknown }).copy === "function"
    ) {
      // Mutate in place so three.js's per-uniform cache notices the change.
      (current as { copy: (v: unknown) => void }).copy(value);
    } else {
      uniform.value = value;
    }
  };

  const setSamplerUniform: SliceShaderResources["setSamplerUniform"] = (name, value) => {
    samplerUniforms[name].value = value;
  };

  return { uniformsGroup: group, samplerUniforms, setBlockUniform, setSamplerUniform };
};
