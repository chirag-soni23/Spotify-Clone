import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import compression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),compression()],
  server:{
    proxy:{
      "/api":{
        target:"https://spotify-lpnu.onrender.com/",
      }
    }
  },
  build:{
    chunkSizeWarningLimit : 2000
  }
})
