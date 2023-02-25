const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx'],
  experimental: {
    appDir: true,
    mdxRs: true,
  },
};

module.exports = withContentlayer(nextConfig);
