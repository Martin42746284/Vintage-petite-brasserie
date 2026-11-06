import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Relative base so the build can be hosted anywhere (or opened from a subfolder).
export default defineConfig({
  base: './',
  plugins: [react()],
})
