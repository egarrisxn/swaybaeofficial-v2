import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.microlink.io",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "i.scdn.co",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
      },
      {
        protocol: "https",
        hostname: "abs.twimg.com",
      },
    ],
  },
  experimental: {
    globalNotFound: true,
    //   turbopackFileSystemCacheForDev: true,
    //   taint: true,
  },
  // turbopack: {
  //   rules: {
  //     "*.svg": {
  //       loaders: ["@svgr/webpack"],
  //       as: "*.js",
  //     },
  //   },
  // },
};

export default nextConfig;
