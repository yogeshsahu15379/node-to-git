import { Config } from '@stencil/core'
import { postcss } from '@stencil/postcss'

import analyze from 'rollup-plugin-analyzer'

import postCssConfig from './postcss.config'

export const config: Config = {
  namespace: 'aesds',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  buildEs5: 'prod',
  extras: {
    shadowDomShim: true,
  },
  globalStyle: 'src/global/global.css',
  plugins: [postcss(postCssConfig)],
  rollupPlugins: {
    after: [
      process.env.STENCIL_ANALYZE &&
        analyze({
          stdout: true,
        }),
    ],
  },
}
