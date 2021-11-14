import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";

const pathResolve = path => resolve(__dirname, path)

// https://vitejs.cn/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias: {
      '@': pathResolve('src'),
      '@comps': pathResolve('src/components'),
      '@apis': pathResolve('src/apis'),
      '@views': pathResolve('src/views'),
      '@utils': pathResolve('src/utils'),
      '@routes': pathResolve('src/router'),
      '@store': pathResolve('src/store'),
      '@styles': pathResolve('src/styles'),
    }
  }
})
