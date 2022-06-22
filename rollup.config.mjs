import { terser } from "rollup-plugin-terser";
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

const globals = {
  codemirror: 'CodeMirror'
};

const name = 'CodeMirrorNSIS';

const plugins = [
  commonjs(),
  json(),
  terser()
];

export default [
  {
    input: 'src/codemirror.js',
    output: [
      {
        file: 'dist/codemirror-nsis.js',
        format: 'umd',
        globals: globals,
        name: name
      },
      {
        file: 'dist/codemirror-nsis.esm.js',
        format: 'esm',
        globals: globals,
        name: name
      }
    ],
    plugins: plugins
  },
  {
    input: 'src/nsis.js',
    output: [
      {
        file: 'dist/nsis-mode.js',
        format: 'cjs',
        globals: globals,
      },
      {
        file: 'dist/nsis-mode.esm.js',
        format: 'esm',
        globals: globals
      }
    ],
    plugins: plugins
  }
];
