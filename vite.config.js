import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/deploy-my-project",
  plugins: [react()],
  // build: {
  //   rollupOptions: {
  //     input: {
  //       main: 'dev.html'
  //     }
  //   },
  //   outDir: 'dist',
  //   assetsDir: '', 
  //   entryFileNames: 'index.html',
  //   manifest: true
  // }
})