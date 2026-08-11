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
    // Allow images from Supabase S3 storage and Django local server
    remotePatterns: [
      {
        // Supabase S3 storage bucket — used for profile photo, avatar, and resume
        protocol: "https",
        hostname: "pyejhmvgelmrolhbuedv.supabase.co",
        pathname: "/**",
      },
      {
        // Django local dev server media files (fallback)
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/**",
      },
      {
        // Django localhost alias
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/**",
      },
    ],
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
