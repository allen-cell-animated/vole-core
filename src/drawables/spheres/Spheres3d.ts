import {
  Color,
  Group,
  InstancedBufferAttribute,
  InstancedMesh,
  Matrix4,
  Quaternion,
  SphereGeometry,
  Vector3,
} from "three";
import BaseDrawableMeshObject from "../BaseDrawableMeshObject.js";
import { IDrawableObject } from "../IDrawableObject.js";
import { MESH_LAYER, MESH_PICK_LAYER } from "../../ThreeJsPanel.js";
import { SphereMaterial, SphereMaterialInstanceAttributes, SpherePickMaterial } from "./SphereMaterial.js";

const DEFAULT_INSTANCE_COUNT = 256;

function getSphereGeometry(): SphereGeometry {
  return new SphereGeometry(1, 32, 32);
}

/**
 * Drawable object for instanced rendering of spheres. Spheres can also be configured to
 * be pickable for mouse interaction.
 */
export default class Spheres3d extends BaseDrawableMeshObject implements IDrawableObject {
  protected worldScale: Vector3;
  private maxInstanceCount: number;

  private positions: Float32Array | null;
  private scales: Float32Array | null;
  private ids: Uint32Array | null;
  private colors: Float32Array | null;

  private idAttribute: InstancedBufferAttribute;

  private geometry: SphereGeometry;
  private material: SphereMaterial;
  private pickMaterial: SpherePickMaterial;

  private mesh: InstancedMesh<SphereGeometry, SphereMaterial>;
  private pickMesh: InstancedMesh<SphereGeometry, SpherePickMaterial>;

  constructor() {
    super();

    this.worldScale = new Vector3(1, 1, 1);
    this.meshPivot.layers.set(MESH_LAYER);
    this.maxInstanceCount = DEFAULT_INSTANCE_COUNT;

    const { mesh, pickMesh, material, pickMaterial, geometry, idAttribute } = this.reinitializeInstancedMeshes();

    this.mesh = mesh;
    this.pickMesh = pickMesh;
    this.geometry = geometry;
    this.material = material;
    this.idAttribute = idAttribute;
    this.pickMaterial = pickMaterial;

    this.mesh.count = 0;
    this.pickMesh.count = 0;

    this.positions = null;
    this.scales = null;
    this.ids = null;
    this.colors = null;
  }

  private reinitializeInstancedMeshes(): {
    mesh: InstancedMesh<SphereGeometry, SphereMaterial>;
    pickMesh: InstancedMesh<SphereGeometry, SpherePickMaterial>;
    material: SphereMaterial;
    pickMaterial: SpherePickMaterial;
    geometry: SphereGeometry;
    idAttribute: InstancedBufferAttribute;
  } {
    this.removeChildMesh(this.mesh);
    this.removeChildMesh(this.pickMesh);

    this.material = new SphereMaterial();
    this.pickMaterial = new SpherePickMaterial();
    this.material.depthWrite = true;
    this.geometry = getSphereGeometry();

    // Recreate InstancedMesh objects with the new instance count
    this.mesh = new InstancedMesh(this.geometry, this.material, this.maxInstanceCount);
    this.pickMesh = new InstancedMesh(this.geometry, this.pickMaterial, this.maxInstanceCount);
    this.mesh.layers.set(MESH_LAYER);
    this.pickMesh.layers.set(MESH_PICK_LAYER);
    this.mesh.frustumCulled = false;
    this.pickMesh.frustumCulled = false;

    // Create and set new attributes with the new instance count
    const newIds = new Uint32Array(this.maxInstanceCount);
    this.idAttribute = new InstancedBufferAttribute(newIds, 1, false);
    this.geometry.setAttribute(SphereMaterialInstanceAttributes.LABEL_ID, this.idAttribute);

    this.addChildMesh(this.mesh);
    this.addChildMesh(this.pickMesh);

    return {
      mesh: this.mesh,
      pickMesh: this.pickMesh,
      material: this.material,
      pickMaterial: this.pickMaterial,
      geometry: this.geometry,
      idAttribute: this.idAttribute,
    };
  }

  public cleanup(): void {
    super.cleanup();
    this.material.dispose();
    this.pickMaterial.dispose();
    this.geometry.dispose();
  }

  public setScale(scale: Vector3): void {
    if (scale !== this.scale) {
      this.onParentTransformUpdated();
      this.scale.copy(scale);
      this.applyAttributes();
    }
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

    if (!newWorldScale.equals(this.worldScale)) {
      this.worldScale.copy(newWorldScale);
      this.applyAttributes();
    }
  }

  private applyColors(): void {
    if (!this.colors) {
      return;
    }
    const colorCount = Math.round(this.colors.length / 3);
    const color = new Color();
    for (let i = 0; i < this.maxInstanceCount; i++) {
      // Wrap colors if there are fewer colors than instances.
      const colorIndex = i % colorCount;
      color.fromArray(this.colors, colorIndex * 3);
      this.mesh.setColorAt(i, color);
    }
    if (this.mesh.instanceColor) {
      this.mesh.instanceColor.needsUpdate = true;
    }
  }

  public setColors(colors: Float32Array | Color): void {
    if (colors instanceof Color) {
      this.colors = new Float32Array(3);
      colors.toArray(this.colors);
    } else {
      if (colors.length % 3 !== 0) {
        throw new Error("Spheres3D.setColors: colors array length must be a multiple of 3.");
      }
      this.colors = new Float32Array(colors);
    }
    this.applyColors();
  }

  private applyAttributes(): void {
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
      this.mesh.setMatrixAt(i, matrix);
      this.pickMesh.setMatrixAt(i, matrix);
      // Set per-instance id
      const id = this.ids ? this.ids[idIndex] : 0;
      this.idAttribute.setX(i, id);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
    this.pickMesh.instanceMatrix.needsUpdate = true;
    this.idAttribute.needsUpdate = true;
  }

  public setSphereData(positions: Float32Array, scales: Float32Array, ids: Uint32Array | null = null): void {
    // Update instance count, add more instances as needed.
    const count = positions.length / 3;
    let didInstanceCountIncrease = this.maxInstanceCount < count;
    if (didInstanceCountIncrease) {
      this.increaseInstanceCountMax(count);
    }
    this.mesh.count = count;
    this.pickMesh.count = count;

    this.positions = positions;
    this.scales = scales;
    this.ids = ids;

    this.applyAttributes();
    if (didInstanceCountIncrease) {
      this.applyColors();
    }
  }
}
