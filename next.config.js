/* eslint-env node */

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'CV'; // <-- Replace with your actual repo name

const nextConfig = {
  output: 'export', // <-- enable static export
  assetPrefix: isProd ? `/${repoName}/` : '',
  basePath: isProd ? `/${repoName}` : '',
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
  images: {
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
};

module.exports = {
  output: 'export',
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
};

