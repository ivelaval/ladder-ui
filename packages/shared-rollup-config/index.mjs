import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";
import { visualizer } from "rollup-plugin-visualizer";

export default {
    input: "src/index.tsx",
    output: [
        {
            file: "./lib/cjs/index.js",
            format: "cjs",
            sourcemap: true
        },
        {
            file: "./lib/index.js",
            format: "esm",
            sourcemap: true
        },
    ],
    plugins: [
        peerDepsExternal(),
        postcss({ extract: false, minimize: true }),
        resolve(),
        commonjs(),
        terser(),
        typescript(),
        visualizer({
            filename: 'bundle-analysis.html',
            open: false,
        }),
    ],
};

