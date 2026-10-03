import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync, mkdirSync } from 'node:fs'

// Copies the app icon, manifest and service worker into the published site
const APP_FILES = ['manifest.webmanifest', 'sw.js', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png']

const copyAppFiles = {
  name: 'copy-app-files',
  apply: 'build',
  closeBundle() {
    mkdirSync('dist', { recursive: true })
    for (const f of APP_FILES) {
      if (existsSync(f) && !existsSync(`public/${f}`)) copyFileSync(f, `dist/${f}`)
    }
  },
}

export default defineConfig({
  plugins: [react(), copyAppFiles],
})
