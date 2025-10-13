import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/nagarkot-app/', 
  build: {
    outDir: 'dist',      
    assetsDir: 'assets', 
  },
  server: {
    port: 5173, 
    open: true,
  },
})
