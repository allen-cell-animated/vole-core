import { Color, Vector3 } from "three";
import GUI from "lil-gui";

import { colormaps as colorizercolormaps, features as colorizerfeatures } from "./colorizer";
import {
  ImageInfo,
  IVolumeLoader,
  LoadSpec,
  Lut,
  View3d,
  Volume,
  RENDERMODE_PATHTRACE,
  RENDERMODE_RAYMARCH,
  VolumeFileFormat,
} from "../src";
import { TestDataSpec } from "./types";
import VolumeLoaderContext from "../src/workers/VolumeLoaderContext";
import { DATARANGE_UINT8, ColorizeFeature } from "../src/types";
import {
  CameraMode,
  createHistogramSelection,
  createInitialState,
  DEFAULT_TEST_DATA,
} from "./app/state/stateService";
import { createCropSliceManager } from "./app/crop/cropSliceManager";
import {
  getSourceLoadErrorMessage,
  revertScaleToAuto,
  SCALE_TOO_LARGE_MESSAGE,
  setParagraphWarning,
} from "./app/errors/errorHandling";
import {
  removeFolderByName as removeAdvancedGuiFolderByName,
  setupAdvancedGui,
  updateChannelIsovalueRange,
} from "./app/gui/advancedGuiBuilder";
import { bindPlaybackAndRenderControls, bindPrimaryViewControls } from "./app/ui/eventBinder";
import { getAppUiElements } from "./app/ui/elementRegistry";
import { createHistogramController } from "./app/histogram/histogramController";
import { createLoaderOrchestration } from "./app/loaders/loaderOrchestration";
import { rgb01ToHex, rgb255ToHex } from "./app/utils/color";
import { densitySliderToView3D, gammaSliderToImageValues } from "./app/utils/math";
import { inferVolumeFileFormat } from "./app/utils/source";

const CACHE_MAX_SIZE = 1_000_000_000;
const CONCURRENCY_LIMIT = 8;
const PREFETCH_CONCURRENCY_LIMIT = 3;
const PREFETCH_DISTANCE: [number, number, number, number] = [5, 5, 5, 5];
const MAX_PREFETCH_CHUNKS = 25;
const PLAYBACK_INTERVAL = 80;

const TEST_DATA = DEFAULT_TEST_DATA as Record<string, TestDataSpec>;

let view3D: View3d;

function setVolumeLoading(isLoading: boolean) {
  document.body.classList.toggle("volume-loading", isLoading);

  const overlayIndicator = document.getElementById("volume-loading-overlay") as HTMLElement | null;
  overlayIndicator?.setAttribute("aria-hidden", isLoading ? "false" : "true");

  const inlineIndicator = document.getElementById("ome-zarr-scale-loading-indicator") as HTMLElement | null;
  inlineIndicator?.setAttribute("aria-hidden", isLoading ? "false" : "true");
}

const loaderContext = new VolumeLoaderContext(CACHE_MAX_SIZE, CONCURRENCY_LIMIT, PREFETCH_CONCURRENCY_LIMIT);

const myState = createInitialState();

const getNumberOfTimesteps = (): number => myState.totalFrames || myState.volume.imageInfo.times;

const histogramSelection = createHistogramSelection();
let histogramController: ReturnType<typeof createHistogramController> | null = null;
const cropSliceManager = createCropSliceManager({
  state: myState,
  getView3D: () => view3D,
  goToZSlice,
});

function applyCropRegionFromState() {
  cropSliceManager.applyCropRegionFromState();
}

function getEffectiveAxisLoadBounds(axis: "x" | "y" | "z") {
  return cropSliceManager.getEffectiveAxisLoadBounds(axis);
}

function remapSliceIndicesForRescaledVolume(volume: Volume) {
  cropSliceManager.remapSliceIndicesForRescaledVolume(volume);
}

function resetSliceIndicesForVolume(volume: Volume) {
  cropSliceManager.resetSliceIndicesForVolume(volume);
}

function setActiveSliceMode(mode: CameraMode) {
  cropSliceManager.setActiveSliceMode(mode);
}

function setupCropControls() {
  cropSliceManager.setupCropControls();
}

function setupSliceSelectorControls() {
  cropSliceManager.setupSliceSelectorControls();
}

