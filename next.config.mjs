/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/sveltekit' : '',
  output: 'export', // <=== enables static exports
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
