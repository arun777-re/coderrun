import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode:true,
  images:{
    formats:["image/avif",'image/webp']
  },
  experimental:{
    optimizeCss:true,
    optimizePackageImports:["framer-motion","react-icons"]
  },
  compiler:{
    removeConsole:process.env.NODE_ENV === "production"
  }
};

export default nextConfig;
