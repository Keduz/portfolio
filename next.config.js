/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio',
  images: { unoptimized: true },
  transpilePackages: ['three'],
}

module.exports = nextConfig
