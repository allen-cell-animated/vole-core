import {
  BufferAttribute,
  BufferGeometry,
  Color,
  InstancedBufferAttribute,
  InstancedBufferGeometry,
  Points,
  Vector3,
} from "three";
import BaseDrawableMeshObject from "../BaseDrawableMeshObject";
import { IDrawableObject } from "../IDrawableObject";
import { MESH_LAYER } from "../../ThreeJsPanel";
import { PointMaterial, PointMaterialInstanceAttributes, PointPickMaterial } from "./PointsMaterial";

const DEFAULT_INSTANCE_COUNT = 256;

function getPointBufferGeometry(): BufferGeometry {
  const geometry = new BufferGeometry();
  const vertices = new Float32Array([0, 0, 0]);
  geometry.setAttribute("position", new BufferAttribute(vertices, 3));
  return geometry;
}

export default class Points3d extends BaseDrawableMeshObject implements IDrawableObject {
  protected worldScale: Vector3;
  private maxInstanceCount: number;

  private positions: Float32Array | null;
  private scales: Float32Array | null;
  private ids: Uint32Array | null;
  private colors: Float32Array | null;
  private positionAttribute: InstancedBufferAttribute;
  private scaleAttribute: InstancedBufferAttribute;
  private colorAttribute: InstancedBufferAttribute;
  private idAttribute: InstancedBufferAttribute;

  private instancedGeometry: InstancedBufferGeometry;
  private pointMaterial: PointMaterial;
  private pointPickMaterial: PointPickMaterial;
  private points: Points<InstancedBufferGeometry, PointMaterial>;
  private pointsPick: Points<InstancedBufferGeometry, PointPickMaterial>;

  constructor() {
    super();

    this.worldScale = new Vector3(1, 1, 1);
    this.meshPivot.layers.set(MESH_LAYER);
    this.maxInstanceCount = DEFAULT_INSTANCE_COUNT;

    const pointGeometry = getPointBufferGeometry() as InstancedBufferGeometry;
    this.instancedGeometry = new InstancedBufferGeometry().copy(pointGeometry);
    this.pointMaterial = new PointMaterial();
    this.pointPickMaterial = new PointPickMaterial();

    this.points = new Points(this.instancedGeometry, this.pointMaterial);
    this.pointsPick = new Points(this.instancedGeometry, this.pointPickMaterial);

    this.positions = null;
    this.scales = null;
    this.ids = null;
    this.colors = null;

    this.positionAttribute = new InstancedBufferAttribute(new Float32Array(this.maxInstanceCount * 3), 3, false);
    this.scaleAttribute = new InstancedBufferAttribute(new Float32Array(this.maxInstanceCount), 1, false);
    this.colorAttribute = new InstancedBufferAttribute(new Float32Array(this.maxInstanceCount * 3), 3, false);
    this.idAttribute = new InstancedBufferAttribute(new Uint32Array(this.maxInstanceCount), 1, false);
    this.instancedGeometry.setAttribute(PointMaterialInstanceAttributes.POSITION, this.positionAttribute);
    this.instancedGeometry.setAttribute(PointMaterialInstanceAttributes.SCALE, this.scaleAttribute);
    this.instancedGeometry.setAttribute(PointMaterialInstanceAttributes.LABEL_ID, this.idAttribute);
    this.instancedGeometry.setAttribute(PointMaterialInstanceAttributes.COLOR, this.colorAttribute);

    this.addChildMesh(this.points);
  }

  private increaseInstanceCountMax(instanceCount: number): void {
    let newInstanceCount = this.maxInstanceCount;
    while (newInstanceCount < instanceCount) {
      newInstanceCount *= 2;
    }

    this.instancedGeometry.dispose();
    const pointGeometry = getPointBufferGeometry() as InstancedBufferGeometry;
    this.instancedGeometry = new InstancedBufferGeometry().copy(pointGeometry);
    this.points.geometry = this.instancedGeometry;
    this.pointsPick.geometry = this.instancedGeometry;

    // Create and set new attributes with the new instance count
    const newPos = new Float32Array(this.maxInstanceCount * 4);
    const newIds = new Uint32Array(this.maxInstanceCount);
    const newColors = new Float32Array(this.maxInstanceCount * 3);
    this.positionAttribute = new InstancedBufferAttribute(newPos, 4, false);
    this.idAttribute = new InstancedBufferAttribute(newIds, 1, false);
    this.colorAttribute = new InstancedBufferAttribute(newColors, 3, false);
    this.instancedGeometry.setAttribute(PointMaterialInstanceAttributes.POSITION, this.positionAttribute);
    this.instancedGeometry.setAttribute(PointMaterialInstanceAttributes.LABEL_ID, this.idAttribute);
    this.instancedGeometry.setAttribute(PointMaterialInstanceAttributes.COLOR, this.colorAttribute);

    this.maxInstanceCount = newInstanceCount;
  }

  public cleanup(): void {
    super.cleanup();
    this.pointMaterial.dispose();
    this.pointPickMaterial.dispose();
    this.instancedGeometry.dispose();
  }

  private applyPointColors(): void {
    if (!this.colors) {
      return;
    }
    const colorCount = Math.round(this.colors.length / 3);
    const color = new Color();
    for (let i = 0; i < this.maxInstanceCount; i++) {
      // Wrap colors if there are fewer colors than arrows
      const colorIndex = i % colorCount;
      color.fromArray(this.colors, colorIndex * 3);
      this.colorAttribute.setXYZ(i, color.r, color.g, color.b);
    }
    this.colorAttribute.needsUpdate = true;
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

  private updatePointAttributes(): void {
    if (!this.positions || !this.scales) {
      return;
    }
    for (let i = 0; i < this.maxInstanceCount; i++) {
      const posIndex = (i * 3) % this.positions.length;
      const scaleIndex = i % (this.scales ? this.scales.length : 1);
      const idIndex = i % (this.ids ? this.ids.length : 1);
      const x = this.positions[posIndex];
      const y = this.positions[posIndex + 1];
      const z = this.positions[posIndex + 2];
      const scale = this.scales[scaleIndex];
      const id = this.ids ? this.ids[idIndex] : 0;
      this.positionAttribute.setXYZ(i, x, y, z);
      this.scaleAttribute.setX(i, scale);
      this.idAttribute.setX(i, id);
    }
    this.positionAttribute.needsUpdate = true;
    this.scaleAttribute.needsUpdate = true;
    this.idAttribute.needsUpdate = true;
  }

  public setPointData(positions: Float32Array, scales: Float32Array, ids: Uint32Array | null = null): void {
    // Update instance count, add more instances as needed.
    const count = positions.length / 4;
    let didInstanceCountIncrease = this.maxInstanceCount < count;
    if (didInstanceCountIncrease) {
      this.increaseInstanceCountMax(count);
    }
    this.instancedGeometry.instanceCount = count;

    this.positions = positions;
    this.scales = scales;
    this.ids = ids;

    this.updatePointAttributes();
    if (didInstanceCountIncrease) {
      this.applyPointColors();
    }
  }
}
