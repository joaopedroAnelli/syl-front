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
      {
        hostname: 'legendary-festival-bf97c4341c.media.strapiapp.com',
        protocol: 'https',
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
