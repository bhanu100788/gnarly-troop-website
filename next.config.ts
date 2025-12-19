import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  //output: "export", // enables static export
  trailingSlash: true,
  reactStrictMode: true
};

export default nextConfig;
