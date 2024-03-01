/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
        protocol: "http",
      },
      {
        hostname: "res.cloudinary.com",
        protocol: "https",
      },
      {
        hostname: "user-images.githubusercontent.com",
        protocol: "https",
      },
      {
        hostname: "source.unsplash.com",
        protocol: "https",
      },
      {
        hostname: "unsplash.com",
        protocol: "https",
      },
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
