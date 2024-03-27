import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import VitePluginRequire from './vite-plugin-require';

export default defineConfig({
  plugins: [react(), VitePluginRequire()],
});
