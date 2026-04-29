import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['10.10.7.47'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fahim5004.naimulhassan.me",
      },
    ],
  },

};

export default nextConfig;
