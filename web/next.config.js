const { execSync } = require("child_process");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Execute the fetchTranslations script before building the Next.js app
      try {
        console.log("[INFO] Fetching translations...");
        execSync("tsc scripts/fetchTranslations.ts");
        execSync("node scripts/fetchTranslations.js");
        // We make sure the generated translations are accessible to the app
        console.log("[INFO] Translations written successfully!");
      } catch (error) {
        console.error("[ERROR] Failed to fetch translations: ", error);
        process.exit(1);
      }
    }

    return config;
  },
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
      {
        hostname: "flagsapi.com",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
