/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    disable: !isProd
  }
}

module.exports = withPWA(nextConfig)
