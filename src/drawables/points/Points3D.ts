import {
  Color,
  Euler,
  Group,
  InstancedBufferAttribute,
  InstancedMesh,
  Matrix4,
  MeshBasicMaterial,
  MeshStandardMaterial,
  Quaternion,
  SphereGeometry,
  Vector3,
} from "three";
import BaseDrawableMeshObject from "../BaseDrawableMeshObject";
import { IDrawableObject } from "../IDrawableObject";
import { MESH_LAYER, MESH_PICK_LAYER } from "../../ThreeJsPanel";
import { PointMaterialInstanceAttributes, PointPickMaterial } from "./PointsMaterial";

const DEFAULT_INSTANCE_COUNT = 256;

function getSphereGeometry(): SphereGeometry {
  return new SphereGeometry(1, 32, 32);
}

export default class Points3d extends BaseDrawableMeshObject implements IDrawableObject {
  protected worldScale: Vector3;
  private maxInstanceCount: number;

  private pickMeshPivot: Group;

  private positions: Float32Array | null;
  private scales: Float32Array | null;
  private ids: Uint32Array | null;
  private colors: Float32Array | null;

  private idAttribute: InstancedBufferAttribute;

  private geometry: SphereGeometry;
  private pointMaterial: MeshBasicMaterial;
  private pointPickMaterial: PointPickMaterial;

  private points: InstancedMesh<SphereGeometry, MeshBasicMaterial>;
  private pointsPick: InstancedMesh<SphereGeometry, PointPickMaterial>;

  constructor() {
    super();

    this.worldScale = new Vector3(1, 1, 1);
    this.pickMeshPivot = new Group();
    this.pickMeshPivot.layers.set(MESH_PICK_LAYER);
    this.meshPivot.layers.set(MESH_LAYER);
    this.maxInstanceCount = DEFAULT_INSTANCE_COUNT;

    this.geometry = getSphereGeometry();
    this.pointMaterial = new MeshBasicMaterial({ color: "#fff" });
    this.pointPickMaterial = new PointPickMaterial();
    this.pointMaterial.depthWrite = true;

    this.points = new InstancedMesh(this.geometry, this.pointMaterial, this.maxInstanceCount);
    this.pointsPick = new InstancedMesh(this.geometry, this.pointPickMaterial, this.maxInstanceCount);
    this.points.layers.set(MESH_LAYER);
    this.pointsPick.layers.set(MESH_PICK_LAYER);
    this.points.frustumCulled = false;
    this.pointsPick.frustumCulled = false;

    this.points.count = 0;
    this.pointsPick.count = 0;

    this.positions = null;
    this.scales = null;
    this.ids = null;
    this.colors = null;

    this.idAttribute = new InstancedBufferAttribute(new Uint32Array(this.maxInstanceCount), 1, false);
    this.geometry.setAttribute(PointMaterialInstanceAttributes.LABEL_ID, this.idAttribute);

    this.addChildMesh(this.points);
    this.addChildMesh(this.pointsPick);
  }

  public setScale(scale: Vector3): void {
    if (scale !== this.scale) {
      this.onParentTransformUpdated();
      this.scale.copy(scale);
      this.applyPointAttributes();
    }
  }

  public cleanup(): void {
    super.cleanup();
    this.pickMeshPivot.clear();
    this.pointMaterial.dispose();
    this.pointPickMaterial.dispose();
    this.geometry.dispose();
  }

  private reinitializeInstancedMeshes(): void {
    this.removeChildMesh(this.points);
    this.removeChildMesh(this.pointsPick);

    this.pointMaterial = new MeshBasicMaterial({ color: "#fff" });
    this.pointPickMaterial = new PointPickMaterial();
    this.pointMaterial.depthWrite = true;
    this.geometry = getSphereGeometry();

    // Recreate InstancedMesh objects with the new instance count
    this.points = new InstancedMesh(this.geometry, this.pointMaterial, this.maxInstanceCount);
    this.pointsPick = new InstancedMesh(this.geometry, this.pointPickMaterial, this.maxInstanceCount);
    this.points.layers.set(MESH_LAYER);
    this.pointsPick.layers.set(MESH_PICK_LAYER);
    this.points.frustumCulled = false;
    this.pointsPick.frustumCulled = false;

    // Create and set new attributes with the new instance count
    const newIds = new Uint32Array(this.maxInstanceCount);
    this.idAttribute = new InstancedBufferAttribute(newIds, 1, false);
    this.geometry.setAttribute(PointMaterialInstanceAttributes.LABEL_ID, this.idAttribute);

    this.addChildMesh(this.points);
    this.addChildMesh(this.pointsPick);
  }

