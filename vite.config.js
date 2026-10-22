import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Determine base path:
// 1. Explicit BASE_URL env var if set
// 2. Or from GitHub Actions GITHUB_REPOSITORY (e.g. "username/my-resume" -> "/my-resume/")
// 3. Defaults to "/" for local development
const getBase = () => {
  if (process.env.BASE_URL) return process.env.BASE_URL
  if (process.env.GITHUB_REPOSITORY) {
    const repoName = process.env.GITHUB_REPOSITORY.split('/')[1]
    return repoName.endsWith('.github.io') ? '/' : `/${repoName}/`
  }
  return '/'
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-index-to-404',
      closeBundle() {
        const indexPath = path.resolve(__dirname, 'dist/index.html')
        const notFoundPath = path.resolve(__dirname, 'dist/404.html')
        if (fs.existsSync(indexPath)) {
          fs.copyFileSync(indexPath, notFoundPath)
        }
      },
    },
  ],
  base: getBase(),
})

