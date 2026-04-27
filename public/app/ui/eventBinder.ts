import { View3d } from "../../../src";
import { State } from "../../types";
import { CameraMode } from "../state/stateService";
import { densitySliderToView3D } from "../utils/math";
import { hexToRgb01, hexToRgb255 } from "../utils/color";

interface BindPrimaryViewControlsOptions {
  state: State;
  view3D: View3d;
  setActiveSliceMode: (mode: CameraMode) => void;
}

interface BindPlaybackAndRenderControlsOptions {
  state: State;
  view3D: View3d;
  getNumberOfTimesteps: () => number;
  playTimeSeries: (onNewFrameCallback: () => void) => void;
  getCurrentFrame: () => number;
  goToFrame: (targetFrame: number) => boolean;
  setSyncMultichannelLoading: (sync: boolean) => void;
  onSceneChange: (scene: number) => void;
  goToZSlice: (slice: number) => boolean;
  changeRenderMode: (pt: boolean, mp: boolean) => void;
  gammaSliderToImageValues: (sliderValues: [number, number, number]) => [number, number, number];
}

export function bindPrimaryViewControls(options: BindPrimaryViewControlsOptions): void {
  const { state, view3D, setActiveSliceMode } = options;

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
    state.isTurntable = !state.isTurntable;
    view3D.setAutoRotate(state.isTurntable);
  });
  const axisToggle = document.getElementById("axisBtn") as HTMLInputElement | null;
  if (axisToggle) {
    if (axisToggle.type === "checkbox") {
      axisToggle.checked = state.isAxisShowing;
    }
    axisToggle.addEventListener("change", (event: Event) => {
      const target = event.target as HTMLInputElement;
      state.isAxisShowing = target.type === "checkbox" ? target.checked : !state.isAxisShowing;
      view3D.setShowAxis(state.isAxisShowing);
    });
  }
  const showBoundsToggle = document.getElementById("showBoundingBox") as HTMLInputElement | null;
  if (showBoundsToggle) {
    if (showBoundsToggle.type === "checkbox") {
      showBoundsToggle.checked = state.showBoundingBox;
    }
    showBoundsToggle.addEventListener("change", (event: Event) => {
      const target = event.target as HTMLInputElement;
      state.showBoundingBox = target.type === "checkbox" ? target.checked : !state.showBoundingBox;
      view3D.setBoundingBoxColor(state.volume, state.boundingBoxColor);
      view3D.setShowBoundingBox(state.volume, state.showBoundingBox);
    });
  }
  const showScaleBarBtn = document.getElementById("showScaleBar");
  showScaleBarBtn?.addEventListener("click", () => {
    state.showScaleBar = !state.showScaleBar;
    view3D.setShowScaleBar(state.showScaleBar);
  });

  const boundsColorBtn = document.getElementById("boundingBoxColor");
  boundsColorBtn?.addEventListener("change", (event: Event) => {
    state.boundingBoxColor = hexToRgb01((event.target as HTMLInputElement)?.value, state.boundingBoxColor);
    view3D.setBoundingBoxColor(state.volume, state.boundingBoxColor);
  });
  const backgroundColorBtn = document.getElementById("backgroundColor");
  backgroundColorBtn?.addEventListener("change", (event: Event) => {
    state.backgroundColor = hexToRgb01((event.target as HTMLInputElement)?.value, state.backgroundColor);
    view3D.setBackgroundColor(state.backgroundColor);
  });
  const objectColorBtn = document.getElementById("objectColor");
  objectColorBtn?.addEventListener("change", (event: Event) => {
    state.foregroundColor = hexToRgb255((event.target as HTMLInputElement)?.value, state.foregroundColor);

    for (let channelIndex = 0; channelIndex < state.channelGui.length; channelIndex++) {
      state.channelGui[channelIndex].colorD = [...state.foregroundColor] as [number, number, number];
      view3D.updateChannelMaterial(
        state.volume,
        channelIndex,
        state.channelGui[channelIndex].colorD,
        state.channelGui[channelIndex].colorS,
        state.channelGui[channelIndex].colorE,
        state.channelGui[channelIndex].glossiness
      );
      view3D.updateMaterial(state.volume);
    }
  });

  const globalOpacitySlider = document.getElementById("global-opacity-slider") as HTMLInputElement | null;
  if (globalOpacitySlider) {
    globalOpacitySlider.value = `${state.density / 100}`;
    globalOpacitySlider.style.setProperty("--value", `${Math.round((state.density / 100) * 100)}`);

    const onGlobalOpacityInput = () => {
      const sliderValue = Math.min(1, Math.max(0, globalOpacitySlider.valueAsNumber));
      state.density = sliderValue * 100;
      globalOpacitySlider.style.setProperty("--value", `${Math.round(sliderValue * 100)}`);
      view3D.updateDensity(state.volume, densitySliderToView3D(state.density));
    };

    globalOpacitySlider.addEventListener("input", onGlobalOpacityInput);
    globalOpacitySlider.addEventListener("change", onGlobalOpacityInput);
  }
}

