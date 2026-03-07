# Project Guidelines

## Overview

`@aics/vole-core` is a volume renderer for 3D/4D/5D imaging data with OME-Zarr support, built on Three.js. It ships as ES modules via Babel transpilation with TypeScript type declarations.

## Code Style

- **Language**: TypeScript (strict mode). Some legacy `.js` files exist (`NaiveSurfaceNets.js`, `TrackballControls.js`) — do not convert without explicit request.
- **Naming**: `camelCase` for variables/functions/params, `PascalCase` for types/interfaces/classes, `UPPER_CASE` for constants and enum members. Leading underscore allowed for unused parameters.
- **Formatting**: Prettier for formatting, ESLint for linting. Run `npm run format` and `npm run lint`.
- **Modules**: ES modules (`"type": "module"` in package.json). Use named exports; the public API is re-exported through `src/index.ts`.

## Architecture

- **Rendering pipeline**: `View3d` → `ThreeJsPanel` (Three.js wrapper) → rendering backends (`RayMarchedAtlasVolume`, `PathTracedVolume`).
- **Volume data**: `Volume` holds `Channel` objects for multichannel visualization. `VolumeDrawable` manages the renderable representation.
- **Loader system**: `IVolumeLoader` interface with implementations: `OmeZarrLoader`, `TiffLoader`, `RawArrayLoader`, `JsonImageInfoLoader`, `OpenCellLoader`. Add new formats by implementing `IVolumeLoader`.
- **Web Workers**: `VolumeLoaderContext` manages workers (`VolumeLoadWorker`, `FetchTiffWorker`) for async data loading.
- **Shaders**: GLSL shaders live in `src/constants/` and `src/constants/shaders/`. They are inlined at build time via `babel-plugin-inline-import` (production) and `vite-plugin-glsl` (dev).
- **Utilities**: `src/utils/` for helpers (`num_utils`, `url_utils`, `RequestQueue`).

## Build and Test

```bash
npm install          # Install dependencies
npm run dev          # Vite dev server (opens public/index.html)
npm run build        # Babel transpile to es/ + generate .d.ts
npm test             # Vitest (jsdom environment)
npm run checks       # Lint + typecheck + test in parallel
npm run lint         # ESLint
npm run format       # Prettier
npm run typeCheck    # tsc --noEmit
npm run clean        # Remove es/ output
```

Tests use Vitest with `jsdom` environment and global test functions (no imports needed for `describe`/`it`/`expect`). Test files live alongside source as `*.test.ts`.

## Conventions

- **Output directory**: Built files go to `es/`. Never edit files in `es/` — they are generated.
- **Shader files**: Use `.glsl`, `.frag`, `.vert`, `.fs`, `.vs` extensions. They are imported as strings.
- **3D model files**: `.obj` files are imported as asset source (strings).
- **Image assets**: `.png` files are inlined as data URIs at build time.
- **Worker TypeScript config**: Workers have a separate `tsconfig.json` at `src/workers/tsconfig.json`.
- **Version injection**: `APP_VERSION` is defined at build time from `package.json` version.
- **Key dependency**: Three.js (`three@^0.171.0`) — follow Three.js conventions for 3D objects, materials, and shaders.
