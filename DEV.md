# Developing

## Local Dev Setup

- make sure node.js is installed
- make sure aicsimage python lib is installed
- `npm install`
- `npm run dev`
- supports ome.tif, .tif, and .czi provided they are self contained z stacks.
- note: the files will be placed in a temporary "cache" folder which should be periodically cleaned out.

## Publishing

Requires that you have write access to `main` in this repository on GitHub. If
you do not have write access, ask someone who does to publish a new version for
you.

- Make sure you can run build successfully: `npm run build`
- Update version: `npm version {major|minor|patch}`
- Push to main: `git push origin main`
- Push tags: `git push origin v{X.X.X}`

The CI/CD pipeline will automatically publish the package to npm.
