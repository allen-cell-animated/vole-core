import {
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  type WebGPURenderer,
  Scene,
  RenderTarget,
  NodeMaterial,
  type Node,
  type VaryingNode,
} from "three/webgpu";

import { Fn, positionGeometry, varying, vec2, vec4 } from "three/tsl";

export enum RenderPassType {
  OPAQUE,
  TRANSPARENT,
}

/**
 * Helper for render passes that just require a fragment shader: accepts a fragment shader and its
 * uniforms, and handles the ceremony of rendering a fullscreen quad with a simple vertex shader.
 */
export default class RenderToBuffer {
  public scene: Scene;
  public geometry: PlaneGeometry;
  public material: NodeMaterial;
  public mesh: Mesh;
  public camera: OrthographicCamera;

  constructor(fragmentNode: Node, passType: RenderPassType = RenderPassType.OPAQUE) {
    this.scene = new Scene();
    this.geometry = new PlaneGeometry(2, 2);

    this.material = new NodeMaterial();
    this.material.vertexNode = Fn(() => vec4(positionGeometry, 1.0))();
    this.material.fragmentNode = fragmentNode;
    this.material.transparent = passType === RenderPassType.TRANSPARENT;
    this.material.depthWrite = false;
    this.material.depthTest = false;

    this.mesh = new Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);

    this.camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
  }

  /** Renders this pass to `target` using `renderer`, or to the canvas if no `target` is given. */
  public render(renderer: WebGPURenderer, target?: RenderTarget) {
    renderer.setRenderTarget(target ?? null);
    renderer.render(this.scene, this.camera);
    // Reset the render target to the screen
    renderer.setRenderTarget(null);
  }
}
