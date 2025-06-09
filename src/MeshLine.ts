import { Line2 } from "three/addons/lines/Line2.js";
import Volume from "./Volume";
import { Euler, Group, Vector3 } from "three";
import { Bounds } from "./types";
import { LineMaterial } from "three/addons/lines/LineMaterial";
import { MESH_LAYER, OVERLAY_LAYER } from "./ThreeJsPanel";
import { LineSegments2 } from "three/addons/lines/LineSegments2";
import { LineSegmentsGeometry } from "three/addons/lines/LineSegmentsGeometry";

export default class MeshLine {
  private volume: Volume;
  private meshPivot: Group;
  private lineMesh: LineSegments2;
  private bounds: Bounds;
  private scale: Vector3;

  constructor(volume: Volume) {
    this.volume = volume;
    const geometry = new LineSegmentsGeometry();
    const material = new LineMaterial({ color: "#f00", linewidth: 2, worldUnits: false });

    this.lineMesh = new LineSegments2(geometry, material);
    this.lineMesh.layers.set(MESH_LAYER);
    this.lineMesh.frustumCulled = false;

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

  setLinePositionsNormalized(positionData: Float32Array): void {
    if (positionData.length % 6 !== 0) {
      throw new Error("positionData length must be a multiple of 6 (pairs of two 3-dimensional coordinates)");
    }
    // Replacing the geometry fixes a bug where the number of line segments
    // would not update. There may be a flag that needs to be set to fix this?
    this.lineMesh.geometry.dispose();
    this.lineMesh.geometry = new LineSegmentsGeometry();
    this.lineMesh.geometry.setPositions(positionData);
    this.lineMesh.geometry.attributes.position.needsUpdate = true;
  }

  setLinePositions(positionData: Float32Array): void {
    // Normalize the vertex data based on the volume's physical size
    if (positionData.length % 6 !== 0) {
      throw new Error("positionData length must be a multiple of 6 (pairs of two 3-dimensional coordinates)");
    }
    const normalizedVertices = new Float32Array(positionData.length);
    for (let i = 0; i < positionData.length; i += 3) {
      normalizedVertices[i + 0] = positionData[i + 0] / this.volume.physicalSize.x - 0.5;
      normalizedVertices[i + 1] = positionData[i + 1] / this.volume.physicalSize.y - 0.5;
      normalizedVertices[i + 2] = positionData[i + 2] / this.volume.physicalSize.z - 0.5;
    }
    this.setLinePositionsNormalized(normalizedVertices);
  }

  setNumSegmentsVisible(segments: number): void {
    if (this.lineMesh.geometry) {
      const count = segments;
      this.lineMesh.geometry.instanceCount = Math.max(0, count);
    }
  }
}