  private increaseInstanceCountMax(instanceCount: number): void {
    this.cleanup();
    while (this.maxInstanceCount < instanceCount) {
      this.maxInstanceCount *= 2;
    }
    this.reinitializeInstancedMeshes();
  }

  /**
   * Called when scaling of parent transforms has been updated or whenever
   * vector data is updated.
   */
  public onParentTransformUpdated(): void {
    // Measure world scale by temporarily resetting mesh pivot scale
    this.meshPivot.scale.set(1, 1, 1);
    let newWorldScale = new Vector3();
    newWorldScale = this.meshPivot.getWorldScale(newWorldScale);

    // Scale is inverted on mesh pivot to cancel out parent transforms (though
    // translation and rotation are still affected by any parent transforms).
    // This allows arrows meshes to be scaled 1:1 with world space, regardless
    // of parent transforms, and prevents distortion or skewing of the mesh.
    // Parent scaling is applied to arrow positions and deltas (see
    // `updateAllArrowTransforms`), rather than the meshes themselves.
    const invertScale = new Vector3(1, 1, 1).divide(newWorldScale);
    this.meshPivot.scale.copy(invertScale);
    this.pickMeshPivot.scale.copy(invertScale);

    if (!newWorldScale.equals(this.worldScale)) {
      this.worldScale.copy(newWorldScale);
      this.applyPointAttributes();
    }
  }

  private applyPointColors(): void {
    if (!this.colors) {
      return;
    }
    const colorCount = Math.round(this.colors.length / 3);
    const color = new Color();
    for (let i = 0; i < this.maxInstanceCount; i++) {
      // Wrap colors if there are fewer colors than instances.
      const colorIndex = i % colorCount;
      color.fromArray(this.colors, colorIndex * 3);
      this.points.setColorAt(i, color);
    }
    if (this.points.instanceColor) {
      this.points.instanceColor.needsUpdate = true;
    }
  }

  public setColors(colors: Float32Array | Color): void {
    if (colors instanceof Color) {
      this.colors = new Float32Array(3);
      colors.toArray(this.colors);
    } else {
      if (colors.length % 3 !== 0) {
        throw new Error("Points3D.setColors: colors array length must be a multiple of 3.");
      }
      this.colors = new Float32Array(colors);
    }
    this.applyPointColors();
  }

  private applyPointAttributes(): void {
    if (!this.positions || !this.scales) {
      return;
    }
    const count = this.positions.length / 3;

    const combinedScale = new Vector3().copy(this.scale).multiply(this.flipAxes).multiply(this.worldScale);
    const position = new Vector3();
    for (let i = 0; i < count; i++) {
      const posIndex = (i * 3) % this.positions.length;
      const scaleIndex = i % (this.scales ? this.scales.length : 1);
      const idIndex = i % (this.ids ? this.ids.length : 1);

      position.fromArray(this.positions, posIndex).multiply(combinedScale);
      const scale = this.scales[scaleIndex];

      // Set per-instance matrix
      const matrix = new Matrix4().compose(position, new Quaternion(), new Vector3(scale, scale, scale));
      this.points.setMatrixAt(i, matrix);
      this.pointsPick.setMatrixAt(i, matrix);
      // Set per-instance id
      const id = this.ids ? this.ids[idIndex] : 0;
      this.idAttribute.setX(i, id);
    }
    this.points.instanceMatrix.needsUpdate = true;
    this.pointsPick.instanceMatrix.needsUpdate = true;
    this.idAttribute.needsUpdate = true;
  }

  public setPointData(positions: Float32Array, scales: Float32Array, ids: Uint32Array | null = null): void {
    // Update instance count, add more instances as needed.
    const count = positions.length / 3;
    let didInstanceCountIncrease = this.maxInstanceCount < count;
    if (didInstanceCountIncrease) {
      this.increaseInstanceCountMax(count);
    }
    this.points.count = count;
    this.pointsPick.count = count;

    this.positions = positions;
    this.scales = scales;
    this.ids = ids;

    this.applyPointAttributes();
    if (didInstanceCountIncrease) {
      this.applyPointColors();
    }
  }
}
