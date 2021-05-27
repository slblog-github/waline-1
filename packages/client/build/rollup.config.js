import dts from 'rollup-plugin-dts';

export default {
  input: `./src/index.ts`,
  output: [
    { file: `./dist/Waline.min.d.ts`, format: 'esm' },
    { file: `./dist/Waline.noStyle.d.ts`, format: 'esm' },
  ],
  plugins: [dts()],
  external: ['@style', /\.scss$/],
};
