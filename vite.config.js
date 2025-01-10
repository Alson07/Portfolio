import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/Portfolio/',
  build: {
    rollupOptions: {
      external: [],
      output: {
        format: 'es',
        inlineDynamicImports: true
      }
    }
  }
})
