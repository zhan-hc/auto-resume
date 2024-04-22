import { fileURLToPath, URL } from 'node:url'

import { UserConfigExport, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default({ command, mode }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      vue()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/style/theme.scss" as *;'
        }
      }
    },
    base: './'
  }
}
