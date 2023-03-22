import commonPlugins from "./plugins.mjs";

export default {
    input: "src/index.tsx",
    output: [
        {
            file: "./lib/index.js",
            format: "esm",
            assetFileNames: "[name][extname]",
            exports: 'named',
            strict: true,
        },
    ],
    plugins: commonPlugins,
};

