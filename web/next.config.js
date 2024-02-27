/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "res.cloudinary.com",
      "user-images.githubusercontent.com",
      "source.unsplash.com",
      "unsplash.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
