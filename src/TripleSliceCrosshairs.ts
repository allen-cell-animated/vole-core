import { BufferGeometry, Float32BufferAttribute, Group, Line, LineBasicMaterial, Object3D, Vector3 } from "three";

import { OVERLAY_LAYER } from "./ThreeJsPanel.js";

/**
 * Manages crosshair line overlays for the triple-slice view.
 * Each of the three panes (XY, YZ, XZ) gets two crosshair lines
 * that indicate the current slice positions of the other two axes.
 *
 * All lines are positioned in the XY plane (z=0) because the triple-view
 * renderer uses a single Z-facing orthographic camera for all panes.
 * Each pane's crosshair group is shown/hidden per-pane during rendering.
 */
export default class TripleSliceCrosshairs {
  private group: Object3D;
  private material: LineBasicMaterial;

  /** Per-pane groups: [xy, yz, xz]. Only one is visible at a time. */
  private paneGroups: [Group, Group, Group];

  // XY pane crosshairs (face: normPhysX × normPhysY)
  private xyVertical: Line; // marks X slice position
  private xyHorizontal: Line; // marks Y slice position

  // YZ pane crosshairs (face: normPhysY × normPhysZ, mapped to XY plane)
  private yzVertical: Line; // marks Y slice position (display X)
  private yzHorizontal: Line; // marks Z slice position (display Y)

  // XZ pane crosshairs (face: normPhysX × normPhysZ, mapped to XY plane)
  private xzVertical: Line; // marks X slice position (display X)
  private xzHorizontal: Line; // marks Z slice position (display Y)

  constructor() {
    this.group = new Object3D();
    this.group.name = "TripleSliceCrosshairs";

    this.material = new LineBasicMaterial({ color: 0xffffff, depthTest: false, depthWrite: false });

    const xyGroup = new Group();
    xyGroup.name = "xy_crosshairs";
    this.xyVertical = this.createLine();
    this.xyHorizontal = this.createLine();
    xyGroup.add(this.xyVertical, this.xyHorizontal);

    const yzGroup = new Group();
    yzGroup.name = "yz_crosshairs";
    this.yzVertical = this.createLine();
    this.yzHorizontal = this.createLine();
    yzGroup.add(this.yzVertical, this.yzHorizontal);

    const xzGroup = new Group();
    xzGroup.name = "xz_crosshairs";
    this.xzVertical = this.createLine();
    this.xzHorizontal = this.createLine();
    xzGroup.add(this.xzVertical, this.xzHorizontal);

    this.paneGroups = [xyGroup, yzGroup, xzGroup];
    this.group.add(xyGroup, yzGroup, xzGroup);
  }

  private createLine(): Line {
    const geom = new BufferGeometry();
    geom.setAttribute("position", new Float32BufferAttribute([0, 0, 0, 0, 0, 0], 3));
    const line = new Line(geom, this.material);
    line.layers.set(OVERLAY_LAYER);
    line.frustumCulled = false;
    return line;
  }

  private setLineEndpoints(line: Line, p1: [number, number, number], p2: [number, number, number]): void {
    const posAttr = line.geometry.getAttribute("position");
    posAttr.setXYZ(0, p1[0], p1[1], p1[2]);
    posAttr.setXYZ(1, p2[0], p2[1], p2[2]);
    posAttr.needsUpdate = true;
  }

  /**
   * Shows only the crosshair lines for the given pane index (0=XY, 1=YZ, 2=XZ).
   * Called per-pane during triple-view rendering.
   */
  showPaneLines(paneIndex: number): void {
    for (let i = 0; i < 3; i++) {
      this.paneGroups[i].visible = i === paneIndex;
    }
  }

  /**
   * Updates all crosshair positions based on the current slice indices.
   * All lines are in the XY plane (z=0), positioned relative to each face's mesh scale.
   *
   * @param indices Current slice indices {x, y, z} as integer voxel indices.
   * @param volumeSize Volume dimensions in voxels {x, y, z}.
   * @param normPhysicalSize Normalized physical size of the volume.
   */
  update(indices: { x: number; y: number; z: number }, volumeSize: Vector3, normPhysicalSize: Vector3): void {
    // Convert voxel indices to normalized positions within each face's range
    const nx = volumeSize.x > 1 ? (indices.x / (volumeSize.x - 1) - 0.5) * normPhysicalSize.x : 0;
    const ny = volumeSize.y > 1 ? (indices.y / (volumeSize.y - 1) - 0.5) * normPhysicalSize.y : 0;
    const nz = volumeSize.z > 1 ? (indices.z / (volumeSize.z - 1) - 0.5) * normPhysicalSize.z : 0;

    const halfPx = normPhysicalSize.x * 0.5;
    const halfPy = normPhysicalSize.y * 0.5;
    const halfPz = normPhysicalSize.z * 0.5;

    // XY pane: mesh scale = (normPhysX, normPhysY). Camera framing = same.
    // Vertical line at x=nx, spanning y range
    this.setLineEndpoints(this.xyVertical, [nx, -halfPy, 0], [nx, halfPy, 0]);
    // Horizontal line at y=ny, spanning x range
    this.setLineEndpoints(this.xyHorizontal, [-halfPx, ny, 0], [halfPx, ny, 0]);

    // YZ pane: mesh scale = (normPhysZ, normPhysY). Camera framing = same.
    // Display X = volume Z, Display Y = volume Y (Y vertical to align with XY pane)
    // Vertical line at display X = nz, spanning display Y range
    this.setLineEndpoints(this.yzVertical, [nz, -halfPy, 0], [nz, halfPy, 0]);
    // Horizontal line at display Y = ny, spanning display X range
    this.setLineEndpoints(this.yzHorizontal, [-halfPz, ny, 0], [halfPz, ny, 0]);

    // XZ pane: mesh scale = (normPhysX, normPhysZ). Camera framing = same.
    // Display X = volume X, Display Y = volume Z
    // Vertical line at display X = nx, spanning display Y range
    this.setLineEndpoints(this.xzVertical, [nx, -halfPz, 0], [nx, halfPz, 0]);
    // Horizontal line at display Y = nz, spanning display X range
    this.setLineEndpoints(this.xzHorizontal, [-halfPx, nz, 0], [halfPx, nz, 0]);
  }

  get3dObject(): Object3D {
    return this.group;
  }

  cleanup(): void {
    this.material.dispose();
    this.xyVertical.geometry.dispose();
    this.xyHorizontal.geometry.dispose();
    this.yzVertical.geometry.dispose();
    this.yzHorizontal.geometry.dispose();
    this.xzVertical.geometry.dispose();
    this.xzHorizontal.geometry.dispose();
  }
}
