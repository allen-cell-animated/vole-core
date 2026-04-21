import { Matrix4, type Node, Texture, Vector2, Vector3 } from "three/webgpu";
import {
  Break,
  cameraProjectionMatrix,
  clamp,
  dot,
  float,
  floor,
  Fn,
  fract,
  If,
  int,
  length,
  Loop,
  max,
  min,
  mix,
  mod,
  modelViewMatrix,
  mul,
  normalize,
  positionGeometry,
  pow,
  property,
  screenCoordinate,
  select,
  sin,
  sub,
  texture,
  uniform,
  varying,
  vec2,
  vec3,
  vec4,
} from "three/tsl";

type Args<T> = { [K in keyof T]: T[K] extends string ? Node<T[K]> : T[K] };

export const raymarchNode = () => {
  const uniforms = {
    iResolution: uniform(new Vector2(100, 100)),
    CLIP_NEAR: uniform(0.1),
    CLIP_FAR: uniform(20.0),
    maskAlpha: uniform(1.0),
    BRIGHTNESS: uniform(0.0),
    DENSITY: uniform(1.0),
    GAMMA_MIN: uniform(0.0),
    GAMMA_MAX: uniform(1.0),
    GAMMA_SCALE: uniform(1.0),
    BREAK_STEPS: uniform(128),
    ATLAS_DIMS: uniform(new Vector2(6, 6)),
    SLICES: uniform(50),
    isOrtho: uniform(0.0),
    orthoThickness: uniform(1.0),
    orthoScale: uniform(0.5), // needs to come from ThreeJsPanel's setting
    AABB_CLIP_MIN: uniform(new Vector3(-0.5, -0.5, -0.5)),
    AABB_CLIP_MAX: uniform(new Vector3(0.5, 0.5, 0.5)),
    inverseModelViewMatrix: uniform(new Matrix4()),
    inverseProjMatrix: uniform(new Matrix4()),
    usingPositionTexture: uniform(0),
    maxProject: uniform(0),
    interpolationEnabled: uniform(true),
    flipVolume: uniform(new Vector3(1.0, 1.0, 1.0)),
    volumeScale: uniform(new Vector3(1.0, 1.0, 1.0)),
    textureRes: uniform(new Vector2(1.0, 1.0)),
    textureAtlas: texture(new Texture()),
    textureAtlasMask: texture(new Texture()),
    textureDepth: texture(new Texture()),
  };

  const pObj = varying(vec3(), "pObj");

  const vertex = Fn(
    () => {
      pObj.assign(positionGeometry);
      return cameraProjectionMatrix.mul(modelViewMatrix).mul(vec4(positionGeometry, 1.0));
    },
    { return: "vec4" }
  );

  const rand = Fn(
    ([co]: Args<["vec2"]>) => {
      const threadId = screenCoordinate.x.div(screenCoordinate.y.oneMinus().add(1.0));
      const bigVal = threadId.mul(1299721.0).div(911.0);
      const smallVal = vec2(threadId.mul(7927.0).div(577.0), threadId.mul(104743.0).div(1039.0));

      return fract(sin(dot(co, smallVal)).mul(bigVal));
    },
    { co: "vec2", return: "float" }
  );

  const luma2Alpha = Fn(
    ([color, vmin, vmax, c]: Args<["vec4", "float", "float", "float"]>) => {
      const x = dot(color.rgb, vec3(0.2125, 0.7154, 0.0721));

      const xi = x.sub(vmin).div(vmax.sub(vmin));
      xi.assign(clamp(xi, 0.0, 1.0));
      const y = pow(xi, c);
      y.assign(clamp(y, 0.0, 1.0));
      color[3].assign(y);

      return color;
    },
    { color: "vec4", vmin: "float", vmax: "float", c: "float", return: "vec4" }
  );

  const offsetFrontBack = Fn(
    ([t]: Args<["float"]>) => {
      const a = int(t);
      const ax = int(uniforms.ATLAS_DIMS.x);
      const os = vec2(float(a.sub(a.div(ax).mul(ax))), float(a.div(ax))).div(uniforms.ATLAS_DIMS);

      return clamp(os, vec2(0.0), vec2(1.0).sub(vec2(1.0).div(uniforms.ATLAS_DIMS)));
    },
    { t: "float", return: "vec2" }
  );

  const sampleAtlasLinear = Fn(
    ([pos]: Args<["vec4"]>) => {
      const bounds = float(
        pos[0]
          .greaterThanEqual(0.0)
          .and(pos[0].lessThanEqual(1.0))
          .and(pos[1].greaterThanEqual(0.0))
          .and(pos[1].lessThanEqual(1.0))
          .and(pos[2].greaterThanEqual(0.0))
          .and(pos[2].lessThanEqual(1.0))
      );
      const nSlices = float(uniforms.SLICES);

      // get location within atlas tile
      // TODO: get loc1 which follows ray to next slice along ray direction
      // when flipvolume = 1:  pos
      // when flipvolume = -1: 1-pos

      const loc0 = pos.xy.sub(0.5).mul(uniforms.flipVolume.xy).add(0.5).div(uniforms.ATLAS_DIMS);

      // loc ranges from 0 to 1/ATLAS_DIMS
      // shrink loc0 to within one half edge texel - so as not to sample across edges of tiles.

      loc0.assign(
        vec2(0.5)
          .div(uniforms.textureRes)
          .add(loc0.mul(vec2(1.0).sub(uniforms.ATLAS_DIMS.div(uniforms.textureRes))))
      );

      // interpolate between two slices

      const z = pos.z.mul(nSlices.sub(1.0));
      const z0 = floor(z);
      const t = z.sub(z0);

      //mod(z, 1.0);

      const z1 = min(z0.add(1.0), nSlices.sub(1.0));

      // flipped:

      If(uniforms.flipVolume.z.equal(-1.0), () => {
        z0.assign(nSlices.sub(z0).sub(1.0));
        z1.assign(nSlices.sub(z1).sub(1.0));
        t.assign(sub(1.0, t));
      });

      // get slice offsets in texture atlas
      const o0 = offsetFrontBack(z0).add(loc0);
      const o1 = offsetFrontBack(z1).add(loc0);
      const slice0Color = uniforms.textureAtlas.sample(o0);
      const slice1Color = uniforms.textureAtlas.sample(o1);

      // NOTE we could premultiply the mask in the fuse function,
      // but that is slower to update the maskAlpha value than here in the shader.
      // it is a memory vs perf tradeoff.  Do users really need to update the maskAlpha at realtime speed?
      const slice0Mask = uniforms.textureAtlasMask.sample(o0).x;
      const slice1Mask = uniforms.textureAtlasMask.sample(o1).x;

      // or use max for conservative 0 or 1 masking?
      const maskVal = mix(slice0Mask, slice1Mask, t);

      // take mask from 0..1 to alpha..1
      maskVal.assign(mix(maskVal, 1.0, uniforms.maskAlpha));
      const retval = mix(slice0Color, slice1Color, t);

      // only mask the rgb, not the alpha(?)
      retval.rgb.mulAssign(maskVal);

      return bounds.mul(retval);
    },
    { pos: "vec4", return: "vec4" }
  );

  const sampleAtlasNearest = Fn(
    ([pos]: Args<["vec4"]>) => {
      const bounds = float(
        pos[0]
          .greaterThanEqual(0.0)
          .and(pos[0].lessThanEqual(1.0))
          .and(pos[1].greaterThanEqual(0.0))
          .and(pos[1].lessThanEqual(1.0))
          .and(pos[2].greaterThanEqual(0.0))
          .and(pos[2].lessThanEqual(1.0))
      );
      const nSlices = float(uniforms.SLICES);
      const loc0 = pos.xy.sub(0.5).mul(uniforms.flipVolume.xy).add(0.5).div(uniforms.ATLAS_DIMS);

      // No interpolation - sample just one slice at a pixel center.
      // Ideally this would be accomplished in part by switching this texture to linear
      //   filtering, but three makes this difficult to do through a WebGLRenderTarget.

      loc0.assign(floor(loc0.mul(uniforms.textureRes)).div(uniforms.textureRes));
      loc0.addAssign(vec2(0.5).div(uniforms.textureRes));
      const z = min(floor(pos.z.mul(nSlices)), nSlices.sub(1.0));

      If(uniforms.flipVolume.z.equal(-1.0), () => {
        z.assign(nSlices.sub(z).sub(1.0));
      });

      const o = offsetFrontBack(z).add(loc0);
      const voxelColor = uniforms.textureAtlas.sample(o);

      // Apply mask

      const voxelMask = uniforms.textureAtlasMask.sample(o).x;
      voxelMask.assign(mix(voxelMask, 1.0, uniforms.maskAlpha));
      voxelColor.rgb.mulAssign(voxelMask);

      return bounds.mul(voxelColor);
    },
    { pos: "vec4", return: "vec4" }
  );

  const intersectBox = Fn(
    ([rO, rD, boxMin, boxMax, tnear, tfar]: Args<["vec3", "vec3", "vec3", "vec3", "float", "float"]>) => {
      const tfarVar = tfar.toVar();
      const tnearVar = tnear.toVar();

      // compute intersection of ray with all six bbox planes

      const invR = vec3(1.0, 1.0, 1.0).div(rD);
      const tbot = invR.mul(boxMin.sub(rO));
      const ttop = invR.mul(boxMax.sub(rO));

      // re-order intersections to find smallest and largest on each axis

      const tmin = min(ttop, tbot);
      const tmax = max(ttop, tbot);

      // find the largest tmin and the smallest tmax

      const largestTmin = max(max(tmin.x, tmin.y), tmin.z);
      const smallestTmax = min(min(tmax.x, tmax.y), tmax.z);
      tnearVar.assign(largestTmin);
      tfarVar.assign(smallestTmax);

      // use >= here?

      return smallestTmax.greaterThan(largestTmin);
    },
    { rO: "vec3", rD: "vec3", boxMin: "vec3", boxMax: "vec3", tnear: "float", tfar: "float", return: "bool" }
  );

  const accumulate = Fn(
    ([col, s, c]: Args<["vec4", "float", "vec4"]>) => {
      const cVar = c.toVar();
      const colVar = col.toVar();

      const stepScale = sub(1.0, pow(sub(1.0, colVar.w), s));
      colVar.w.assign(stepScale);
      colVar.xyz.mulAssign(colVar.w);
      colVar.assign(clamp(colVar, 0.0, 1.0));
      cVar.assign(sub(1.0, cVar.w).mul(colVar).add(cVar));
      return cVar;
    },
    { col: "vec4", s: "float", c: "vec4", return: "vec4" }
  );

  const integrateVolume = Fn(
    ([eyeO, eyeD, tnear, tfar, clipNear, clipFar]: Args<["vec4", "vec4", "float", "float", "float", "float"]>) => {
      const C = vec4(0.0);

      // march along ray from front to back, accumulating color
      // estimate step length

      const maxSteps = int(512);

      // modify the 3 components of eye_d by volume scale

      const scaledSteps = float(uniforms.BREAK_STEPS).mul(length(eyeD.xyz.div(uniforms.volumeScale)));
      const csteps = clamp(float(scaledSteps), 1.0, float(maxSteps));
      const invstep = tfar.sub(tnear).div(csteps);

      // special-casing the single slice to remove the random ray dither.
      // this removes a Moire pattern visible in single slice images, which we want to view as 2D images as best we can.

      const r = select(uniforms.SLICES.equal(1.0), 0.0, rand(eyeD.xy));

      // if ortho and clipped, make step size smaller so we still get same number of steps

      const tstep = invstep.mul(uniforms.orthoThickness);
      const tfarsurf = r.mul(tstep);
      const overflow = mod(tfarsurf.sub(tfar), tstep);

      // random dithering offset

      const t = tnear.add(overflow);
      t.addAssign(r.mul(tstep));

      // random dithering offset

      const tdist = float(0.0);
      const numSteps = int(0);
      const pos = property("vec4"),
        col = property("vec4");

      // We need to be able to scale the alpha contrib with number of ray steps,
      // in order to make the final color invariant to the step size(?)
      // use maxSteps (a constant) as the numerator... Not sure if this is sound.

      const s = mul(0.5, float(maxSteps)).div(csteps);

      Loop({ start: 0, end: maxSteps }, ({ i }) => {
        pos.assign(eyeO.add(eyeD.mul(t)));

        // !!! assume box bounds are -0.5 .. 0.5.  pos = (pos-min)/(max-min)
        // scaling is handled by model transform and already accounted for before we get here.
        // AABB clip is independent of this and is only used to determine tnear and tfar.

        pos.xyz.assign(pos.xyz.sub(-0.5).div(0.5 - -0.5));

        //0.5 * (pos + 1.0); // map position from [boxMin, boxMax] to [0, 1] coordinates

        const col = select(uniforms.interpolationEnabled, sampleAtlasLinear(pos), sampleAtlasNearest(pos));

        If(uniforms.maxProject.notEqual(0), () => {
          col.xyz.mulAssign(uniforms.BRIGHTNESS);
          C.assign(max(col, C));
        }).Else(() => {
          col.assign(luma2Alpha(col, uniforms.GAMMA_MIN, uniforms.GAMMA_MAX, uniforms.GAMMA_SCALE));
          col.xyz.mulAssign(uniforms.BRIGHTNESS);

          // for practical use the density only matters for regular volume integration

          col.w.mulAssign(uniforms.DENSITY);
          C.assign(accumulate(col, s, C));
        });

        t.addAssign(tstep);
        numSteps.assign(i);

        If(t.greaterThan(tfar).or(t.greaterThan(tnear.add(clipFar))), () => {
          Break();
        });

        If(C.w.greaterThan(1.0), () => {
          Break();
        });
      });

      return C;
    },
    { eyeO: "vec4", eyeD: "vec4", tnear: "float", tfar: "float", clipNear: "float", clipFar: "float", return: "vec4" }
  );

  const fragment = Fn(
    () => {
      const result = vec4(0.0).toVar();
      const vUv = vec2(screenCoordinate.x, screenCoordinate.y.oneMinus()).div(uniforms.iResolution.xy);
      const eyeRayO = property("vec3"),
        eyeRayD = property("vec3");

      If(uniforms.isOrtho.equal(0.0), () => {
        // for perspective rays:
        // world space camera coordinates
        // transform to object space

        eyeRayO.assign(uniforms.inverseModelViewMatrix.mul(vec4(0.0, 0.0, 0.0, 1.0)).xyz);
        eyeRayD.assign(normalize(pObj.sub(eyeRayO)));
      }).Else(() => {
        // for ortho rays:

        const zDist = float(2.0);
        eyeRayD.assign(uniforms.inverseModelViewMatrix.mul(vec4(0.0, 0.0, zDist.negate(), 0.0)).xyz);
        const rayO = vec4(mul(2.0, vUv).sub(1.0), 1.0, 1.0);
        rayO.xy.mulAssign(uniforms.orthoScale);
        rayO.x.mulAssign(uniforms.iResolution.x.div(uniforms.iResolution.y));
        eyeRayO.assign(uniforms.inverseModelViewMatrix.mul(rayO).xyz);
      });

      // -0.5..0.5 is full box. AABB_CLIP lets us clip to a box shaped ROI to look at
      // I am applying it here at the earliest point so that the ray march does
      // not waste steps.  For general shaped ROI, this has to be handled more
      // generally (obviously)

      const boxMin = uniforms.AABB_CLIP_MIN;
      const boxMax = uniforms.AABB_CLIP_MAX;
      const tnear = property("float"),
        tfar = property("float");
      const hit = intersectBox(eyeRayO, eyeRayD, boxMin, boxMax, tnear, tfar);

      // return background color if ray misses the cube
      // is this safe to do when there is other geometry / gObjects drawn?
      If(hit, () => {
        const clipNear = float(0.0);

        const clipFar = float(10000.0);

        // Sample the depth/position texture
        // If this is a depth texture, the r component is a depth value. If this is a position texture,
        // the xyz components are a view space position and w is 1.0 iff there's a mesh at this fragment.

        // For some reason, without `.xyzw.toVar(...)` here, TSL assumes we just want the x component of the result.
        //   I don't know why!
        const meshPosSample = uniforms.textureDepth.sample(vUv).xyzw.toVar("meshPosSample");

        // Note: we make a different check for whether a mesh is present with depth vs. position textures.
        // Here's the check for depth textures:

        const hasDepthValue = uniforms.usingPositionTexture.equal(0).and(meshPosSample.r.lessThan(1.0));

        // If there's a depth-contributing mesh at this fragment, we may need to terminate the ray early

        If(hasDepthValue.or(uniforms.usingPositionTexture.equal(1).and(meshPosSample.a.greaterThan(0.0))), () => {
          If(hasDepthValue, () => {
            // We're working with a depth value, so we need to convert back to view space position
            // Get a projection space position from depth and uv, and unproject back to view space

            const meshProj = vec4(vUv.mul(2.0).sub(1.0), meshPosSample.r.mul(2.0).sub(1.0), 1.0);
            const meshView = uniforms.inverseProjMatrix.mul(meshProj);
            meshPosSample.assign(vec4(meshView.xyz.div(meshView.w), 1.0));
          });

          // Transform the mesh position to object space

          const meshObj = uniforms.inverseModelViewMatrix.mul(meshPosSample).toVar("meshObj");

          // Derive a t value for the mesh intersection
          // NOTE: divides by 0 when `eyeRay_d.z` is 0. Could be mitigated by picking another component
          //   to derive with when z is 0, but I found this was rare enough in practice to be acceptable.

          const tMesh = meshObj.z.sub(eyeRayO.z).div(eyeRayD.z);

          If(tMesh.lessThan(tfar), () => {
            clipFar.assign(tMesh.sub(tnear));
          });
        });

        //tnear and tfar are intersections of box

        const C = integrateVolume(vec4(eyeRayO, 1.0), vec4(eyeRayD, 0.0), tnear, tfar, clipNear, clipFar);
        result.assign(clamp(C, 0.0, 1.0));
      });
      return result;
    },
    { return: "vec4" }
  );

  return { vertex, fragment, uniforms };
};
