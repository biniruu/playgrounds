import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

const isProduction = process.env.NODE_ENV === 'production'

/**
 * Documentation
 * {@link https://vitejs.dev/config/}
 */
export default defineConfig({
  build: {
    sourcemap: isProduction ? false : true,
  },
  plugins: [
    /**
     *
     * exclude : alternative to exclude option in tsconfig when build project
     * include : alternative to include option in tsconfig when build project
     */
    dts({
      exclude: ['./node_modules', './dist', './tests', './coverage'],
      include: ['./src/**/*.ts', './src/**/*.tsx'],
    }),
    react(),
    /**
     * vite-tsconfig-paths
     * {@link https://www.npmjs.com/package/vite-tsconfig-paths}
     *
     * Give TypeScript's path mapping to dependencies such as eslint to resolve imports
     */
    tsconfigPaths(),
  ],
})
