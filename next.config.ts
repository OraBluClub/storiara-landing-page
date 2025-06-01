import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/visionara-landing-page',
  assetPrefix: '/visionara-landing-page/',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
