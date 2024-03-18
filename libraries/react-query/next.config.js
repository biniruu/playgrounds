/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production'

const nextConfig = {
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
