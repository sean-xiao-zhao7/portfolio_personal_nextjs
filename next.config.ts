import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    allowedDevOrigins: ["/_next/*"],
    images: {
        remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }],
    },
    cacheComponents: true,
    partialPrefetching: true,
};

export default nextConfig;
