import peerDepsExternal from "rollup-plugin-peer-deps-external";
import copy from "rollup-plugin-copy";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import analyze from 'rollup-plugin-analyzer'

export default [
    peerDepsExternal(),
    copy({
        targets: [
            { src: 'src/*.scss', dest: 'lib' },
        ]
    }),
    resolve(),
    commonjs(),
    terser(),
    typescript(),
    analyze(),
];
