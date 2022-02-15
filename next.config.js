/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.GITHUB_ACTIONS ? "/next-pages-test" : "",
  trailingSlash: true,
  reactStrictMode: true,
}

module.exports = nextConfig
