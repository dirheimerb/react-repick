import terser from '@rollup/plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import swc from '@rollup/plugin-swc';
import postcss from 'rollup-plugin-postcss';
import replace from '@rollup/plugin-replace';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import image from '@rollup/plugin-image';
import url from '@rollup/plugin-url';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
            exports: 'named',
            sourcemap: true,
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm',
            exports: 'named',
            sourcemap: true,
        },
        {
            file: 'dist/index.umd.js',
            format: 'umd',
            name: 'DebugScreens',
            exports: 'named',
            sourcemap: true,
        },
    ],
    plugins: [
        nodeResolve(),
        commonjs(),
        postcss({
            extract: 'index.css',
        }),
        json(),
        typescript({
            tsconfig: 'tsconfig.json',
            useTsconfigDeclarationDir: true,
        }),
        swc(),
        terser({
            maxWorkers: 1,
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
            output: {
                comments: false,
            },
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
            preventAssignment: true,
        }),
        babel({
            babelHelpers: 'bundled',
            presets: ['@babel/preset-env'],
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        }),
        peerDepsExternal(),
        image(),
        url({
            limit: 10 * 1024,
            include: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.gif'],
        }),
        sourcemaps(),
    ],
    external: ['react', 'react-dom', 'tailwindcss', 'postcss'],
};
