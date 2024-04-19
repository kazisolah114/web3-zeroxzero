import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import VitePluginRequire from './vite-plugin-require';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://api-test.0x0.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [react(), VitePluginRequire()],
  define: {
    'process.env': process.env,
  },
});
