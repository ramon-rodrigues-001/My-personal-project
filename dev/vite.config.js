import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../dist'
  }
  // base: "https://github.com/ramon-rodrigues-001/My-personal-project",
})
