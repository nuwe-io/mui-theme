import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
import commonjs from 'rollup-plugin-commonjs'
import scss from 'rollup-plugin-scss'
import json from '@rollup/plugin-json'

export default [
  {
    input: './src/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs'
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named'
      }
    ],
    external: ['styled-components', 'react'],
    plugins: [
      external({
        includeDependencies: true
      }),
      postcss({
        plugins: [],
        minimize: true
      }),
      scss(),
      babel({
        exclude: '**/node_modules/**',
        presets: ['@babel/preset-react']
      }),
      resolve(),
      commonjs({
        include: ['./index.js', 'node_modules/**'],
        namedExports: {
          'node_modules/react-is/index.js': ['isValidElementType']
        }
      }),
      terser(),
      json()
    ]
  }
]
