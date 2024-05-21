/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production'

/**
 * @property {Object[]} images.remotePatterns - external image paths
 *
 * @property {Function} rewrites - to resolve a CORS issue
 * @property {string} source - internal path
 * @property {string} destination - external path you need to connect
 */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  distDir: isProduction ? '.next' : 'dist',
  reactStrictMode: true,
  typescript: {
    tsconfigPath: isProduction ? 'tsconfig.build.json' : 'tsconfig.json',
  },
}

module.exports = nextConfig
