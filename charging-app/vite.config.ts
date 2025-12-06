import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import fs from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': {}
  },
  base: '/',
  server: {
    port: 3000,
    proxy: {
      "/api-proxy": {
        target: "http://localhost:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-proxy/, "/api"),
      },
      "/img-proxy": {
        target: "http://localhost:9000", 
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/img-proxy/, ""),
      },
    },
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'cert.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'cert.crt')),
    },
    host: 'localhost',
  },
  plugins: [
    react(),
    mkcert(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "Charging App",
        short_name: "Charging",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#171A20",
        orientation: "portrait-primary",
        icons: [
          {
            src: "car-icon-180.png",
            type: "image/png",
            sizes: "180x180",
            purpose: "any maskable"
          },
          {
            src: "car-icon-512.png",
            type: "image/png",
            sizes: "512x512"
          },
          {
            src: "car-icon-192.png",
            type: "image/png",
            sizes: "192x192"
          }
        ],
      }
    }),
  ],
  build: {
    outDir: 'dist',
  },
});