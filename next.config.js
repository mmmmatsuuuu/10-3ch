/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'ja',
  },
  basePath: process.env.GITHUB_ACTIONS ? "/10-3ch" : "",
  trailingSlash: true,
  reactStrictMode: true,
}

module.exports = nextConfig
