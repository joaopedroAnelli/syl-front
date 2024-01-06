/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'localhost',
        protocol: 'http',
        pathname: '/uploads/**',
        port: '1337',
      },
    ],
  },
};

module.exports = nextConfig;
