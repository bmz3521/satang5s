/** @type {import('next').NextConfig} */
const { redirect } = require('next/dist/server/api-utils')
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: process.env.REACT_APP_BASE_REDIRECT_PATH,
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
