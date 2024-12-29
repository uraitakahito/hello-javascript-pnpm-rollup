/* eslint-disable import/extensions */
// https://rollupjs.org/command-line-interface/#config-intellisense
import { defineConfig } from 'rollup';

const config = defineConfig(
  [
    {
      input: 'src/import-check/import-internal-esmodule.js',

      output: [
        {
          dir: 'dist/es6',
          format: 'es',
        },
        {
          dir: 'dist/umd',
          format: 'umd',
          name: 'MyModule',
        },
      ],
    },
  ],
);

export default config;
