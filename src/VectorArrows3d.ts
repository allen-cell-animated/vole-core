import {
  InstancedMesh,
  CylinderGeometry,
  ConeGeometry,
  Object3D,
  Vector3,
  MeshBasicMaterial,
  Color,
  DynamicDrawUsage,
  Matrix4,
  BufferGeometry,
} from "three";
import { IDrawableObject } from "./types";
import BaseDrawableMeshObject from "./BaseDrawableMeshObject";
import { MESH_NO_PICK_OCCLUSION_LAYER } from "./ThreeJsPanel";

const DEFAULT_DIAMETER = 0.002;

// Unscaled arrowhead dimensions. These will be scaled by the diameter.
const HEAD_BASE_RADIUS = 1.5;
const HEAD_BASE_HEIGHT = 4;

const DEFAULT_INSTANCE_COUNT = 256;

/**
 * A drawable vector arrow field, which uses instanced meshes for performance.
 */
export default class VectorArrows3d extends BaseDrawableMeshObject implements IDrawableObject {
  /**
   * Scale of this object in world coordinates, when unscaled. Used to
   * compensate for parent transforms in order to keep arrow meshes from being
   * distorted.
   */
  protected worldScale: Vector3;

  private headInstancedMesh: InstancedMesh;
  private shaftInstancedMesh: InstancedMesh;

  private maxInstanceCount: number;
  private positions: Float32Array | null;
  private deltas: Float32Array | null;
  private colors: Float32Array | null;
  private diameter: Float32Array;

  // Temporary calculation objects. Optimization taken from three.js examples.
  private tempDst: Vector3;
  private tempScale: Vector3;
  private tempMatrix: Object3D;

  constructor() {
    super();
    this.worldScale = new Vector3(1, 1, 1);

    this.meshPivot.layers.set(MESH_NO_PICK_OCCLUSION_LAYER);

    this.maxInstanceCount = DEFAULT_INSTANCE_COUNT;
    const { headMesh: headMesh, shaftMesh: shaftMesh } = this.initInstancedMeshes(DEFAULT_INSTANCE_COUNT);
    this.headInstancedMesh = headMesh;
    this.shaftInstancedMesh = shaftMesh;
    this.headInstancedMesh.count = 0;
    this.shaftInstancedMesh.count = 0;

    this.positions = null;
    this.deltas = null;
    this.colors = null;
    this.diameter = new Float32Array([DEFAULT_DIAMETER]);

    this.tempDst = new Vector3();
    this.tempScale = new Vector3();
    this.tempMatrix = new Object3D();

    this.updateTransform();
  }

  /**
   * Returns (unscaled) buffer geometry for the head and shaft parts of the
   * arrow.
   * @returns
   * - `head`: BufferGeometry for the arrowhead, a cone pointing along the +Z
   *   axis, with the pivot at the tip of the cone. Height and radius are based
   *   on constant values (`HEAD_BASE_HEIGHT` and `HEAD_BASE_RADIUS`).
   * - `shaft`: BufferGeometry for the cylindrical arrow shaft. The cylinder
   *   points along the +Z axis, with the pivot at the base of the cylinder.
   *   Height is 1 and diameter is 1.
   *
   * ```txt
   *  ^ +Z axis ^
   *  _____      x
   * |     |    / \
   * |     |   /   \
   *  --x--   /-----\
   *
   *   x = pivot (0,0,0)
   * ```
   */
  private static generateGeometry(): { head: BufferGeometry; shaft: BufferGeometry } {
    // TODO: Currently the shape of the arrow head is fixed. Allow configuring
    // this in the future?
    const cylinderGeometry = new CylinderGeometry(0.5, 0.5, 1, 8, 1, false);
    const coneRadius = HEAD_BASE_RADIUS;
    const coneHeight = HEAD_BASE_HEIGHT;
    const coneGeometry = new ConeGeometry(coneRadius, coneHeight, 12);

    // Rotate both to point along +Z axis
    const rotateToPositiveZ = new Matrix4().makeRotationX(Math.PI / 2);
    // Change cone pivot to be at the tip.
    const coneTranslation = new Matrix4().makeTranslation(0, 0, -coneHeight / 2);
    coneGeometry.applyMatrix4(coneTranslation.multiply(rotateToPositiveZ));
    // Change cylinder pivot to be at the base.
    const cylinderTranslation = new Matrix4().makeTranslation(0, 0, 0.5);
    cylinderGeometry.applyMatrix4(cylinderTranslation.multiply(rotateToPositiveZ));

    return { head: coneGeometry, shaft: cylinderGeometry };
  }

