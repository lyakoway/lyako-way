/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Включаем строгий режим React

  images: {
    domains: ["images.vexels.com"], // Разрешённые домены для <Image />
  },

  webpack(config) {
    // Обработка SVG через SVGR и url-loader
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.tsx?$/,
      use: ["@svgr/webpack", "url-loader"],
    });

    return config;
  },

  compiler: {
    styledComponents: true, // SWC-трансформация styled-components
  },

  eslint: {
    ignoreDuringBuilds: false, // Ошибки ESLint блокируют сборку
  },
  typescript: {
    ignoreBuildErrors: false,   // Ошибки TS блокируют сборку
  },
};

module.exports = nextConfig;
