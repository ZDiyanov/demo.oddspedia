import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';
import postcssConfig from './postcss.config';

export default defineConfig({
  plugins: [vue(), eslint()],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./node_modules', import.meta.url)),
    },
  },
  server: {
    port: 8080,
  },
  css: {
    postcss: postcssConfig,
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/assets/scss/breakpoints.scss" as *;
          @use "@/assets/scss/variables.scss" as *;
        `
      },
    },
  },
  test: {
    environment: 'jsdom',
    root: 'src/',
  },
});
