import {
  CreateLoaderOptions,
  IVolumeLoader,
  LoadSpec,
  RawArrayInfo,
  Volume,
  VolumeFileFormat,
  VolumeMaker,
} from "../../../src";
import { OpenCellLoader } from "../../../src/loaders/OpenCellLoader";
import { RawArrayLoaderOptions } from "../../../src/loaders/RawArrayLoader";
import VolumeLoaderContext from "../../../src/workers/VolumeLoaderContext";
import { type NumberType } from "../../../src/types";
import { State, TestDataSpec } from "../../types";

interface LoaderOrchestrationOptions {
  state: State;
  loaderContext: VolumeLoaderContext;
  prefetchDistance: [number, number, number, number];
  maxPrefetchChunks: number;
  onChannelDataArrived: (volume: Volume, channelIndex: number) => void;
  onVolumeCreated: (name: string, volume: Volume) => void;
  goToZSlice: (slice: number) => boolean;
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
      shape: [channelVolumes.length, sizeZ, sizeY, sizeX],
      buffer: new DataView(alldata.buffer),
    },
  };
}

export function createLoaderOrchestration(options: LoaderOrchestrationOptions) {
  const {
    state,
    loaderContext,
    prefetchDistance,
    maxPrefetchChunks,
    onChannelDataArrived,
    onVolumeCreated,
    goToZSlice,
  } = options;

  const createLoader = async (data: TestDataSpec): Promise<IVolumeLoader[]> => {
    if (data.type === "opencell") {
      return [new OpenCellLoader()];
    }

    await loaderContext.onOpen();

    const loaderOptions: Partial<CreateLoaderOptions> = {};
    if (Array.isArray(data.url)) {
      const fetchOptions = {
        fetchOptions: { maxPrefetchDistance: prefetchDistance, maxPrefetchChunks },
      };
      const promises = data.url.map((url) => loaderContext.createLoader(url, fetchOptions));
      return Promise.all(promises);
    }

    let path: string | string[] = data.url;

    if (data.type === VolumeFileFormat.JSON) {
      const src = data.url as string;
      const times = data.times || 0;
      const timesArray = [...Array(times + 1).keys()];
      path = timesArray.map((t) => src.replace("%%", t.toString()));
    } else if (data.type === VolumeFileFormat.DATA) {
      const volumeInfo = createTestVolume(data.dtype || "uint8");
      loaderOptions.fileType = VolumeFileFormat.DATA;
      loaderOptions.rawArrayOptions = { data: volumeInfo.data, metadata: volumeInfo.metadata };
    }

    const result = await loaderContext.createLoader(path, {
      ...loaderOptions,
      fetchOptions: { maxPrefetchDistance: prefetchDistance, maxPrefetchChunks },
    });
    return [result];
  };

  const loadVolume = async (name: string, loadSpec: LoadSpec, loader: IVolumeLoader): Promise<void> => {
    const fullDims = await loader.loadDims(loadSpec);
    console.log(fullDims);

    const volume = await loader.createVolume(loadSpec, onChannelDataArrived);
    onVolumeCreated(name, volume);
    loader.loadVolumeData(volume);

    goToZSlice(Math.floor(volume.imageInfo.subregionSize.z / 2));
  };

  const loadTestData = async (name: string, testdata: TestDataSpec) => {
    state.loader = await createLoader(testdata);

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

    state.totalFrames = testdata.times;
    const loader = state.loader[Math.max(state.scene, state.loader.length - 1)];
    await loadVolume(name, loadSpec, loader);
  };

  return {
    createLoader,
    loadVolume,
    loadTestData,
  };
}
