/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["jobicy.com"], // add the hostname here
  },
};

module.exports = nextConfig;