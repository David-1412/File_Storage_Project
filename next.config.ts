import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Add this
  images: {
    unoptimized: true, // Add this
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "100MB",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "cloud.appwrite.io",
      },
    ],
  },
};

export default nextConfig;
