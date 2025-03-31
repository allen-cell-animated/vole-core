import {
  BoxGeometry,
  BufferGeometry,
  Color,
  DataTexture,
  DepthTexture,
  FloatType,
  Group,
  Material,
  Matrix4,
  Mesh,
  NearestFilter,
  OrthographicCamera,
  PerspectiveCamera,
  RGBAFormat,
  Scene,
  ShaderMaterial,
  Texture,
  Vector2,
  WebGLRenderer,
  WebGLRenderTarget,
} from "three";

import {
  pickVertexShaderSrc,
  pickFragmentShaderSrc,
  pickShaderUniforms,
} from "./constants/volumeRayMarchPickShader.js";
import { Volume } from "./index.js";
import Channel from "./Channel.js";
import type { VolumeRenderImpl } from "./VolumeRenderImpl.js";
import type { FuseChannel } from "./types.js";

import { VolumeRenderSettings, SettingsFlags } from "./VolumeRenderSettings.js";

export default class PickVolume implements VolumeRenderImpl {
  private settings: VolumeRenderSettings;
  public volume: Volume;

  private geometry: BoxGeometry;
  private geometryMesh: Mesh<BufferGeometry, Material>;
  private geometryTransformNode: Group;
  private scene: Scene;
  private uniforms: ReturnType<typeof pickShaderUniforms>;
  private emptyPositionTex: DataTexture;
  public needRedraw = false;
  private pickBuffer: WebGLRenderTarget;
  private channelToPick = 0;

  /**
   * Creates a new PickVolume.
   * @param volume The volume that this renderer should render data from.
   * @param settings Optional settings object. If set, updates the renderer with
   * the given settings. Otherwise, uses the default VolumeRenderSettings.
   */
  constructor(volume: Volume, settings: VolumeRenderSettings = new VolumeRenderSettings(volume)) {
    this.volume = volume;

    this.uniforms = pickShaderUniforms();
    [this.geometry, this.geometryMesh] = this.createGeometry(this.uniforms);

    this.geometryTransformNode = new Group();
    this.geometryTransformNode.name = "PickVolumeContainerNode";
    this.geometryTransformNode.add(this.geometryMesh);

    this.scene = new Scene();
    this.scene.name = "PickVolumeScene";
    this.scene.add(this.geometryTransformNode);

    this.emptyPositionTex = new DataTexture(new Uint8Array(Array(16).fill(0)), 2, 2);

    // buffers:
    this.pickBuffer = new WebGLRenderTarget(2, 2, {
      count: 1, //3,
      minFilter: NearestFilter,
      magFilter: NearestFilter,
      format: RGBAFormat,
      type: FloatType,
      generateMipmaps: false,
    });
    // Name our G-Buffer attachments for debugging
    const OBJECTBUFFER = 0;
    this.pickBuffer.textures[OBJECTBUFFER].name = "objectinfo";
    //this.pickBuffer.textures[NORMALBUFFER].name = "normal";
    //this.pickBuffer.textures[POSITIONBUFFER].name = "position";

    this.settings = settings;
    this.updateSettings(settings, SettingsFlags.ALL);
    // TODO this is doing *more* redundant work! Fix?
    this.updateVolumeDimensions();
  }

  public setChannelToPick(channel: number) {
    this.channelToPick = channel;
  }

  public getPickBuffer(): WebGLRenderTarget {
    return this.pickBuffer;
  }

  public updateVolumeDimensions(): void {
    const { normPhysicalSize, normRegionSize } = this.volume;
    // Set offset
    this.geometryMesh.position.copy(this.volume.getContentCenter().multiply(this.settings.scale));
    // Set scale
    const fullRegionScale = normPhysicalSize.clone().multiply(this.settings.scale);
    this.geometryMesh.scale.copy(fullRegionScale).multiply(normRegionSize);
    this.setUniform("volumeScale", normPhysicalSize);
    this.settings && this.updateSettings(this.settings, SettingsFlags.ROI);

    // Set atlas dimension uniforms
    const { atlasTileDims, subregionSize } = this.volume.imageInfo;
    const atlasSize = new Vector2(subregionSize.x, subregionSize.y).multiply(atlasTileDims);

    this.setUniform("ATLAS_DIMS", atlasTileDims);

    this.setUniform("textureRes", atlasSize);
    this.setUniform("SLICES", this.volume.imageInfo.volumeSize.z);

    // (re)create channel data
  }

