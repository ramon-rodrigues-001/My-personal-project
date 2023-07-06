import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/My-personal-project",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'dev.html',
      },
    },
  },
});