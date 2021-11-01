import { terser } from "rollup-plugin-terser";
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

const output = {
  format: 'umd',
  globals: {
    codemirror: 'CodeMirror'
  },
  name: "CodeMirrorNSIS"
};

const plugins = [
  commonjs(),
  json()
];

export default [
  {
    input: 'src/nsis.js',
    output: {
      ...output,
      file: 'dist/nsis.js',
    },
    plugins: plugins
  },
  {
    input: 'src/nsis.js',
    output: {
      ...output,
      file: 'dist/nsis.min.js'
    },
    plugins: [
      ...plugins,
      terser()
    ]
  }
];
