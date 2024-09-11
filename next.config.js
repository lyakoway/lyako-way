module.exports = {
  images: {
    domains: ["images.vexels.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.tsx?$/,
      use: ["@svgr/webpack", "url-loader"],
    });

    return config;
  },
  // pageExtensions: ["page.tsx", "page.js"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // TODO: выключить этот флаг, когда будут исправлены все ошибки
    ignoreBuildErrors: true,
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};
