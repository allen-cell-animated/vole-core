import { Color, Vector3 } from "three";
import GUI from "lil-gui";

import { colormaps as colorizercolormaps, features as colorizerfeatures } from "./colorizer";
import {
  CreateLoaderOptions,
  ImageInfo,
  IVolumeLoader,
  LoadSpec,
  Lut,
  JsonImageInfoLoader,
  RawArrayInfo,
  View3d,
  Volume,
  VolumeMaker,
  Light,
  AREA_LIGHT,
  RENDERMODE_PATHTRACE,
  RENDERMODE_RAYMARCH,
  SKY_LIGHT,
  VolumeLoadError,
  VolumeLoadErrorType,
  VolumeFileFormat,
} from "../src";
// special loader really just for this demo app but lives with the other loaders
import { OpenCellLoader } from "../src/loaders/OpenCellLoader";
import { State, TestDataSpec } from "./types";
import VolumeLoaderContext from "../src/workers/VolumeLoaderContext";
import { DATARANGE_UINT8, ColorizeFeature, type NumberType } from "../src/types";
import { RawArrayLoaderOptions } from "../src/loaders/RawArrayLoader";
import { getFileTypeHintCandidates } from "../src/utils/url_utils";

const CACHE_MAX_SIZE = 1_000_000_000;
const CONCURRENCY_LIMIT = 8;
const PREFETCH_CONCURRENCY_LIMIT = 3;
const PREFETCH_DISTANCE: [number, number, number, number] = [5, 5, 5, 5];
const MAX_PREFETCH_CHUNKS = 25;
const PLAYBACK_INTERVAL = 80;

const TEST_DATA: Record<string, TestDataSpec> = {
  zarrQimEscargot: {
    url: "https://platform.qim.dk/qim-public/escargot/escargot.zarr",
    type: VolumeFileFormat.ZARR,
  },
  omeTiff: {
    type: VolumeFileFormat.TIFF,
    url: "https://animatedcell-test-data.s3.us-west-2.amazonaws.com/AICS-12_881.ome.tif",
  },
};

const DEFAULT_COLORS = {
  background: [0.9, 0.9, 0.9] as [number, number, number],
  foreground: [0, 170, 255] as [number, number, number],
  boundingBox: [0.3, 0.3, 0.3] as [number, number, number],
};

let view3D: View3d;

function setVolumeLoading(isLoading: boolean) {
  document.body.classList.toggle("volume-loading", isLoading);

  const overlayIndicator = document.getElementById("volume-loading-overlay") as HTMLElement | null;
  overlayIndicator?.setAttribute("aria-hidden", isLoading ? "false" : "true");

  const inlineIndicator = document.getElementById("ome-zarr-scale-loading-indicator") as HTMLElement | null;
  inlineIndicator?.setAttribute("aria-hidden", isLoading ? "false" : "true");
}

const loaderContext = new VolumeLoaderContext(CACHE_MAX_SIZE, CONCURRENCY_LIMIT, PREFETCH_CONCURRENCY_LIMIT);

