import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    open: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  base: '/',  // Use absolute paths for Vercel deployment
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    manifest: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  },
});
