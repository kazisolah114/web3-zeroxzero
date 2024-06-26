import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

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
  plugins: [
    react()
  ],
  define: {
    'process.env': process.env,
  },
  build: {
    sourcemap: true,
  }
});
