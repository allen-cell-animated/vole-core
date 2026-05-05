import { Color, InstancedBufferAttribute, InstancedMesh, Matrix4, Quaternion, SphereGeometry, Vector3 } from "three";
import BaseDrawableMeshObject from "../BaseDrawableMeshObject.js";
import { MESH_LAYER, MESH_PICK_LAYER } from "../../ThreeJsPanel.js";
import { SphereMaterial, SphereMaterialInstanceAttributes, SpherePickMaterial } from "./SphereMaterial.js";

const DEFAULT_INSTANCE_COUNT = 256;

/**
 * Drawable object for instanced rendering of spheres. Spheres can also be
 * configured to be pickable for mouse interaction.
 */
export default class Spheres3d extends BaseDrawableMeshObject {
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

  // mesh and pickMesh represent the same geometry, for visible rendering and
  // rendering into the pick buffer respectively.
  private mesh: InstancedMesh<SphereGeometry, SphereMaterial>;
  private pickMesh: InstancedMesh<SphereGeometry, SpherePickMaterial>;

  constructor() {
    super();

    this.worldScale = new Vector3(1, 1, 1);
    this.meshPivot.layers.set(MESH_LAYER);
    this.maxInstanceCount = DEFAULT_INSTANCE_COUNT;

    const { mesh, pickMesh, material, pickMaterial, geometry, idAttribute } = this.initializeInstancedMeshes();

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

  private initializeInstancedMeshes(): {
    mesh: InstancedMesh<SphereGeometry, SphereMaterial>;
    pickMesh: InstancedMesh<SphereGeometry, SpherePickMaterial>;
    material: SphereMaterial;
    pickMaterial: SpherePickMaterial;
    geometry: SphereGeometry;
    idAttribute: InstancedBufferAttribute;
  } {
    if (this.mesh) {
      this.removeChildMesh(this.mesh);
    }
    if (this.pickMesh) {
      this.removeChildMesh(this.pickMesh);
    }

    this.material = new SphereMaterial();
    this.pickMaterial = new SpherePickMaterial();
    this.material.depthWrite = true;
    // Sphere has radius of 1, 32 width and 16 height segments
    this.geometry = new SphereGeometry(1, 32, 16);

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
    this.initializeInstancedMeshes();
  }

  /**
   * Called when scaling of parent transforms has been updated or whenever
   * vector data is updated.
   */
  public onParentTransformUpdated(): void {
    // TODO: This code is similar to code in `VectorArrows3d`, and could be
    // refactored into a shared abstract class in the future.

    // Measure world scale by temporarily resetting mesh pivot scale
    this.meshPivot.scale.set(1, 1, 1);
    let newWorldScale = new Vector3();
    newWorldScale = this.meshPivot.getWorldScale(newWorldScale);

    // Scale is inverted on mesh pivot to cancel out parent transforms (though
    // translation and rotation are still affected by any parent transforms).
    // This allows meshes to be scaled 1:1 with world space, regardless of
    // parent transforms, and prevents distortion or skewing of the mesh. Parent
    // scaling is applied per instance in `applyAttributes`.
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
    for (let i = 0; i < this.mesh.count; i++) {
      // Wrap colors if there are fewer colors than instances.
      const colorIndex = i % colorCount;
      color.fromArray(this.colors, colorIndex * 3);
      this.mesh.setColorAt(i, color);
    }
    if (this.mesh.instanceColor) {
      this.mesh.instanceColor.needsUpdate = true;
    }
  }

  /**
   * Sets colors for the spheres. Colors can be provided as a single Color
   * (applied to all spheres) or as a Float32Array of RGB values. If the array
   * has fewer colors than the number of spheres, colors will be repeated.
   */
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
    const matrix = new Matrix4();
    for (let i = 0; i < count; i++) {
      const posIndex = (i * 3) % this.positions.length;
      const scaleIndex = i % (this.scales ? this.scales.length : 1);
      const idIndex = i % (this.ids ? this.ids.length : 1);

      position.fromArray(this.positions, posIndex).multiply(combinedScale);
      const scale = this.scales[scaleIndex];

      // Set per-instance matrix
      matrix.compose(position, new Quaternion(), new Vector3(scale, scale, scale));
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
    // Data validation
    if (positions.length % 3 !== 0) {
      throw new Error("Spheres3D.setSphereData: positions array length must be a multiple of 3");
    }
    if (positions.length / 3 !== scales.length) {
      throw new Error("Spheres3D.setSphereData: scales array length must be the same as positions length / 3");
    }
    if (ids && positions.length / 3 !== ids.length) {
      throw new Error("Spheres3D.setSphereData: ids array must have the same length as positions length / 3");
    }
    // Update instance count, add more instances as needed.
    const count = positions.length / 3;
    const didCountChange = this.mesh.count !== count;
    if (this.maxInstanceCount < count) {
      this.increaseInstanceCountMax(count);
    }
    this.mesh.count = count;
    this.pickMesh.count = count;

    this.positions = positions;
    this.scales = scales;
    this.ids = ids;

    // Disable picking if no IDs are provided.
    this.pickMesh.visible = ids !== null;

    this.applyAttributes();
    if (didCountChange) {
      this.applyColors();
    }
  }
}
