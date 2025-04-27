import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production"

const nextConfig: NextConfig = {
  output: isProd ? "export" : undefined,
  assetPrefix: "",
  basePath: ""
};

export default nextConfig;
