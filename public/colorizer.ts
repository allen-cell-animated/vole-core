import { Color, DataTexture, FloatType, RGBAFormat, RedFormat, LinearFilter } from "three";

function getSquarestTextureDimensions(data: Float32Array): [number, number] {
  const width = Math.ceil(Math.sqrt(data.length));
  const height = Math.ceil(data.length / width);

  return [width, height];
}

function loadColormap(colorStops: string[]): DataTexture {
  const colorColorStops = colorStops.map((color) => new Color(color));
  const dataArr = colorColorStops.flatMap((col) => [col.r, col.g, col.b, 1]);
  const colormapTex = new DataTexture(new Float32Array(dataArr), colorColorStops.length, 1, RGBAFormat, FloatType);
  // if (this.type === ColorRampType.HARD_STOP) {
  //   this.texture.minFilter = NearestFilter;
  //   this.texture.magFilter = NearestFilter;
  // } else {
  colormapTex.minFilter = LinearFilter;
  colormapTex.magFilter = LinearFilter;
  // }
  colormapTex.internalFormat = "RGBA32F";
  colormapTex.needsUpdate = true;

  return colormapTex;
}

function loadFeature(): { featureTex: DataTexture; featureMin: number; featureMax: number } {
  const idsToFeatureValue = new Float32Array(256 * 256);
  // fill with random between 0 and 1
  for (let i = 0; i < idsToFeatureValue.length; i++) {
    idsToFeatureValue[i] = Math.random();
  }
  const featTex = new DataTexture(
    idsToFeatureValue,
    ...getSquarestTextureDimensions(idsToFeatureValue),
    RedFormat,
    FloatType
  );
  featTex.internalFormat = "R32F";
  featTex.needsUpdate = true;

  return {
    featureTex: featTex,
    featureMin: 0.0,
    featureMax: 1.0,
  };
}

const colorstops = {
  viridis: ["#440154", "#3a528b", "#20908c", "#5ec961", "#fde724"],
  plasma: ["#0d0887", "#46039f", "#7201a8", "#ab5dc2", "#d878b9", "#fca726", "#f0f921"],
};

export const colormaps = {
  viridis: { stops: colorstops.viridis, tex: loadColormap(colorstops.viridis) },
  plasma: { stops: colorstops.plasma, tex: loadColormap(colorstops.plasma) },
};

export const features = {
  feature1: loadFeature(),
  feature2: loadFeature(),
};
