import commonRollupConfig from "@mindfului/rollup-config/index.mjs";
import commonRollupPlugins from "@mindfului/rollup-config/plugins.mjs";
import postcss from "rollup-plugin-postcss";

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
