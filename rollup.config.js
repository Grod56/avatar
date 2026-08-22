import terser from '@rollup/plugin-terser';
import { dts } from 'rollup-plugin-dts';
import sourcemaps from 'rollup-plugin-sourcemaps';
import cjs from '@rollup/plugin-commonjs';

export default [
  {
    input: 'esm/index.js',
    output: [
      {
        sourcemap: 'inline',
        file: 'dist/index.cjs',
        format: 'cjs',
        exports: 'named',
        globals: {
          react: 'React',
        },
      },
      {
        sourcemap: 'inline',
        file: 'dist/index.mjs',
        format: 'es',
        exports: 'named',
        globals: {
          react: 'React',
        },
      },
    ],
    external: ['react'],
    plugins: [sourcemaps(), cjs()],
  },
  {
    input: 'types/index.d.ts',
    output: [
      {
        file: 'dist/index.d.ts',
        format: 'es',
      },
    ],
    external: ['react'],
    plugins: [dts()],
  },
  {
    input: 'src/avatar.js',
    output: [
      {
        name: 'Avatar',
        sourcemap: 'inline',
        file: 'browser/avatar.js',
        format: 'iife',
      },
    ],
    plugins: [sourcemaps(), cjs(), terser()],
  },
  {
    input: 'esm/AvatarComponent.js',
    output: [
      {
        name: 'AvatarComponent',
        sourcemap: 'inline',
        file: 'browser/AvatarComponent.js',
        format: 'iife',
        exports: 'named',
        globals: {
          react: 'React',
        },
      },
    ],
    external: ['react'],
    plugins: [sourcemaps(), cjs(), terser()],
  },
  //   {
  //   input: 'src/avatar.js',
  //   plugins: [commonjs(), babel(), terser()],
  // }
  //   .then((bundle) =>
  //     bundle.write({
  //       format: 'iife',
  //       name: 'Avatar',
  //       file: 'browser/avatar.js',
  //     }),
  //   )
  //   .then(() => {
  //     console.log('Avatar created');
  //   })
  //   .catch((e) => {
  //     console.error(e);
  //   });

  // rollup({
  //   input: 'esm/AvatarComponent.js',
  //   plugins: [commonjs(), babel(), terser()],
  // })
  //   .then((bundle) =>
  //     bundle.write({
  //       format: 'iife',
  //       name: 'AvatarComponent',
  //       file: 'browser/AvatarComponent.js',
  //     }),
  //   )
  //   .then(() => {
  //     console.log('AvatarComponent created');
  //   })
  //   .catch((e) => {
  //     console.error(e);
  //   });
];
