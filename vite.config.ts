import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@' : path.resolve(__dirname, './src'),
      'icons': path.resolve(__dirname, './node_modules/vue-material-design-icons')
    },
    extensions: [
      '.vue',
      '.ts',
      '.sass'
    ]
  },
//   css: {
//     preprocessorOptions: {
//       sass: {
//         additionalData: `@use "src/assets/sass/theme" as theme
// `
//       }
//     }
//   },
  plugins: [vue()]
})
