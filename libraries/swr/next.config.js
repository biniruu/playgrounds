/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production'

/**
 * @property {Object[]} images.remotePatterns - external image paths
 */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  distDir: isProduction ? '.next' : 'dist',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  reactStrictMode: true,
  typescript: {
    tsconfigPath: isProduction ? 'tsconfig.build.json' : 'tsconfig.json',
  },
}

module.exports = nextConfig
