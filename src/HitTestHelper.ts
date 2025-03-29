import {
  Camera,
  FloatType,
  Mesh,
  NearestFilter,
  OrthographicCamera,
  PlaneGeometry,
  RGBAFormat,
  Scene,
  ShaderMaterial,
  Texture,
  Vector2,
  WebGLRenderer,
  WebGLRenderTarget,
} from "three";

export default class HitTestHelper {
  private hitTestBuffer: WebGLRenderTarget;
  private hitTestScene: Scene;
  private hitTestCamera: Camera;
  private hitTestVertexShader: string;
  private hitTestFragmentShader: string;
  private hitTestMesh: Mesh;

  constructor() {
    this.hitTestBuffer = new WebGLRenderTarget(1, 1, {
      minFilter: NearestFilter,
      magFilter: NearestFilter,
      format: RGBAFormat,
      type: FloatType,
      depthBuffer: false,
      stencilBuffer: false,
    });
    this.hitTestScene = new Scene();
    this.hitTestCamera = new OrthographicCamera();
    this.hitTestVertexShader = `

    void main() {
      gl_Position = vec4(position, 1.0);
    }
    `;
    this.hitTestFragmentShader = `
    uniform vec2 pixel;
    uniform sampler2D objectIdTexture;

    void main() {
      gl_FragColor = texture(objectIdTexture, pixel);
    }
    `;
    this.hitTestMesh = new Mesh(
      new PlaneGeometry(2, 2),
      new ShaderMaterial({
        vertexShader: this.hitTestVertexShader,
        fragmentShader: this.hitTestFragmentShader,
        depthWrite: false,
        depthTest: false,
        uniforms: {
          pixel: { value: new Vector2(0.5, 0.5) },
          objectIdTexture: { value: null },
        },
      })
    );
    this.hitTestScene.add(this.hitTestMesh);
  }

  // Read the x,y pixel of the given idBuffer Texture object
  public hitTest(renderer: WebGLRenderer, idBuffer: WebGLRenderTarget, x: number, y: number): Float32Array {
    // Strategy:  because multiple render targets (MRT) are being used, and ThreeJS
    // doesn't allow direct reads from them, we render a single pixel from one of
    // the textures internal to the MRT.
    // This is done by building a single render target of size 1x1 to hold the pixel
    // we want to read.  We will copy into it using a gpu draw call, and then
    // use readRenderTargetPixels to get the data.

    const pixel = new Float32Array(4).fill(-1);
    // (typeId), (instanceId), fragViewPos.z, fragPosDepth;

    // tell the shader which texture to use, and which pixel to read from
    (this.hitTestMesh.material as ShaderMaterial).uniforms.objectIdTexture.value = idBuffer.textures[0];
    (this.hitTestMesh.material as ShaderMaterial).uniforms.pixel.value = new Vector2(x, y);

    // WHY ARE WE NOT SIMPLY READING FROM THE pickBuffer WITHOUT A EXTRA DRAW CALL?
    // BECAUSE readRenderTargetPixels requires a render target?
    // BUT there is a rendertarget with the pickbuffer bound!

    // "draw" the pixel into our hit test buffer
    renderer.setRenderTarget(this.hitTestBuffer);
    renderer.render(this.hitTestScene, this.hitTestCamera);
    renderer.setRenderTarget(null);

    // read the pixel out
    renderer.readRenderTargetPixels(this.hitTestBuffer, 0, 0, 1, 1, pixel);

    return pixel;
  }
}
