import { reactOutputTarget } from '@stencil/react-output-target';
import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import tailwindcss from 'tailwindcss';
import { sass } from '@stencil/sass';


export const config: Config = {
  namespace: 'core-library',
  globalStyle: 'src/styles/global.scss',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'dist-custom-elements',
    },
    reactOutputTarget({
      componentCorePackage: 'core-library',
      proxiesFile: '../react-library/lib/components/core-library/index.ts',
      includeDefineCustomElements: true,
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
    plugins: [
      sass(),
      postcss({
        plugins: [
          tailwindcss('./tailwind.config.js'),
          require('autoprefixer'),
        ],
      }),
    ],
  
};