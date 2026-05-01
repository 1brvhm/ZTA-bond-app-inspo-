import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/bond.html",
      },
    ];
  },
};

export default nextConfig;
