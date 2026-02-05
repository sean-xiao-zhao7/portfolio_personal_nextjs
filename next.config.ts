import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['/_next/*'],
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'res.cloudinary.com' }],
  },
};

export default nextConfig;
