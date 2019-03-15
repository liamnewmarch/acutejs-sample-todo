import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/app.js',
  output: {
    dir: 'public',
    format: 'iife',
  },
  plugins: [
    resolve(),
  ],
};
