import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  devIndicators: false,
};
export default nextConfig;
