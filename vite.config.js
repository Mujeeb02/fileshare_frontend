import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 10000, // Use 3000 or the port you prefer
    host: true, // Necessary to make the server accessible externally
  },
})
