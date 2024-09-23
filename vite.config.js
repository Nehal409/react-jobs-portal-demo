import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8000/api/v1', // Your backend server
        changeOrigin: true, // Alters the origin of the host header to the target URL
        rewrite: path => path.replace(/^\/api/, ''), // Optionally remove /api prefix from the request
        // so any time we want to use the backend we can use /api rather than the whole apiUrl
      },
    },
  },
});
