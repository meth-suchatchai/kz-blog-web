import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: "export",
    distDir: "kuroshibaz.dev",
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
