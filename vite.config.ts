import { fileURLToPath, URL } from 'node:url'
import VueDevTools from 'vite-plugin-vue-devtools'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from './settings/AutoImport'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Components({ dts: './types/components.d.ts' }), AutoImport(), VueDevTools(), vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/_global.scss";`
      }
    }
  }
})
