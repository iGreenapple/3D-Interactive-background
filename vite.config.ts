import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  server: {
    open: true, // Automaticky otevře prohlížeč
  },
  build: {
    outDir: 'dist',
  }
});
