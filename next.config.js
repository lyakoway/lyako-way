/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Включаем строгий режим React

  compress: true, // gzip-сжатие ответов
  poweredByHeader: false,
  productionBrowserSourceMaps: false,

  images: {
    domains: ["images.vexels.com"], // Разрешённые домены для <Image />
    formats: ["image/avif", "image/webp"],
  },

  webpack(config) {
    // Обработка SVG через SVGR: отдаём как React-компонент (ReactComponent),
    // без инлайна в base64 — это уменьшает размер JS-бандла и TBT.
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.tsx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            exportType: "named",
            namedExport: "ReactComponent",
            svgo: true,
          },
        },
      ],
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
