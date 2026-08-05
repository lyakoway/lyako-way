import React from "react";

import {
  OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
} from "src/common/constants/site";
import getAnalyticsMarkup from "src/common/utils/getAnalyticsMarkup";

// canonical — абсолютный адрес текущей страницы (передаётся из _app).
const getAppHeadContent = (canonical: string) => (
  <>
    <meta charSet="utf-8" />
    <meta name="author" content="Мазуренко Алексей Анатольевич" />
    <meta
      name="copyright"
      content="Все права принадлежат Мазуренко Алексею Анатольевичу"
    />
    <meta
      name="keywords"
      content="lyakoway, Мазуренко Алексей, AI-инженер, LLM, RAG, портфолио"
    />
    <meta name="description" content={SITE_DESCRIPTION} />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta
      name="msapplication-TileImage"
      content="/static/favicons/ms-icon-70x70.png"
    />
    <meta name="theme-color" content="#ffffff" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    {/* Ранний коннект к API погоды (current/forecast грузятся с клиента) —
        сокращает задержку DNS/TLS-хендшейка при их запросе. */}
    <link
      rel="preconnect"
      href="https://api.weatherapi.com"
      crossOrigin="anonymous"
    />
    <link rel="dns-prefetch" href="https://api.weatherapi.com" />
    <meta name="theme-color" content="#000000" />

    {/* Канонический адрес: без него поисковик считает страницу с параметрами
        (?utm_source и т.п.) отдельной и делит между ними вес. */}
    <link rel="canonical" href={canonical} />

    {/* Open Graph / Twitter — превью ссылки в мессенджерах и соцсетях. */}
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={SITE_NAME} />
    <meta property="og:locale" content="ru_RU" />
    <meta property="og:title" content={SITE_TITLE} />
    <meta property="og:description" content={SITE_DESCRIPTION} />
    <meta property="og:url" content={canonical} />
    <meta property="og:image" content={OG_IMAGE} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content={SITE_TITLE} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={SITE_TITLE} />
    <meta name="twitter:description" content={SITE_DESCRIPTION} />
    <meta name="twitter:image" content={OG_IMAGE} />

    {/* Аналитика: Яндекс.Метрика и Google Analytics 4. */}
    {getAnalyticsMarkup()}

    {/* Poppins подключается через next/font (self-hosted) в pages/_app.tsx —
        отдельный <link> Google Fonts больше не нужен (убирает FOUT и варн
        no-stylesheets-in-head-component). */}
    {/* Знак lyakoway (круг с искрой): SVG для современных браузеров, .ico и
        PNG — как фолбэк для старых и для плиток/ярлыков. */}
    <link
      rel="icon"
      type="image/svg+xml"
      href="/static/favicons/favicon.svg"
    />
    <link rel="icon" href="/static/favicons/favicon.ico" sizes="any" />
    <link
      rel="apple-touch-icon"
      sizes="57x57"
      href="/static/favicons/apple-icon-57x57.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="36x36"
      href="/static/favicons/android-icon-36x36.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/static/favicons/favicon-32x32.png"
    />
    <link rel="manifest" href="/static/favicons/manifest.json" />
  </>
);

export default getAppHeadContent;
