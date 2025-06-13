import { Color, Euler, Group, Vector3 } from "three";
import { Bounds, IDrawableObject } from "./types";
import { LineMaterial } from "three/addons/lines/LineMaterial";
import { MESH_LAYER, OVERLAY_LAYER } from "./ThreeJsPanel";
import { LineSegments2 } from "three/addons/lines/LineSegments2";
import { LineSegmentsGeometry } from "three/addons/lines/LineSegmentsGeometry";

const DEFAULT_VERTEX_BUFFER_SIZE = 1020;

export default class Line3d implements IDrawableObject {
  private meshPivot: Group;
  private bounds: Bounds;
  private scale: Vector3;
  private lineMesh: LineSegments2;
  private bufferSize: number;

  constructor() {
    // TODO: Line should not know about the Volume, should instead be scaled by a transform
    this.bufferSize = DEFAULT_VERTEX_BUFFER_SIZE;
    const geometry = new LineSegmentsGeometry();
    geometry.setPositions(new Float32Array(this.bufferSize));
    const material = new LineMaterial({ color: "#f00", linewidth: 2, worldUnits: false });

    this.lineMesh = new LineSegments2(geometry, material);
    this.lineMesh.layers.set(MESH_LAYER);
    this.lineMesh.frustumCulled = false;

    // TODO: Apply a matrix transform based on the Volume physical size
    this.meshPivot = new Group();
    this.meshPivot.add(this.lineMesh);

    this.meshPivot.layers.set(MESH_LAYER);

    this.scale = new Vector3(1, 1, 1);
    this.bounds = {
      bmin: new Vector3(-0.5, -0.5, -0.5),
      bmax: new Vector3(0.5, 0.5, 0.5),
    };
  }

  setTranslation(translation: Vector3): void {
    this.meshPivot.position.copy(translation);
  }
  setScale(scale: Vector3): void {
    this.scale.copy(scale);
    this.meshPivot.scale.copy(scale);
    console.log("Line3d setScale", scale);
  }

  setOrthoThickness(thickness: number): void {
    // no op
  }

  setAxisClip(axis: "x" | "y" | "z", minval: number, maxval: number, _isOrthoAxis: boolean): void {
    // no op
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

  setTransform(scale: Vector3, position = new Vector3(0, 0, 0)): void {
    this.meshPivot.scale.copy(scale);
    this.meshPivot.position.copy(position);
  }

  setFlipAxes(flipX: number, flipY: number, flipZ: number): void {
    this.meshPivot.scale.copy(
      new Vector3(0.5 * this.scale.x * flipX, 0.5 * this.scale.y * flipY, 0.5 * this.scale.z * flipZ)
    );
  }

  setResolution(_x: number, _y: number): void {
    // no op
  }

  setRotation(eulerXYZ: Euler): void {
    this.meshPivot.rotation.copy(eulerXYZ);
  }

  setColor(color: Color, useVertexColors: boolean = false): void {
    this.lineMesh.material.color.set(color);
    this.lineMesh.material.vertexColors = useVertexColors;
    this.lineMesh.material.needsUpdate = true;
  }

  setLineWidth(widthPx: number): void {
    this.lineMesh.material.linewidth = widthPx;
    this.lineMesh.material.needsUpdate = true;
  }

  setLineVertexData(positions: Float32Array, colors?: Float32Array): void {
    if (positions.length % 6 !== 0) {
      throw new Error("positions length must be a multiple of 6 (pairs of two 3-dimensional coordinates)");
    }
    // If buffer size is too small, dispose of the old geometry and create a new
    // one with the larger size.
    if (positions.length > this.bufferSize) {
      this.lineMesh.geometry.dispose();
      this.lineMesh.geometry = new LineSegmentsGeometry();
      this.bufferSize = positions.length;
    }
    this.lineMesh.geometry.setPositions(positions);
    if (colors) {
      this.lineMesh.geometry.setColors(colors);
    }
  }

  setNumSegmentsVisible(segments: number): void {
    if (this.lineMesh.geometry) {
      const count = segments;
      this.lineMesh.geometry.instanceCount = Math.max(0, count);
    }
  }
}
