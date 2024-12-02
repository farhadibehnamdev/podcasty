import type { NextConfig } from "next";
// eslint-disable-next-line @typescript-eslint/no-require-imports

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xdsqniswbvyacebjropq.supabase.co",
      },
    ],
  },
};

export default nextConfig;
