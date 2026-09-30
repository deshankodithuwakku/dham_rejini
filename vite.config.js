import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Hostinger deploys the whole repo into public_html, so the built
// site is served from /dist/. Use that base only for production builds.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/dist/' : '/',
}))
