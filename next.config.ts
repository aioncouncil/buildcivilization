import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/operator", destination: "/operators", permanent: true },
      { source: "/builder", destination: "/cohort", permanent: true },
    ];
  },
};

export default nextConfig;
