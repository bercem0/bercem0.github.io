/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Bu çok önemli!
  images: {
    unoptimized: true, // GitHub Pages için şart
  },
};

export default nextConfig;