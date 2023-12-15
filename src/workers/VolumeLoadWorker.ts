import VolumeCache from "../VolumeCache";
import { createVolumeLoader } from "../loaders";
import { IVolumeLoader } from "../loaders/IVolumeLoader";
import {
  WorkerMsgType,
  WorkerRequest,
  WorkerRequestPayload,
  WorkerResponse,
  WorkerResponseKind,
  WorkerResponsePayload,
} from "./types";
import { rebuildImageInfo, rebuildLoadSpec } from "./util";

let cache: VolumeCache | undefined = undefined;
let loader: IVolumeLoader | undefined = undefined;
let initialized = false;

type MessageHandler<T extends WorkerMsgType> = (payload: WorkerRequestPayload<T>) => Promise<WorkerResponsePayload<T>>;

const messageHandlers: { [T in WorkerMsgType]: MessageHandler<T> } = {
  [WorkerMsgType.INIT]: ({ maxCacheSize }) => {
    if (!initialized) {
      cache = new VolumeCache(maxCacheSize);
      initialized = true;
    }
    return Promise.resolve();
  },

  [WorkerMsgType.CREATE_LOADER]: async ({ path, options }) => {
    loader = await createVolumeLoader(path, { ...options, cache });
    return loader !== undefined;
  },

  [WorkerMsgType.CREATE_VOLUME]: async (loadSpec) => {
    if (loader === undefined) {
      throw new Error("No loader created");
    }

    return await loader.createImageInfo(rebuildLoadSpec(loadSpec));
  },

  [WorkerMsgType.LOAD_DIMS]: async (loadSpec) => {
    if (loader === undefined) {
      throw new Error("No loader created");
    }
    return await loader.loadDims(rebuildLoadSpec(loadSpec));
  },

  [WorkerMsgType.LOAD_VOLUME_DATA]: async ({ imageInfo, loadSpec, loaderId, loadId }) => {
    if (loader === undefined) {
      throw new Error("No loader created");
    }

    return await loader.loadRawChannelData(
      rebuildImageInfo(imageInfo),
      rebuildLoadSpec(loadSpec),
      (channelIndex, data, atlasDims) => {
        const message: WorkerResponse<WorkerMsgType> = {
          responseKind: WorkerResponseKind.EVENT,
          loaderId,
          loadId,
          channelIndex,
          data,
          atlasDims,
        };
        self.postMessage(message, [data.buffer]);
      }
    );
  },
};

self.onmessage = async <T extends WorkerMsgType>({ data }: MessageEvent<WorkerRequest<T>>) => {
  const { msgId, type, payload } = data;
  let message: WorkerResponse<T>;

  try {
    const response = await messageHandlers[type](payload);
    message = { responseKind: WorkerResponseKind.SUCCESS, msgId, type, payload: response };
  } catch (e) {
    message = { responseKind: WorkerResponseKind.ERROR, msgId, type, payload: (e as Error).message };
  }
  self.postMessage(message);
};
