import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isProd = command === 'build'
  return {
    plugins: [react()],
    base: isProd ? '/<repo-name>/' : '/', // Only use repo name for production build
  }
})
