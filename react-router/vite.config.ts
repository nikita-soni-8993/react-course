import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // darkMode configuration should be handled in Tailwind CSS config
  plugins: [react(), tailwindcss(),],
})
