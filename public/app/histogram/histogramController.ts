import { Lut, View3d, Volume } from "../../../src";
import { HistogramSelection } from "../state/stateService";
import { histogramBinFromX } from "../utils/math";

interface HistogramControllerOptions {
  canvas: HTMLCanvasElement | null;
  selection: HistogramSelection;
  getVolume: () => Volume;
  getView3D: () => View3d;
}

export function createHistogramController(options: HistogramControllerOptions) {
  const { canvas, selection, getVolume, getView3D } = options;
  let histogramHandleAnimationFrame: number | null = null;

  const drawHistogramFromVolume = (volume: Volume, channelIndex: number): void => {
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    const hist = volume.getHistogram(channelIndex) as any;

    const bins: number[] | Uint32Array | undefined = hist.bins ?? hist.histogram;

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

    let maxLog = 0;
    for (let i = 0; i < bins.length; i++) {
      const v = Math.log1p(bins[i]);
      if (v > maxLog) {
        maxLog = v;
      }
    }

    if (maxLog === 0) {
      return;
    }

    const barWidth = w / bins.length;

    ctx.fillStyle = "#b3b3b3";

    for (let i = 0; i < bins.length; i++) {
      const v0 = Math.log1p(bins[i]) / maxLog;
      const barHeight = v0 * plotH;

      ctx.fillRect(i * barWidth, plotH - barHeight, Math.max(1, barWidth), barHeight);
    }

    const minB = selection.minBin;
    const maxB = selection.maxBin;

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

    const minHover = selection.hover === "min" || selection.dragging === "min";
    const maxHover = selection.hover === "max" || selection.dragging === "max";

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
    const labelFontSize =
      (parseFloat(canvasStyles.getPropertyValue("--histogram-label-font-size").trim()) || 80) * canvasScaleY;
    const labelFontFamily = canvasStyles.getPropertyValue("--histogram-label-font-family").trim() || "monospace";
    const handleWidthDelta = handleWidthHover - handleWidth;

    ctx.strokeStyle = handleColor;
    const minWeight = minHover ? Math.max(selection.minHandleHoverWeight, 1) : selection.minHandleHoverWeight;
    ctx.lineWidth = handleWidth + handleWidthDelta * minWeight;

    ctx.beginPath();
    ctx.moveTo(x0, 0);
    ctx.lineTo(x0, plotH);
    ctx.stroke();

    const maxWeight = maxHover ? Math.max(selection.maxHandleHoverWeight, 1) : selection.maxHandleHoverWeight;
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
  };

  const applyHistogramLutFromBins = (channelIndex: number): void => {
    const volume = getVolume();
    if (!volume) {
      return;
    }

    const min = selection.minBin;
    const max = selection.maxBin;

    const lut = new Lut().createFromMinMax(min, max);
    volume.setLut(channelIndex, lut);
    getView3D().updateLuts(volume);
  };

  const animateHistogramHandleHover = () => {
    const volume = getVolume();
    if (!volume) {
      selection.minHandleHoverWeight = 0;
      selection.maxHandleHoverWeight = 0;
      histogramHandleAnimationFrame = null;
      return;
    }

    const targetMin = selection.hover === "min" || selection.dragging === "min" ? 1 : 0;
    const targetMax = selection.hover === "max" || selection.dragging === "max" ? 1 : 0;
    const canvasStyles = window.getComputedStyle(canvas as HTMLCanvasElement);
    const speedRaw = Number(canvasStyles.getPropertyValue("--histogram-handle-hover-speed").trim());
    const easing = Number.isFinite(speedRaw) ? Math.min(1, Math.max(0.01, speedRaw)) : 0.25;

    selection.minHandleHoverWeight += (targetMin - selection.minHandleHoverWeight) * easing;
    selection.maxHandleHoverWeight += (targetMax - selection.maxHandleHoverWeight) * easing;

    const minDone = Math.abs(targetMin - selection.minHandleHoverWeight) < 0.01;
    const maxDone = Math.abs(targetMax - selection.maxHandleHoverWeight) < 0.01;

    if (minDone) {
      selection.minHandleHoverWeight = targetMin;
    }
    if (maxDone) {
      selection.maxHandleHoverWeight = targetMax;
    }

    drawHistogramFromVolume(volume, 0);

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

  const setupInteractions = (): void => {
    if (!canvas) {
      return;
    }

    canvas.addEventListener("mousedown", (event) => {
      const volume = getVolume();
      if (!volume) {
        return;
      }

      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;

      const hist = volume.getHistogram(0) as any;
      const bins = hist.bins ?? hist.histogram;
      if (!bins) {
        return;
      }

      const b = histogramBinFromX(x, canvas, bins.length);

      const dMin = Math.abs(b - selection.minBin);
      const dMax = Math.abs(b - selection.maxBin);

      selection.dragging = dMin < dMax ? "min" : "max";
      requestHistogramHandleAnimation();
    });

    canvas.addEventListener("mousemove", (event) => {
      const volume = getVolume();
      if (!volume) {
        return;
      }

      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;

      const hist = volume.getHistogram(0) as any;
      const bins = hist.bins ?? hist.histogram;
      if (!bins) {
        return;
      }

      if (selection.dragging) {
        const b = histogramBinFromX(x, canvas, bins.length);

        if (selection.dragging === "min") {
          selection.minBin = Math.min(b, selection.maxBin);
        } else {
          selection.maxBin = Math.max(b, selection.minBin);
        }

        applyHistogramLutFromBins(0);
        drawHistogramFromVolume(volume, 0);
        requestHistogramHandleAnimation();
        return;
      }

      const displayWidth = canvas.getBoundingClientRect().width;
      const minX = (selection.minBin / bins.length) * displayWidth;
      const maxX = (selection.maxBin / bins.length) * displayWidth;
      const distMin = Math.abs(x - minX);
      const distMax = Math.abs(x - maxX);
      const nextHover = Math.min(distMin, distMax) <= 6 ? (distMin <= distMax ? "min" : "max") : null;

      if (nextHover !== selection.hover) {
        selection.hover = nextHover;
        requestHistogramHandleAnimation();
      }

      canvas.style.cursor = nextHover ? "ew-resize" : "default";
    });

    canvas.addEventListener("mouseup", () => {
      selection.dragging = null;
      requestHistogramHandleAnimation();
    });

    canvas.addEventListener("mouseleave", () => {
      selection.dragging = null;
      selection.hover = null;
      canvas.style.cursor = "default";
      requestHistogramHandleAnimation();
    });
  };

  const setSelectionBins = (minBin: number, maxBin: number): void => {
    selection.minBin = minBin;
    selection.maxBin = maxBin;
  };

  return {
    applyHistogramLutFromBins,
    drawHistogramFromVolume,
    setSelectionBins,
    setupInteractions,
  };
}
