import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    root: 'dist', // Set the root to 'dist'
    build: {
      outDir: 'dist', // Ensure output directory is 'dist'
    },
  plugins: [],
  server: {
    host: '0.0.0.0',
    hmr: false, // Change this line to false disable auto-refreshing.
  }
})
