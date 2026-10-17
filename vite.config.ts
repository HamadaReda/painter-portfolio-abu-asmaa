import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

declare const process: { cwd(): string }

export default defineConfig(({ mode, isSsrBuild }) => {
  const environment = loadEnv(mode, process.cwd(), '')
  const vercelProductionDomain = environment.VERCEL_PROJECT_PRODUCTION_URL
  const siteUrl =
    environment.VITE_SITE_URL ||
    (vercelProductionDomain ? `https://${vercelProductionDomain}` : '')

  return {
    define: {
      'import.meta.env.VITE_SITE_URL': JSON.stringify(siteUrl),
    },
    plugins: [react(), tailwindcss()],
    build: isSsrBuild
      ? {
          emptyOutDir: false,
          outDir: 'dist/server',
          rollupOptions: {
            output: { entryFileNames: 'entry-server.js' },
          },
        }
      : undefined,
  }
})