function syncCropInputsFromState() {
  cropSliceManager.syncCropInputsFromState();
}

function updateSliceSelectorUI() {
  cropSliceManager.updateSliceSelectorUI();
}

function updateZSliceUI(volume: Volume) {
  cropSliceManager.updateZSliceUI(volume);
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
  gui = setupAdvancedGui({
    container,
    state: myState,
    view3D,
    densitySliderToView3D,
    onInitLights: initLights,
  });
}

function removeFolderByName(name: string) {
  if (!gui) {
    return;
  }
  removeAdvancedGuiFolderByName(gui, name);
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
  if (!gui) {
    return;
  }
  updateChannelIsovalueRange(gui, vol, channelIndex);
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

const { loadTestData, loadVolume } = createLoaderOrchestration({
  state: myState,
  loaderContext,
  prefetchDistance: PREFETCH_DISTANCE,
  maxPrefetchChunks: MAX_PREFETCH_CHUNKS,
  onChannelDataArrived,
  onVolumeCreated,
  goToZSlice,
});

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
  histogramController?.drawHistogramFromVolume(v, channelIndex);
}

function applyHistogramLutFromBins(channelIndex: number) {
  histogramController?.applyHistogramLutFromBins(channelIndex);
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
  const ui = getAppUiElements();
  const urlParams = new URLSearchParams(window.location.search);
  const hiddenParam = urlParams.get("hidden")?.trim().toLowerCase();
  const turntableParam = urlParams.get("turntable")?.trim().toLowerCase();
  if (hiddenParam === "true") {
    if (ui.controlsPanel) {
      ui.controlsPanel.classList.add("hidden");
    }
  }

  const el = ui.viewerPanel;
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

  const scaleError = ui.scaleError;
  const setScaleError = (warning?: string) => setParagraphWarning(scaleError, warning);

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

  const omeZarrScaleSelect = ui.omeZarrScaleSelect;
  omeZarrScaleSelect?.addEventListener("change", async () => {
    const value = omeZarrScaleSelect.value;
    if (!myState.volume) {
      return;
    }

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
            await revertScaleToAuto(omeZarrScaleSelect, applyScaleLevel);
          } catch {
          }
          return;
        }

        try {
          await applyScaleLevel(level);
        } catch (error) {
          setScaleError(SCALE_TOO_LARGE_MESSAGE);
          try {
            await revertScaleToAuto(omeZarrScaleSelect, applyScaleLevel);
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

  const sourceUrlInput = ui.sourceUrlInput;
  const sourceForm = ui.sourceForm;
  const loadSourceBtn = ui.sourceLoadButton;
  const sourceError = ui.sourceError;
  const defaultSource = TEST_DATA.zarrQimEscargot.url as string;

  const setSourceError = (warning?: string) => setParagraphWarning(sourceError, warning);

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
      setSourceError(getSourceLoadErrorMessage(error));
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

  bindPrimaryViewControls({
    state: myState,
    view3D,
    setActiveSliceMode,
  });

  const changeRenderMode = (pt: boolean, mp: boolean) => {
    myState.isPT = pt;
    myState.isMP = mp;
    view3D.setVolumeRenderMode(pt ? RENDERMODE_PATHTRACE : RENDERMODE_RAYMARCH);
    view3D.setMaxProjectMode(myState.volume, mp);
  };

  bindPlaybackAndRenderControls({
    state: myState,
    view3D,
    getNumberOfTimesteps,
    playTimeSeries,
    getCurrentFrame,
    goToFrame,
    setSyncMultichannelLoading,
    onSceneChange: (nextScene: number) => {
      if (myState.loader.length > 1 && myState.scene !== nextScene) {
        myState.scene = nextScene;
        void loadVolume(myState.currentImageName, new LoadSpec(), myState.loader[myState.scene]);
      }
    },
    goToZSlice,
    changeRenderMode,
    gammaSliderToImageValues,
  });

  histogramController = createHistogramController({
    canvas: ui.histogramCanvas,
    selection: histogramSelection,
    getVolume: () => myState.volume,
    getView3D: () => view3D,
  });
  histogramController.setupInteractions();

  setupColorizeControls();
  setupCropControls();
  setupSliceSelectorControls();
  setupGui(el);

  void loadFromCurrentSource(true);
}

document.body.onload = () => {
  main();
};