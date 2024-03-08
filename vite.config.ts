import { fileURLToPath, URL } from 'node:url'

import { UserConfigExport, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
export default({ command, mode }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      vue(),
      viteMockServe({
        mockPath: './mock', // mock文件所在文件夹
        enable: mode === 'mock',
        watchFiles: true, // 监视文件更改 这样更改mock的时候，不需要重新启动编译
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
}
