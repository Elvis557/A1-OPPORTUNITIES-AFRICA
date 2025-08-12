import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.PNG', '**/*.WEBP'],
  optimizeDeps: {
    include: ['sweetalert2', '@emailjs/browser']
  },
  build: {
    commonjsOptions: {
      include: [/sweetalert2/, /node_modules/]
    }
  }
})
