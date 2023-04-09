import type { Options } from 'tsup';
import sharedConfig from '@ladder-ui/tsup-config';

const config: Options = {
  ...sharedConfig,
  format: ['cjs'],
};

export default config;
