import { defineConfig } from 'tsup';

const external = [
  'react',
  'react-dom',
  '@apollo/client',
  '@stripe/react-stripe-js',
  '@stripe/stripe-js',
  'apollo-link-scalars',
  'graphql',
  'graphql-scalars',
  'rxjs',
];

export default defineConfig([
  {
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    sourcemap: true,
    clean: true,
    splitting: false,
    treeshake: true,
    minify: false,
    external,
    outExtension({ format }) {
      return { js: format === 'esm' ? '.mjs' : '.cjs' };
    },
    esbuildOptions(options) {
      options.jsx = 'automatic';
    },
  },
  {
    entry: ['src/index.ts'],
    format: ['iife'],
    globalName: 'AccruPayReactSDK',
    sourcemap: true,
    clean: false,
    treeshake: true,
    minify: true,
    splitting: false,
    external,
    esbuildOptions(options) {
      options.jsx = 'automatic';
    },
  },
]);
