import commonRollupConfig from "@ladder-ui/rollup-config/index.mjs";
import commonRollupPlugins from "@ladder-ui/rollup-config/plugins.mjs";
import postcss from "rollup-plugin-postcss";
import path from 'path';

export default [
    {
        ...commonRollupConfig,
        input: "src/index.tsx",
        plugins: [
            ...commonRollupPlugins,
            postcss({
                extract: 'Button.css',
                minimize: true,
                sourceMap: false,
            }),
        ]
    }
]