  /**
   * Create new instanced meshes with the specified instance count, and adds
   * them to the mesh pivot and internal meshes array for future cleanup.
   *
   * If calling outside of the constructor, be sure to call `cleanup()` first.
   */
  private initInstancedMeshes(instanceCount: number): {
    headMesh: InstancedMesh;
    shaftMesh: InstancedMesh;
  } {
    this.cleanup();
    this.meshPivot.clear();
    const basicMaterial = new MeshBasicMaterial({ color: "#fff" });
    const { head: headGeometry, shaft: shaftGeometry } = VectorArrows3d.generateGeometry();

    const headMesh = new InstancedMesh(headGeometry, basicMaterial, instanceCount);
    const shaftMesh = new InstancedMesh(shaftGeometry, basicMaterial, instanceCount);
    headMesh.layers.set(MESH_NO_PICK_OCCLUSION_LAYER);
    shaftMesh.layers.set(MESH_NO_PICK_OCCLUSION_LAYER);
    headMesh.frustumCulled = false;
    shaftMesh.frustumCulled = false;
    headMesh.instanceMatrix.setUsage(DynamicDrawUsage);
    shaftMesh.instanceMatrix.setUsage(DynamicDrawUsage);

    this.addChildMesh(headMesh);
    this.addChildMesh(shaftMesh);

    return { headMesh, shaftMesh };
  }

  private increaseInstanceCountMax(instanceCount: number): void {
    // Max instance count is set when instanced meshes are created. If we need
    // to increase the max, we need to recreate the instanced meshes.
    let newInstanceCount = this.maxInstanceCount;
    while (newInstanceCount < instanceCount) {
      newInstanceCount *= 2;
    }
    // Delete existing meshes
    this.cleanup();
    const { headMesh, shaftMesh } = this.initInstancedMeshes(newInstanceCount);
    this.headInstancedMesh = headMesh;
    this.shaftInstancedMesh = shaftMesh;
    this.maxInstanceCount = newInstanceCount;
  }

  public setScale(scale: Vector3): void {
    if (scale !== this.scale) {
      this.updateTransform();
      this.scale.copy(scale);
      if (this.positions && this.deltas) {
        // Update arrows
        this.setArrowData(this.positions, this.deltas);
      }
    }
  }

  /**
   * Called when scaling of parent transforms has been updated or whenever
   * vector data is updated.
   */
  public updateTransform(): void {
    // Measure world scale by temporarily resetting mesh pivot scale
    this.meshPivot.scale.set(1, 1, 1);
    let newWorldScale = new Vector3();
    newWorldScale = this.meshPivot.getWorldScale(newWorldScale);

    // Scale is inverted on mesh pivot to cancel out parent transforms (though
    // translation and rotation are still affected by any parent transforms).
    // This allows arrows meshes to be scaled 1:1 with world space, regardless
    // of parent transforms, and prevents distortion or skewing of the mesh.
    // Parent scaling is  applied to arrow positions and deltas (see
    // `updateAllArrowTransforms`), rather than the meshes themselves.
    const invertScale = new Vector3(1, 1, 1).divide(newWorldScale);
    this.meshPivot.scale.copy(invertScale);

    if (!newWorldScale.equals(this.worldScale)) {
      this.worldScale.copy(newWorldScale);
      if (this.positions && this.deltas) {
        this.setArrowData(this.positions, this.deltas);
      }
    }
  }

  private updateSingleArrowTransform(index: number, src: Vector3, delta: Vector3, diameter: number): void {
    // Update the arrow shaft
    const headHeight = HEAD_BASE_HEIGHT * diameter;
    const length = delta.length();
    const shaftHeight = Math.max(length - headHeight, 0);
    if (shaftHeight < 1e-6) {
      // If the shaft height is too small, scale to 0.
      this.tempScale.set(0, 0, 0);
    } else {
      this.tempScale.set(diameter, diameter, shaftHeight);
    }

    this.tempMatrix.scale.copy(this.tempScale);
    this.tempMatrix.position.copy(src);
    this.tempDst.copy(src).add(delta);
    this.tempMatrix.lookAt(this.tempDst);
    this.tempMatrix.updateMatrix();
    this.shaftInstancedMesh.setMatrixAt(index, this.tempMatrix.matrix);

    if (length < headHeight) {
      // If head is longer than the total length, shrink the head to match
      // length. TODO: Is it okay to do this automatically?
      const newDiameter = length / HEAD_BASE_HEIGHT;
      this.tempScale.set(newDiameter, newDiameter, newDiameter);
    } else {
      this.tempScale.set(diameter, diameter, diameter);
    }
    this.tempMatrix.scale.copy(this.tempScale);
    this.tempMatrix.position.copy(this.tempDst);
    this.tempDst.add(delta);
    this.tempMatrix.lookAt(this.tempDst);
    this.tempMatrix.updateMatrix();
    this.headInstancedMesh.setMatrixAt(index, this.tempMatrix.matrix);
  }

