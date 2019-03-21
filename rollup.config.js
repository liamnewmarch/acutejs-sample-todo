import postcss from 'rollup-plugin-postcss';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const plugins = [
  postcss({
    minimize: true,
  }),
  resolve(),
  replace({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
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
