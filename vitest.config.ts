import { defineConfig } from 'vitest/config'
import tsConfigPaths from 'vite-tsconfig-paths'
export default defineConfig({
  resolve: {
    alias: {
      '@/': new URL(import.meta.url).pathname,
    },
  },
  plugins: [tsConfigPaths()],
  test: {
    globals: true,
  },
})
