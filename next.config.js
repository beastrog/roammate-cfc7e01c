/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'], // Add other domains as needed
  },
  // Enable static exports for SPA-like behavior
  output: 'export',
  // Optional: Change the output directory `out` -> `dist`
  distDir: 'dist',
  // Disable the static image optimization API
  images: {
    unoptimized: true,
  },
  // Handle client-side routing for SPAs
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/',
      },
    ];
  },
};

module.exports = nextConfig;
