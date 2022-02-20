require('dotenv').config({ path: `./.env.${process.env.ENVIRONMENT}` });

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.GITHUB_ACTIONS ? "/10-3ch" : "",
  trailingSlash: true,
  reactStrictMode: true,
}

module.exports = nextConfig