  private updateAllArrowTransforms(): void {
    if (!this.positions || !this.deltas) {
      return;
    }
    const count = this.positions.length / 3;
    const combinedScale = new Vector3().copy(this.scale).multiply(this.flipAxes).multiply(this.worldScale);

    const tempSrc = new Vector3();
    const tempDelta = new Vector3();
    let tempDiameter: number;
    for (let i = 0; i < count; i++) {
      // Points and deltas scaled to volume space.
      tempSrc.fromArray(this.positions, i * 3).multiply(combinedScale);
      tempDelta.fromArray(this.deltas, i * 3).multiply(combinedScale);
      // Fallback in case 0-length diameter array is provided
      tempDiameter = this.diameter[i % this.diameter.length] ?? DEFAULT_DIAMETER;
      this.updateSingleArrowTransform(i, tempSrc, tempDelta, tempDiameter);
    }
    this.headInstancedMesh.instanceMatrix.needsUpdate = true;
    this.shaftInstancedMesh.instanceMatrix.needsUpdate = true;
  }

  private applyColors(): void {
    if (!this.colors) {
      return;
    }
    const colorCount = Math.round(this.colors.length / 3);
    const color = new Color();
    for (let i = 0; i < this.headInstancedMesh.count; i++) {
      // Wrap colors if there are fewer colors than arrows
      const colorIndex = i % colorCount;
      color.fromArray(this.colors, colorIndex * 3);
      this.headInstancedMesh.setColorAt(i, color);
      this.shaftInstancedMesh.setColorAt(i, color);
    }
    if (this.headInstancedMesh.instanceColor) {
      this.headInstancedMesh.instanceColor.needsUpdate = true;
    }
    if (this.shaftInstancedMesh.instanceColor) {
      this.shaftInstancedMesh.instanceColor.needsUpdate = true;
    }
  }

  /**
   * Sets the colors for the arrows as either a single Color or an array of RGB values.
   * If there are more arrows than colors, colors will be repeated in order.
   * @param colors Color object or numeric array of RGB values in the [0, 1] range.
   * @throws {Error} If colors array length is not a multiple of 3.
   */
  public setColors(colors: Float32Array | Color): void {
    if (colors instanceof Color) {
      this.colors = new Float32Array(3);
      colors.toArray(this.colors);
    } else {
      if (colors.length % 3 !== 0) {
        throw new Error("VectorArrows.setColors: colors array length must be a multiple of 3.");
      }
      this.colors = new Float32Array(colors);
    }
    this.applyColors();
  }

  /**
   * Sets all arrows to a uniform diameter (default is `0.002`). To set
   * per-arrow diameter, pass an array of values into `setArrowData` instead.
   * @param diameter Diameter value to set for all arrows.
   */
  public setDiameter(diameter: number): void {
    this.diameter = new Float32Array([diameter]);
    this.updateAllArrowTransforms();
  }

  /**
   * Sets the per-arrow data. The number of rendered arrows is equal to
   * `positions.length / 3`.
   * @param positions Float32Array, where every three values is the XYZ position
   * of the base of an arrow.
   * @param deltas Float32Array, where every three values is the XYZ delta
   * vector for each arrow.
   * @param diameters Optional Float32Array of diameter thickness values for
   * each arrow's shaft. If provided, overrides a single diameter value set by
   * `setDiameter`. If fewer diameter values are provided than arrows, the
   * values will be repeated in order.
   * @throws {Error} If positions and deltas arrays have different lengths or if
   * their length is not a multiple of 3.
   */
  public setArrowData(positions: Float32Array, deltas: Float32Array, diameters?: Float32Array): void {
    if (positions.length !== deltas.length) {
      throw new Error("VectorArrows.setArrowData: positions and deltas arrays must have the same length");
    }
    if (positions.length % 3 !== 0) {
      throw new Error("VectorArrows.setArrowData: positions and deltas arrays length must be a multiple of 3");
    }
    this.positions = positions;
    this.deltas = deltas;
    if (diameters) {
      this.diameter = diameters;
    }

    // Update instance count, add more instances as needed.
    const count = positions.length / 3;
    const didInstanceCountIncrease = this.headInstancedMesh.count < count;
    if (this.maxInstanceCount < count) {
      this.increaseInstanceCountMax(count);
    }
    this.headInstancedMesh.count = count;
    this.shaftInstancedMesh.count = count;

    this.updateAllArrowTransforms();

    if (didInstanceCountIncrease) {
      // Apply colors to new arrows as needed
      this.applyColors();
    }
  }
}
