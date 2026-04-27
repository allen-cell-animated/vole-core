import { VolumeLoadError, VolumeLoadErrorType } from "../../../src";

export const SCALE_TOO_LARGE_MESSAGE = "Selected scale level is too large for this device. Reverted to Auto.";

export function setParagraphWarning(element: HTMLParagraphElement | null, warning?: string): void {
  if (!element) {
    return;
  }

  element.textContent = warning || "";
  element.style.display = warning ? "block" : "none";
}

export function getSourceLoadErrorMessage(error: unknown): string {
  if (error instanceof VolumeLoadError) {
    if (error.type === VolumeLoadErrorType.NOT_FOUND || error.type === VolumeLoadErrorType.LOAD_DATA_FAILED) {
      return "No data found at URL";
    }
  }
  return "Failed to load data from URL";
}

export async function revertScaleToAuto(
  selectElement: HTMLSelectElement | null,
  applyScaleLevel: () => Promise<void>
): Promise<void> {
  if (selectElement) {
    selectElement.value = "auto";
  }
  await applyScaleLevel();
}
