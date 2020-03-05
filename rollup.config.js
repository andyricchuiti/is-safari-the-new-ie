import { createDefaultConfig } from '@open-wc/building-rollup';
import copy from 'rollup-plugin-copy'
// if you need to support IE11 use "modern-and-legacy-config" instead.
// import { createCompatibilityConfig } from '@open-wc/building-rollup';
// export default createCompatibilityConfig({ input: './src/index.html' });

const config = createDefaultConfig({ input: './src/index.html' });

export default {
  ...config,
  plugins: [...config.plugins, copy({
    targets: [
      {
        src: './src/assets',
        dest: './dist/'
      }
    ]
  })]
};
