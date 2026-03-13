/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio-kadu',
  images: { unoptimized: true },
  transpilePackages: ['three'],
}

module.exports = nextConfig
