import { Color, Euler, Group, Vector3 } from "three";
import { IDrawableObject } from "./types";
import { LineMaterial } from "three/addons/lines/LineMaterial";
import { MESH_LAYER } from "./ThreeJsPanel";
import { LineSegments2 } from "three/addons/lines/LineSegments2";
import { LineSegmentsGeometry } from "three/addons/lines/LineSegmentsGeometry";

const DEFAULT_VERTEX_BUFFER_SIZE = 1020;

/**
 * Simple wrapper for a 3D line segments object, with controls for vertex data,
 * color, width, and segments visible.
 */
export default class Line3d implements IDrawableObject {
  private meshPivot: Group;
  private scale: Vector3;
  private flipAxes: Vector3;
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
    this.flipAxes = new Vector3(1, 1, 1);
  }

  // IDrawableObject interface methods

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

  setTranslation(translation: Vector3): void {
    this.meshPivot.position.copy(translation);
  }

  setScale(scale: Vector3): void {
    this.scale.copy(scale);
    this.meshPivot.scale.copy(scale).multiply(this.flipAxes);
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

  // Line-specific functions

  /**
   * Sets the color of the line material.
   * @param color Base line color.
   * @param useVertexColors If true, the line will multiply the base color with
   * the per-vertex colors defined in the geometry (see `setLineVertexData`). Default is false.
   */
  setColor(color: Color, useVertexColors = false): void {
    this.lineMesh.material.color.set(color);
    this.lineMesh.material.vertexColors = useVertexColors;
    this.lineMesh.material.needsUpdate = true;
  }

  /**
   * Sets the width of the line in pixels.
   * @param widthPx Width in pixels.
   * @param useWorldUnits Whether to use world units for the line width. By
   * default (false), the width is in screen pixels.
   */
  setLineWidth(widthPx: number, useWorldUnits = false): void {
    this.lineMesh.material.linewidth = widthPx;
    this.lineMesh.material.worldUnits = useWorldUnits;
    this.lineMesh.material.needsUpdate = true;
  }

  /**
   * Sets the vertex data (position and RGB colors) for the line segments.
   * @param positions A Float32Array of 3D coordinates, where each pair of
   * coordinates is one line segment. Length must be a multiple of 6 (pairs of
   * two 3-dimensional coordinates).
   * @param colors A Float32Array of RGB values in the [0, 1] range, where each triplet corresponds
   * to a vertex color.
   * @throws {Error} If the positions length is not a multiple of 6 or if colors
   * length is not a multiple of 3.
   */
  setLineVertexData(positions: Float32Array, colors?: Float32Array): void {
    if (positions.length % 6 !== 0) {
      throw new Error(
        `positions length of ${positions.length} is not a multiple of 6 (pairs of two 3-dimensional coordinates)`
      );
    }
    if (colors !== undefined && colors.length % 3 !== 0) {
      throw new Error(`colors length of ${colors.length} is not a multiple of 3 (triplets of RGB values)`);
    }
    const newBufferSize = Math.max(positions.length, colors ? colors.length : 0);
    // If buffer size is too small, dispose of the old geometry and create a new
    // one with the larger size.
    if (newBufferSize > this.bufferSize) {
      this.lineMesh.geometry.dispose();
      this.lineMesh.geometry = new LineSegmentsGeometry();
      this.bufferSize = newBufferSize;
    }
    this.lineMesh.geometry.setPositions(positions);
    if (colors) {
      this.lineMesh.geometry.setColors(colors);
    }
  }

  /** Number of line segments that should be visible. */
  setNumSegmentsVisible(segments: number): void {
    if (this.lineMesh.geometry) {
      const count = segments;
      this.lineMesh.geometry.instanceCount = Math.max(0, count);
    }
  }
}
