import AutoImport from 'unplugin-auto-import/vite'
import { unheadVueComposablesImports } from '@unhead/vue'

export default () =>
  AutoImport({
    // targets to transform
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/,
      /\.vue\?vue/ // .vue
    ],

    imports: [
      'vue',
      {
        axios: [['default', 'axios']]
      },
      unheadVueComposablesImports
    ],
    defaultExportByFilename: false,
    dirs: ['./src/composables/**', './src/utils/**'],
    dts: './types/auto-imports.d.ts'
  })
