/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jobicy.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;