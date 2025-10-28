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
import { IDrawableObject, ScaleInfo } from "./types";
import BaseDrawableObject from "./BaseDrawableObject";
import { MESH_NO_PICK_OCCLUSION_LAYER } from "./ThreeJsPanel";

const DEFAULT_CYLINDER_RADIUS = 0.001;
const CONE_RADIUS_MULT = 3;
const CONE_HEIGHT_MULT = 8;

const DEFAULT_INSTANCE_COUNT = 256;

export default class VectorArrows3d extends BaseDrawableObject implements IDrawableObject {
  private coneInstancedMesh: InstancedMesh;
  private cylinderInstancedMesh: InstancedMesh;

  private maxInstanceCount: number;
  private positions: Float32Array | null;
  private deltas: Float32Array | null;
  private colors: Float32Array | null;
  private thickness: Float32Array;

  // Temporary calculation objects. Optimization taken from three.js examples.
  private scaleCalculation: Vector3;
  private matrixCalculation: Object3D;

  constructor() {
    super();
    this.meshPivot.layers.set(MESH_NO_PICK_OCCLUSION_LAYER);

    // Passing these out isn't necessary but satisfies the compiler.
    this.maxInstanceCount = DEFAULT_INSTANCE_COUNT;
    const { coneInstancedMesh, cylinderInstancedMesh } = this.initInstancedMeshes(DEFAULT_INSTANCE_COUNT);
    this.coneInstancedMesh = coneInstancedMesh;
    this.cylinderInstancedMesh = cylinderInstancedMesh;
    this.coneInstancedMesh.count = 0;
    this.cylinderInstancedMesh.count = 0;

    this.positions = null;
    this.deltas = null;
    this.colors = null;
    this.thickness = new Float32Array([DEFAULT_CYLINDER_RADIUS]);

    this.scaleCalculation = new Vector3();
    this.matrixCalculation = new Object3D();
  }

  /**
   * Create new instanced meshes with the specified instance count.
   * (If calling outside of the constructor, be sure to call `cleanup` first.)
   */
  private initInstancedMeshes(instanceCount: number): {
    coneInstancedMesh: InstancedMesh;
    cylinderInstancedMesh: InstancedMesh;
  } {
    this.cleanup();
    this.meshPivot.clear();
    const basicMaterial = new MeshBasicMaterial({ color: "#fff" });
    const { cone: coneGeometry, cylinder: cylinderGeometry } = VectorArrows3d.generateGeometry(1);

    const coneInstancedMesh = new InstancedMesh(coneGeometry, basicMaterial, instanceCount);
    const cylinderInstancedMesh = new InstancedMesh(cylinderGeometry, basicMaterial, instanceCount);
    coneInstancedMesh.layers.set(MESH_NO_PICK_OCCLUSION_LAYER);
    cylinderInstancedMesh.layers.set(MESH_NO_PICK_OCCLUSION_LAYER);
    coneInstancedMesh.frustumCulled = false;
    cylinderInstancedMesh.frustumCulled = false;
    coneInstancedMesh.instanceMatrix.setUsage(DynamicDrawUsage);
    cylinderInstancedMesh.instanceMatrix.setUsage(DynamicDrawUsage);

    this.meshPivot.add(coneInstancedMesh);
    this.meshPivot.add(cylinderInstancedMesh);
    this.meshes = [coneInstancedMesh, cylinderInstancedMesh];

    return { coneInstancedMesh, cylinderInstancedMesh };
  }

  private static generateGeometry(lineWidth: number): { cone: BufferGeometry; cylinder: BufferGeometry } {
    const cylinderGeometry = new CylinderGeometry(lineWidth, lineWidth, 1, 8, 1, false);
    const coneRadius = CONE_RADIUS_MULT * lineWidth;
    const coneHeight = CONE_HEIGHT_MULT * lineWidth;
    const coneGeometry = new ConeGeometry(coneRadius, coneHeight, 12);

    // Rotate both to point along +Z axis
    const defaultTransform = new Matrix4().makeRotationX(Math.PI / 2);
    // Change cone pivot to be at the tip.
    const conePivotTransform = new Matrix4().makeTranslation(0, 0, -coneHeight / 2);
    coneGeometry.applyMatrix4(conePivotTransform.multiply(defaultTransform));
    // Change cylinder pivot to be at the base.
    cylinderGeometry.applyMatrix4(defaultTransform.multiply(new Matrix4().makeTranslation(0, 0.5, 0)));

    return { cone: coneGeometry, cylinder: cylinderGeometry };
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
    const { coneInstancedMesh, cylinderInstancedMesh } = this.initInstancedMeshes(newInstanceCount);
    this.coneInstancedMesh = coneInstancedMesh;
    this.cylinderInstancedMesh = cylinderInstancedMesh;
    this.maxInstanceCount = newInstanceCount;
  }

  public setScale(scale: Vector3): void {
    if (scale !== this.scale) {
      this.scale.copy(scale);
      if (this.positions && this.deltas) {
        // Update arrows
        this.setArrowData(this.positions, this.deltas);
      }
    }
  }

