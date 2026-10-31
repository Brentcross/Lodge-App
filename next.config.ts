import type { NextConfig } from "next";

// Set by the GitHub Pages workflow (e.g. "/lodge-app"); empty for local dev.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export", // static HTML so it can be hosted on GitHub Pages
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
