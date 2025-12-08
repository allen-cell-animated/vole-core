import { Color } from "three";
import { LineMaterial } from "three/addons/lines/LineMaterial.js";
import { LineSegments2 } from "three/addons/lines/LineSegments2.js";
import { LineSegmentsGeometry } from "three/addons/lines/LineSegmentsGeometry.js";

import { IDrawableObject } from "./types.js";
import { MESH_NO_PICK_OCCLUSION_LAYER, OVERLAY_LAYER } from "./ThreeJsPanel.js";
import BaseDrawableMeshObject from "./BaseDrawableMeshObject.js";

const DEFAULT_VERTEX_BUFFER_SIZE = 1020;

/**
 * Simple wrapper for a 3D line segments object, with controls for vertex data,
 * color, width, and segments visible.
 */
export default class Line3d extends BaseDrawableMeshObject implements IDrawableObject {
  private lineMesh: LineSegments2;
  private bufferSize: number;

  constructor() {
    super();
    this.bufferSize = DEFAULT_VERTEX_BUFFER_SIZE;

    const geometry = new LineSegmentsGeometry();
    geometry.setPositions(new Float32Array(this.bufferSize));
    const material = new LineMaterial({ color: "#f00", linewidth: 2, worldUnits: false });
    this.lineMesh = new LineSegments2(geometry, material);

    // Lines need to write depth information so they interact with the volume
    // (so the lines appear to fade into the volume if they intersect), but
    // lines shouldn't interact with the pick buffer, otherwise strange visual
    // artifacts can occur where contours are drawn around lines. This layer
    // (MESH_NO_PICK_OCCLUSION_LAYER) does not occlude/interact with the pick
    // buffer but still writes depth information for the volume.
    this.meshPivot.layers.set(MESH_NO_PICK_OCCLUSION_LAYER);
    this.lineMesh.layers.set(MESH_NO_PICK_OCCLUSION_LAYER);
    this.lineMesh.frustumCulled = false;

    this.addChildMesh(this.lineMesh);
  }

  // Line-specific functions

  /**
   * Sets the color of the line material.
   * @param color Base line color.
   * @param useVertexColors If true, _the line will multiply the base color with
   * the per-vertex colors defined in the geometry (see `setLineVertexData`). Default is false.
   */
  setColor(color: Color, useVertexColors = false): void {
    this.lineMesh.material.color.set(color);
    this.lineMesh.material.vertexColors = useVertexColors;
    this.lineMesh.material.needsUpdate = true;
  }

  /**
   * Sets the opacity of the line material.
   *
   * Note that transparent lines may have unexpected colors when intersecting
   * with or overlapping the volume. Consider setting them to render as an
   * overlay instead using `setOverlay()`.
   * @param opacity Opacity value in the range `[0, 1]`. 0 is fully transparent,
   * 1 is fully opaque.
   */
  setOpacity(opacity: number): void {
    const isTransparent = opacity < 1.0;
    this.lineMesh.material.opacity = opacity;
    this.lineMesh.material.transparent = isTransparent;
    this.lineMesh.material.needsUpdate = true;
  }

  /**
   * Sets whether a line should be rendered as an overlay (rendered on top of
   * the volume) instead of a mesh (with depth, intersects with volume).
   * @param renderAsOverlay If true, the line will be rendered on top of the
   * volume, ignoring depth.
   */
  setRenderAsOverlay(renderAsOverlay: boolean): void {
    this.lineMesh.layers.set(renderAsOverlay ? OVERLAY_LAYER : MESH_NO_PICK_OCCLUSION_LAYER);
    this.lineMesh.material.depthTest = !renderAsOverlay;
    this.lineMesh.material.depthTest = !renderAsOverlay;
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
   * @param colors A Float32Array of RGB values in the [0, 1] range, where each
   * triplet corresponds to a vertex color.
   * @throws {Error} If `positions` length is not a multiple of 6 or if `colors`
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
