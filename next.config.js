/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.BASE_PATH || '',
  basePath: process.env.BASE_PATH || '',
  reactStrictMode: true,
}

module.exports = nextConfig
