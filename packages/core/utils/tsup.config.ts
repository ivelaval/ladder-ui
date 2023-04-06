import type { Options } from 'tsup';

const config: Options = {
  entryPoints: ['src/index.ts'],
  entry: [
    'src/**/*.ts',
  ],
  outDir: 'lib',
  clean: true,
  dts: true,
  splitting: true,
  sourcemap: true,
  format: ['cjs', 'esm'],
  minify: true,
  bundle: true,
  skipNodeModulesBundle: true,
  target: 'es2020',
  treeshake: true,
}

export default config