import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    hmr: {
      clientPort: 443
    }
  },
  resolve: {
    alias: {
      // 配置 @ 别名
      "@": path.resolve(__dirname, "src")
    }
  }
})
