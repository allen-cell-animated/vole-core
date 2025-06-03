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
    const material = new LineMaterial({ color: "#f00", linewidth: 2, worldUnits: false });

    this.lineMesh = new Line2(geometry, material);
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

  private normalizeVertex(centroid: Float32Array): number[] {
    const { physicalSize } = this.volume;
    const x = centroid[0] / physicalSize.x - 0.5;
    const y = centroid[1] / physicalSize.y - 0.5;
    const z = centroid[2] / physicalSize.z - 0.5;
    return [x, y, z];
  }

  setLineVertices(vertexData: Float32Array): void {
    // TODO: Scale based on volume size?
    const numVertices = vertexData.length / 3;
    if (numVertices <= 1) {
      this.lineMesh.geometry.setPositions(new Float32Array(0));
    }
    const scaledVertices = new Float32Array(numVertices * 3 * 2 - 6);
    const startVertex = this.normalizeVertex(vertexData.slice(0, 3));
    scaledVertices.set(startVertex, 0);
    // Double up vertices for line segment rendering
    for (let i = 1; i < numVertices - 1; i += 1) {
      const vertex = this.normalizeVertex(vertexData.slice(3 * i, 3 * (i + 1)));
      scaledVertices.set(vertex, 6 * i - 3);
      scaledVertices.set(vertex, 6 * i);
    }
    const endVertex = this.normalizeVertex(vertexData.slice(vertexData.length - 3));
    scaledVertices.set(endVertex, scaledVertices.length - 3);

    this.lineMesh.geometry.setPositions(scaledVertices);
    this.lineMesh.geometry.computeBoundingSphere();
    this.lineMesh.computeLineDistances();
    this.lineMesh.geometry.attributes.position.needsUpdate = true;
  }

  setVertexRange(start: number, end: number): void {
    if (this.lineMesh.geometry) {
      this.lineMesh.geometry.instanceCount = end - start;
    }
  }
}
