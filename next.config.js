/* eslint-env node */

const isProd = process.env.NODE_ENV === 'production';
// const repoName = 'CV'; // not needed anymore

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
  },
  webpack: config => {
    const oneOfRule = config.module.rules.find(rule => rule.oneOf);

    if (oneOfRule) {
      const tsRules = oneOfRule.oneOf.filter(
        rule => rule.test && rule.test.toString().includes('tsx|ts')
      );

      tsRules.forEach(rule => {
        rule.include = undefined;
      });
    }

    return config;
  },
  compress: true,
  generateEtags: true,
  pageExtensions: ['tsx', 'mdx', 'ts'],
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
};

module.exports = nextConfig;
