import React from "react";

const getAppHeadContent = () => (
  <>
    <meta charSet="utf-8" />
    <meta name="author" content="Мазуренко Алексей Анатольевич" />
    <meta
      name="copyright"
      content="Все права принадлежат Мазуренко Алексею Анатольевичу"
    />
    <meta name="keywords" content="lyakoway, портфолио, Мазуренко, AI-инженер" />
    <meta name="description" content="Сайт портфолио, lyakoway" />
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
    {/* Poppins подключается через next/font (self-hosted) в pages/_app.tsx —
        отдельный <link> Google Fonts больше не нужен (убирает FOUT и варн
        no-stylesheets-in-head-component). */}
    {/*<link*/}
    {/*  href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"*/}
    {/*  rel="stylesheet"*/}
    {/*/>*/}
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
