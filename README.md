# QIM Volume Explorer

The QIM Volume Explorer is a data exploration tool for 3D image analysis developed by the [QIM Center](https://qim.dk/).

It is implemented on top of the [vole-core library](https://github.com/allen-cell-animated/vole-core), made by the [Allen Institute for Cell Science](https://www.allencell.org/).

## Installation

Install globally to get the `volume-explorer` command on your `PATH`:

`npm install -g @qim3d/volume-explorer`

`volume-explorer`

You can also run it without a global install:

`npx @qim3d/volume-explorer`

To open a dataset directly:

`volume-explorer https://platform.qim.dk/qim-public/escargot/escargot.zarr`

or

`volume-explorer --src https://platform.qim.dk/qim-public/escargot/escargot.zarr`

The published package now ships a production Vite build, including the worker and shader bundles used for volumetric rendering.

## Development

`git clone git@github.com:qim-center/vole-core.git`

`npm install`

`npm run dev`

For a production-style local run that uses the packaged CLI and built assets:

`npm start`

## Features
- Volumetric data exploration
- Load OME-Zarr, OME-Tiff files from URL
- Intensity histogram, opacity
- Colour pickers
- Area of interest cropping
- OME-Zarr scale level selection

![Demo](https://github.com/qim-center/vole-core/blob/main/docs/gifs/demo.gif)

### Advanced

There are two hidden menus for advanced users, accessible by pressing `Ctrl + Alt + 1` and `Ctrl + Alt + 2`.
