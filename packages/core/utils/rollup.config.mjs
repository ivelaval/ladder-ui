import commonRollupConfig from "@ladder-ui/rollup-config/index.mjs";
import commonRollupPlugins from "@ladder-ui/rollup-config/plugins.mjs";

export default [
    {
        ...commonRollupConfig,
        input: [
          "src/concatClassNames/index.ts",
          "src/sum/index.ts"
        ],
        output: [
            {
                dir: "lib",
                format: "esm",
                sourcemap: false,
                preserveModules: true,
                exports: 'named'
            },
        ],
        plugins: [
            ...commonRollupPlugins,
        ]
    }
]
