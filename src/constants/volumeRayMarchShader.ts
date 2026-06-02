import { Matrix4, Texture, Uniform, UniformsGroup, Vector2, Vector3 } from "three";
import rayMarchVertexShader from "./shaders/raymarch.vert";
import rayMarchFragmentShader from "./shaders/raymarch.frag";

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
} as const;

export type RayMarchUniformName = keyof typeof RAY_MARCH_UNIFORM_DEFAULTS;
export type RayMarchUniformValueMap = { [K in RayMarchUniformName]: (typeof RAY_MARCH_UNIFORM_DEFAULTS)[K] };

const RAY_MARCH_UNIFORM_ORDER = Object.keys(RAY_MARCH_UNIFORM_DEFAULTS) as RayMarchUniformName[];

/** Samplers cannot live in a UBO; they remain standalone shader uniforms. */
export type RayMarchSamplerName = "textureAtlas" | "textureAtlasMask" | "textureDepth";

export type RayMarchSamplerUniforms = { [K in RayMarchSamplerName]: { value: Texture } };

export interface RayMarchShaderResources {
  /** The std140 uniform block, ready to pass to `ShaderMaterial.uniformsGroups`. */
  uniformsGroup: UniformsGroup;
  /** Standalone sampler uniforms, ready to pass to `ShaderMaterial.uniforms`. */
  samplerUniforms: RayMarchSamplerUniforms;
  /** Update a uniform inside the UBO by name. */
  setBlockUniform: <K extends RayMarchUniformName>(name: K, value: RayMarchUniformValueMap[K] | number) => void;
  /** Update a sampler uniform by name. */
  setSamplerUniform: (name: RayMarchSamplerName, value: Texture) => void;
}

/**
 * Create the uniform resources used by the ray-march shader: a single
 * std140 uniform block for all non-sampler uniforms, plus standalone sampler
 * uniforms for the textures.
 */
export const createRayMarchShaderResources = (): RayMarchShaderResources => {
  const group = new UniformsGroup();
  group.setName(RAY_MARCH_UNIFORM_BLOCK_NAME);

  const indexByName = new Map<RayMarchUniformName, number>();
  RAY_MARCH_UNIFORM_ORDER.forEach((name, i) => {
    // Clone reference values so each instance gets its own mutable defaults.
    const def = RAY_MARCH_UNIFORM_DEFAULTS[name];
    const value: Matrix4 | Vector2 | Vector3 | number =
      typeof def === "number" ? def : (def as Matrix4 | Vector2 | Vector3).clone();
    group.add(new Uniform(value));
    indexByName.set(name, i);
  });

  const samplerUniforms: RayMarchSamplerUniforms = {
    textureAtlas: { value: new Texture() },
    textureAtlasMask: { value: new Texture() },
    textureDepth: { value: new Texture() },
  };

  const setBlockUniform: RayMarchShaderResources["setBlockUniform"] = (name, value) => {
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

  const setSamplerUniform: RayMarchShaderResources["setSamplerUniform"] = (name, value) => {
    samplerUniforms[name].value = value;
  };

  return { uniformsGroup: group, samplerUniforms, setBlockUniform, setSamplerUniform };
};