  public viewpointMoved(): void {
    this.needRedraw = true;
  }

  public updateSettings(newSettings: VolumeRenderSettings, dirtyFlags?: number | SettingsFlags) {
    if (dirtyFlags === undefined) {
      dirtyFlags = SettingsFlags.ALL;
    }

    this.settings = newSettings;

    if (dirtyFlags & SettingsFlags.VIEW) {
      this.needRedraw = true;
      this.geometryMesh.visible = this.settings.visible;
      // Configure ortho
      this.setUniform("orthoScale", this.settings.orthoScale);
      this.setUniform("isOrtho", this.settings.isOrtho ? 1.0 : 0.0);
      // Ortho line thickness
      const axis = this.settings.viewAxis;
      if (this.settings.isOrtho && axis) {
        // TODO: Does this code do any relevant changes?
        const maxVal = this.settings.bounds.bmax[axis];
        const minVal = this.settings.bounds.bmin[axis];
        const thicknessPct = maxVal - minVal;
        this.setUniform("orthoThickness", thicknessPct);
      } else {
        this.setUniform("orthoThickness", 1.0);
      }
    }

    if (dirtyFlags & SettingsFlags.VIEW || dirtyFlags & SettingsFlags.BOUNDING_BOX) {
      // Update tick marks with either view or bounding box changes
      //      this.setUniform("maxProject", this.settings.maxProjectMode ? 1 : 0);
    }

    if (dirtyFlags & SettingsFlags.TRANSFORM) {
      this.needRedraw = true;
      // Set rotation and translation
      this.geometryTransformNode.position.copy(this.settings.translation);
      this.geometryTransformNode.rotation.copy(this.settings.rotation);
      // TODO this does some redundant work. Including a new call to this very function! Fix?
      this.updateVolumeDimensions();
      this.setUniform("flipVolume", this.settings.flipAxes);
    }

    if (dirtyFlags & SettingsFlags.MATERIAL) {
      // nothing
    }

    if (dirtyFlags & SettingsFlags.CAMERA) {
      // nothing
    }

    if (dirtyFlags & SettingsFlags.ROI) {
      this.needRedraw = true;
      // Normalize and set bounds
      const bounds = this.settings.bounds;
      const { normRegionSize, normRegionOffset } = this.volume;
      const offsetToCenter = normRegionSize.clone().divideScalar(2).add(normRegionOffset).subScalar(0.5);
      const bmin = bounds.bmin.clone().sub(offsetToCenter).divide(normRegionSize).clampScalar(-0.5, 0.5);
      const bmax = bounds.bmax.clone().sub(offsetToCenter).divide(normRegionSize).clampScalar(-0.5, 0.5);

      this.setUniform("AABB_CLIP_MIN", bmin);
      this.setUniform("AABB_CLIP_MAX", bmax);
    }

    if (dirtyFlags & SettingsFlags.SAMPLING) {
      this.needRedraw = true;
      const resolution = this.settings.resolution.clone();
      const dpr = window.devicePixelRatio ? window.devicePixelRatio : 1.0;
      const nx = Math.floor(resolution.x / dpr);
      const ny = Math.floor(resolution.y / dpr);

      this.setUniform("iResolution", new Vector2(nx, ny));
      this.pickBuffer.setSize(nx, ny);
    }

    if (dirtyFlags & SettingsFlags.MASK_ALPHA) {
      // nothing
    }
    if (dirtyFlags & SettingsFlags.MASK_DATA) {
      // nothing
    }
  }

