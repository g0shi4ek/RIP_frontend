import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        //target: "http://host.docker.internal:8080",
        target: "http://localhost:8080",
        changeOrigin: true,
      },
    },
    watch: {
        usePolling: true,
    }, 
    host: true,
    strictPort: true,
    port: 3000,
  },
});