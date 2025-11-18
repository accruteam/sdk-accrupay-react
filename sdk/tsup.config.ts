import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["src/index.ts"],
    format: ["esm", "cjs"],
    dts: true,
    sourcemap: true,
    clean: true,
    splitting: false,
    treeshake: true,
    minify: false,
    external: [
      "react",
      "react-dom",
      "@apollo/client",
      "apollo-link-scalars",
      "graphql",
      "graphql-scalars",
      "rxjs",
    ],
    outExtension({ format }) {
      return { js: format === "esm" ? ".mjs" : ".cjs.js" };
    },
    esbuildOptions(options) {
      options.jsx = "automatic";
    },
  },
  {
    entry: ["src/index.ts"],
    format: ["iife"],
    globalName: "AccruPayReactSDK",
    sourcemap: true,
    clean: false,
    treeshake: true,
    minify: true,
    splitting: false,
    esbuildOptions(options) {
      options.jsx = "automatic";
    },
  },
]);
