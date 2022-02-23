/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.GITHUB_ACTIONS ? process.env.BASE_PATH : '',
  basePath: process.env.GITHUB_ACTIONS ? process.env.BASE_PATH : '',
  trailingSlash: true,
  reactStrictMode: true,
}

module.exports = nextConfig
