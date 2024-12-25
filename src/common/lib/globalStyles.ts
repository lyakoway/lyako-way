import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  ${normalize}
  :root {
    --color-constant-greyscale-0: #ffffff;
    --color-constant-greyscale-100: #f2f3f7;
    --color-constant-greyscale-200: #e2e5eb;
    --color-constant-greyscale-300: #bbc1c7;
    --color-constant-greyscale-400: #969fa8;
    --color-constant-greyscale-500: #626c77;
    --color-constant-greyscale-600: #434a51;
    --color-constant-greyscale-700: #2c3135;
    --color-constant-greyscale-800: #1d2023;
    --color-constant-greyscale-900: #000000;
    --color-constant-blackberry-lightest: #e7eafa;
    --color-constant-blackberry-light: #6384e0;
    --color-constant-blackberry-normal: #014fce;
    --color-constant-blackberry-dark: #003db7;
    --color-constant-blackberry-darkest: #002094;
    --color-constant-blueberry-lightest: #e1f3fe;
    --color-constant-blueberry-light: #45b6fc;
    --color-constant-blueberry-normal: #0097fd;
    --color-constant-blueberry-dark: #007cff;
    --color-constant-blueberry-darkest: #0048aa;
    --color-constant-mint-lightest: #dff9f5;
    --color-constant-mint-light: #00d9bc;
    --color-constant-mint-normal: #00c19b;
    --color-constant-mint-dark: #03a17b;
    --color-constant-mint-darkest: #00724d;
    --color-constant-apple-lightest: #e8faeb;
    --color-constant-apple-light: #74df8b;
    --color-constant-apple-normal: #26cd58;
    --color-constant-apple-dark: #04aa42;
    --color-constant-apple-darkest: #027722;
    --color-constant-lime-lightest: #f8fee7;
    --color-constant-lime-light: #d3f36b;
    --color-constant-lime-normal: #c1eb1d;
    --color-constant-lime-dark: #a6c100;
    --color-constant-lime-darkest: #808201;
    --color-constant-banana-lightest: #fffde8;
    --color-constant-banana-light: #fdf177;
    --color-constant-banana-normal: #fbe739;
    --color-constant-banana-dark: #fac031;
    --color-constant-banana-darkest: #f37f19;
    --color-constant-orange-lightest: #fbe9e7;
    --color-constant-orange-light: #ffa080;
    --color-constant-orange-normal: #f95721;
    --color-constant-orange-dark: #e04a17;
    --color-constant-orange-darkest: #ba360a;
    --color-constant-raspberry-lightest: #ffe4e9;
    --color-constant-raspberry-light: #f55f7e;
    --color-constant-raspberry-normal: #ea1f49;
    --color-constant-raspberry-dark: #c51345;
    --color-constant-raspberry-darkest: #8e003f;
    --color-constant-cranberry-lightest: #f9e7f0;
    --color-constant-cranberry-light: #e677ad;
    --color-constant-cranberry-normal: #e54887;
    --color-constant-cranberry-dark: #bb4079;
    --color-constant-cranberry-darkest: #7f3363;
    --color-constant-plum-lightest: #f0e7f0;
    --color-constant-plum-light: #a86ea7;
    --color-constant-plum-normal: #883888;
    --color-constant-plum-dark: #6d2d79;
    --color-constant-plum-darkest: #471c61;
    --font-weight-ultra: 1000;
    --font-weight-black: 900;
    --font-weight-bold: 700;
    --font-weight-medium: 500;
    --font-weight-regular: 400;
    --font-family-base: sans-serif;
    --grid-m-breakpoint: 0;
    --grid-m-columns: 2;
    --grid-m-gutter: 12px;
    --grid-m-margin: 20px;
    --grid-t-breakpoint: 768px;
    --grid-t-columns: 8;
    --grid-t-gutter: 32px;
    --grid-t-margin: 32px;
    --grid-dxs-breakpoint: 960px;
    --grid-dxs-columns: 12;
    --grid-dxs-gutter: 32px;
    --grid-dxs-margin: 40px;
    --grid-ds-breakpoint: 1280px;
    --grid-ds-max-width: 1168px;
    --grid-ds-columns: 12;
    --grid-ds-gutter: 32px;
    --grid-ds-margin: 32px;
    --grid-dm-breakpoint: 1440px;
    --grid-dm-max-width: 1264px;
    --grid-dm-columns: 12;
    --grid-dm-gutter: 32px;
    --grid-dm-margin: 40px;
    --grid-dl-breakpoint: 1680px;
    --grid-dl-max-width: 1360px;
    --grid-dl-columns: 12;
    --grid-dl-gutter: 32px;
    --grid-dl-margin: 40px;
    --grid-dxl-breakpoint: 1920px;
    --grid-dxl-max-width: 1552px;
    --grid-dxl-columns: 12;
    --grid-dxl-gutter: 32px;
    --grid-dxl-margin: 40px;
    --shadow-lowest: 0 0 6px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.08); /* Используется для нажатых карточек на мобильных устройствах */
    --shadow-low: 0 0 16px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.08); /* Используется для карточек, шапок по дефолту. */
    --shadow-middle: 0 4px 24px rgba(0, 0, 0, 0.12), 0 8px 16px rgba(0, 0, 0, 0.08); /* Используется для состояния ховер, шапок при скролле. */
    --shadow-upper-middle: 0 -2px 24px rgba(0, 0, 0, 0.08), 0 -8px 24px rgba(0, 0, 0, 0.1); /* Используется для шторок на мобильных устройствах. */
    --shadow-high: 0 4px 24px rgba(0, 0, 0, 0.12), 0 12px 20px rgba(0, 0, 0, 0.14); /* Используется для дропдаунов, модальных окон и шторок. */
    --size-spacing-2: 2px;
    --size-spacing-4: 4px;
    --size-spacing-8: 8px;
    --size-spacing-12: 12px;
    --size-spacing-16: 16px;
    --size-spacing-24: 24px;
    --size-spacing-32: 32px;
    --size-spacing-40: 40px;
    --size-spacing-48: 48px;
    --size-spacing-64: 64px;
    --size-spacing-80: 80px;
    --typography-promo-font-size: 44px;
    --typography-promo-line-height: 44px;
    --typography-promo-font-weight: 1000;
    --typography-promo-spacing-bottom: 24px;
    --typography-promo-max-width: 2076px;
    --typography-h1-black-font-size: 32px;
    --typography-h1-black-line-height: 36px;
    --typography-h1-black-font-weight: 900;
    --typography-h1-black-spacing-bottom: 24px;
    --typography-h1-black-max-width: 1510px;
    --typography-h1-bold-font-size: 32px;
    --typography-h1-bold-line-height: 36px;
    --typography-h1-bold-font-weight: 700;
    --typography-h1-bold-spacing-bottom: 24px;
    --typography-h1-bold-max-width: 1510px;
    --typography-h2-black-font-size: 24px;
    --typography-h2-black-line-height: 28px;
    --typography-h2-black-font-weight: 900;
    --typography-h2-black-spacing-bottom: 24px;
    --typography-h2-black-max-width: 1132px;
    --typography-h2-bold-font-size: 24px;
    --typography-h2-bold-line-height: 28px;
    --typography-h2-bold-font-weight: 700;
    --typography-h2-bold-spacing-bottom: 24px;
    --typography-h2-bold-max-width: 1132px;
    --typography-h2-medium-font-size: 24px;
    --typography-h2-medium-line-height: 28px;
    --typography-h2-medium-font-weight: 500;
    --typography-h2-medium-spacing-bottom: 24px;
    --typography-h2-medium-max-width: 1132px;
    --typography-h3-bold-font-size: 20px;
    --typography-h3-bold-line-height: 24px;
    --typography-h3-bold-font-weight: 700;
    --typography-h3-bold-spacing-bottom: 16px;
    --typography-h3-bold-max-width: 944px;
    --typography-h3-medium-font-size: 20px;
    --typography-h3-medium-line-height: 24px;
    --typography-h3-medium-font-weight: 500;
    --typography-h3-medium-spacing-bottom: 16px;
    --typography-h3-medium-max-width: 944px;
    --typography-h3-regular-font-size: 20px;
    --typography-h3-regular-line-height: 28px;
    --typography-h3-regular-font-weight: 400;
    --typography-h3-regular-spacing-bottom: 16px;
    --typography-h3-regular-max-width: 944px;
    --typography-h4-compact-font-size: 19px;
    --typography-h4-compact-line-height: 22px;
    --typography-h4-compact-font-weight: 500;
    --typography-p1-bold-font-size: 17px;
    --typography-p1-bold-line-height: 24px;
    --typography-p1-bold-font-weight: 700;
    --typography-p1-bold-spacing-bottom: 16px;
    --typography-p1-bold-max-width: 680px;
    --typography-p1-medium-font-size: 17px;
    --typography-p1-medium-line-height: 24px;
    --typography-p1-medium-font-weight: 500;
    --typography-p1-medium-spacing-bottom: 16px;
    --typography-p1-medium-max-width: 680px;
    --typography-p1-regular-font-size: 16px;
    --typography-p1-regular-line-height: 24px;
    --typography-p1-regular-font-weight: 400;
    --typography-p1-regular-spacing-bottom: 16px;
    --typography-p1-regular-max-width: 680px;
    --typography-p2-premium-font-size: 15px;
    --typography-p2-premium-line-height: 18px;
    --typography-p2-premium-font-weight: 500;
    --typography-p2-bold-font-size: 14px;
    --typography-p2-bold-line-height: 20px;
    --typography-p2-bold-font-weight: 700;
    --typography-p2-bold-spacing-bottom: 12px;
    --typography-p2-bold-max-width: 560px;
    --typography-p2-medium-font-size: 14px;
    --typography-p2-medium-line-height: 20px;
    --typography-p2-medium-font-weight: 500;
    --typography-p2-medium-spacing-bottom: 12px;
    --typography-p2-medium-max-width: 560px;
    --typography-p2-regular-font-size: 14px;
    --typography-p2-regular-line-height: 20px;
    --typography-p2-regular-font-weight: 400;
    --typography-p2-regular-spacing-bottom: 12px;
    --typography-p2-regular-max-width: 560px;
    --typography-p3-bold-font-size: 12px;
    --typography-p3-bold-line-height: 16px;
    --typography-p3-bold-font-weight: 700;
    --typography-p3-bold-spacing-bottom: 8px;
    --typography-p3-bold-max-width: 480px;
    --typography-p3-medium-font-size: 12px;
    --typography-p3-medium-line-height: 16px;
    --typography-p3-medium-font-weight: 500;
    --typography-p3-medium-spacing-bottom: 8px;
    --typography-p3-medium-max-width: 480px;
    --typography-p3-regular-font-size: 12px;
    --typography-p3-regular-line-height: 16px;
    --typography-p3-regular-font-weight: 400;
    --typography-p3-regular-spacing-bottom: 8px;
    --typography-p3-regular-max-width: 480px;
  }

  html.light-theme {
    --color-brand: #FF0032; /* Цвет логотипа */
    --color-premium-brand: #8B75FF; /* Цвет текста премиум */
    --color-accent-active: #007cff; /* Используется для иконок и состояния фокуса */
    --color-accent-positive: #26cd58; /* Цвет успешных действий. Используется для иконок */
    --color-accent-warning: #fac031; /* Цвет предупреждения. Используется для иконок */
    --color-accent-negative: #f95721; /* Цвет ошибки. Используется для иконок и состояния ошибки */
    --color-text-active: #ffffff; /* Цвет для активного пункта навигации */
    --color-text-headline: #000000; /* Цвет заголовка */
    --color-text-primary: #1d2023; /* Основной текст */
    --color-text-secondary: #626c77; /* Цвет дополнительного текста */
    --color-text-tertiary: #969fa8; /* Цвет масок */
    --color-text-inverted: #ffffff; /* Текст для тултипа, тоста и снэкбара */
    --color-text-positive: #12b23f; /* Цвет успешных действий */
    --color-text-negative: #D8400C; /* Цвет текста ошибки и негативных действий */
    --color-text-primary-link: #007cff; /* Цвет ссылок */
    --color-text-primary-link-hover: #007cff; /* Цвет ссылок и бордера при наведении */
    --color-text-primary-link-visited: #3396ff; /* Цвет visited ссылок и бордера */
    --color-text-secondary-link: #969fa8; /* Цвет второстепенных ссылок */
    --color-text-secondary-link-hover: #bbc1c7; /* Цвет второстепенных ссылок и бордера при наведении */
    --color-inactive-element-border: #bbc1c7;
    --color-codefield-caret: #1d2023; /* Цвет каретки поля ввода кода */
    --color-text-secondary-link-visited: #abb2b9; /* Цвет второстепенных visited ссылок и бордера */
    --color-background-primary: #ffffff; /* Основной фон темы */
    --color-background-stroke: rgba(188, 195, 208, 0.5); /* Сепараторы и обводки 2px поверх Primary Background */
    --color-background-primary-elevated: #ffffff; /* Первый уровень над фоном, например карточки */
    --color-background-secondary: #f2f3f7; /* Второстепенный фон темы */
    --color-background-secondary-elevated: #ffffff; /* Первый уровень над Secondary Background, например карточки */
    --color-background-modal-overlay: rgba(0, 0, 0, 0.5);
    --color-background-modal: #ffffff; /* Второй уровень над фоном, например модалки */
    --color-background-inverted: #1d2023; /* Фон тултипа, тоста и снэкбара */
    --color-background-icons: #f2f3f7; /* Цвет для бэкграунда иконок, при изменений темы */
    --color-background-overlay: rgba(29, 32, 35, 0.4); /* Цвет затемнения фона */
    --color-background-banner-overlay: rgba(29, 32, 35, 0.6); /* Цвет затемнения части экрана */
    --color-background-hover: rgba(188, 195, 208, 0.25); /* Ховер */
    --color-background-section: #f2f3f7; /* Цвет для секций */ /* Заменить на новый цвет как в section-new*/
    --color-background-section-new: rgba(255, 255, 255, 1); /* Цвет для отдельных секций */
    --color-background-premium: linear-gradient(48deg, #9bd5ff 6.25%, #9b93ff 44.27%, #9a8dff 58.33%, #7c86fe 84.9%); /* Цвет секций Премиума */
    --color-background-premium-setion: #ffffff; /* Цвет фона для секций премиума и джуниора */
    --color-background-banner: linear-gradient(104.15deg, rgba(255, 109, 100, 0.2) 2.22%, rgba(255, 0, 45, 0.2) 94.4%); /* Цвет для баннера с ГУ */
    --color-background-banners: radial-gradient(100% 962.15% at 0% 7.87%, rgba(0, 151, 253, 0.1) 0%, rgba(38, 205, 88, 0.1) 100%); /* Цвет для баннеров */
    --color-background-body: rgba(242, 243, 247, 1); /* Цвет для body главной страницы */
    --color-background-hover-inverted: rgba(242, 243, 247, 0.2); /* Ховер кнопки снэкбара */
    --color-background-navbar-ios: rgba(255, 255, 255, 0.92); /* Только для iOS. Фон для навбара и таббара. Использовать совместно с Background Blur */
    --color-background-success: rgba(65, 178, 90, 0.10);
    --color-background-border: #BCC3D080; /* Цвет бордера для блоков внутри секции */
    --color-border-primary: #000000; /* Цвет бордера для баннеров */
    --color-control-primary-active: #FF0032; /* Основной цвет контролов */
    --color-control-secondary-active: #1d2023; /* Выбранный, активный второстепенный контрол */
    --color-control-tertiary-active: #f2f3f7; /* Цвет второстепенной кнопки */
    --color-control-inactive: rgba(188, 195, 208, 0.5); /* Невыбранный контрол, выключенный Switch, предвыбранные Radio и Checkbox */
    --color-control-alternative: #ffffff; /* Цвет фона дефолтного состояния у Radio и Checkbox, Secondary Inverted Button */
    --color-control-alternative-stroke-hover: #ced4dc; /* Цвет обводки Radio и Checkbox при наведении */
    --color-control-active-tab-bar: #FF0032; /* Активный пункт в таббаре */
    --color-control-inactive-tab-bar: #aeb5bd; /* Неактивный пункт в таббаре. */
    --color-icon-primary: #000000; /* Цвет иконок в навбаре и второстепенных кнопках */
    --color-icon-secondary: #969fab; /* Цвет интерактивных иконок */
    --color-icon-tertiary: #bbc1c7; /* Цвет декоративных иконок */
    --blend-hover: multiply; /* Режим смешивания ховера с фоном */
    --blend-hover-inverted: normal; /* Режим смешивания ховера с фоном кнопки снэкбара */
    --primary-control-hover-color: #d4312c; /* Цвет при наведении основного контрола */
    --alternative-control-hover-color: #eef0f3; /* Цвет при наведении второстепенного контрола */
    --tertiary-control-hover-color: #e2e5ec; /* Цвет при наведении второстепенного контрола */
    --color-spinner-inverted: #ffffff;
    --color-mask-placeholder: var(--color-text-tertiary);
    --color-accardion: rgba(0, 0, 0, 0.08);
    --color-border: #f1f3f4;
  }

  html.dark-theme {
    --color-brand: #FF0032; /* Цвет логотипа */
    --color-premium-brand: #8B75FF; /* Цвет текста премиум */
    --color-accent-active: #45b6fc; /* Используется для иконок и состояния фокуса */
    --color-accent-positive: #74df8b; /* Цвет успешных действий. Используется для иконок */
    --color-accent-warning: #fad67d; /* Цвет предупреждения. Используется для иконок */
    --color-accent-negative: #fa8a64; /* Цвет ошибки. Используется для иконок и состояния ошибки */
    --color-text-active: #ffffff; /* Цвет для активного пункта навигации */
    --color-text-headline: #ffffff; /* Цвет заголовка */
    --color-text-primary: #fafafa; /* Основной текст */
    --color-text-secondary: #969fa8; /* Цвет дополнительного текста */
    --color-text-tertiary: #626c77; /* Цвет масок */
    --color-text-inverted: #000000; /* Текст для тултипа, тоста и снэкбара. */
    --color-text-positive: #74df8b; /* Цвет успешных действий */
    --color-text-negative: #ffa080; /* Цвет текста ошибки и негативных действий */
    --color-text-primary-link: #45b6fc; /* Цвет ссылок */
    --color-text-primary-link-hover: #45b6fc; /* Цвет ссылок и бордера при наведении */
    --color-text-primary-link-visited: #0063cc; /* Цвет visited ссылок и бордера */
    --color-text-secondary-link: #626c77; /* Цвет второстепенных ссылок */
    --color-text-secondary-link-hover: #626c77; /* Цвет второстепенных ссылок и бордера при наведении */
    --color-inactive-element-border: #626C77;
    --color-codefield-caret: #fafafa; /* Цвет каретки поля ввода кода */
    --color-text-secondary-link-visited: #787f86; /* Цвет второстепенных visited ссылок и бордера */
    --color-background-premium: linear-gradient(to right, rgba(155, 213, 255, 1), rgba(155, 147, 255, 1), rgba(154, 141, 255, 1), rgba(124, 134, 254, 1)); /* Цвет секций Премиума */
    --color-background-premium-section: #7F8C99, 50%; /* Цвет фона для секции премиума и джуниора */
    --color-background-primary: #000000; /* Основной фон темы */
    --color-background-section: rgba(98, 108, 119, 0.35); /* Цвет для секций */
    --color-background-section-new: rgba(98, 108, 119, 0.25); /* Цвет для отдельных секций */
    --color-background-banner: linear-gradient(104.15deg,rgba(255,109,100,0.4) 2.22%,rgba(255,0,45,0.3) 94.4%);  /* Цвет для баннера с ГУ */
    --color-background-banners: radial-gradient(100% 962.15% at 0% 7.87%, rgba(0, 151, 253, 0.2) 0%, rgba(38, 205, 88, 0.2) 100%); /* Цвет для баннеров */
    --color-background-body: #000000 /* Цвет для body главной страницы */
    --color-background-stroke: rgba(127, 140, 153, 0.35); /* Сепараторы и обводки 2px поверх Primary Background */
    --color-background-primary-elevated: #1d2023; /* Первый уровень над фоном, например карточки */
    --color-background-secondary: rgba(98, 108, 119, 0.25); /* Второстепенный фон темы */
    --color-background-secondary-elevated: rgba(98, 108, 119, 0.25); /* Первый уровень над Secondary Background, например карточки */
    --color-background-modal-overlay: rgba(0, 0, 0, 0.5);
    --color-background-modal: #2c3135; /* Второй уровень над фоном, например модалки */
    --color-background-inverted: #ffffff; /* Фон тултипа, тоста и снэкбара */
    --color-background-icons:  rgba(98, 108, 119, 0.25); /* Цвет для бэкграунда иконок, при изменений темы */
    --color-background-overlay: rgba(29, 32, 35, 0.6); /* Цвет затемнения фона */
    --color-background-banner-overlay: rgba(29, 32, 35, 0.9); /* Цвет затемнения части экрана */
    --color-background-hover: rgba(242, 243, 247, 0.2); /* Ховер */
    --color-background-hover-inverted: rgba(188, 195, 208, 0.25); /* Ховер кнопки снэкбара */
    --color-background-navbar-ios: rgba(0, 0, 0, 0.92); /* Только для iOS. Фон для навбара и таббара. Использовать совместно с Background Blur */
    --color-background-success: rgba(65, 178, 90, 0.10);
    --color-background-border: #595c6280; /* Цвет бордера для блоков внутри секции */
    --color-border-primary: #ffffff; /* Цвет бордера для баннеров */
    --color-control-primary-active: #FA6464; /* Основной цвет контролов */
    --color-control-secondary-active: #ffffff; /* Выбранный, активный второстепенный контрол */
    --color-control-tertiary-active: rgba(127, 140, 153, 0.35); /* Цвет второстепенной кнопки */
    --color-control-inactive: rgba(127, 140, 153, 0.35); /* Невыбранный контрол, выключенный Switch, предвыбранные Radio и Checkbox */
    --color-control-alternative: rgba(127, 140, 153, 0.35); /* Цвет фона дефолтного состояния у Radio и Checkbox, Secondary Inverted Button */
    --color-control-alternative-stroke-hover: #6a7278; /* Цвет обводки Radio и Checkbox при наведении */
    --color-control-active-tab-bar: #ffffff; /* Активный пункт в таббаре */
    --color-control-inactive-tab-bar: #58616b; /* Неактивный пункт в таббаре. */
    --color-icon-primary: #ffffff; /* Цвет иконок в навбаре и второстепенных кнопках */
    --color-icon-secondary: #969fa8; /* Цвет интерактивных иконок */
    --color-icon-tertiary: #626c77; /* Цвет декоративных иконок */
    --blend-hover: normal; /* Режим смешивания ховера с фоном */
    --blend-hover-inverted: multiply; /* Режим смешивания ховера с фоном кнопки снэкбара */
    --primary-control-hover-color: #FF0032; /* Цвет при наведении основного контрола */
    --alternative-control-hover-color: #54585c; /* Цвет при наведении второстепенного контрола */
    --tertiary-control-hover-color: #54585c; /* Цвет при наведении второстепенного контрола */
    --color-spinner-inverted: #000000;
    --color-mask-placeholder: var(--color-text-primary);
    --icon-color-visa: #fff;
    --color-accardion: rgba(187, 193, 199, 0.25);
    --color-border: #f1f3f4;
  }


  html, body {
    margin: 0;
    padding: 0;
    background-color: var(--color-background-primary);
    font-family: var(--font-family-base), sans-serif;
    font-size: 16px;
    color: var(--color-text-primary);
    -webkit-text-size-adjust: none;
    overflow-x: clip;
  }

  p {
    font-size: var(--typography-p1-regular-font-size);
    line-height: var(--typography-p1-regular-line-height);
    margin: 0;
  }

  input, textarea {
    caret-color: currentColor;
    -webkit-transform: translate3d(0, 0, 0);
    -webkit-appearance: none;
    z-index: 0;

    &::-ms-reveal {
      display: none;
    }

    &::-ms-clear {
      display: none;
    }
  }

  input,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-textfield-decoration-container,
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  button {
    outline: none !important;
  }

  .gaPixel {
    position: absolute;
    left: -9999px;
    z-index: -1;
  }

  .react-pdf__Document {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99999;

    padding-top: var(--size-spacing-40);
    padding-bottom: var(--size-spacing-40);

    background: var(--color-background-overlay);
    backdrop-filter: blur(12px);

    overflow-y: auto;

    scrollbar-color: transparent;
    scrollbar-width: thin;

    &::-webkit-scrollbar {
      background-color: transparent;
      width: 0;
      height: 0;
    }

    &::-webkit-scrollbar-button {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
  }

  .react-pdf__Page__canvas {
    margin: 0 auto;
  }

  /* Основная ширина полосы прокрутки. */
  body::-webkit-scrollbar {
    width: 16px;
    -webkit-appearance: none;
  }

  /* Цвет дорожки, по которой двигается бегунок прокрутки. */
  body::-webkit-scrollbar-track {
    background: #2b3037;
    background-clip: content-box;
    /* opacity: 0;
    background-color: transparent; */
  }

  /* Размер и цвет бегунка. */
  body::-webkit-scrollbar-thumb {
    background: #ff8560;
    border: 6px solid #2b3037;
    border-radius: 10px;
  }
  /* Размер бегунка при наведении на него курсора. */
  body::-webkit-scrollbar-thumb:hover {
    border: 4px solid #ffff;
  }

`;

export default GlobalStyles;