const myState: State = {
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
  lightTheta: 14, //deg
  lightPhi: 54, //deg

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

const getNumberOfTimesteps = (): number => myState.totalFrames || myState.volume.imageInfo.times;

const histogramSelection = {
  minBin: 0,
  maxBin: 255,
  dragging: null as "min" | "max" | null,
  hover: null as "min" | "max" | null,
  minHandleHoverWeight: 0,
  maxHandleHoverWeight: 0,
};

type CropAxis = "x" | "y" | "z";
type CameraMode = "X" | "Y" | "Z" | "3D";

type CropStateKey = "cropXmin" | "cropXmax" | "cropYmin" | "cropYmax" | "cropZmin" | "cropZmax";

let activeSliceAxis: CropAxis | null = null;
const sliceIndexByAxis: Record<CropAxis, number> = {
  x: 0,
  y: 0,
  z: 0,
};

const sliceMaxIndexByAxis: Record<CropAxis, number> = {
  x: 0,
  y: 0,
  z: 0,
};

const CROP_AXES: CropAxis[] = ["x", "y", "z"];

const cropAxisStateKeys: Record<CropAxis, { min: CropStateKey; max: CropStateKey }> = {
  x: { min: "cropXmin", max: "cropXmax" },
  y: { min: "cropYmin", max: "cropYmax" },
  z: { min: "cropZmin", max: "cropZmax" },
};

function clamp01(value: number): number {
  if (!Number.isFinite(value)) {
    return 0;
  }

  return Math.min(1, Math.max(0, value));
}

function getAxisVoxelCount(axis: CropAxis): number {
  const axisValue = myState.volume.imageInfo?.volumeSize?.[axis];
  const value = Number(axisValue ?? 1);
  return Number.isFinite(value) && value > 0 ? Math.floor(value) : 1;
}

function getAxisMaxSliceIndex(axis: CropAxis): number {
  return Math.max(0, getAxisVoxelCount(axis) - 1);
}

function getAxisMaxSliceIndexForVolume(volume: Volume, axis: CropAxis): number {
  const axisValue = volume.imageInfo?.volumeSize?.[axis];
  const value = Number(axisValue ?? 1);
  const voxelCount = Number.isFinite(value) && value > 0 ? Math.floor(value) : 1;
  return Math.max(0, voxelCount - 1);
}

function remapSliceIndicesForRescaledVolume(volume: Volume) {
  for (const axis of ["x", "y"] as CropAxis[]) {
    const previousMax = sliceMaxIndexByAxis[axis];
    const nextMax = getAxisMaxSliceIndexForVolume(volume, axis);

    let nextIndex = sliceIndexByAxis[axis];
    if (previousMax !== nextMax) {
      const normalized = previousMax > 0 ? sliceIndexByAxis[axis] / previousMax : 0;
      nextIndex = Math.round(normalized * nextMax);
    }

    sliceIndexByAxis[axis] = Math.max(0, Math.min(nextMax, nextIndex));
    sliceMaxIndexByAxis[axis] = nextMax;
  }
}

function clampSliceIndex(axis: CropAxis, sliceIndex: number): number {
  const maxSliceIndex = getAxisMaxSliceIndex(axis);
  return Math.min(maxSliceIndex, Math.max(0, Math.round(sliceIndex)));
}

function getSliceCropBounds(axis: CropAxis, sliceIndex: number): { min: number; max: number } {
  const voxelCount = getAxisVoxelCount(axis);
  const maxIndex = getAxisMaxSliceIndex(axis);
  const clampedIndex = clampSliceIndex(axis, sliceIndex);
  sliceIndexByAxis[axis] = clampedIndex;

  const normalized = maxIndex > 0 ? clampedIndex / maxIndex : 0;
  const sliceThickness = Math.max(1 / voxelCount, 0.000001);
  const halfThickness = sliceThickness * 0.5;

  let min = normalized - halfThickness;
  let max = normalized + halfThickness;

  if (min < 0) {
    max = Math.min(1, max - min);
    min = 0;
  }
  if (max > 1) {
    min = Math.max(0, min - (max - 1));
    max = 1;
  }

  return { min, max };
}

function getEffectiveAxisCropBounds(axis: CropAxis): { min: number; max: number } {
  if (activeSliceAxis === axis) {
    return getSliceCropBounds(axis, sliceIndexByAxis[axis]);
  }

  const minKey = cropAxisStateKeys[axis].min;
  const maxKey = cropAxisStateKeys[axis].max;
  return {
    min: myState[minKey] as number,
    max: myState[maxKey] as number,
  };
}

function getStateAxisCropBounds(axis: CropAxis): { min: number; max: number } {
  const minKey = cropAxisStateKeys[axis].min;
  const maxKey = cropAxisStateKeys[axis].max;
  return {
    min: myState[minKey] as number,
    max: myState[maxKey] as number,
  };
}

function getEffectiveAxisLoadBounds(axis: CropAxis): { min: number; max: number } {
  // In 2D slice view, the active axis is a visual plane selector, not a load-ROI constraint.
  if (activeSliceAxis === axis) {
    return { min: 0, max: 1 };
  }
  return getStateAxisCropBounds(axis);
}

function updateSliceViewCurrentLabel() {
  const currentLabel = document.getElementById("slice-view-current") as HTMLSpanElement | null;
  if (!currentLabel) {
    return;
  }

  if (!activeSliceAxis) {
    currentLabel.textContent = "";
    return;
  }

  const axisUpper = activeSliceAxis.toUpperCase();
  currentLabel.textContent = `${axisUpper}:${sliceIndexByAxis[activeSliceAxis]}`;
}

function setUiSectionDisabled(section: HTMLElement | null, isDisabled: boolean) {
  if (!section) {
    return;
  }
  section.classList.toggle("is-disabled", isDisabled);
  section.setAttribute("aria-disabled", isDisabled ? "true" : "false");
}

function setCropAxisControlsDisabled(axis: CropAxis, isDisabled: boolean) {
  const row = document.getElementById(`crop-row-${axis}`) as HTMLElement | null;
  setUiSectionDisabled(row, isDisabled);

  const inputIds = [`crop-${axis}-min`, `crop-${axis}-max`, `crop-${axis}-left`, `crop-${axis}-right`];
  for (const id of inputIds) {
    const input = document.getElementById(id) as HTMLInputElement | null;
    if (input) {
      input.disabled = isDisabled;
    }
  }

  const mergedSlider = row?.querySelector(".crop-merged-slider") as HTMLElement | null;
  mergedSlider?.classList.toggle("is-disabled", isDisabled);
}

function updateSliceModeControlStates() {
  const isSliceMode = activeSliceAxis !== null;

  for (const axis of CROP_AXES) {
    setCropAxisControlsDisabled(axis, activeSliceAxis === axis);
  }

  const globalOpacitySlider = document.getElementById("global-opacity-slider") as HTMLInputElement | null;
  if (globalOpacitySlider) {
    globalOpacitySlider.disabled = isSliceMode;
  }

  const globalOpacitySection = globalOpacitySlider?.closest(".controls-item") as HTMLElement | null;
  setUiSectionDisabled(globalOpacitySection, isSliceMode);
}

function updateSliceSelectorUI() {
  const panel = document.getElementById("slice-selector-panel") as HTMLElement | null;
  const axisLabel = document.getElementById("slice-selector-axis") as HTMLLabelElement | null;
  const minLabel = document.getElementById("slice-selector-min") as HTMLSpanElement | null;
  const maxLabel = document.getElementById("slice-selector-max") as HTMLSpanElement | null;
  const slider = document.getElementById("slice-selector-slider") as HTMLInputElement | null;

  if (!panel || !axisLabel || !minLabel || !maxLabel || !slider) {
    return;
  }

  if (!activeSliceAxis) {
    panel.classList.add("hidden");
    updateSliceViewCurrentLabel();
    updateSliceModeControlStates();
    return;
  }

  panel.classList.remove("hidden");

  const axisUpper = activeSliceAxis.toUpperCase();
  const maxIndex = getAxisMaxSliceIndex(activeSliceAxis);
  const nextValue = clampSliceIndex(activeSliceAxis, sliceIndexByAxis[activeSliceAxis]);
  sliceIndexByAxis[activeSliceAxis] = nextValue;

  axisLabel.textContent = axisUpper;
  minLabel.textContent = "0";
  maxLabel.textContent = `${maxIndex}`;
  slider.min = "0";
  slider.max = `${maxIndex}`;
  slider.value = `${nextValue}`;

  updateSliceViewCurrentLabel();
  updateSliceModeControlStates();
}

function setActiveSliceMode(mode: CameraMode) {
  activeSliceAxis = mode === "3D" ? null : (mode.toLowerCase() as CropAxis);
  updateSliceSelectorUI();
  applyCropRegionFromState();
}

function setupSliceSelectorControls() {
  const slider = document.getElementById("slice-selector-slider") as HTMLInputElement | null;
  slider?.addEventListener("input", () => {
    if (!activeSliceAxis) {
      return;
    }

    const nextSliceIndex = clampSliceIndex(activeSliceAxis, slider.valueAsNumber);
    sliceIndexByAxis[activeSliceAxis] = nextSliceIndex;

    if (activeSliceAxis === "z") {
      goToZSlice(nextSliceIndex);
    }

    updateSliceSelectorUI();
    applyCropRegionFromState();
  });

  updateSliceSelectorUI();
}

function resetSliceIndicesForVolume(volume: Volume) {
  for (const axis of CROP_AXES) {
    const axisCount = Math.max(1, Math.floor(volume.imageInfo.volumeSize[axis]));
    const maxIndex = axisCount - 1;
    sliceIndexByAxis[axis] = Math.floor(maxIndex * 0.5);
    sliceMaxIndexByAxis[axis] = maxIndex;
  }

  updateSliceSelectorUI();
}

function applyCropRegionFromState() {
  const xDisplayBounds = getEffectiveAxisCropBounds("x");
  const yDisplayBounds = getEffectiveAxisCropBounds("y");
  const zDisplayBounds = getEffectiveAxisCropBounds("z");

  const xLoadBounds = getEffectiveAxisLoadBounds("x");
  const yLoadBounds = getEffectiveAxisLoadBounds("y");
  const zLoadBounds = getEffectiveAxisLoadBounds("z");

  const displayMatchesLoad =
    xDisplayBounds.min === xLoadBounds.min &&
    xDisplayBounds.max === xLoadBounds.max &&
    yDisplayBounds.min === yLoadBounds.min &&
    yDisplayBounds.max === yLoadBounds.max &&
    zDisplayBounds.min === zLoadBounds.min &&
    zDisplayBounds.max === zLoadBounds.max;

  void view3D.updateCropRegion(
    myState.volume,
    xLoadBounds.min,
    xLoadBounds.max,
    yLoadBounds.min,
    yLoadBounds.max,
    zLoadBounds.min,
    zLoadBounds.max
  );

  if (!displayMatchesLoad) {
    view3D.updateClipRegion(
      myState.volume,
      xDisplayBounds.min,
      xDisplayBounds.max,
      yDisplayBounds.min,
      yDisplayBounds.max,
      zDisplayBounds.min,
      zDisplayBounds.max
    );
  }
}

function syncCropFill(axis: CropAxis) {
  const fill = document.getElementById(`crop-${axis}-fill`) as HTMLElement | null;
  if (!fill) {
    return;
  }

  const minKey = cropAxisStateKeys[axis].min;
  const maxKey = cropAxisStateKeys[axis].max;
  const minValue = myState[minKey] as number;
  const maxValue = myState[maxKey] as number;
  fill.style.left = `${minValue * 100}%`;
  fill.style.right = `${(1 - maxValue) * 100}%`;
}

function getCropAxisSize(axis: CropAxis): number {
  const volumeSize = myState.volume.imageInfo.volumeSize;
  switch (axis) {
    case "x":
      return Math.max(1, Math.round(volumeSize.x));
    case "y":
      return Math.max(1, Math.round(volumeSize.y));
    case "z":
      return Math.max(1, Math.round(volumeSize.z));
  }
}

function getCropAxisBounds(axis: CropAxis): { left: number; right: number } {
  const axisSize = getCropAxisSize(axis);
  const minKey = cropAxisStateKeys[axis].min;
  const maxKey = cropAxisStateKeys[axis].max;
  const minValue = myState[minKey] as number;
  const maxValue = myState[maxKey] as number;

  const left = Math.max(0, Math.min(axisSize, Math.floor(minValue * axisSize)));
  const right = Math.max(left, Math.min(axisSize, Math.ceil(maxValue * axisSize)));
  return { left, right };
}

function syncCropDimensionInputs(axis: CropAxis) {
  const leftInput = document.getElementById(`crop-${axis}-left`) as HTMLInputElement | null;
  const rightInput = document.getElementById(`crop-${axis}-right`) as HTMLInputElement | null;
  if (!leftInput || !rightInput) {
    return;
  }

  const axisSize = getCropAxisSize(axis);
  const { left, right } = getCropAxisBounds(axis);

  leftInput.min = "0";
  rightInput.min = "0";
  leftInput.max = `${axisSize}`;
  rightInput.max = `${axisSize}`;
  leftInput.value = `${left}`;
  rightInput.value = `${right}`;
}

function syncCropAxisUi(axis: CropAxis) {
  syncCropFill(axis);
  syncCropDimensionInputs(axis);
}

function setCropAxisBounds(axis: CropAxis, left: number, right: number) {
  const axisSize = getCropAxisSize(axis);
  const minKey = cropAxisStateKeys[axis].min;
  const maxKey = cropAxisStateKeys[axis].max;
  const safeLeft = Number.isFinite(left) ? left : 0;
  const safeRight = Number.isFinite(right) ? right : axisSize;
  const nextLeft = Math.max(0, Math.min(axisSize, Math.round(safeLeft)));
  const nextRight = Math.max(nextLeft, Math.min(axisSize, Math.round(safeRight)));

  myState[minKey] = axisSize > 0 ? nextLeft / axisSize : 0;
  myState[maxKey] = axisSize > 0 ? nextRight / axisSize : 1;
}

function syncCropInputsFromState() {
  const axes: CropAxis[] = ["x", "y", "z"];
  for (const axis of axes) {
    const minInput = document.getElementById(`crop-${axis}-min`) as HTMLInputElement | null;
    const maxInput = document.getElementById(`crop-${axis}-max`) as HTMLInputElement | null;
    if (!minInput || !maxInput) {
      continue;
    }

    const minKey = cropAxisStateKeys[axis].min;
    const maxKey = cropAxisStateKeys[axis].max;
    minInput.value = `${myState[minKey]}`;
    maxInput.value = `${myState[maxKey]}`;
    syncCropAxisUi(axis);
  }
}

function setupCropControls() {
  const axes: CropAxis[] = ["x", "y", "z"];
  for (const axis of axes) {
    const minInput = document.getElementById(`crop-${axis}-min`) as HTMLInputElement | null;
    const maxInput = document.getElementById(`crop-${axis}-max`) as HTMLInputElement | null;
    const leftInput = document.getElementById(`crop-${axis}-left`) as HTMLInputElement | null;
    const rightInput = document.getElementById(`crop-${axis}-right`) as HTMLInputElement | null;

    if (!minInput || !maxInput || !leftInput || !rightInput) {
      continue;
    }

    const minKey = cropAxisStateKeys[axis].min;
    const maxKey = cropAxisStateKeys[axis].max;

    const onMinInput = () => {
      const nextMin = Math.min(clamp01(minInput.valueAsNumber), myState[maxKey] as number);
      myState[minKey] = nextMin;
      minInput.value = `${nextMin}`;
      syncCropAxisUi(axis);
      applyCropRegionFromState();
    };

    const onMaxInput = () => {
      const nextMax = Math.max(clamp01(maxInput.valueAsNumber), myState[minKey] as number);
      myState[maxKey] = nextMax;
      maxInput.value = `${nextMax}`;
      syncCropAxisUi(axis);
      applyCropRegionFromState();
    };

    minInput.addEventListener("input", onMinInput);
    maxInput.addEventListener("input", onMaxInput);

    const onLeftChange = () => {
      const { right } = getCropAxisBounds(axis);
      setCropAxisBounds(axis, leftInput.valueAsNumber, right);
      minInput.value = `${myState[minKey]}`;
      maxInput.value = `${myState[maxKey]}`;
      syncCropAxisUi(axis);
      applyCropRegionFromState();
    };

    const onRightChange = () => {
      const { left } = getCropAxisBounds(axis);
      setCropAxisBounds(axis, left, rightInput.valueAsNumber);
      minInput.value = `${myState[minKey]}`;
      maxInput.value = `${myState[maxKey]}`;
      syncCropAxisUi(axis);
      applyCropRegionFromState();
    };

    const selectAll = (event: Event) => {
      const target = event.currentTarget as HTMLInputElement;
      target.select();
    };

    const commitOnEnter = (event: KeyboardEvent, handler: () => void) => {
      if (event.key !== "Enter") {
        return;
      }
      event.preventDefault();
      handler();
      (event.currentTarget as HTMLInputElement).blur();
    };

    leftInput.addEventListener("focus", selectAll);
    rightInput.addEventListener("focus", selectAll);
    leftInput.addEventListener("click", selectAll);
    rightInput.addEventListener("click", selectAll);

    // Index input commits are Enter-only to avoid accidental updates while typing.
    leftInput.addEventListener("keydown", (event) => commitOnEnter(event, onLeftChange));
    rightInput.addEventListener("keydown", (event) => commitOnEnter(event, onRightChange));

    const mergedSlider = minInput.closest(".crop-merged-slider") as HTMLElement | null;
    if (mergedSlider) {
      let activeHandle: "min" | "max" | null = null;

      const updateFromClientX = (clientX: number, handle: "min" | "max") => {
        const rect = mergedSlider.getBoundingClientRect();
        if (rect.width <= 0) {
          return;
        }

        const normalized = clamp01((clientX - rect.left) / rect.width);
        const minValue = myState[minKey] as number;
        const maxValue = myState[maxKey] as number;

        if (handle === "min") {
          const nextMin = Math.min(normalized, maxValue);
          myState[minKey] = nextMin;
          minInput.value = `${nextMin}`;
        } else {
          const nextMax = Math.max(normalized, minValue);
          myState[maxKey] = nextMax;
          maxInput.value = `${nextMax}`;
        }

        syncCropAxisUi(axis);
        applyCropRegionFromState();
      };

      mergedSlider.addEventListener("pointerdown", (event: PointerEvent) => {
        const target = event.target as HTMLElement;
        if (target === minInput || target === maxInput) {
          return;
        }

        const rect = mergedSlider.getBoundingClientRect();
        if (rect.width <= 0) {
          return;
        }

        const normalized = clamp01((event.clientX - rect.left) / rect.width);
        const minValue = myState[minKey] as number;
        const maxValue = myState[maxKey] as number;
        const minDistance = Math.abs(normalized - minValue);
        const maxDistance = Math.abs(normalized - maxValue);

        activeHandle = minDistance <= maxDistance ? "min" : "max";
        updateFromClientX(event.clientX, activeHandle);
        mergedSlider.setPointerCapture(event.pointerId);
        event.preventDefault();
      });

      mergedSlider.addEventListener("pointermove", (event: PointerEvent) => {
        if (!activeHandle) {
          return;
        }
        updateFromClientX(event.clientX, activeHandle);
        event.preventDefault();
      });

      const stopDrag = (event: PointerEvent) => {
        if (!activeHandle) {
          return;
        }
        activeHandle = null;
        if (mergedSlider.hasPointerCapture(event.pointerId)) {
          mergedSlider.releasePointerCapture(event.pointerId);
        }
      };

      mergedSlider.addEventListener("pointerup", stopDrag);
      mergedSlider.addEventListener("pointercancel", stopDrag);
    }
  }

  const resetCropBtn = document.getElementById("crop-reset-button") as HTMLButtonElement | null;
  const copyCropBtn = document.getElementById("crop-copy-indeces-button") as HTMLButtonElement | null;

  copyCropBtn?.addEventListener("click", async () => {
    const x = getCropAxisBounds("x");
    const y = getCropAxisBounds("y");
    const z = getCropAxisBounds("z");
    const indexing = `[${z.left}:${z.right}, ${y.left}:${y.right}, ${x.left}:${x.right}]`;
    navigator.clipboard.writeText(indexing);


    const originalLabel = copyCropBtn.textContent || "Copy indeces";
    copyCropBtn.textContent = `Copied ${indexing}`;
    window.setTimeout(() => {
      copyCropBtn.textContent = originalLabel;
    }, 3000);
  });

  resetCropBtn?.addEventListener("click", () => {
    myState.cropXmin = 0;
    myState.cropXmax = 1;
    myState.cropYmin = 0;
    myState.cropYmax = 1;
    myState.cropZmin = 0;
    myState.cropZmax = 1;

    syncCropInputsFromState();
    applyCropRegionFromState();
  });

  syncCropInputsFromState();
}

function densitySliderToView3D(density: number) {
  return density / 50.0;
}
// controlPoints is array of [{offset:number, color:cssstring}]
// where offset is a value from 0.0 to 1.0, and color is a string encoding a css color value.
// first and last control points should be at offsets 0 and 1
// TODO: what if offsets 0 and 1 are not provided?
// makeColorGradient([
//    {offset:0, color:"black"},
//    {offset:0.2, color:"black"},
//    {offset:0.25, color:"red"},
//    {offset:0.5, color:"orange"}
//    {offset:1.0, color:"yellow"}
//]);
/*
function makeColorGradient(controlPoints) {
  const c = document.createElement("canvas");
  c.style.height = 1;
  c.style.width = 256;
  c.height = 1;
  c.width = 256;

  const ctx = c.getContext("2d");
  const grd = ctx.createLinearGradient(0, 0, 255, 0);
  if (!controlPoints.length || controlPoints.length < 1) {
    console.log("warning: bad control points submitted to makeColorGradient; reverting to linear greyscale gradient");
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "white");
  } else {
    // what if none at 0 and none at 1?
    for (let i = 0; i < controlPoints.length; ++i) {
      grd.addColorStop(controlPoints[i].offset, controlPoints[i].color);
    }
  }

  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, 256, 1);
  const imgData = ctx.getImageData(0, 0, 256, 1);
  // console.log(imgData.data);
  return imgData.data;
}
*/
function initLights() {
  myState.lights[0].mColorTop = new Vector3(
    (myState.skyTopColor[0] / 255.0) * myState.skyTopIntensity,
    (myState.skyTopColor[1] / 255.0) * myState.skyTopIntensity,
    (myState.skyTopColor[2] / 255.0) * myState.skyTopIntensity
  );
  myState.lights[0].mColorMiddle = new Vector3(
    (myState.skyMidColor[0] / 255.0) * myState.skyMidIntensity,
    (myState.skyMidColor[1] / 255.0) * myState.skyMidIntensity,
    (myState.skyMidColor[2] / 255.0) * myState.skyMidIntensity
  );
  myState.lights[0].mColorBottom = new Vector3(
    (myState.skyBotColor[0] / 255.0) * myState.skyBotIntensity,
    (myState.skyBotColor[1] / 255.0) * myState.skyBotIntensity,
    (myState.skyBotColor[2] / 255.0) * myState.skyBotIntensity
  );
  myState.lights[1].mTheta = (myState.lightTheta * Math.PI) / 180.0;
  myState.lights[1].mPhi = (myState.lightPhi * Math.PI) / 180.0;
  myState.lights[1].mColor = new Vector3(
    (myState.lightColor[0] / 255.0) * myState.lightIntensity,
    (myState.lightColor[1] / 255.0) * myState.lightIntensity,
    (myState.lightColor[2] / 255.0) * myState.lightIntensity
  );
  view3D.updateLights(myState.lights);
}

function setInitialRenderMode() {
  if (myState.isPT && myState.isMP) {
    myState.isMP = false;
  }
  view3D.setVolumeRenderMode(myState.isPT ? RENDERMODE_PATHTRACE : RENDERMODE_RAYMARCH);
  view3D.setMaxProjectMode(myState.volume, myState.isMP);
}

let gui: GUI;

function setupGui(container: HTMLElement) {
  gui = new GUI({ container });
  gui.hide();

  if (window.getComputedStyle(container).position === "static") {
    container.style.position = "relative";
  }

  gui.domElement.style.position = "absolute";
  gui.domElement.style.top = "0";
  gui.domElement.style.left = "0";
  gui.domElement.style.right = "auto";

  let guiVisible = false;

  window.addEventListener("keydown", (event: KeyboardEvent) => {
    const isShortcut = event.ctrlKey && event.altKey && (event.code === "Digit2" || event.code === "Numpad2");
    if (!isShortcut) {
      return;
    }

    event.preventDefault();
    guiVisible = !guiVisible;
    if (guiVisible) {
      gui.show();
    } else {
      gui.hide();
    }
  });

  gui
    .add(myState, "density")
    .max(100.0)
    .min(0.0)
    .step(0.001)
    .onChange(function (value) {
      view3D.updateDensity(myState.volume, densitySliderToView3D(value));
    });
  gui
    .add(myState, "maskAlpha")
    .max(1.0)
    .min(0.0)
    .step(0.001)
    .onChange(function (value) {
      view3D.updateMaskAlpha(myState.volume, value);
    });
  gui
    .add(myState, "primaryRay")
    .max(40.0)
    .min(1.0)
    .step(0.1)
    .onChange(function () {
      view3D.setRayStepSizes(myState.volume, myState.primaryRay, myState.secondaryRay);
    });
  gui
    .add(myState, "secondaryRay")
    .max(40.0)
    .min(1.0)
    .step(0.1)
    .onChange(function () {
      view3D.setRayStepSizes(myState.volume, myState.primaryRay, myState.secondaryRay);
    });

  const cameraGui = gui.addFolder("Camera").close();
  cameraGui
    .add(myState, "exposure")
    .max(1.0)
    .min(0.0)
    .step(0.001)
    .onChange(function (value) {
      view3D.updateExposure(value);
    });
  cameraGui
    .add(myState, "aperture")
    .max(0.1)
    .min(0.0)
    .step(0.001)
    .onChange(function () {
      view3D.updateCamera(myState.fov, myState.focalDistance, myState.aperture);
    });
  cameraGui
    .add(myState, "focalDistance")
    .max(5.0)
    .min(0.1)
    .step(0.001)
    .onChange(function () {
      view3D.updateCamera(myState.fov, myState.focalDistance, myState.aperture);
    });
  cameraGui
    .add(myState, "fov")
    .max(90.0)
    .min(0.0)
    .step(0.001)
    .onChange(function () {
      view3D.updateCamera(myState.fov, myState.focalDistance, myState.aperture);
    });
  cameraGui
    .add(myState, "samplingRate")
    .max(1.0)
    .min(0.1)
    .step(0.001)
    .onChange(function (value) {
      view3D.updatePixelSamplingRate(value);
    });

  const clipping = gui.addFolder("Clipping Box").close();
  clipping
    .add(myState, "xmin")
    .max(1.0)
    .min(0.0)
    .step(0.001)
    .onChange(function () {
      view3D.updateClipRegion(
        myState.volume,
        myState.xmin,
        myState.xmax,
        myState.ymin,
        myState.ymax,
        myState.zmin,
        myState.zmax
      );
    });
  clipping
    .add(myState, "xmax")
    .max(1.0)
    .min(0.0)
    .step(0.001)
    .onChange(function () {
      view3D.updateClipRegion(
        myState.volume,
        myState.xmin,
        myState.xmax,
        myState.ymin,
        myState.ymax,
        myState.zmin,
        myState.zmax
      );
    });
  clipping
    .add(myState, "ymin")
    .max(1.0)
    .min(0.0)
    .step(0.001)
    .onChange(function () {
      view3D.updateClipRegion(
        myState.volume,
        myState.xmin,
        myState.xmax,
        myState.ymin,
        myState.ymax,
        myState.zmin,
        myState.zmax
      );
    });
  clipping
    .add(myState, "ymax")
    .max(1.0)
    .min(0.0)
    .step(0.001)
    .onChange(function () {
      view3D.updateClipRegion(
        myState.volume,
        myState.xmin,
        myState.xmax,
        myState.ymin,
        myState.ymax,
        myState.zmin,
        myState.zmax
      );
    });
  clipping
    .add(myState, "zmin")
    .max(1.0)
    .min(0.0)
    .step(0.001)
    .onChange(function () {
      view3D.updateClipRegion(
        myState.volume,
        myState.xmin,
        myState.xmax,
        myState.ymin,
        myState.ymax,
        myState.zmin,
        myState.zmax
      );
    });
  clipping
    .add(myState, "zmax")
    .max(1.0)
    .min(0.0)
    .step(0.001)
    .onChange(function () {
      view3D.updateClipRegion(
        myState.volume,
        myState.xmin,
        myState.xmax,
        myState.ymin,
        myState.ymax,
        myState.zmin,
        myState.zmax
      );
    });

  const lighting = gui.addFolder("Lighting").close();
  lighting
    .addColor(myState, "skyTopColor", 255)
    .name("Sky Top")
    .onChange(function () {
      myState.lights[0].mColorTop = new Vector3(
        (myState.skyTopColor[0] / 255.0) * myState.skyTopIntensity,
        (myState.skyTopColor[1] / 255.0) * myState.skyTopIntensity,
        (myState.skyTopColor[2] / 255.0) * myState.skyTopIntensity
      );
      view3D.updateLights(myState.lights);
    });
  lighting
    .add(myState, "skyTopIntensity")
    .max(100.0)
    .min(0.01)
    .step(0.1)
    .onChange(function () {
      myState.lights[0].mColorTop = new Vector3(
        (myState.skyTopColor[0] / 255.0) * myState.skyTopIntensity,
        (myState.skyTopColor[1] / 255.0) * myState.skyTopIntensity,
        (myState.skyTopColor[2] / 255.0) * myState.skyTopIntensity
      );
      view3D.updateLights(myState.lights);
    });
  lighting
    .addColor(myState, "skyMidColor", 255)
    .name("Sky Mid")
    .onChange(function () {
      myState.lights[0].mColorMiddle = new Vector3(
        (myState.skyMidColor[0] / 255.0) * myState.skyMidIntensity,
        (myState.skyMidColor[1] / 255.0) * myState.skyMidIntensity,
        (myState.skyMidColor[2] / 255.0) * myState.skyMidIntensity
      );
      view3D.updateLights(myState.lights);
    });
  lighting
    .add(myState, "skyMidIntensity")
    .max(100.0)
    .min(0.01)
    .step(0.1)
    .onChange(function () {
      myState.lights[0].mColorMiddle = new Vector3(
        (myState.skyMidColor[0] / 255.0) * myState.skyMidIntensity,
        (myState.skyMidColor[1] / 255.0) * myState.skyMidIntensity,
        (myState.skyMidColor[2] / 255.0) * myState.skyMidIntensity
      );
      view3D.updateLights(myState.lights);
    });
  lighting
    .addColor(myState, "skyBotColor", 255)
    .name("Sky Bottom")
    .onChange(function () {
      myState.lights[0].mColorBottom = new Vector3(
        (myState.skyBotColor[0] / 255.0) * myState.skyBotIntensity,
        (myState.skyBotColor[1] / 255.0) * myState.skyBotIntensity,
        (myState.skyBotColor[2] / 255.0) * myState.skyBotIntensity
      );
      view3D.updateLights(myState.lights);
    });
  lighting
    .add(myState, "skyBotIntensity")
    .max(100.0)
    .min(0.01)
    .step(0.1)
    .onChange(function () {
      myState.lights[0].mColorBottom = new Vector3(
        (myState.skyBotColor[0] / 255.0) * myState.skyBotIntensity,
        (myState.skyBotColor[1] / 255.0) * myState.skyBotIntensity,
        (myState.skyBotColor[2] / 255.0) * myState.skyBotIntensity
      );
      view3D.updateLights(myState.lights);
    });
  lighting
    .add(myState.lights[1], "mDistance")
    .max(10.0)
    .min(0.0)
    .step(0.1)
    .onChange(function () {
      view3D.updateLights(myState.lights);
    });
  lighting
    .add(myState, "lightTheta")
    .max(180.0)
    .min(-180.0)
    .step(1)
    .onChange(function (value) {
      myState.lights[1].mTheta = (value * Math.PI) / 180.0;
      view3D.updateLights(myState.lights);
    });
  lighting
    .add(myState, "lightPhi")
    .max(180.0)
    .min(0.0)
    .step(1)
    .onChange(function (value) {
      myState.lights[1].mPhi = (value * Math.PI) / 180.0;
      view3D.updateLights(myState.lights);
    });
  lighting
    .add(myState.lights[1], "mWidth")
    .max(100.0)
    .min(0.01)
    .step(0.1)
    .onChange(function (value) {
      myState.lights[1].mWidth = value;
      myState.lights[1].mHeight = value;
      view3D.updateLights(myState.lights);
    });
  lighting
    .add(myState, "lightIntensity")
    .max(1000.0)
    .min(0.01)
    .step(0.1)
    .onChange(function () {
      myState.lights[1].mColor = new Vector3(
        (myState.lightColor[0] / 255.0) * myState.lightIntensity,
        (myState.lightColor[1] / 255.0) * myState.lightIntensity,
        (myState.lightColor[2] / 255.0) * myState.lightIntensity
      );
      view3D.updateLights(myState.lights);
    });
  lighting
    .addColor(myState, "lightColor", 255)
    .name("lightColor")
    .onChange(function () {
      myState.lights[1].mColor = new Vector3(
        (myState.lightColor[0] / 255.0) * myState.lightIntensity,
        (myState.lightColor[1] / 255.0) * myState.lightIntensity,
        (myState.lightColor[2] / 255.0) * myState.lightIntensity
      );
      view3D.updateLights(myState.lights);
    });

  initLights();
}

function removeFolderByName(name: string) {
  const folder = gui.folders.find((f) => f._title === name);
  if (!folder) {
    return;
  }
  folder.close();
  folder.destroy();
}

function updateTimeUI() {
  const totalFrames = getNumberOfTimesteps();

  const timeSlider = document.getElementById("timeSlider") as HTMLInputElement;
  if (timeSlider) {
    timeSlider.max = `${totalFrames - 1}`;
  }
  const timeInput = document.getElementById("timeValue") as HTMLInputElement;
  if (timeInput) {
    timeInput.max = `${totalFrames - 1}`;
  }

  const playBtn = document.getElementById("playBtn");
  if (totalFrames < 2) {
    (playBtn as HTMLButtonElement).disabled = true;
  } else {
    (playBtn as HTMLButtonElement).disabled = false;
  }
  const pauseBtn = document.getElementById("pauseBtn");
  if (totalFrames < 2) {
    (pauseBtn as HTMLButtonElement).disabled = true;
  } else {
    (pauseBtn as HTMLButtonElement).disabled = false;
  }
}

function updateScenesUI() {
  const maxSceneIndex = myState.loader.length - 1;
  const sceneInput = document.getElementById("sceneValue") as HTMLInputElement;
  sceneInput.max = `${maxSceneIndex}`;
  sceneInput.value = `${Math.min(myState.scene, maxSceneIndex)}`;
}

function updateOmeZarrScaleSelect(volume: Volume) {
  const selectEl = document.getElementById("ome-zarr-scale-select") as HTMLSelectElement | null;
  if (!selectEl) {
    return;
  }
  const scaleLabelEl = document.getElementById("ome-zarr-scale-level-value");

  const totalLevels = volume.imageInfo.numMultiscaleLevels;
  const currentLevel = volume.imageInfo.multiscaleLevel;

  selectEl.innerHTML = "";

  const autoOption = document.createElement("option");
  autoOption.value = "auto";
  autoOption.textContent = "Auto";
  selectEl.appendChild(autoOption);

  for (let i = 0; i < totalLevels; i++) {
    const option = document.createElement("option");
    option.value = String(i);
    option.textContent = `Level ${i}`;
    selectEl.appendChild(option);
  }

  if (volume.loadSpec.useExplicitLevel) {
    selectEl.value = String(currentLevel);
  } else {
    selectEl.value = "auto";
  }

  if (scaleLabelEl) {
    scaleLabelEl.textContent = totalLevels > 1 ? `${currentLevel}/${totalLevels - 1}` : "n/a";
  }
}

function updateChannelUI(vol: Volume, channelIndex: number) {
  const channel = vol.channels[channelIndex];

  const channelNames = vol.imageInfo.channelNames;
  const folder = gui.folders.find((f) => f._title === "Channel " + channelNames[channelIndex]);
  if (!folder) {
    return;
  }
  const isovalueUI = folder.controllers.find((c) => c._name === "isovalue");
  if (!isovalueUI) {
    return;
  }
  isovalueUI.min(channel.rawMin);
  isovalueUI.max(channel.rawMax);
}

function updateZSliceUI(volume: Volume) {
  const zSlider = document.getElementById("zSlider") as HTMLInputElement;
  const zInput = document.getElementById("zValue") as HTMLInputElement;

  const oldMax = Number(zSlider.max);
  const oldValue = Number(zSlider.value);

  const totalZSlices = volume.imageInfo.volumeSize.z;
  const newMax = Math.max(0, totalZSlices - 1);
  sliceMaxIndexByAxis.z = newMax;

  zSlider.max = `${newMax}`;
  zInput.max = `${newMax}`;

  const hasValidPreviousSlice = Number.isFinite(oldValue) && Number.isFinite(oldMax) && oldMax >= 0;

  let nextValue = Math.floor(totalZSlices / 2);
  if (hasValidPreviousSlice) {
    const normalized = oldMax > 0 && Number.isFinite(oldValue) ? oldValue / oldMax : 0;
    nextValue = Math.round(normalized * newMax);
  }
  nextValue = Math.max(0, Math.min(newMax, nextValue));

  // Keep the generic slice-selector state in sync with the dedicated Z-slice controls.
  sliceIndexByAxis.z = nextValue;

  zInput.value = `${nextValue}`;
  zSlider.value = `${nextValue}`;

  // Keep renderer state in sync with remapped or clamped UI value.
  goToZSlice(nextValue);
}

function showChannelUI(volume: Volume) {
  if (myState && myState.channelFolderNames) {
    for (let i = 0; i < myState.channelFolderNames.length; ++i) {
      removeFolderByName(myState.channelFolderNames[i]);
    }
  }

  const nChannels = volume.imageInfo.numChannels;
  const channelNames = volume.imageInfo.channelNames;

  myState.channelGui = [];

  myState.channelFolderNames = [];
  for (let i = 0; i < nChannels; ++i) {
    myState.channelGui.push({
      colorD: [...myState.foregroundColor] as [number, number, number],
      colorS: [0, 0, 0],
      colorE: [0, 0, 0],
      window: 1.0,
      level: 0.5,
      glossiness: 0.0,
      isovalue: 128, // actual intensity value
      isosurface: false,
      // first 3 channels for starters
      enabled: i < 3,
      reset: (function (j) {
        return function () {
          const lut = new Lut().createFullRange();
          volume.setLut(j, lut);
          view3D.updateLuts(volume);
          if (j === 0) {
            histogramSelection.minBin = 0;
            histogramSelection.maxBin = 255;
            drawHistogramFromVolume(volume, 0);
          }
        };
      })(i),
      // this doesn't give good results currently but is an example of a per-channel button callback
      autoIJ: (function (j) {
        return function () {
          const [hmin, hmax] = volume.getHistogram(j).findAutoIJBins();
          const lut = new Lut().createFromMinMax(hmin, hmax);
          volume.setLut(j, lut);
          view3D.updateLuts(volume);
          if (j === 0) {
            histogramSelection.minBin = hmin;
            histogramSelection.maxBin = hmax;
            drawHistogramFromVolume(volume, 0);
          }
        };
      })(i),
      // this doesn't give good results currently but is an example of a per-channel button callback
      auto0: (function (j) {
        return function () {
          const [b, e] = volume.getHistogram(j).findAutoMinMax();
          const lut = new Lut().createFromMinMax(b, e);
          volume.setLut(j, lut);
          view3D.updateLuts(volume);
          if (j === 0) {
            histogramSelection.minBin = b;
            histogramSelection.maxBin = e;
            drawHistogramFromVolume(volume, 0);
          }
        };
      })(i),
      // this doesn't give good results currently but is an example of a per-channel button callback
      bestFit: (function (j) {
        return function () {
          const [hmin, hmax] = volume.getHistogram(j).findBestFitBins();
          const lut = new Lut().createFromMinMax(hmin, hmax);
          volume.setLut(j, lut);
          view3D.updateLuts(volume);
          if (j === 0) {
            histogramSelection.minBin = hmin;
            histogramSelection.maxBin = hmax;
            drawHistogramFromVolume(volume, 0);
          }
        };
      })(i),
      // eslint-disable-next-line @typescript-eslint/naming-convention
      pct50_98: (function (j) {
        return function () {
          const hmin = volume.getHistogram(j).findBinOfPercentile(0.5);
          const hmax = volume.getHistogram(j).findBinOfPercentile(0.983);
          const lut = new Lut().createFromMinMax(hmin, hmax);
          volume.setLut(j, lut);
          view3D.updateLuts(volume);
          if (j === 0) {
            histogramSelection.minBin = hmin;
            histogramSelection.maxBin = hmax;
            drawHistogramFromVolume(volume, 0);
          }
        };
      })(i),
      colorizeEnabled: false,
      colorize: (function (j) {
        return function () {
          const lut = new Lut().createLabelColors(volume.getHistogram(j));
          volume.setColorPalette(j, lut.lut);
          myState.channelGui[j].colorizeEnabled = !myState.channelGui[j].colorizeEnabled;
          if (myState.channelGui[j].colorizeEnabled) {
            volume.setColorPaletteAlpha(j, myState.channelGui[j].colorizeAlpha);
          } else {
            volume.setColorPaletteAlpha(j, 0);
          }

          view3D.updateLuts(volume);
        };
      })(i),
      colorizeAlpha: 0.0,
    });
    const f = gui.addFolder("Channel " + channelNames[i]);
    if (i > 0) {
      f.close();
    }
    myState.channelFolderNames.push("Channel " + channelNames[i]);
    f.add(myState.channelGui[i], "enabled").onChange(
      (function (j) {
        return function (value) {
          view3D.setVolumeChannelEnabled(volume, j, value ? true : false);
          view3D.updateActiveChannels(volume);
        };
      })(i)
    );
    f.add(myState.channelGui[i], "isosurface").onChange(
      (function (j) {
        return function (value) {
          view3D.setVolumeChannelOptions(volume, j, { isosurfaceEnabled: value });
        };
      })(i)
    );
    f.add(myState.channelGui[i], "isovalue")
      .max(255)
      .min(0)
      .step(1)
      .onChange(
        (function (j) {
          return function (value) {
            view3D.setVolumeChannelOptions(volume, j, { isovalue: value });
          };
        })(i)
      );

    f.addColor(myState.channelGui[i], "colorD", 255)
      .name("Diffuse")
      .onChange(
        (function (j) {
          return function () {
            view3D.updateChannelMaterial(
              volume,
              j,
              myState.channelGui[j].colorD,
              myState.channelGui[j].colorS,
              myState.channelGui[j].colorE,
              myState.channelGui[j].glossiness
            );
            view3D.updateMaterial(volume);
          };
        })(i)
      );
    f.addColor(myState.channelGui[i], "colorS", 255)
      .name("Specular")
      .onChange(
        (function (j) {
          return function () {
            view3D.updateChannelMaterial(
              volume,
              j,
              myState.channelGui[j].colorD,
              myState.channelGui[j].colorS,
              myState.channelGui[j].colorE,
              myState.channelGui[j].glossiness
            );
            view3D.updateMaterial(volume);
          };
        })(i)
      );
    f.addColor(myState.channelGui[i], "colorE", 255)
      .name("Emissive")
      .onChange(
        (function (j) {
          return function () {
            view3D.updateChannelMaterial(
              volume,
              j,
              myState.channelGui[j].colorD,
              myState.channelGui[j].colorS,
              myState.channelGui[j].colorE,
              myState.channelGui[j].glossiness
            );
            view3D.updateMaterial(volume);
          };
        })(i)
      );
    f.add(myState.channelGui[i], "window")
      .max(1.0)
      .min(0.0)
      .step(0.001)
      .onChange(
        (function (j) {
          return function (value) {
            const hwindow = value;
            const hlevel = myState.channelGui[j].level;
            const lut = new Lut().createFromWindowLevel(hwindow, hlevel);
            volume.setLut(j, lut);
            view3D.updateLuts(volume);
          };
        })(i)
      );

    f.add(myState.channelGui[i], "level")
      .max(1.0)
      .min(0.0)
      .step(0.001)
      .onChange(
        (function (j) {
          return function (value) {
            const hwindow = myState.channelGui[j].window;
            const hlevel = value;
            const lut = new Lut().createFromWindowLevel(hwindow, hlevel);
            volume.setLut(j, lut);
            view3D.updateLuts(volume);
          };
        })(i)
      );
    f.add(myState.channelGui[i], "reset");
    f.add(myState.channelGui[i], "autoIJ");
    f.add(myState.channelGui[i], "auto0");
    f.add(myState.channelGui[i], "bestFit");
    f.add(myState.channelGui[i], "pct50_98");
    f.add(myState.channelGui[i], "colorize");
    f.add(myState.channelGui[i], "colorizeAlpha")
      .max(1.0)
      .min(0.0)
      .onChange(
        (function (j) {
          return function (value) {
            if (myState.channelGui[j].colorizeEnabled) {
              volume.setColorPaletteAlpha(j, value);
              view3D.updateLuts(volume);
            }
          };
        })(i)
      );
    f.add(myState.channelGui[i], "glossiness")
      .max(100.0)
      .min(0.0)
      .onChange(
        (function (j) {
          return function () {
            view3D.updateChannelMaterial(
              volume,
              j,
              myState.channelGui[j].colorD,
              myState.channelGui[j].colorS,
              myState.channelGui[j].colorE,
              myState.channelGui[j].glossiness
            );
            view3D.updateMaterial(volume);
          };
        })(i)
      );
  }

  const objectColorInput = document.getElementById("objectColor") as HTMLInputElement | null;
  if (objectColorInput && myState.channelGui.length > 0) {
    objectColorInput.value = rgb255ToHex(myState.foregroundColor);
  }

  for (let channelIndex = 0; channelIndex < myState.channelGui.length; channelIndex++) {
    view3D.updateChannelMaterial(
      volume,
      channelIndex,
      myState.channelGui[channelIndex].colorD,
      myState.channelGui[channelIndex].colorS,
      myState.channelGui[channelIndex].colorE,
      myState.channelGui[channelIndex].glossiness
    );
  }
  view3D.updateMaterial(volume);
}

function loadImageData(jsonData: ImageInfo, volumeData: Uint8Array[]) {
  const vol = new Volume(jsonData);
  myState.volume = vol;

  // tell the viewer about the image AFTER it's loaded
  //view3D.removeAllVolumes();
  //view3D.addVolume(vol);

  // get data into the image
  for (let i = 0; i < volumeData.length; ++i) {
    // where each volumeData element is a flat Uint8Array of xyz data
    // according to jsonData.tile_width*jsonData.tile_height*jsonData.tiles
    // (first row of first plane is the first data in
    // the layout, then second row of first plane, etc)
    vol.setChannelDataFromVolume(i, volumeData[i], DATARANGE_UINT8);

    setInitialRenderMode();

    view3D.removeAllVolumes();
    view3D.addVolume(vol);

    for (let ch = 0; ch < vol.imageInfo.numChannels; ++ch) {
      view3D.setVolumeChannelEnabled(vol, ch, myState.channelGui[ch].enabled);
    }

    const maskChannelIndex = jsonData.channelNames.indexOf("SEG_Memb");
    view3D.setVolumeChannelAsMask(vol, maskChannelIndex);
    view3D.updateActiveChannels(vol);
    view3D.updateLuts(vol);
    view3D.updateLights(myState.lights);
    view3D.updateDensity(vol, densitySliderToView3D(myState.density));
    view3D.updateExposure(myState.exposure);
  }
  showChannelUI(vol);

  return vol;
}

function onChannelDataArrived(v: Volume, channelIndex: number) {
  const currentVol = v; // myState.volume;
  const LUT_MIN_PERCENTILE = 0.5;
  const LUT_MAX_PERCENTILE = 0.983;
  const hist = v.getHistogram(channelIndex);
  const hmin = hist.findBinOfPercentile(LUT_MIN_PERCENTILE);
  const hmax = hist.findBinOfPercentile(LUT_MAX_PERCENTILE);
  const lut = new Lut().createFromMinMax(hmin, hmax);
  v.setLut(channelIndex, lut);

  view3D.onVolumeData(currentVol, [channelIndex]);
  view3D.setVolumeChannelEnabled(currentVol, channelIndex, myState.channelGui[channelIndex].enabled);

  view3D.updateActiveChannels(currentVol);
  view3D.updateLuts(currentVol);

  if (currentVol.isLoaded()) {
    console.log("currentVol with name " + currentVol.name + " is loaded");
    setVolumeLoading(false);
  }
  updateChannelUI(currentVol, channelIndex)

  if (channelIndex === 0) {
    histogramSelection.minBin = hmin;
    histogramSelection.maxBin = hmax;
  }
  drawHistogramFromVolume(v, channelIndex);

  // Scale-level changes update dimensions asynchronously; refresh crop and slice controls to match new bounds.
  remapSliceIndicesForRescaledVolume(v);
  syncCropInputsFromState();
  updateZSliceUI(v);
  updateSliceSelectorUI();
  applyCropRegionFromState();

  updateOmeZarrScaleSelect(v);
  view3D.redraw();
}

function onVolumeCreated(name: string, volume: Volume) {
  const myJson = volume.imageInfo;
  myState.volume = volume;
  myState.currentImageName = name;

  view3D.removeAllVolumes();
  view3D.addVolume(myState.volume);
  setInitialRenderMode();

  view3D.updateActiveChannels(myState.volume);
  view3D.updateLuts(myState.volume);
  view3D.updateLights(myState.lights);
  view3D.updateDensity(myState.volume, densitySliderToView3D(myState.density));
  view3D.updateExposure(myState.exposure);
  view3D.setBoundingBoxColor(myState.volume, myState.boundingBoxColor);

  // apply a volume transform from an external source:
  if (myJson.transform) {
    const alignTransform = myJson.imageInfo.transform;
    view3D.setVolumeTranslation(myState.volume, myState.volume.voxelsToWorldSpace(alignTransform.translation));
    view3D.setVolumeRotation(myState.volume, alignTransform.rotation);
    view3D.setVolumeScale(myState.volume, alignTransform.scale);
  }

  // hardcoded a special volume to know it's segmentation channel for pick testing
  if (name === "testpick") {
    view3D.enablePicking(myState.volume, true, 0);
  } else {
    view3D.enablePicking(myState.volume, false);
  }

  updateTimeUI();
  updateScenesUI();
  updateZSliceUI(myState.volume);
  resetSliceIndicesForVolume(myState.volume);
  syncCropInputsFromState();
  applyCropRegionFromState();
  showChannelUI(myState.volume);
  updateOmeZarrScaleSelect(myState.volume);
}

function setSyncMultichannelLoading(sync: boolean) {
  myState.loader.forEach((loader) => loader.syncMultichannelLoading(sync));
}

function playTimeSeries(onNewFrameCallback: () => void) {
  window.clearTimeout(myState.timerId);
  setSyncMultichannelLoading(true);
  myState.isPlaying = true;

  const loadNextFrame = () => {
    myState.lastFrameTime = Date.now();
    const nextFrame = (myState.currentFrame + 1) % getNumberOfTimesteps();

    // TODO would be real nice if this were an `await`-able promise instead...
    void view3D.setTime(myState.volume, nextFrame, (vol) => {
      if (vol.isLoaded()) {
        myState.currentFrame = nextFrame;
        onNewFrameCallback();

        if (myState.isPlaying) {
          const timeLoading = Date.now() - myState.lastFrameTime;
          myState.timerId = window.setTimeout(loadNextFrame, PLAYBACK_INTERVAL - timeLoading);
        }
      }
    });
  };

  loadNextFrame();
}

function getCurrentFrame() {
  return myState.currentFrame;
}

function goToFrame(targetFrame: number): boolean {
  console.log("going to Frame " + targetFrame);
  const outOfBounds = targetFrame > getNumberOfTimesteps() - 1 || targetFrame < 0;
  if (outOfBounds) {
    console.log(`frame ${targetFrame} out of bounds`);
    return false;
  }

  void view3D.setTime(myState.volume, targetFrame);
  myState.currentFrame = targetFrame;
  return true;
}

function goToZSlice(slice: number): boolean {
  if (view3D.setZSlice(myState.volume, slice)) {
    const zSlider = document.getElementById("zSlider") as HTMLInputElement;
    const zInput = document.getElementById("zValue") as HTMLInputElement;
    zInput.value = `${slice}`;
    zSlider.value = `${slice}`;
    return true;
  } else {
    return false;
  }

  // update UI if successful
}

function createTestVolume(dtype: NumberType): RawArrayLoaderOptions {
  const sizeX = 64;
  const sizeY = 64;
  const sizeZ = 64;
  const imgData: RawArrayInfo = {
    name: "AICS-10_5_5",
    sizeX,
    sizeY,
    sizeZ,
    sizeC: 3,
    physicalPixelSize: [1, 1, 1],
    spatialUnit: "",
    channelNames: ["DRAQ5", "EGFP", "SEG_Memb"],
  };

  // generate some raw volume data
  const channelVolumes = [
    VolumeMaker.createSphere(sizeX, sizeY, sizeZ, 24),
    VolumeMaker.createTorus(sizeX, sizeY, sizeZ, 24, 8),
    VolumeMaker.createCone(sizeX, sizeY, sizeZ, 24, 24),
  ];
  const alldata = VolumeMaker.concatenateArrays(channelVolumes, dtype);
  return {
    metadata: imgData,
    data: {
      dtype: dtype,
      // [c,z,y,x]
      shape: [channelVolumes.length, sizeZ, sizeY, sizeX],
      // the bits (assumed uint8!!)
      buffer: new DataView(alldata.buffer),
    },
  };
}

async function createLoader(data: TestDataSpec): Promise<IVolumeLoader[]> {
  if (data.type === "opencell") {
    return [new OpenCellLoader()];
  }

  await loaderContext.onOpen();

  const options: Partial<CreateLoaderOptions> = {};
  // top level array: multiscene
  if (Array.isArray(data.url)) {
    // fake multiscene loading. TODO revert and replace with the real thing!
    const options = {
      fetchOptions: { maxPrefetchDistance: PREFETCH_DISTANCE, maxPrefetchChunks: MAX_PREFETCH_CHUNKS },
    };
    const promises = data.url.map((url) => loaderContext.createLoader(url, options));
    return Promise.all(promises);
  } else {
    // data.url is not an array
    let path: string | string[] = data.url;

    // treat json as single scene, assume single url source.
    if (data.type === VolumeFileFormat.JSON) {
      const src = data.url as string;
      const times = data.times || 0;
      const timesArray = [...Array(times + 1).keys()];
      path = timesArray.map((t) => src.replace("%%", t.toString()));
    } else if (data.type === VolumeFileFormat.DATA) {
      const volumeInfo = createTestVolume(data.dtype || "uint8");
      options.fileType = VolumeFileFormat.DATA;
      options.rawArrayOptions = { data: volumeInfo.data, metadata: volumeInfo.metadata };
    }

    const result = await loaderContext.createLoader(path, {
      ...options,
      fetchOptions: { maxPrefetchDistance: PREFETCH_DISTANCE, maxPrefetchChunks: MAX_PREFETCH_CHUNKS },
    });
    return [result];
  }
}

async function loadVolume(name: string, loadSpec: LoadSpec, loader: IVolumeLoader): Promise<void> {
  const fullDims = await loader.loadDims(loadSpec);
  console.log(fullDims);

  const volume = await loader.createVolume(loadSpec, onChannelDataArrived);
  onVolumeCreated(name, volume);
  loader.loadVolumeData(volume);

  // Set default zSlice
  goToZSlice(Math.floor(volume.imageInfo.subregionSize.z / 2));
}

async function loadTestData(name: string, testdata: TestDataSpec) {
  myState.loader = await createLoader(testdata);

  const loadSpec = new LoadSpec();
  if (testdata.type === VolumeFileFormat.ZARR) {
    const scaleParam = new URLSearchParams(window.location.search).get("scale")?.trim().toLowerCase();
    if (scaleParam === "last") {
      loadSpec.useExplicitLevel = true;
      loadSpec.multiscaleLevel = Number.MAX_SAFE_INTEGER;
    } else {
      const level = Number(scaleParam);
      if (scaleParam && Number.isInteger(level) && level >= 0) {
        loadSpec.useExplicitLevel = true;
        loadSpec.multiscaleLevel = level;
      }
    }
  }

  myState.totalFrames = testdata.times;
  const loader = myState.loader[Math.max(myState.scene, myState.loader.length - 1)];
  await loadVolume(name, loadSpec, loader);
}

function inferVolumeFileFormat(sourceUrl: string): VolumeFileFormat | null {
  const candidates = getFileTypeHintCandidates(sourceUrl);
  if (
    candidates.some(
      (candidate) => candidate.includes(".ome.zarr") || candidate.endsWith(".zarr") || candidate.includes(".zarr/")
    )
  ) {
    return VolumeFileFormat.ZARR;
  }
  if (
    candidates.some(
      (candidate) =>
        candidate.endsWith(".ome.tiff") ||
        candidate.endsWith(".tiff") ||
        candidate.endsWith(".ome.tif") ||
        candidate.endsWith(".tif")
    )
  ) {
    return VolumeFileFormat.TIFF;
  }
  return null;
}

function gammaSliderToImageValues(sliderValues: [number, number, number]): [number, number, number] {
  let min = Number(sliderValues[0]);
  let mid = Number(sliderValues[1]);
  let max = Number(sliderValues[2]);

  if (mid > max || mid < min) {
    mid = 0.5 * (min + max);
  }
  const div = 255;
  min /= div;
  max /= div;
  mid /= div;
  const diff = max - min;
  const x = (mid - min) / diff;
  let scale = 4 * x * x;
  if ((mid - 0.5) * (mid - 0.5) < 0.0005) {
    scale = 1.0;
  }
  return [min, max, scale];
}

function getStateColorizeFeature(): ColorizeFeature | null {
  if (myState.colorizeEnabled) {
    const feature = colorizerfeatures[myState.feature];
    const colormap = colorizercolormaps[myState.colormap].tex;
    return {
      idsToFeatureValue: feature.featureTex,
      featureValueToColor: colormap,
      outlierData: feature.outlierData,
      inRangeIds: feature.inRangeIds,
      featureMin: myState.featureMin,
      featureMax: myState.featureMax,
      outlineColor: new Color(0xffffff),
      outlineAlpha: 1.0,
      outlierColor: new Color(0x444444),
      outOfRangeColor: new Color(0x444444),
      outlierDrawMode: 0,
      outOfRangeDrawMode: 0,
      hideOutOfRange: false,
      frameToGlobalIdLookup: new Map(),
      useRepeatingColor: false,
    };
  } else {
    return null;
  }
}

function setupColorizeControls() {
  const colorizeButton = document.getElementById("colorize") as HTMLButtonElement;
  colorizeButton?.addEventListener("click", () => {
    myState.colorizeEnabled = !myState.colorizeEnabled;
    view3D.setChannelColorizeFeature(myState.volume, myState.colorizeChannel, getStateColorizeFeature());
  });

  const segChannelInput = document.getElementById("segchannel") as HTMLInputElement;
  segChannelInput?.addEventListener("change", () => {
    const channelIndex = Number(segChannelInput.value);
    myState.colorizeChannel = channelIndex;
    view3D.setChannelColorizeFeature(myState.volume, myState.colorizeChannel, getStateColorizeFeature());
  });

  const colormapInput = document.getElementById("colormap") as HTMLSelectElement;
  colormapInput?.addEventListener("change", () => {
    const colormap = colormapInput.value;
    myState.colormap = colormap;
    view3D.setChannelColorizeFeature(myState.volume, myState.colorizeChannel, getStateColorizeFeature());
  });

  const featureInput = document.getElementById("feature") as HTMLSelectElement;
  featureInput?.addEventListener("change", () => {
    const feature = featureInput.value;
    myState.feature = feature;
    view3D.setChannelColorizeFeature(myState.volume, myState.colorizeChannel, getStateColorizeFeature());
  });

  const featureMinInput = document.getElementById("featmin") as HTMLInputElement;
  featureMinInput?.addEventListener("change", () => {
    const featureMin = Number(featureMinInput.value) / 100.0;
    console.log("featureMin: " + featureMin);
    myState.featureMin = featureMin;
    view3D.setChannelColorizeFeature(myState.volume, myState.colorizeChannel, getStateColorizeFeature());
  });

  const featureMaxInput = document.getElementById("featmax") as HTMLInputElement;
  featureMaxInput?.addEventListener("change", () => {
    const featureMax = Number(featureMaxInput.value) / 100.0;
    console.log("featureMax: " + featureMax);
    myState.featureMax = featureMax;
    view3D.setChannelColorizeFeature(myState.volume, myState.colorizeChannel, getStateColorizeFeature());
  });
}

function drawHistogramFromVolume(v: Volume, channelIndex: number) {
  const canvas = document.getElementById("histogram-canvas") as HTMLCanvasElement | null;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const hist = v.getHistogram(channelIndex) as any;

  const bins: number[] | Uint32Array | undefined =
    hist.bins ?? hist.histogram;

  if (!bins || bins.length === 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    return;
  }

  bins[0] = 0;

  const w = canvas.width;
  const h = canvas.height;
  const labelPad = 16;
  const plotH = h - labelPad;

  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#3f3f3f";
  ctx.fillRect(0, 0, w, h);

  // log-scaled
  let maxLog = 0;
  for (let i = 0; i < bins.length; i++) {
    const v = Math.log1p(bins[i]);
    if (v > maxLog) maxLog = v;
  }

  if (maxLog === 0) return;


  const barWidth = w / bins.length;

  ctx.fillStyle = "#b3b3b3";

  for (let i = 0; i < bins.length; i++) {
    const v0 = Math.log1p(bins[i]) / maxLog;
    const barHeight = v0 * plotH;

    ctx.fillRect(
      i * barWidth,
      plotH - barHeight,
      Math.max(1, barWidth),
      barHeight
    );
  }

  const minB = histogramSelection.minBin;
  const maxB = histogramSelection.maxBin;

  const x0 = (minB / bins.length) * w;
  const x1 = (maxB / bins.length) * w;

  if (x1 > x0) {
    const rampGradient = ctx.createLinearGradient(x0, 0, x1, 0);
    rampGradient.addColorStop(0, "rgba(255,255,255,0.0)");
    rampGradient.addColorStop(1, "rgba(255,255,255,0.6)");
    ctx.fillStyle = rampGradient;

    ctx.beginPath();
    ctx.moveTo(x0, plotH);
    ctx.lineTo(x1, 0);
    ctx.lineTo(x1, plotH);
    ctx.closePath();
    ctx.fill();
  }

  ctx.fillStyle = "rgba(255,255,255,0.6)";
  ctx.fillRect(x1, 0, Math.max(0, w - x1), plotH);

  // handles
  const minHover = histogramSelection.hover === "min" || histogramSelection.dragging === "min";
  const maxHover = histogramSelection.hover === "max" || histogramSelection.dragging === "max";

  const canvasStyles = window.getComputedStyle(canvas);
  const handleColor = canvasStyles.getPropertyValue("--histogram-handle-color").trim() || "#000000";
  const handleWidth = Number(canvasStyles.getPropertyValue("--histogram-handle-width").trim()) || 4;
  const handleWidthHover = Number(canvasStyles.getPropertyValue("--histogram-handle-width-hover").trim()) || 6;
  const displayRect = canvas.getBoundingClientRect();
  const canvasScaleX = displayRect.width > 0 ? w / displayRect.width : 1;
  const canvasScaleY = displayRect.height > 0 ? h / displayRect.height : 1;
  const labelPadH = (parseFloat(canvasStyles.getPropertyValue("--histogram-label-pad-x").trim()) || 10) * canvasScaleX;
  const labelPadV = (parseFloat(canvasStyles.getPropertyValue("--histogram-label-pad-y").trim()) || 6) * canvasScaleY;
  const labelColor = canvasStyles.getPropertyValue("--histogram-label-color").trim() || "#303030";
  const labelOpacity = Math.min(
    1,
    Math.max(0, parseFloat(canvasStyles.getPropertyValue("--histogram-label-opacity").trim()) || 1)
  );
  const labelFontSize = (parseFloat(canvasStyles.getPropertyValue("--histogram-label-font-size").trim()) || 80) * canvasScaleY;
  const labelFontFamily = canvasStyles.getPropertyValue("--histogram-label-font-family").trim() || "monospace";
  const handleWidthDelta = handleWidthHover - handleWidth;

  ctx.strokeStyle = handleColor;
  const minWeight = minHover
    ? Math.max(histogramSelection.minHandleHoverWeight, 1)
    : histogramSelection.minHandleHoverWeight;
  ctx.lineWidth = handleWidth + handleWidthDelta * minWeight;

  ctx.beginPath();
  ctx.moveTo(x0, 0);
  ctx.lineTo(x0, plotH);
  ctx.stroke();

  const maxWeight = maxHover
    ? Math.max(histogramSelection.maxHandleHoverWeight, 1)
    : histogramSelection.maxHandleHoverWeight;
  ctx.lineWidth = handleWidth + handleWidthDelta * maxWeight;
  ctx.beginPath();
  ctx.moveTo(x1, 0);
  ctx.lineTo(x1, plotH);
  ctx.stroke();

  ctx.font = labelFontSize + "px " + labelFontFamily;

  const drawHandleLabel = (binIndex: number, xHandle: number) => {
    const labelText = `${Math.round(hist.getValueFromBinIndex(binIndex))}`;
    const textW = ctx.measureText(labelText).width;
    const boxW = textW + labelPadH * 2;
    const boxH = labelFontSize + labelPadV * 2;
    const boxX = Math.min(Math.max(0, xHandle - boxW / 2), w - boxW);
    const boxY = plotH / 2 - boxH / 2;

    ctx.globalAlpha = labelOpacity;
    ctx.fillStyle = labelColor;
    ctx.beginPath();
    const labelRadius = parseFloat(canvasStyles.getPropertyValue("--histogram-label-radius").trim()) || 8;
    ctx.roundRect(boxX, boxY, boxW, boxH, labelRadius * Math.min(canvasScaleX, canvasScaleY));
    ctx.fill();
    ctx.globalAlpha = 1;

    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(labelText, boxX + boxW / 2, boxY + boxH / 2);
  };

  drawHandleLabel(minB, x0);
  drawHandleLabel(maxB, x1);

  // axes and ticks
  ctx.strokeStyle = "#6a6a6a";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, plotH - 1);
  ctx.lineTo(w, plotH - 1);
  ctx.moveTo(1, 0);
  ctx.lineTo(1, plotH);
  ctx.stroke();

  const xTicks = 5;
  ctx.fillStyle = "#8a8a8a";
  ctx.font = "11px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  for (let i = 0; i <= xTicks; i++) {
    const x = (i / xTicks) * w;
    ctx.beginPath();
    ctx.moveTo(x, plotH - 1);
    ctx.lineTo(x, plotH - 7);
    ctx.stroke();
    const binIndex = (i / xTicks) * (bins.length - 1);
    const labelValue = hist.getValueFromBinIndex(binIndex);
    ctx.fillText(`${Math.round(labelValue)}`, x, plotH + 2);
  }
}

