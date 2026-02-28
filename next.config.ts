import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/KAELIN",
  assetPrefix: "/KAELIN",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