export function bindPlaybackAndRenderControls(options: BindPlaybackAndRenderControlsOptions): void {
  const {
    state,
    view3D,
    getNumberOfTimesteps,
    playTimeSeries,
    getCurrentFrame,
    goToFrame,
    setSyncMultichannelLoading,
    onSceneChange,
    goToZSlice,
    changeRenderMode,
    gammaSliderToImageValues,
  } = options;

  const flipXBtn = document.getElementById("flipXBtn");
  flipXBtn?.addEventListener("click", () => {
    state.flipX *= -1;
    view3D.setFlipVolume(state.volume, state.flipX as -1 | 1, state.flipY, state.flipZ);
  });
  const flipYBtn = document.getElementById("flipYBtn");
  flipYBtn?.addEventListener("click", () => {
    state.flipY *= -1;
    view3D.setFlipVolume(state.volume, state.flipX, state.flipY as -1 | 1, state.flipZ);
  });
  const flipZBtn = document.getElementById("flipZBtn");
  flipZBtn?.addEventListener("click", () => {
    state.flipZ *= -1;
    view3D.setFlipVolume(state.volume, state.flipX, state.flipY, state.flipZ as -1 | 1);
  });

  const forwardBtn = document.getElementById("forwardBtn");
  const backBtn = document.getElementById("backBtn");
  const timeSlider = document.getElementById("timeSlider") as HTMLInputElement;
  const timeInput = document.getElementById("timeValue") as HTMLInputElement;
  const sceneInput = document.getElementById("sceneValue") as HTMLInputElement;

  const playBtn = document.getElementById("playBtn");
  playBtn?.addEventListener("click", () => {
    if (state.currentFrame >= getNumberOfTimesteps() - 1) {
      state.currentFrame = -1;
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
    window.clearTimeout(state.timerId);
    state.isPlaying = false;
    setSyncMultichannelLoading(false);
  });

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

  timeSlider?.addEventListener("change", () => {
    if (goToFrame(timeSlider?.valueAsNumber)) {
      if (timeInput) {
        timeInput.value = timeSlider.value;
      }
    }
  });
  timeInput?.addEventListener("change", () => {
    if (goToFrame(timeInput?.valueAsNumber)) {
      if (timeSlider) {
        timeSlider.value = timeInput.value;
      }
    }
  });
  sceneInput?.addEventListener("change", () => {
    onSceneChange(sceneInput.valueAsNumber);
  });

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
    state.isAligned = !state.isAligned;
    view3D.setVolumeTranslation(state.volume, state.isAligned ? state.volume.getTranslation() : [0, 0, 0]);
    view3D.setVolumeRotation(state.volume, state.isAligned ? state.volume.getRotation() : [0, 0, 0]);
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
    state.interpolationActive = !state.interpolationActive;
    view3D.setInterpolationEnabled(state.volume, state.interpolationActive);
  });

  const screenshotButton = document.getElementById("screenshot-button") as HTMLButtonElement | null;
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
  gammaMin?.addEventListener("change", () => {
    const g = gammaSliderToImageValues([gammaMin.valueAsNumber, gammaScale.valueAsNumber, gammaMax.valueAsNumber]);
    view3D.setGamma(state.volume, g[0], g[1], g[2]);
  });
  gammaMin?.addEventListener("input", () => {
    const g = gammaSliderToImageValues([gammaMin.valueAsNumber, gammaScale.valueAsNumber, gammaMax.valueAsNumber]);
    view3D.setGamma(state.volume, g[0], g[1], g[2]);
  });
  gammaMax?.addEventListener("change", () => {
    const g = gammaSliderToImageValues([gammaMin.valueAsNumber, gammaScale.valueAsNumber, gammaMax.valueAsNumber]);
    view3D.setGamma(state.volume, g[0], g[1], g[2]);
  });
  gammaMax?.addEventListener("input", () => {
    const g = gammaSliderToImageValues([gammaMin.valueAsNumber, gammaScale.valueAsNumber, gammaMax.valueAsNumber]);
    view3D.setGamma(state.volume, g[0], g[1], g[2]);
  });
  gammaScale?.addEventListener("change", () => {
    const g = gammaSliderToImageValues([gammaMin.valueAsNumber, gammaScale.valueAsNumber, gammaMax.valueAsNumber]);
    view3D.setGamma(state.volume, g[0], g[1], g[2]);
  });
  gammaScale?.addEventListener("input", () => {
    const g = gammaSliderToImageValues([gammaMin.valueAsNumber, gammaScale.valueAsNumber, gammaMax.valueAsNumber]);
    view3D.setGamma(state.volume, g[0], g[1], g[2]);
  });
}
