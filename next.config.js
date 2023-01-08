const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = {
  ...nextConfig,
  webpack: (config) => {
    config.resolve.alias['~'] = path.resolve(__dirname);
    return config;
  }
};
