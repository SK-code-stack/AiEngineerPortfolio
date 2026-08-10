/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable gzip/brotli compression for all responses
  compress: true,

  // Image optimization
  images: {
    // Serve modern WebP format when browser supports it
    formats: ["image/webp"],
    // Match the actual display sizes used in the app
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [32, 64, 96, 128, 256, 400, 460],
    // Minimize re-optimization — cache for 60 seconds in dev, 1 day in prod
    minimumCacheTTL: 86400,
  },

  // Reduce unused JS by allowing more aggressive tree-shaking
  experimental: {
    optimizeCss: false, // keep off to avoid critters dep issues
    optimizePackageImports: ["react", "react-dom"],
  },

  // Strict mode helps catch performance regressions during dev
  reactStrictMode: true,

  // Disable X-Powered-By header (minor security + response size)
  poweredByHeader: false,
};

export default nextConfig;