  /**
   * Creates the geometry mesh and material for rendering the volume.
   * @param uniforms object containing uniforms to pass to the shader material.
   * @returns the new geometry and geometry mesh.
   */
  private createGeometry(
    pickUniforms: ReturnType<typeof pickShaderUniforms>
  ): [BoxGeometry, Mesh<BufferGeometry, Material>] {
    const geom = new BoxGeometry(1.0, 1.0, 1.0);

    // shader,vtx and frag.

    const threePickMaterial = new ShaderMaterial({
      uniforms: pickUniforms,
      vertexShader: pickVertexShaderSrc,
      fragmentShader: pickFragmentShaderSrc,
      depthTest: true,
      depthWrite: false,
    });
    const pickMesh: Mesh<BufferGeometry, Material> = new Mesh(geom, threePickMaterial);
    pickMesh.name = "PickVolume";

    return [geom, pickMesh];
  }

  public cleanup(): void {
    // do i need to empty out the pickscene?
    this.scene.clear(); // remove all children from the scene
    this.geometryTransformNode.clear(); // remove all children from the transform node

    this.geometry.dispose();
    this.geometryMesh.material.dispose();
  }

  public doRender(
    renderer: WebGLRenderer,
    camera: PerspectiveCamera | OrthographicCamera,
    depthTexture?: DepthTexture | Texture | null
  ): void {
    if (!this.geometryMesh.visible) {
      return;
    }
    if (!this.needRedraw) {
      return;
    }
    this.needRedraw = false;

    this.setUniform("iResolution", this.settings.resolution);
    this.setUniform("textureRes", this.settings.resolution);

    const depthTex = depthTexture ?? this.emptyPositionTex;
    this.setUniform("textureDepth", depthTex);
    this.setUniform("usingPositionTexture", (depthTex as DepthTexture).isDepthTexture ? 0 : 1);
    this.setUniform("CLIP_NEAR", camera.near);
    this.setUniform("CLIP_FAR", camera.far);

    // this.channelData.gpuFuse(renderer);

    // set up texture from segmentation channel!!!!
    // we need to know the channel index for this.
    // ...channel.dataTexture...
    // TODO TODO TODO FIXME
    this.setUniform("textureAtlas", this.volume.getChannel(this.channelToPick).dataTexture);

    this.geometryTransformNode.updateMatrixWorld(true);

    const mvm = new Matrix4();
    mvm.multiplyMatrices(camera.matrixWorldInverse, this.geometryMesh.matrixWorld);
    mvm.invert();

    this.setUniform("inverseModelViewMatrix", mvm);
    this.setUniform("inverseProjMatrix", camera.projectionMatrixInverse);

    const VOLUME_LAYER = 0;
    // draw into pick buffer...
    camera.layers.set(VOLUME_LAYER);
    renderer.setRenderTarget(this.pickBuffer);
    renderer.autoClear = true;

    const prevClearColor = new Color();
    renderer.getClearColor(prevClearColor);
    const prevClearAlpha = renderer.getClearAlpha();
    renderer.setClearColor(0x000000, 0);

    renderer.render(this.scene, camera);

    renderer.autoClear = true;
    renderer.setClearColor(prevClearColor, prevClearAlpha);
    renderer.setRenderTarget(null);
  }

  public get3dObject(): Group {
    return this.geometryTransformNode;
  }

  //////////////////////////////////////////
  //////////////////////////////////////////

  private setUniform<U extends keyof ReturnType<typeof pickShaderUniforms>>(
    name: U,
    value: ReturnType<typeof pickShaderUniforms>[U]["value"]
  ) {
    if (!this.uniforms[name]) {
      return;
    }
    this.uniforms[name].value = value;
  }

  // channelcolors is array of {rgbColor, lut} and channeldata is volume.channels
  public updateActiveChannels(_channelcolors: FuseChannel[], _channeldata: Channel[]): void {
    // TODO can we use this as a way to get segmentation channel?
    // update to fused texture
    //this.setUniform("textureAtlas", this.channelData.getFusedTexture());
    //this.setUniform("textureAtlasMask", this.channelData.maskTexture);
  }

  public setRenderUpdateListener(_listener?: ((iteration: number) => void) | undefined) {
    return;
  }
}
