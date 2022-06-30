import commonjs from '@rollup/plugin-commonjs';
import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';
import postCSS from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';

import pkg from './package.json';

const config = [
  {
    input: 'src/components/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      del({ targets: 'dist' }),
      external(),
      nodeResolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.build.json'
      }),
      postCSS({
        plugins: [require('tailwindcss'), require('autoprefixer')]
      })
    ]
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [
      {
        file: 'dist/index.d.ts',
        format: 'esm'
      }
    ],
    external: [/\.css$/, /\.scss$/],
    plugins: [dts()]
  }
];

export default config;
