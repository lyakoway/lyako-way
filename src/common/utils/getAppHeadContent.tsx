import React from "react";

const getAppHeadContent = () => (
  <>
    <meta charSet="utf-8" />
    <meta name="author" content="Мазуренко Алексей Анатольевич" />
    <meta
      name="copyright"
      content="Все права принадлежат Мазуренко Алексею Анатольевичу"
    />
    <meta name="keywords" content="lakoway, портфолио, Мазуренко" />
    <meta name="description" content="Сайт портфолио, lakoway" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta
      name="msapplication-TileImage"
      content="/static/favicons/ms-icon-70x70.png"
    />
    <meta name="theme-color" content="#ffffff" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    {/*<link*/}
    {/*  href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"*/}
    {/*  rel="stylesheet"*/}
    {/*/>*/}
    <link rel="icon" href="/static/favicons/favicon.ico" />
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
