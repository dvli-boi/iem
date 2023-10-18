/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
const withOptimizedImages = require("next-optimized-images");

module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    minimumCacheTTL: 60,
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.vercel.com",
      },
    ],
  },
};