function histogramBinFromX(x: number, canvas: HTMLCanvasElement, binCount: number) {
  const displayWidth = canvas.getBoundingClientRect().width;
  const t = x / displayWidth;
  const b = Math.floor(t * binCount);
  return Math.max(0, Math.min(binCount - 1, b));
}

function applyHistogramLutFromBins(channelIndex: number) {
  if (!myState.volume) return;

  const min = histogramSelection.minBin;
  const max = histogramSelection.maxBin;

  const lut = new Lut().createFromMinMax(min, max);
  myState.volume.setLut(channelIndex, lut);
  view3D.updateLuts(myState.volume);
}

function rgb255ToHex(color: [number, number, number]): string {
  return `#${color
    .map((component) => Math.max(0, Math.min(255, Math.round(component))).toString(16).padStart(2, "0"))
    .join("")}`;
}

function rgb01ToHex(color: [number, number, number]): string {
  return rgb255ToHex([color[0] * 255, color[1] * 255, color[2] * 255]);
}

function syncColorInputsToState() {
  const boundingBoxColorInput = document.getElementById("boundingBoxColor") as HTMLInputElement | null;
  if (boundingBoxColorInput) {
    boundingBoxColorInput.value = rgb01ToHex(myState.boundingBoxColor);
  }

  const backgroundColorInput = document.getElementById("backgroundColor") as HTMLInputElement | null;
  if (backgroundColorInput) {
    backgroundColorInput.value = rgb01ToHex(myState.backgroundColor);
  }

  const objectColorInput = document.getElementById("objectColor") as HTMLInputElement | null;
  if (objectColorInput) {
    objectColorInput.value = rgb255ToHex(myState.foregroundColor);
  }
}

