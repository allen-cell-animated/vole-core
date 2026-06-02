import { Texture, Uniform, UniformsGroup } from "three";

/**
 * The kinds of values supported inside a `UniformsGroup`. three.js writes
 * every scalar uniform as Float32, so what would naturally be `int` or `bool`
 * uniforms must be declared as `float` in the matching GLSL block and
 * compared against numeric thresholds in shader code.
 *
 * Object values (Vector2/3/4, Color, Matrix3/4, …) are expected to expose
 * `clone()` and `copy()`, which we rely on for default duplication and
 * in-place mutation. We don't encode that structurally in the type because
 * three.js's `copy` overloads are invariantly typed per class (e.g.
 * `Matrix4.copy(m: Matrix4): Matrix4`) which doesn't subtype a generic
 * `(v: unknown) => unknown`.
 */
export type BlockUniformDefault = number | object;

interface CopyLike {
  copy: (v: unknown) => unknown;
}
interface CloneLike {
  clone: () => unknown;
}

/**
 * Shared helper for shaders that pack all non-sampler uniforms into a single
 * std140 uniform block (via `UniformsGroup`) and keep samplers as standalone
 * uniforms.
 *
 * The ORDER of keys in `defaults` MUST match the order of declarations inside
 * the matching `layout(std140) uniform { ... }` block in the GLSL source —
 * three.js computes std140 offsets from this insertion order.
 *
 * Per-instance defaults are cloned, so a single frozen `defaults` object can
 * be shared across all instances of a shader.
 */
export class ShaderUniformResources<UMap extends Record<string, BlockUniformDefault>, SName extends string> {
  /** The std140 uniform block, ready to pass to `ShaderMaterial.uniformsGroups`. */
  readonly uniformsGroup: UniformsGroup;
  /** Standalone sampler uniforms, ready to pass to `ShaderMaterial.uniforms`. */
  readonly samplerUniforms: Record<SName, { value: Texture }>;

  private readonly indexByName: Map<keyof UMap & string, number>;

  constructor(blockName: string, defaults: UMap, samplerNames: readonly SName[]) {
    const group = new UniformsGroup();
    group.setName(blockName);

    this.indexByName = new Map();
    (Object.keys(defaults) as (keyof UMap & string)[]).forEach((name, i) => {
      const def = defaults[name];
      // Clone object defaults so each instance gets its own mutable values.
      const value = typeof def === "number" ? def : (def as unknown as CloneLike).clone();
      group.add(new Uniform(value));
      this.indexByName.set(name, i);
    });
    this.uniformsGroup = group;

    const samplers = {} as Record<SName, { value: Texture }>;
    for (const name of samplerNames) {
      samplers[name] = { value: new Texture() };
    }
    this.samplerUniforms = samplers;
  }

  /** Update a uniform inside the UBO by name. Silently no-ops on unknown names. */
  setBlockUniform<K extends keyof UMap & string>(name: K, value: UMap[K] | number): void {
    const idx = this.indexByName.get(name);
    if (idx === undefined) {
      return;
    }
    const uniform = this.uniformsGroup.uniforms[idx] as Uniform;
    const current = uniform.value;
    if (typeof value === "number") {
      uniform.value = value;
    } else if (
      current !== null &&
      typeof current === "object" &&
      typeof (current as Partial<CopyLike>).copy === "function"
    ) {
      // Mutate in place so three.js's per-uniform cache notices the change.
      (current as CopyLike).copy(value);
    } else {
      uniform.value = value;
    }
  }

  /** Update a sampler uniform by name. */
  setSamplerUniform(name: SName, value: Texture): void {
    this.samplerUniforms[name].value = value;
  }
}
