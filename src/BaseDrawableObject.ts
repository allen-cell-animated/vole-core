import { Euler, Group, Material, Mesh, Vector3 } from "three";
import { IDrawableObject, ScaleInfo } from "./types";

export default class BaseDrawableObject implements IDrawableObject {
  protected meshPivot: Group;
  protected scale: Vector3;
  protected parentScale: Vector3;
  protected flipAxes: Vector3;

  /**
   * Mesh or array of meshes that should be disposed of during cleanup. Also
   * used for toggling visibility.
   */
  protected meshes: Mesh | Mesh[] | null;

  constructor() {
    this.meshPivot = new Group();
    this.scale = new Vector3(1, 1, 1);
    this.parentScale = new Vector3(1, 1, 1);
    this.flipAxes = new Vector3(1, 1, 1);

    this.meshes = null;
  }

  forEachMesh(callback: (mesh: Mesh) => void): void {
    if (this.meshes) {
      if (Array.isArray(this.meshes)) {
        this.meshes.forEach((mesh) => callback(mesh));
      } else {
        callback(this.meshes);
      }
    }
  }

  cleanup(): void {
    this.meshPivot.clear();
    this.forEachMesh((mesh) => {
      mesh.geometry.dispose();
      (mesh.material as Material).dispose();
    });
  }

  doRender(): void {
    // no op
  }

  setVisible(visible: boolean): void {
    this.meshPivot.visible = visible;
  }

  get3dObject(): Group {
    return this.meshPivot;
  }

  setTranslation(translation: Vector3): void {
    this.meshPivot.position.copy(translation);
  }

  setScale(scale: Vector3): void {
    this.scale.copy(scale);
    this.meshPivot.scale.copy(scale).multiply(this.flipAxes);
  }

  setScaleInfo(scaleInfo: ScaleInfo): void {
    this.parentScale.copy(scaleInfo.parentScale);
  }

  setRotation(eulerXYZ: Euler): void {
    this.meshPivot.rotation.copy(eulerXYZ);
  }

  setFlipAxes(flipX: number, flipY: number, flipZ: number): void {
    this.flipAxes.set(flipX, flipY, flipZ);
    this.meshPivot.scale.copy(this.scale).multiply(this.flipAxes);
  }

  setOrthoThickness(_thickness: number): void {
    // no op
  }

  setResolution(_x: number, _y: number): void {
    // no op
  }

  setAxisClip(_axis: "x" | "y" | "z", _minval: number, _maxval: number, _isOrthoAxis: boolean): void {
    // no op
  }

  updateClipRegion(_xmin: number, _xmax: number, _ymin: number, _ymax: number, _zmin: number, _zmax: number): void {
    // no op
  }
}
