import { Line2 } from "three/addons/lines/Line2.js";
import Volume from "./Volume";
import { Euler, Group, Vector3 } from "three";
import { Bounds } from "./types";
import { LineGeometry } from "three/addons/lines/LineGeometry";
import { LineMaterial } from "three/addons/lines/LineMaterial";
import { MESH_LAYER } from "./ThreeJsPanel";

export default class MeshLine {
  private volume: Volume;
  private meshPivot: Group;
  private lineMesh: Line2;
  private bounds: Bounds;
  private scale: Vector3;

  constructor(volume: Volume) {
    this.volume = volume;
    const geometry = new LineGeometry();
    geometry.setPositions([0.5, 0.5, -0.4, -0.5, -0.5, -0.4]);
    const material = new LineMaterial({ color: "#f00", linewidth: 1, worldUnits: false });

    this.lineMesh = new Line2(geometry, material);
    this.lineMesh.layers.set(MESH_LAYER);

    this.meshPivot = new Group();
    this.meshPivot.add(this.lineMesh);

    this.meshPivot.layers.set(MESH_LAYER);

    this.scale = new Vector3(1, 1, 1);
    this.bounds = {
      bmin: new Vector3(-0.5, -0.5, -0.5),
      bmax: new Vector3(0.5, 0.5, 0.5),
    };
  }

  cleanup(): void {
    this.lineMesh.geometry.dispose();
    this.lineMesh.material.dispose();
  }

  setVisible(visible: boolean): void {
    this.lineMesh.visible = visible;
  }

  doRender(): void {
    // no op
  }

  get3dObject(): Group {
    return this.meshPivot;
  }

  setScale(scale: Vector3, position = new Vector3(0, 0, 0)): void {
    this.meshPivot.scale.copy(scale);
    this.meshPivot.position.copy(position);
  }

  setFlipAxes(flipX: number, flipY: number, flipZ: number): void {
    this.meshPivot.scale.copy(
      new Vector3(0.5 * this.scale.x * flipX, 0.5 * this.scale.y * flipY, 0.5 * this.scale.z * flipZ)
    );
  }

  setTranslation(vec3xyz: Vector3): void {
    this.meshPivot.position.copy(vec3xyz);
  }

  setResolution(_x: number, _y: number): void {
    // no op
  }

  setRotation(eulerXYZ: Euler): void {
    this.meshPivot.rotation.copy(eulerXYZ);
  }

  setColor(color: string): void {
    if (this.lineMesh.material) {
      this.lineMesh.material.color.set(color);
    }
  }

  setLineVertices(positions: Float32Array): void {
    // TODO: Scale based on volume size?
    const { physicalSize } = this.volume;
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = positions[i] / physicalSize.x - 0.5;
      positions[i + 1] = positions[i + 1] / physicalSize.y - 0.5;
      positions[i + 2] = positions[i + 2] / physicalSize.z - 0.5;
    }
    console.log("setLineVertices", positions);
    this.lineMesh.geometry.setPositions(positions);
    this.lineMesh.geometry.computeBoundingSphere();
  }

  setVertexRange(start: number, end: number): void {
    if (this.lineMesh.geometry) {
      this.lineMesh.geometry.setDrawRange(start, end - start);
      this.lineMesh.geometry.computeBoundingSphere();
    }
  }
}
