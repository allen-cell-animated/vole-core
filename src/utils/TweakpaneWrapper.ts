// Workaround for https://github.com/cocopon/tweakpane/issues/665
export class WrappedTpError extends Error {
  constructor(e: any) {
  super();
    Object.assign(this, e);
  }
}

export function wrapTweakpaneCall<T>(fn: () => T): T {
  try {
    return fn();
  } catch (e: any) {
    if (e.name === "TpError") {
      throw new WrappedTpError(e);
    }
    throw e;
  }
}