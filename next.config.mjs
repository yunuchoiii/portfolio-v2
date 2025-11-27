/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 개발 모드에서 이미지 최적화 비활성화 (빌드 속도 향상)
    unoptimized: process.env.NODE_ENV === 'development',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  // 빌드 시 메모리 제한 증가
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
