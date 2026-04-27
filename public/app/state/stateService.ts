import { AREA_LIGHT, JsonImageInfoLoader, Light, SKY_LIGHT, Volume, VolumeFileFormat } from "../../../src";
import { State, TestDataSpec } from "../../types";

export type CropAxis = "x" | "y" | "z";
export type CameraMode = "X" | "Y" | "Z" | "3D";
export type CropStateKey = "cropXmin" | "cropXmax" | "cropYmin" | "cropYmax" | "cropZmin" | "cropZmax";

export interface HistogramSelection {
  minBin: number;
  maxBin: number;
  dragging: "min" | "max" | null;
  hover: "min" | "max" | null;
  minHandleHoverWeight: number;
  maxHandleHoverWeight: number;
}

export const CROP_AXES: CropAxis[] = ["x", "y", "z"];

export const cropAxisStateKeys: Record<CropAxis, { min: CropStateKey; max: CropStateKey }> = {
  x: { min: "cropXmin", max: "cropXmax" },
  y: { min: "cropYmin", max: "cropYmax" },
  z: { min: "cropZmin", max: "cropZmax" },
};

export const DEFAULT_TEST_DATA: Record<string, TestDataSpec> = {
  zarrQimEscargot: {
    url: "https://platform.qim.dk/qim-public/escargot/escargot.zarr",
    type: VolumeFileFormat.ZARR,
  },
  omeTiff: {
    url: "https://animatedcell-test-data.s3.us-west-2.amazonaws.com/AICS-12_881.ome.tif",
    type: VolumeFileFormat.TIFF,
  },
};

const DEFAULT_COLORS = {
  background: [0.9, 0.9, 0.9] as [number, number, number],
  foreground: [0, 170, 255] as [number, number, number],
  boundingBox: [0.3, 0.3, 0.3] as [number, number, number],
};

export function createInitialState(): State {
  return {
    file: "",
    volume: new Volume(),
    currentFrame: 0,
    lastFrameTime: 0,
    isPlaying: false,
    timerId: 0,
    scene: 0,

    loader: [
      new JsonImageInfoLoader(
        "https://animatedcell-test-data.s3.us-west-2.amazonaws.com/timelapse/test_parent_T49.ome_%%_atlas.json"
      ),
    ],

    density: 25.0,
    maskAlpha: 1.0,
    exposure: 0.75,
    aperture: 0.0,
    fov: 20,
    focalDistance: 4.0,

    lights: [new Light(SKY_LIGHT), new Light(AREA_LIGHT)],

    skyTopIntensity: 0.3,
    skyMidIntensity: 0.3,
    skyBotIntensity: 0.3,
    skyTopColor: [255, 255, 255],
    skyMidColor: [255, 255, 255],
    skyBotColor: [255, 255, 255],

    lightColor: [255, 255, 255],
    lightIntensity: 75.0,
    lightTheta: 14,
    lightPhi: 54,

    xmin: 0.0,
    ymin: 0.0,
    zmin: 0.0,
    xmax: 1.0,
    ymax: 1.0,
    zmax: 1.0,

    cropXmin: 0.0,
    cropYmin: 0.0,
    cropZmin: 0.0,
    cropXmax: 1.0,
    cropYmax: 1.0,
    cropZmax: 1.0,

    samplingRate: 0.25,
    primaryRay: 1.0,
    secondaryRay: 1.0,

    isPT: false,
    isMP: false,
    interpolationActive: true,

    isTurntable: false,
    isAxisShowing: false,
    isAligned: true,

    showScaleBar: true,

    showBoundingBox: false,
    boundingBoxColor: DEFAULT_COLORS.boundingBox,
    backgroundColor: DEFAULT_COLORS.background,
    foregroundColor: DEFAULT_COLORS.foreground,
    flipX: 1,
    flipY: 1,
    flipZ: 1,

    channelFolderNames: [],
    channelGui: [],

    currentImageStore: "",
    currentImageName: "",

    colorizeEnabled: false,
    colorizeChannel: 0,
    feature: "feature1",
    colormap: "viridis",
    featureMin: 0.0,
    featureMax: 1.0,
  };
}

export function createHistogramSelection(): HistogramSelection {
  return {
    minBin: 0,
    maxBin: 255,
    dragging: null,
    hover: null,
    minHandleHoverWeight: 0,
    maxHandleHoverWeight: 0,
  };
}

export function createInitialSliceIndexByAxis(): Record<CropAxis, number> {
  return {
    x: 0,
    y: 0,
    z: 0,
  };
}

export function createInitialSliceMaxIndexByAxis(): Record<CropAxis, number> {
  return {
    x: 0,
    y: 0,
    z: 0,
  };
}
