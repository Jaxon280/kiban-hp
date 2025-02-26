/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  // Disable Turbopack to force using Webpack bindings for React Server Components
  experimental: {
    turbo: false,
  },
};

module.exports = nextConfig;
