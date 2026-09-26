import react from '@vitejs/plugin-react'
import path from "path"
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
      "@features": path.resolve(import.meta.dirname, "./src/features"),
      "@shared": path.resolve(import.meta.dirname, "./src/shared"),
      "@components": path.resolve(import.meta.dirname, "./src/components"),
      "@lib": path.resolve(import.meta.dirname, "./src/lib"),
      "@assets": path.resolve(import.meta.dirname, "./src/assets"),
      "@pages": path.resolve(import.meta.dirname, "./src/pages"),
      "@services": path.resolve(import.meta.dirname, "./src/services"),
      "@store": path.resolve(import.meta.dirname, "./src/store"),
    },
  },
})
