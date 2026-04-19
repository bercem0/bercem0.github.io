import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Statik site olarak çıktı almanı sağlar (GitHub Pages için şart)
  images: {
    unoptimized: true, // GitHub Pages görsel optimizasyonunu desteklemediği için şart
  },
  reactCompiler: true, // Mevcut ayarın kalsın
};

export default nextConfig;