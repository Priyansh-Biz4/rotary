/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com'], // Correct domain
    formats: ['image/avif', 'image/webp'], // Optional: Support for modern formats for better quality
    minimumCacheTTL: 60, // Optional: Cache settings
  },
};

export default nextConfig;
