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
} from "three";
import { IDrawableObject } from "./types";
import BaseDrawableObject from "./BaseDrawableObject";
import { MESH_NO_PICK_OCCLUSION_LAYER } from "./ThreeJsPanel";

const DEFAULT_CYLINDER_RADIUS = 0.001;
const DEFAULT_CONE_RADIUS = DEFAULT_CYLINDER_RADIUS * 5;

export default class VectorArrows extends BaseDrawableObject implements IDrawableObject {
  private coneInstancedMesh: InstancedMesh;
  private cylinderInstancedMesh: InstancedMesh;

  // Temporary calculation objects. Optimization taken from three.js examples.
  private scaleCalculation: Vector3;
  private matrixCalculation: Object3D;

  constructor() {
    super();

    // TODO: Dynamic size?
    const cylinderGeometry = new CylinderGeometry(DEFAULT_CYLINDER_RADIUS, DEFAULT_CYLINDER_RADIUS, 1, 8, 1, true);
    const coneGeometry = new ConeGeometry(DEFAULT_CONE_RADIUS, DEFAULT_CONE_RADIUS * 4, 8);
    const basicMaterial = new MeshBasicMaterial({ color: "#f00" });
    const defaultTransform = new Matrix4().makeRotationX(Math.PI / 2);
    // .multiply(new Matrix4().makeScale(7, 7, 7));

    coneGeometry.applyMatrix4(defaultTransform);
    cylinderGeometry.applyMatrix4(defaultTransform);

    // https://github.com/mrdoob/three.js/blob/master/examples/webgl_instancing_scatter.html#L78-L99
    // TODO: Change cylinder to have base at origin
    // TODO: This currently limits us to 256 arrows. Make dynamic.
    this.coneInstancedMesh = new InstancedMesh(coneGeometry, basicMaterial, 256);
    this.cylinderInstancedMesh = new InstancedMesh(cylinderGeometry, basicMaterial, 256);

    this.scaleCalculation = new Vector3();
    this.matrixCalculation = new Object3D();

    this.coneInstancedMesh.layers.set(MESH_NO_PICK_OCCLUSION_LAYER);
    this.cylinderInstancedMesh.layers.set(MESH_NO_PICK_OCCLUSION_LAYER);
    this.coneInstancedMesh.frustumCulled = false;
    this.cylinderInstancedMesh.frustumCulled = false;
    this.coneInstancedMesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.cylinderInstancedMesh.instanceMatrix.setUsage(DynamicDrawUsage);

    this.meshPivot.add(this.coneInstancedMesh);
    this.meshPivot.add(this.cylinderInstancedMesh);
    this.meshPivot.layers.set(MESH_NO_PICK_OCCLUSION_LAYER);

    this.meshes = [this.coneInstancedMesh, this.cylinderInstancedMesh];
  }

  setScale(scale: Vector3): void {
    this.scale.copy(scale);
    console.log("VectorArrows scale set to", this.scale);
    // Do not set scale on meshPivot. Scaling will be handled per-arrow.
  }

  updateArrow(index: number, position: Vector3, delta: Vector3): void {
    // Update the arrow cylinder
    // TODO: optimize to avoid creating new objects
    const length = delta.length();
    const normal = delta.clone().normalize();
    this.scaleCalculation.set(1, 1, length);

    // Position the cylinder halfway along the delta
    const cylinderPosition = position.clone().addScaledVector(normal, length * 0.5);
    this.matrixCalculation.scale.copy(this.scaleCalculation);
    this.matrixCalculation.position.copy(cylinderPosition);
    this.matrixCalculation.lookAt(normal);
    this.matrixCalculation.updateMatrix();
    this.cylinderInstancedMesh.setMatrixAt(index, this.matrixCalculation.matrix);

    const conePosition = position.clone().add(delta);
    this.scaleCalculation.set(1, 1, 1);
    // TODO: shrink cone if length is very small
    this.matrixCalculation.scale.copy(this.scaleCalculation);
    this.matrixCalculation.position.copy(conePosition);
    this.matrixCalculation.lookAt(normal);
    this.matrixCalculation.updateMatrix();
    this.coneInstancedMesh.setMatrixAt(index, this.matrixCalculation.matrix);
  }

  setArrowData(positions: Float32Array, deltas: Float32Array, colors?: Float32Array): void {
    if (positions.length !== deltas.length) {
      throw new Error("VectorArrows.setArrowData: positions and deltas arrays must have the same length");
    }
    if (positions.length % 3 !== 0) {
      throw new Error("VectorArrows.setArrowData: positions and deltas arrays length must be a multiple of 3");
    }

    const count = positions.length / 3;
    // Add more instances as needed
    if (this.coneInstancedMesh.count !== count) {
      this.coneInstancedMesh.count = count;
      this.cylinderInstancedMesh.count = count;
    }

    const tempPosition = new Vector3();
    const tempDelta = new Vector3();
    for (let i = 0; i < count; i++) {
      // Points and deltas scaled to world space
      tempPosition.fromArray(positions, i * 3);
      tempDelta.fromArray(deltas, i * 3);

      tempPosition.multiply(this.scale).multiply(this.flipAxes);
      tempDelta.multiply(this.scale).multiply(this.flipAxes);

      this.updateArrow(i, tempPosition, tempDelta);

      this.cylinderInstancedMesh.setColorAt(i, new Color(0xff0000));
      this.coneInstancedMesh.setColorAt(i, new Color(0xff0000));
    }

    this.coneInstancedMesh.instanceMatrix.needsUpdate = true;
    this.cylinderInstancedMesh.instanceMatrix.needsUpdate = true;
    if (colors) {
      this.coneInstancedMesh.instanceColor!.needsUpdate = true;
      this.cylinderInstancedMesh.instanceColor!.needsUpdate = true;
    }
  }
}
