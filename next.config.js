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

  // Иконки лежат в /static/favicons, но роботы поисковиков (в первую очередь
  // YandexFavicons) запрашивают их по корневым путям и на 404 берут иконку из
  // своего кэша. Отдаём те же файлы с корня — без дублей в репозитории.
  async rewrites() {
    return [
      { source: "/favicon.ico", destination: "/static/favicons/favicon.ico" },
      { source: "/favicon.svg", destination: "/static/favicons/favicon.svg" },
      {
        source: "/apple-touch-icon.png",
        destination: "/static/favicons/apple-icon.png",
      },
      {
        source: "/apple-touch-icon-precomposed.png",
        destination: "/static/favicons/apple-icon-precomposed.png",
      },
    ];
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
