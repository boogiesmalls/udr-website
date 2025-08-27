import { withPayload } from '@payloadcms/next/withPayload'

import redirects from './redirects.js'

const NEXT_PUBLIC_SERVER_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined || process.env.__NEXT_PRIVATE_ORIGIN || 'http://localhost:3000'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      ...[NEXT_PUBLIC_SERVER_URL /* 'https://example.com' */].map((item) => {
        const url = new URL(item)

        return {
          hostname: url.hostname,
          protocol: url.protocol.replace(':', ''),
        }
      }),
      {
        hostname: 'localhost',
        protocol: 'http',
        port: '3000',
      },
    ],
    unoptimized: true,
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
  reactStrictMode: true,
  redirects,
  async rewrites() {
    const prodHost = process.env.VERCEL_PROJECT_PRODUCTION_URL

    const beforeFiles = []

    if (prodHost) {
      const escapedHost = prodHost.replace(/\./g, '\\.')
      console.log('✅ Adding production rule for:', escapedHost)

      beforeFiles.push({
        source: '/',
        has: [
          {
            type: 'host',
            value: `(?<slug>[^.]+)\\.${escapedHost}`,
          },
        ],
        destination: '/projects/:slug',
      })
    }

    beforeFiles.push({
      source: '/',
      has: [
        {
          type: 'host',
          value: `(?<slug>[^.]+)\\.localhost(?::\\d+)?`,
        },
      ],
      destination: '/projects/:slug',
    })

    return { beforeFiles: beforeFiles }
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