  /**
   * If parented to a scaled object, this function should be called and the
   * parent scale passed in. This prevents arrows from being distorted by the
   * parent's scale.
   */
  public setScaleInfo(scaleInfo: ScaleInfo): void {
    if (scaleInfo.parentScale !== this.parentScale) {
      this.parentScale.copy(scaleInfo.parentScale);
      const invertScale = new Vector3(1, 1, 1).divide(this.parentScale);
      this.meshPivot.scale.copy(invertScale);
      if (this.positions && this.deltas) {
        // Update arrows
        this.setArrowData(this.positions, this.deltas);
      }
    }
  }

  private updateSingleArrowTransform(index: number, src: Vector3, delta: Vector3, thickness: number): void {
    // Update the arrow cylinder
    // TODO: optimize to avoid creating new objects
    const coneHeight = CONE_HEIGHT_MULT * thickness;
    const length = delta.length();
    const dst = src.clone().add(delta);
    this.scaleCalculation.set(thickness, thickness, length - coneHeight);

    const cylinderPosition = src;
    this.matrixCalculation.scale.copy(this.scaleCalculation);
    this.matrixCalculation.position.copy(cylinderPosition);
    this.matrixCalculation.lookAt(dst);
    this.matrixCalculation.updateMatrix();
    this.cylinderInstancedMesh.setMatrixAt(index, this.matrixCalculation.matrix);

    const conePosition = src.clone().add(delta);
    // TODO: shrink cone if length is very small
    this.scaleCalculation.set(thickness, thickness, thickness);
    this.matrixCalculation.scale.copy(this.scaleCalculation);
    this.matrixCalculation.position.copy(conePosition);
    this.matrixCalculation.lookAt(dst.add(delta));
    this.matrixCalculation.updateMatrix();
    this.coneInstancedMesh.setMatrixAt(index, this.matrixCalculation.matrix);
  }

  private updateArrowTransforms(): void {
    if (!this.positions || !this.deltas) {
      return;
    }
    const count = this.positions.length / 3;
    const combinedScale = new Vector3().copy(this.scale).multiply(this.flipAxes).multiply(this.parentScale);

    const tempSrc = new Vector3();
    const tempDelta = new Vector3();
    for (let i = 0; i < count; i++) {
      // Points and deltas scaled to volume space.
      tempSrc.fromArray(this.positions, i * 3).multiply(combinedScale);
      tempDelta.fromArray(this.deltas, i * 3).multiply(combinedScale);
      const thickness = this.thickness[i % this.thickness.length] ?? DEFAULT_CYLINDER_RADIUS;
      this.updateSingleArrowTransform(i, tempSrc, tempDelta, thickness);
    }
    this.coneInstancedMesh.instanceMatrix.needsUpdate = true;
    this.cylinderInstancedMesh.instanceMatrix.needsUpdate = true;
  }

  private updateColors(): void {
    if (!this.colors) {
      return;
    }
    const count = this.coneInstancedMesh.count;
    const colorCount = Math.round(this.colors.length / 3);
    const color = new Color();
    for (let i = 0; i < count; i++) {
      // Wrap colors if there are fewer colors than arrows
      const colorIndex = i % colorCount;
      color.fromArray(this.colors, colorIndex * 3);
      this.coneInstancedMesh.setColorAt(i, color);
      this.cylinderInstancedMesh.setColorAt(i, color);
    }
    if (this.coneInstancedMesh.instanceColor) {
      this.coneInstancedMesh.instanceColor.needsUpdate = true;
    }
    if (this.cylinderInstancedMesh.instanceColor) {
      this.cylinderInstancedMesh.instanceColor.needsUpdate = true;
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
    this.updateColors();
  }

  /**
   * Sets all arrows to a uniform thickness (default is `0.001`). To set
   * per-arrow thickness, pass an array of values into `setArrowData` instead.
   * @param thickness Thickness value to set for all arrows.
   */
  public setThickness(thickness: number): void {
    this.thickness = new Float32Array([thickness]);
    this.updateArrowTransforms();
  }

  /**
   * Sets the per-arrow data. The number of rendered arrows will be determined
   * by the length of the `positions` and `deltas` arrays.
   * @param positions Float32Array, where every three values is the XYZ position
   * of the base of an arrow.
   * @param deltas Float32Array, where every three values is the XYZ delta
   * vector for each arrow.
   * @param thickness Optional Float32Array of thickness values for each arrow.
   * If provided, overrides the single thickness value set by `setThickness`. If
   * fewer thickness values are provided than arrows, the values will be
   * repeated in order.
   * @throws {Error} If positions and deltas arrays have different lengths or if
   * their length is not a multiple of 3.
   */
  public setArrowData(positions: Float32Array, deltas: Float32Array, thickness?: Float32Array): void {
    if (positions.length !== deltas.length) {
      throw new Error("VectorArrows.setArrowData: positions and deltas arrays must have the same length");
    }
    if (positions.length % 3 !== 0) {
      throw new Error("VectorArrows.setArrowData: positions and deltas arrays length must be a multiple of 3");
    }
    this.positions = positions;
    this.deltas = deltas;
    if (thickness) {
      this.thickness = thickness;
    }

    // Update instance count and add more instances as needed
    const count = positions.length / 3;
    const didInstanceCountIncrease = this.coneInstancedMesh.count < count;
    if (this.maxInstanceCount < count) {
      this.increaseInstanceCountMax(count);
    }
    this.coneInstancedMesh.count = count;
    this.cylinderInstancedMesh.count = count;

    this.updateArrowTransforms();

    if (didInstanceCountIncrease) {
      // Apply colors to new arrows as needed
      this.updateColors();
    }
  }
}
