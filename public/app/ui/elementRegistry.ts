export interface AppUiElements {
  controlsPanel: HTMLElement | null;
  viewerPanel: HTMLElement | null;
  scaleError: HTMLParagraphElement | null;
  sourceUrlInput: HTMLInputElement | null;
  sourceForm: HTMLFormElement | null;
  sourceLoadButton: HTMLButtonElement | null;
  sourceError: HTMLParagraphElement | null;
  omeZarrScaleSelect: HTMLSelectElement | null;
  histogramCanvas: HTMLCanvasElement | null;
}

export function getAppUiElements(doc: Document = document): AppUiElements {
  return {
    controlsPanel: doc.getElementById("controls-panel") as HTMLElement | null,
    viewerPanel: doc.getElementById("viewer-panel") as HTMLElement | null,
    scaleError: doc.getElementById("scale-error") as HTMLParagraphElement | null,
    sourceUrlInput: doc.getElementById("source-url-input") as HTMLInputElement | null,
    sourceForm: doc.getElementById("source-form") as HTMLFormElement | null,
    sourceLoadButton: doc.getElementById("source-load-button") as HTMLButtonElement | null,
    sourceError: doc.getElementById("source-error") as HTMLParagraphElement | null,
    omeZarrScaleSelect: doc.getElementById("ome-zarr-scale-select") as HTMLSelectElement | null,
    histogramCanvas: doc.getElementById("histogram-canvas") as HTMLCanvasElement | null,
  };
}