function main() {
  const urlParams = new URLSearchParams(window.location.search);
  const hiddenParam = urlParams.get("hidden")?.trim().toLowerCase();
  const turntableParam = urlParams.get("turntable")?.trim().toLowerCase();
  if (hiddenParam === "true") {
    const controlsPanel = document.getElementById("controls-panel");
    if (controlsPanel) {
      controlsPanel.classList.add("hidden");
    }
  }

  const el = document.getElementById("viewer-panel");
  if (!el) {
    return;
  }
  view3D = new View3d({ parentElement: el });
  view3D.setLoadStartHandler(() => {
    setVolumeLoading(true);
  });
  view3D.setBackgroundColor(myState.backgroundColor);
  syncColorInputsToState();

  if (turntableParam === "true") {
    const appLayout = document.querySelector(".flex-layout");
    appLayout?.addEventListener("mouseenter", () => {
      view3D.setAutoRotate(true);
    });
    appLayout?.addEventListener("mouseleave", () => {
      view3D.setAutoRotate(false);
    });
  }

  const scaleError = document.getElementById("scale-error") as HTMLParagraphElement | null;
  const setScaleError = (warning?: string) => {
    if (!scaleError) {
      return;
    }
    scaleError.textContent = warning || "";
    scaleError.style.display = warning ? "block" : "none";
  };

  const getMaxTextureEdge = (): number => {
    const probeCanvas = document.createElement("canvas");
    const gl = probeCanvas.getContext("webgl2") || probeCanvas.getContext("webgl");
    if (!gl) {
      return 4096;
    }
    const maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
    return Number.isFinite(maxTextureSize) && maxTextureSize > 0 ? maxTextureSize : 4096;
  };

  const maxTextureEdge = getMaxTextureEdge();
  const SCALE_TOO_LARGE_MESSAGE = "Selected scale level is too large for this device. Reverted to Auto.";

  const canLevelFitInAtlas = (level: number): boolean => {
    const dims = myState.volume.imageInfo.imageInfo.multiscaleLevelDims[level];
    if (!dims) {
      return true;
    }

    const xLoadBounds = getEffectiveAxisLoadBounds("x");
    const yLoadBounds = getEffectiveAxisLoadBounds("y");
    const zLoadBounds = getEffectiveAxisLoadBounds("z");

    const cropX = Math.max(1 / Math.max(1, dims.shape[4]), xLoadBounds.max - xLoadBounds.min);
    const cropY = Math.max(1 / Math.max(1, dims.shape[3]), yLoadBounds.max - yLoadBounds.min);
    const cropZ = Math.max(1 / Math.max(1, dims.shape[2]), zLoadBounds.max - zLoadBounds.min);

    const x = Math.max(1, Math.ceil(dims.shape[4] * cropX));
    const y = Math.max(1, Math.ceil(dims.shape[3] * cropY));
    const z = Math.max(1, Math.ceil(dims.shape[2] * cropZ));
    const xtiles = Math.floor(maxTextureEdge / x);
    const ytiles = Math.floor(maxTextureEdge / y);
    return xtiles > 0 && ytiles > 0 && z <= xtiles * ytiles;
  };

  const applyScaleLevel = async (level?: number): Promise<void> => {
    await myState.volume.updateRequiredData({
      useExplicitLevel: level !== undefined,
      multiscaleLevel: level,
      maxAtlasEdge: maxTextureEdge,
    });
  };

  const omeZarrScaleSelect = document.getElementById("ome-zarr-scale-select") as HTMLSelectElement | null;
  omeZarrScaleSelect?.addEventListener("change", async () => {
    const value = omeZarrScaleSelect.value;
    if (!myState.volume) {
      return;
    }

    const revertToAuto = async () => {
      if (omeZarrScaleSelect) {
        omeZarrScaleSelect.value = "auto";
      }
      await applyScaleLevel();
    };

    setScaleError();

    if (value === "auto") {
      try {
        await applyScaleLevel();
      } catch (error) {
        setScaleError(SCALE_TOO_LARGE_MESSAGE);
      }
    } else {
      const level = Number(value);
      if (!Number.isNaN(level)) {
        if (!canLevelFitInAtlas(level)) {
          setScaleError(SCALE_TOO_LARGE_MESSAGE);
          try {
            await revertToAuto();
          } catch {
          }
          return;
        }

        try {
          await applyScaleLevel(level);
        } catch (error) {
          setScaleError(SCALE_TOO_LARGE_MESSAGE);
          try {
            await revertToAuto();
          } catch {
          }
        }
      }
    }
  });


  view3D.setLoadErrorHandler((_volume, error) => {
    setVolumeLoading(false);
    if (error instanceof Error && error.message === SCALE_TOO_LARGE_MESSAGE) {
      setScaleError(SCALE_TOO_LARGE_MESSAGE);
      if (omeZarrScaleSelect) {
        omeZarrScaleSelect.value = "auto";
      }
    }
  });

  const sourceUrlInput =
    (document.getElementById("source-url-input") as HTMLInputElement | null);
  const sourceForm =
    (document.getElementById("source-form") as HTMLFormElement | null);
  const loadSourceBtn =
    (document.getElementById("source-load-button") as HTMLButtonElement | null);
  const sourceError = document.getElementById("source-error") as HTMLParagraphElement | null;
  const defaultSource = TEST_DATA.zarrQimEscargot.url as string;

  const setSourceError = (warning?: string) => {
    if (!sourceError) return;
    sourceError.textContent = warning || "";
    sourceError.style.display = warning ? "block" : "none";
  };

  const bindSource = (nextSource?: string): string => {
    const params = new URLSearchParams(window.location.search);
    const source = (nextSource ?? params.get("src") ?? "").trim();

    if (source) {
      params.set("src", source);
    } else {
      params.delete("src");
    }
    window.history.replaceState(null, "", `?${params.toString()}`);

    if (sourceUrlInput) {
      sourceUrlInput.value = source;
    }

    return source;
  };

  const clearView = () => {
    view3D.removeAllVolumes();
    view3D.redraw();
  };

  const getSourceLoadErrorMessage = (source: string, error: unknown): string => {
    if (error instanceof VolumeLoadError) {
      if (error.type === VolumeLoadErrorType.NOT_FOUND || error.type === VolumeLoadErrorType.LOAD_DATA_FAILED) {
        return "No data found at URL";
      }
    }
    return "Failed to load data from URL";
  };

  const loadFromCurrentSource = async (isInitialLoad = false) => {
    let source = bindSource();

    if (isInitialLoad && !source) {
      source = bindSource(defaultSource);
    }

    if (!source) {
      setSourceError("Please provide a source URL.");
      clearView();
      return;
    }

    const type = inferVolumeFileFormat(source);
    if (!type) {
      setSourceError(
        "Invalid URL type. Supported types: .zarr, .ome.zarr, .tif, .tiff, .ome.tif, .ome.tiff"
      );
      clearView();
      return;
    }

    try {
      setScaleError();
      setSourceError();
      setVolumeLoading(true);
      await loadTestData("url", { type, url: source });
    } catch (error) {
      console.error(error);
      setSourceError(getSourceLoadErrorMessage(source, error));
      clearView();
      setVolumeLoading(false);
    }
  };

  sourceUrlInput?.addEventListener("input", () => {
    bindSource(sourceUrlInput.value);
    setSourceError();
  });
  window.addEventListener("popstate", () => {
    bindSource();
  });

  const triggerSourceLoad = async () => {
    const source = bindSource(sourceUrlInput?.value);
    if (!source) return;
    await loadFromCurrentSource();
  };

  sourceForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    await triggerSourceLoad();
  });

  if (!sourceForm) {
    loadSourceBtn?.addEventListener("click", async () => {
      await triggerSourceLoad();
    });
  }

  el.addEventListener("mousemove", (e: Event) => {
    const event = e as MouseEvent;
    const intersectedObject = view3D.hitTest(event.offsetX, event.offsetY);
    if (intersectedObject !== -1) {
      el.style.cursor = "pointer";
      console.log("picked " + intersectedObject);
      view3D.setSelectedID(myState.volume, myState.colorizeChannel, intersectedObject);
    } else {
      el.style.cursor = "default";
      view3D.setSelectedID(myState.volume, myState.colorizeChannel, -1);
    }
  });

  const cameraModeButtons: Record<CameraMode, HTMLButtonElement | null> = {
    X: document.getElementById("X") as HTMLButtonElement | null,
    Y: document.getElementById("Y") as HTMLButtonElement | null,
    Z: document.getElementById("Z") as HTMLButtonElement | null,
    "3D": document.getElementById("3D") as HTMLButtonElement | null,
  };

  const setActiveCameraModeButton = (mode: CameraMode) => {
    (Object.keys(cameraModeButtons) as CameraMode[]).forEach((cameraMode) => {
      cameraModeButtons[cameraMode]?.classList.toggle("is-active", cameraMode === mode);
    });
  };

  const bindCameraModeButton = (mode: CameraMode) => {
    cameraModeButtons[mode]?.addEventListener("click", () => {
      view3D.setCameraMode(mode);
      setActiveCameraModeButton(mode);
      setActiveSliceMode(mode);
    });
  };

  bindCameraModeButton("X");
  bindCameraModeButton("Y");
  bindCameraModeButton("Z");
  bindCameraModeButton("3D");
  setActiveCameraModeButton("3D");
  setActiveSliceMode("3D");
  const rotBtn = document.getElementById("rotBtn");
  rotBtn?.addEventListener("click", () => {
    myState.isTurntable = !myState.isTurntable;
    view3D.setAutoRotate(myState.isTurntable);
  });
  const axisToggle = document.getElementById("axisBtn") as HTMLInputElement | null;
  if (axisToggle) {
    if (axisToggle.type === "checkbox") {
      axisToggle.checked = myState.isAxisShowing;
    }
    axisToggle.addEventListener("change", (event: Event) => {
      const target = event.target as HTMLInputElement;
      myState.isAxisShowing = target.type === "checkbox" ? target.checked : !myState.isAxisShowing;
      view3D.setShowAxis(myState.isAxisShowing);
    });
  }
  const showBoundsToggle = document.getElementById("showBoundingBox") as HTMLInputElement | null;
  if (showBoundsToggle) {
    if (showBoundsToggle.type === "checkbox") {
      showBoundsToggle.checked = myState.showBoundingBox;
    }
    showBoundsToggle.addEventListener("change", (event: Event) => {
      const target = event.target as HTMLInputElement;
      myState.showBoundingBox = target.type === "checkbox" ? target.checked : !myState.showBoundingBox;
      view3D.setBoundingBoxColor(myState.volume, myState.boundingBoxColor);
      view3D.setShowBoundingBox(myState.volume, myState.showBoundingBox);
    });
  }
  const showScaleBarBtn = document.getElementById("showScaleBar");
  showScaleBarBtn?.addEventListener("click", () => {
    myState.showScaleBar = !myState.showScaleBar;
    view3D.setShowScaleBar(myState.showScaleBar);
  });

  // convert value to rgb array
  function hexToRgb(hex, last: [number, number, number]): [number, number, number] {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? [parseInt(result[1], 16) / 255.0, parseInt(result[2], 16) / 255.0, parseInt(result[3], 16) / 255.0]
      : last;
  }
  function hexToRgb255(hex, last: [number, number, number]): [number, number, number] {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : last;
  }
  const boundsColorBtn = document.getElementById("boundingBoxColor");
  boundsColorBtn?.addEventListener("change", (event: Event) => {
    myState.boundingBoxColor = hexToRgb((event.target as HTMLInputElement)?.value, myState.boundingBoxColor);
    view3D.setBoundingBoxColor(myState.volume, myState.boundingBoxColor);
  });
  const backgroundColorBtn = document.getElementById("backgroundColor");
  backgroundColorBtn?.addEventListener("change", (event: Event) => {
    myState.backgroundColor = hexToRgb((event.target as HTMLInputElement)?.value, myState.backgroundColor);
    view3D.setBackgroundColor(myState.backgroundColor);
  });
  const objectColorBtn = document.getElementById("objectColor");
  objectColorBtn?.addEventListener("change", (event: Event) => {
    myState.foregroundColor = hexToRgb255((event.target as HTMLInputElement)?.value, myState.foregroundColor);

    for (let channelIndex = 0; channelIndex < myState.channelGui.length; channelIndex++) {
      myState.channelGui[channelIndex].colorD = [...myState.foregroundColor] as [number, number, number];
      view3D.updateChannelMaterial(
        myState.volume,
        channelIndex,
        myState.channelGui[channelIndex].colorD,
        myState.channelGui[channelIndex].colorS,
        myState.channelGui[channelIndex].colorE,
        myState.channelGui[channelIndex].glossiness
      );
      view3D.updateMaterial(myState.volume);
    }
  });

  const globalOpacitySlider = document.getElementById("global-opacity-slider") as HTMLInputElement | null;
  if (globalOpacitySlider) {
    globalOpacitySlider.value = `${myState.density / 100}`;
    globalOpacitySlider.style.setProperty("--value", `${Math.round((myState.density / 100) * 100)}`);

    const onGlobalOpacityInput = () => {
      const sliderValue = Math.min(1, Math.max(0, globalOpacitySlider.valueAsNumber));
      myState.density = sliderValue * 100;
      globalOpacitySlider.style.setProperty("--value", `${Math.round(sliderValue * 100)}`);
      view3D.updateDensity(myState.volume, densitySliderToView3D(myState.density));
    };

    globalOpacitySlider.addEventListener("input", onGlobalOpacityInput);
    globalOpacitySlider.addEventListener("change", onGlobalOpacityInput);
  }

  const flipXBtn = document.getElementById("flipXBtn");
  flipXBtn?.addEventListener("click", () => {
    myState.flipX *= -1;
    view3D.setFlipVolume(myState.volume, myState.flipX as -1 | 1, myState.flipY, myState.flipZ);
  });
  const flipYBtn = document.getElementById("flipYBtn");
  flipYBtn?.addEventListener("click", () => {
    myState.flipY *= -1;
    view3D.setFlipVolume(myState.volume, myState.flipX, myState.flipY as -1 | 1, myState.flipZ);
  });
  const flipZBtn = document.getElementById("flipZBtn");
  flipZBtn?.addEventListener("click", () => {
    myState.flipZ *= -1;
    view3D.setFlipVolume(myState.volume, myState.flipX, myState.flipY, myState.flipZ as -1 | 1);
  });
  const playBtn = document.getElementById("playBtn");
  playBtn?.addEventListener("click", () => {
    if (myState.currentFrame >= getNumberOfTimesteps() - 1) {
      myState.currentFrame = -1;
    }
    playTimeSeries(() => {
      if (timeInput) {
        timeInput.value = "" + getCurrentFrame();
      }
      if (timeSlider) {
        timeSlider.value = "" + getCurrentFrame();
      }
    });
  });
  const pauseBtn = document.getElementById("pauseBtn");
  pauseBtn?.addEventListener("click", () => {
    window.clearTimeout(myState.timerId);
    myState.isPlaying = false;
    setSyncMultichannelLoading(false);
  });

  const forwardBtn = document.getElementById("forwardBtn");
  const backBtn = document.getElementById("backBtn");
  const timeSlider = document.getElementById("timeSlider") as HTMLInputElement;
  const timeInput = document.getElementById("timeValue") as HTMLInputElement;
  const sceneInput = document.getElementById("sceneValue") as HTMLInputElement;
  forwardBtn?.addEventListener("click", () => {
    if (goToFrame(getCurrentFrame() + 1)) {
      if (timeInput) {
        timeInput.value = "" + getCurrentFrame();
      }
      if (timeSlider) {
        timeSlider.value = "" + getCurrentFrame();
      }
    }
  });
  backBtn?.addEventListener("click", () => {
    if (goToFrame(getCurrentFrame() - 1)) {
      if (timeInput) {
        timeInput.value = "" + getCurrentFrame();
      }
      if (timeSlider) {
        timeSlider.value = "" + getCurrentFrame();
      }
    }
  });
  // only update when DONE sliding: change event
  timeSlider?.addEventListener("change", () => {
    // trigger loading new time
    if (goToFrame(timeSlider?.valueAsNumber)) {
      if (timeInput) {
        timeInput.value = timeSlider.value;
      }
    }
  });
  timeInput?.addEventListener("change", () => {
    // trigger loading new time
    if (goToFrame(timeInput?.valueAsNumber)) {
      // update slider
      if (timeSlider) {
        timeSlider.value = timeInput.value;
      }
    }
  });
  sceneInput?.addEventListener("change", () => {
    if (myState.loader.length > 1 && myState.scene !== sceneInput.valueAsNumber) {
      myState.scene = sceneInput.valueAsNumber;
      void loadVolume(myState.currentImageName, new LoadSpec(), myState.loader[myState.scene]);
    }
  });

  // Set up Z-slice UI
  const zforwardBtn = document.getElementById("zforwardBtn");
  const zbackBtn = document.getElementById("zbackBtn");
  const zSlider = document.getElementById("zSlider") as HTMLInputElement;
  const zInput = document.getElementById("zValue") as HTMLInputElement;
  zforwardBtn?.addEventListener("click", () => {
    goToZSlice(zSlider?.valueAsNumber + 1);
  });
  zbackBtn?.addEventListener("click", () => {
    goToZSlice(zSlider?.valueAsNumber - 1);
  });
  zSlider?.addEventListener("change", () => {
    goToZSlice(zSlider?.valueAsNumber);
  });
  zInput?.addEventListener("change", () => {
    goToZSlice(zInput?.valueAsNumber);
  });

  const alignBtn = document.getElementById("xfBtn");
  alignBtn?.addEventListener("click", () => {
    myState.isAligned = !myState.isAligned;
    view3D.setVolumeTranslation(myState.volume, myState.isAligned ? myState.volume.getTranslation() : [0, 0, 0]);
    view3D.setVolumeRotation(myState.volume, myState.isAligned ? myState.volume.getRotation() : [0, 0, 0]);
  });
  const resetCamBtn = document.getElementById("resetCamBtn");
  resetCamBtn?.addEventListener("click", () => {
    view3D.resetCamera();
  });
  const counterSpan = document.getElementById("counter");
  if (counterSpan) {
    view3D.setRenderUpdateListener((count) => {
      counterSpan.innerHTML = "" + count;
    });
  }

  const renderModeSelect = document.getElementById("renderMode");
  const changeRenderMode = (pt: boolean, mp: boolean) => {
    myState.isPT = pt;
    myState.isMP = mp;
    view3D.setVolumeRenderMode(pt ? RENDERMODE_PATHTRACE : RENDERMODE_RAYMARCH);
    view3D.setMaxProjectMode(myState.volume, mp);
  };
  renderModeSelect?.addEventListener("change", ({ currentTarget }) => {
    const target = (currentTarget as HTMLOptionElement)!;
    if (target.value === "PT") {
      if (view3D.hasWebGL2()) {
        changeRenderMode(true, false);
      }
    } else if (target.value === "MP") {
      changeRenderMode(false, true);
    } else {
      changeRenderMode(false, false);
    }
  });

  const interpolateBtn = document.getElementById("interpolateBtn");
  interpolateBtn?.addEventListener("click", () => {
    myState.interpolationActive = !myState.interpolationActive;
    view3D.setInterpolationEnabled(myState.volume, myState.interpolationActive);
  });

  const screenshotButton =
    (document.getElementById("screenshot-button") as HTMLButtonElement | null);
  screenshotButton?.addEventListener("click", () => {
    view3D.capture((dataUrl) => {
      const anchor = document.createElement("a");
      anchor.href = dataUrl;
      anchor.download = "screenshot.png";
      anchor.click();
    });
  });

  const gammaMin = document.getElementById("gammaMin") as HTMLInputElement;
  const gammaMax = document.getElementById("gammaMax") as HTMLInputElement;
  const gammaScale = document.getElementById("gammaScale") as HTMLInputElement;
  gammaMin?.addEventListener("change", ({ currentTarget }) => {
    const g = gammaSliderToImageValues([gammaMin.valueAsNumber, gammaScale.valueAsNumber, gammaMax.valueAsNumber]);
    view3D.setGamma(myState.volume, g[0], g[1], g[2]);
  });
  gammaMin?.addEventListener("input", ({ currentTarget }) => {
    const g = gammaSliderToImageValues([gammaMin.valueAsNumber, gammaScale.valueAsNumber, gammaMax.valueAsNumber]);
    view3D.setGamma(myState.volume, g[0], g[1], g[2]);
  });
  gammaMax?.addEventListener("change", ({ currentTarget }) => {
    const g = gammaSliderToImageValues([gammaMin.valueAsNumber, gammaScale.valueAsNumber, gammaMax.valueAsNumber]);
    view3D.setGamma(myState.volume, g[0], g[1], g[2]);
  });
  gammaMax?.addEventListener("input", ({ currentTarget }) => {
    const g = gammaSliderToImageValues([gammaMin.valueAsNumber, gammaScale.valueAsNumber, gammaMax.valueAsNumber]);
    view3D.setGamma(myState.volume, g[0], g[1], g[2]);
  });
  gammaScale?.addEventListener("change", ({ currentTarget }) => {
    const g = gammaSliderToImageValues([gammaMin.valueAsNumber, gammaScale.valueAsNumber, gammaMax.valueAsNumber]);
    view3D.setGamma(myState.volume, g[0], g[1], g[2]);
  });
  gammaScale?.addEventListener("input", ({ currentTarget }) => {
    const g = gammaSliderToImageValues([gammaMin.valueAsNumber, gammaScale.valueAsNumber, gammaMax.valueAsNumber]);
    view3D.setGamma(myState.volume, g[0], g[1], g[2]);
  });

  const histogramCanvas = document.getElementById("histogram-canvas") as HTMLCanvasElement;
  let histogramHandleAnimationFrame: number | null = null;

  const animateHistogramHandleHover = () => {
    if (!myState.volume) {
      histogramSelection.minHandleHoverWeight = 0;
      histogramSelection.maxHandleHoverWeight = 0;
      histogramHandleAnimationFrame = null;
      return;
    }

    const targetMin = histogramSelection.hover === "min" || histogramSelection.dragging === "min" ? 1 : 0;
    const targetMax = histogramSelection.hover === "max" || histogramSelection.dragging === "max" ? 1 : 0;
    const canvasStyles = window.getComputedStyle(histogramCanvas);
    const speedRaw = Number(canvasStyles.getPropertyValue("--histogram-handle-hover-speed").trim());
    const easing = Number.isFinite(speedRaw) ? Math.min(1, Math.max(0.01, speedRaw)) : 0.25;

    histogramSelection.minHandleHoverWeight +=
      (targetMin - histogramSelection.minHandleHoverWeight) * easing;
    histogramSelection.maxHandleHoverWeight +=
      (targetMax - histogramSelection.maxHandleHoverWeight) * easing;

    const minDone = Math.abs(targetMin - histogramSelection.minHandleHoverWeight) < 0.01;
    const maxDone = Math.abs(targetMax - histogramSelection.maxHandleHoverWeight) < 0.01;

    if (minDone) {
      histogramSelection.minHandleHoverWeight = targetMin;
    }
    if (maxDone) {
      histogramSelection.maxHandleHoverWeight = targetMax;
    }

    drawHistogramFromVolume(myState.volume, 0);

    if (minDone && maxDone) {
      histogramHandleAnimationFrame = null;
      return;
    }

    histogramHandleAnimationFrame = window.requestAnimationFrame(animateHistogramHandleHover);
  };

  const requestHistogramHandleAnimation = () => {
    if (histogramHandleAnimationFrame !== null) {
      return;
    }
    histogramHandleAnimationFrame = window.requestAnimationFrame(animateHistogramHandleHover);
  };

  histogramCanvas.addEventListener("mousedown", (e) => {
    if (!myState.volume) return;

    const rect = histogramCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left;

    const hist = myState.volume.getHistogram(0) as any;
    const bins = hist.bins ?? hist.histogram;
    if (!bins) return;

    const b = histogramBinFromX(x, histogramCanvas, bins.length);

    const dMin = Math.abs(b - histogramSelection.minBin);
    const dMax = Math.abs(b - histogramSelection.maxBin);

    histogramSelection.dragging = dMin < dMax ? "min" : "max";
    requestHistogramHandleAnimation();
  });

  histogramCanvas.addEventListener("mousemove", (e) => {
    if (!myState.volume) return;

    const rect = histogramCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left;

    const hist = myState.volume.getHistogram(0) as any;
    const bins = hist.bins ?? hist.histogram;
    if (!bins) return;

    if (histogramSelection.dragging) {
      const b = histogramBinFromX(x, histogramCanvas, bins.length);

      if (histogramSelection.dragging === "min") {
        histogramSelection.minBin = Math.min(b, histogramSelection.maxBin);
      } else {
        histogramSelection.maxBin = Math.max(b, histogramSelection.minBin);
      }

      applyHistogramLutFromBins(0);
      drawHistogramFromVolume(myState.volume, 0);
      requestHistogramHandleAnimation();
      return;
    }

    const displayWidth = histogramCanvas.getBoundingClientRect().width;
    const minX = (histogramSelection.minBin / bins.length) * displayWidth;
    const maxX = (histogramSelection.maxBin / bins.length) * displayWidth;
    const distMin = Math.abs(x - minX);
    const distMax = Math.abs(x - maxX);
    const nextHover = Math.min(distMin, distMax) <= 6 ? (distMin <= distMax ? "min" : "max") : null;

    if (nextHover !== histogramSelection.hover) {
      histogramSelection.hover = nextHover;
      requestHistogramHandleAnimation();
    }

    histogramCanvas.style.cursor = nextHover ? "ew-resize" : "default";
  });

  histogramCanvas.addEventListener("mouseup", () => {
    histogramSelection.dragging = null;
    requestHistogramHandleAnimation();
  });
  
  histogramCanvas.addEventListener("mouseleave", () => {
    histogramSelection.dragging = null;
    histogramSelection.hover = null;
    histogramCanvas.style.cursor = "default";
    requestHistogramHandleAnimation();
  });

  setupColorizeControls();
  setupCropControls();
  setupSliceSelectorControls();
  setupGui(el);

  void loadFromCurrentSource(true);
}

document.body.onload = () => {
  main();
};