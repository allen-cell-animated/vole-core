import GUI from "lil-gui";
import { Vector3 } from "three";
import { State } from "../../types";
import { View3d, Volume } from "../../../src";

interface SetupAdvancedGuiOptions {
  container: HTMLElement;
  state: State;
  view3D: View3d;
  densitySliderToView3D: (density: number) => number;
  onInitLights?: () => void;
}

export function setupAdvancedGui(options: SetupAdvancedGuiOptions): GUI {
  const { container, state, view3D, densitySliderToView3D, onInitLights } = options;

  const gui = new GUI({ container });
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
    .add(state, "density")
    .max(100.0)
    .min(0.0)
    .step(0.001)
    .onChange((value) => {
      view3D.updateDensity(state.volume, densitySliderToView3D(value));
    });
  gui
    .add(state, "maskAlpha")
    .max(1.0)
    .min(0.0)
    .step(0.001)
    .onChange((value) => {
      view3D.updateMaskAlpha(state.volume, value);
    });
  gui
    .add(state, "primaryRay")
    .max(40.0)
    .min(1.0)
    .step(0.1)
    .onChange(() => {
      view3D.setRayStepSizes(state.volume, state.primaryRay, state.secondaryRay);
    });
  gui
    .add(state, "secondaryRay")
    .max(40.0)
    .min(1.0)
    .step(0.1)
    .onChange(() => {
      view3D.setRayStepSizes(state.volume, state.primaryRay, state.secondaryRay);
    });

  const cameraGui = gui.addFolder("Camera").close();
  cameraGui
    .add(state, "exposure")
    .max(1.0)
    .min(0.0)
    .step(0.001)
    .onChange((value) => {
      view3D.updateExposure(value);
    });
  cameraGui
    .add(state, "aperture")
    .max(0.1)
    .min(0.0)
    .step(0.001)
    .onChange(() => {
      view3D.updateCamera(state.fov, state.focalDistance, state.aperture);
    });
  cameraGui
    .add(state, "focalDistance")
    .max(5.0)
    .min(0.1)
    .step(0.001)
    .onChange(() => {
      view3D.updateCamera(state.fov, state.focalDistance, state.aperture);
    });
  cameraGui
    .add(state, "fov")
    .max(90.0)
    .min(0.0)
    .step(0.001)
    .onChange(() => {
      view3D.updateCamera(state.fov, state.focalDistance, state.aperture);
    });
  cameraGui
    .add(state, "samplingRate")
    .max(1.0)
    .min(0.1)
    .step(0.001)
    .onChange((value) => {
      view3D.updatePixelSamplingRate(value);
    });

  const visibleRegion = gui.addFolder("Visible Region").close();
  visibleRegion
    .add(state, "xmin")
    .max(1.0)
    .min(0.0)
    .step(0.001)
    .onChange(() => {
      view3D.updateVisibleRegion(state.volume, state.xmin, state.xmax, state.ymin, state.ymax, state.zmin, state.zmax);
    });
  visibleRegion
    .add(state, "xmax")
    .max(1.0)
    .min(0.0)
    .step(0.001)
    .onChange(() => {
      view3D.updateVisibleRegion(state.volume, state.xmin, state.xmax, state.ymin, state.ymax, state.zmin, state.zmax);
    });
  visibleRegion
    .add(state, "ymin")
    .max(1.0)
    .min(0.0)
    .step(0.001)
    .onChange(() => {
      view3D.updateVisibleRegion(state.volume, state.xmin, state.xmax, state.ymin, state.ymax, state.zmin, state.zmax);
    });
  visibleRegion
    .add(state, "ymax")
    .max(1.0)
    .min(0.0)
    .step(0.001)
    .onChange(() => {
      view3D.updateVisibleRegion(state.volume, state.xmin, state.xmax, state.ymin, state.ymax, state.zmin, state.zmax);
    });
  visibleRegion
    .add(state, "zmin")
    .max(1.0)
    .min(0.0)
    .step(0.001)
    .onChange(() => {
      view3D.updateVisibleRegion(state.volume, state.xmin, state.xmax, state.ymin, state.ymax, state.zmin, state.zmax);
    });
  visibleRegion
    .add(state, "zmax")
    .max(1.0)
    .min(0.0)
    .step(0.001)
    .onChange(() => {
      view3D.updateVisibleRegion(state.volume, state.xmin, state.xmax, state.ymin, state.ymax, state.zmin, state.zmax);
    });

  const lighting = gui.addFolder("Lighting").close();
  lighting
    .addColor(state, "skyTopColor", 255)
    .name("Sky Top")
    .onChange(() => {
      state.lights[0].mColorTop = new Vector3(
        (state.skyTopColor[0] / 255.0) * state.skyTopIntensity,
        (state.skyTopColor[1] / 255.0) * state.skyTopIntensity,
        (state.skyTopColor[2] / 255.0) * state.skyTopIntensity
      );
      view3D.updateLights(state.lights);
    });
  lighting
    .add(state, "skyTopIntensity")
    .max(100.0)
    .min(0.01)
    .step(0.1)
    .onChange(() => {
      state.lights[0].mColorTop = new Vector3(
        (state.skyTopColor[0] / 255.0) * state.skyTopIntensity,
        (state.skyTopColor[1] / 255.0) * state.skyTopIntensity,
        (state.skyTopColor[2] / 255.0) * state.skyTopIntensity
      );
      view3D.updateLights(state.lights);
    });
  lighting
    .addColor(state, "skyMidColor", 255)
    .name("Sky Mid")
    .onChange(() => {
      state.lights[0].mColorMiddle = new Vector3(
        (state.skyMidColor[0] / 255.0) * state.skyMidIntensity,
        (state.skyMidColor[1] / 255.0) * state.skyMidIntensity,
        (state.skyMidColor[2] / 255.0) * state.skyMidIntensity
      );
      view3D.updateLights(state.lights);
    });
  lighting
    .add(state, "skyMidIntensity")
    .max(100.0)
    .min(0.01)
    .step(0.1)
    .onChange(() => {
      state.lights[0].mColorMiddle = new Vector3(
        (state.skyMidColor[0] / 255.0) * state.skyMidIntensity,
        (state.skyMidColor[1] / 255.0) * state.skyMidIntensity,
        (state.skyMidColor[2] / 255.0) * state.skyMidIntensity
      );
      view3D.updateLights(state.lights);
    });
  lighting
    .addColor(state, "skyBotColor", 255)
    .name("Sky Bottom")
    .onChange(() => {
      state.lights[0].mColorBottom = new Vector3(
        (state.skyBotColor[0] / 255.0) * state.skyBotIntensity,
        (state.skyBotColor[1] / 255.0) * state.skyBotIntensity,
        (state.skyBotColor[2] / 255.0) * state.skyBotIntensity
      );
      view3D.updateLights(state.lights);
    });
  lighting
    .add(state, "skyBotIntensity")
    .max(100.0)
    .min(0.01)
    .step(0.1)
    .onChange(() => {
      state.lights[0].mColorBottom = new Vector3(
        (state.skyBotColor[0] / 255.0) * state.skyBotIntensity,
        (state.skyBotColor[1] / 255.0) * state.skyBotIntensity,
        (state.skyBotColor[2] / 255.0) * state.skyBotIntensity
      );
      view3D.updateLights(state.lights);
    });
  lighting
    .add(state.lights[1], "mDistance")
    .max(10.0)
    .min(0.0)
    .step(0.1)
    .onChange(() => {
      view3D.updateLights(state.lights);
    });
  lighting
    .add(state, "lightTheta")
    .max(180.0)
    .min(-180.0)
    .step(1)
    .onChange((value) => {
      state.lights[1].mTheta = (value * Math.PI) / 180.0;
      view3D.updateLights(state.lights);
    });
  lighting
    .add(state, "lightPhi")
    .max(180.0)
    .min(0.0)
    .step(1)
    .onChange((value) => {
      state.lights[1].mPhi = (value * Math.PI) / 180.0;
      view3D.updateLights(state.lights);
    });
  lighting
    .add(state.lights[1], "mWidth")
    .max(100.0)
    .min(0.01)
    .step(0.1)
    .onChange((value) => {
      state.lights[1].mWidth = value;
      state.lights[1].mHeight = value;
      view3D.updateLights(state.lights);
    });
  lighting
    .add(state, "lightIntensity")
    .max(1000.0)
    .min(0.01)
    .step(0.1)
    .onChange(() => {
      state.lights[1].mColor = new Vector3(
        (state.lightColor[0] / 255.0) * state.lightIntensity,
        (state.lightColor[1] / 255.0) * state.lightIntensity,
        (state.lightColor[2] / 255.0) * state.lightIntensity
      );
      view3D.updateLights(state.lights);
    });
  lighting
    .addColor(state, "lightColor", 255)
    .name("lightColor")
    .onChange(() => {
      state.lights[1].mColor = new Vector3(
        (state.lightColor[0] / 255.0) * state.lightIntensity,
        (state.lightColor[1] / 255.0) * state.lightIntensity,
        (state.lightColor[2] / 255.0) * state.lightIntensity
      );
      view3D.updateLights(state.lights);
    });

  onInitLights?.();
  return gui;
}

export function removeFolderByName(gui: GUI, name: string): void {
  const folder = gui.folders.find((item) => item._title === name);
  if (!folder) {
    return;
  }
  folder.close();
  folder.destroy();
}

export function updateChannelIsovalueRange(gui: GUI, volume: Volume, channelIndex: number): void {
  const channel = volume.channels[channelIndex];

  const channelNames = volume.imageInfo.channelNames;
  const folder = gui.folders.find((item) => item._title === "Channel " + channelNames[channelIndex]);
  if (!folder) {
    return;
  }
  const isovalueUI = folder.controllers.find((controller) => controller._name === "isovalue");
  if (!isovalueUI) {
    return;
  }
  isovalueUI.min(channel.rawMin);
  isovalueUI.max(channel.rawMax);
}
