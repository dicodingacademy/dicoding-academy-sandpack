import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // PGlite ships WASM + a binary FS data bundle. Vite's esbuild pre-bundling
    // mangles those asset URLs, so the runtime fetches a broken FS bundle
    // ("Invalid FS bundle size"). Excluding it makes the dev server serve the
    // package's own assets untouched.
    exclude: ['@electric-sql/pglite'],
  },
});
