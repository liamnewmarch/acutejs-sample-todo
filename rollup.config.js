import postcss from 'rollup-plugin-postcss';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import nodeGlobals from 'rollup-plugin-node-globals';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const plugins = [
  postcss({
    minimize: true,
  }),
  resolve(),
  nodeGlobals({
    global: false,
    buffer: false,
    dirname: false,
    filename: false,
    baseDir: false,
  }),
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(...[
    minifyHTML(),
    terser(),
  ]);
}

export default {
  input: 'src/app.js',
  output: {
    dir: 'public',
    format: 'iife',
  },
  plugins,
};
