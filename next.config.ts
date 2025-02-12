import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/todo-app-nextjs',
  // assetPrefix: '/todo-app-nextjs/',
  trailingSlash: true,  
  output: 'export',
};

export default nextConfig;