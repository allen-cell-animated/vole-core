/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: [],
    exclude: ["es", "node_modules", "dist", "build", "coverage"],
  },
});
