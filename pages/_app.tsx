import React, { FC, useEffect, useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Poppins } from "next/font/google";

import { Provider } from "react-redux";

import { AppProps, default as NextApp } from "next/app";

import { ThemeProvider } from "styled-components";
import styled from "styled-components";

// Self-hosted Poppins через next/font: без FOUT и без скачка раскладки —
// Next добавляет метрически-подогнанный фолбэк (size-adjust). Poppins —
// латиница; кириллица берётся из системного sans-serif (как и раньше).
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

import { useDispatchTyped, useSelectorTyped, wrapper } from "src/store";
import getAppHeadContent from "src/common/utils/getAppHeadContent";
import { trackPageView } from "src/common/utils/trackAnalytics";
import { SITE_TITLE, SITE_URL } from "src/common/constants/site";
import GlobalStyles from "src/common/lib/globalStyles";
import {
  setLang,
  setUserSelectedLang,
  setThemeList,
  setCityVerdictPending,
  computeDayTime,
  prefersDarkScheme,
} from "src/reducers";
import type { Weather } from "src/common/types/climat";
import { parseLangCookie, isRuBrowserHint } from "src/common/utils/langStorage";
import { getStoredTheme, setStoredTheme } from "src/common/utils/themeStorage";
import { isDayAt } from "src/features/customHooks/useDayTime";
import { useDayTime, useIsomorphicLayoutEffect } from "src/features/customHooks";
import { Modal } from "src/ui/Modal";
import { Toast } from "src/ui/Toast";
import ErrorBoundary from "src/ui/ErrorBoundary";
import Layout from "src/widgets/Layout";

// Фон всего приложения темнее, чем карточки-разделы (сланцевый цвет карточек
// остаётся у самих разделов). Тема-зависимый.
const AppShell = styled.main`
  display: flow-root; /* не даём margin детей "протекать" наверх */
  min-height: 100vh;
  /* Фон через CSS-переменную (см. globalStyles + data-theme): на медленной сети
     фон сразу в правильной теме, без вспышки «светлая→тёмная» до загрузки JS. */
  background: var(--app-bg);
`;

// Внутренний компонент рендерится ВНУТРИ <Provider>, поэтому здесь
// доступны redux-хуки (useSelectorTyped/useDispatchTyped).
const AppContent: FC<{
  Component: AppProps["Component"];
  pageProps: AppProps["pageProps"];
}> = ({ Component, pageProps }) => {
  const { theme } = useSelectorTyped(({ theme }) => theme);
  const { cityVerdictPending } = useSelectorTyped(
    ({ theme }) => theme
  );
  const { weather } = useSelectorTyped(({ climate }) => climate);
  const dispatch = useDispatchTyped();
  const { dayTime, boundaryTick } = useDayTime();


  // Тема ДО paint: системная настройка задаёт её только при первой загрузке;
  // дальше правят ручной тумблер (localStorage) и день/ночь выбранного
  // города (явные действия и смена времени суток — эффекты ниже).
  useIsomorphicLayoutEffect(() => {
    const stored = getStoredTheme();
    if (stored !== null) dispatch(setThemeList(stored));
    else if (prefersDarkScheme()) dispatch(setThemeList(false));
    else dispatch(setThemeList(computeDayTime()));
  }, [dispatch]);

  // Держим html[data-theme] в синхроне с redux-темой: инлайн-скрипт в <head>
  // ставит атрибут ДО первой отрисовки (правильный фон без вспышки), а здесь
  // обновляем его при переключении темы (день/ночь, ручной тумблер), чтобы
  // CSS-фоны следовали за темой.
  useIsomorphicLayoutEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme.name === "light" ? "light" : "dark"
    );
  }, [theme.name]);

  // Время суток — выше ручного выбора: тема всегда следует за днём/ночью
  // показанного города (для демонстрации учёта времени суток). Ручной
  // тумблер — временный override до очередного вердикта. Первый прогон
  // пропускаем — начальный dayTime из useDayTime ещё не посчитан
  // (true по умолчанию), реальное значение применит инициализация.
  const autoFollowFirstRef = useRef(true);
  useEffect(() => {
    if (autoFollowFirstRef.current) {
      autoFollowFirstRef.current = false;
      return;
    }
    dispatch(setThemeList(dayTime));
    setStoredTheme(dayTime);
  }, [dayTime, dispatch]);

  // Вердикт нового города (явные действия: поиск, Enter, дропдаун, кнопка
  // геолокации) перекрывает ручной выбор. Ждём погоду НОВОГО города (объект
  // weather сменился после арма) и считаем день/ночь напрямую по её координатам
  // и таймзоне — применение не зависит от того, изменился ли dayTime хука
  // (иначе вердикт «день → светлая» терялся, когда прежний город тоже днём).
  const armedWeatherRef = useRef<Weather | null>(null);
  const armedRef = useRef(false);
  useEffect(() => {
    // Первый прогон с pending — снапшот текущей (старой) погоды.
    if (cityVerdictPending && !armedRef.current) {
      armedWeatherRef.current = weather;
      armedRef.current = true;
      return;
    }
    // Пришла погода НОВОГО города (объект сменился после арма) — применяем
    // вердикт дня/ночи по её координатам, поверх ручного выбора и системы.
    if (
      armedRef.current &&
      weather &&
      weather !== armedWeatherRef.current &&
      weather.location
    ) {
      armedRef.current = false;
      dispatch(setCityVerdictPending(false));
      const isDay = isDayAt(
        weather.location.lat,
        weather.location.lon,
        weather.location.tz_id
      );
      dispatch(setThemeList(isDay));
      // Вердикт города становится новым сохранённым состоянием темы:
      // переживает перезагрузку (город тоже сохранён — при следующем заходе
      // день/ночь этого города применится снова).
      setStoredTheme(isDay);
    }
  }, [cityVerdictPending, weather, dispatch]);

  // Реальная смена времени суток (граница восход/закат) — тоже главнее
  // ручного выбора.
  useEffect(() => {
    if (boundaryTick === 0) return;
    dispatch(setThemeList(dayTime));
    setStoredTheme(dayTime);
  }, [boundaryTick, dayTime, dispatch]);

  // Плавный переход цвета при смене темы: на время переключения вешаем класс
  // theme-transition на <html> (см. globalStyles) и снимаем через 3с. Начальную
  // установку предпочтительной темы пропускаем (themeReady включается после
  // монтирования), чтобы не анимировать на загрузке.
  const themeReady = useRef(false);
  useEffect(() => {
    const id = window.setTimeout(() => {
      themeReady.current = true;
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!themeReady.current || typeof document === "undefined") return;
    const el = document.documentElement;
    el.classList.add("theme-transition");
    const id = window.setTimeout(
      () => el.classList.remove("theme-transition"),
      3000
    );
    return () => window.clearTimeout(id);
  }, [theme.name]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppShell className={poppins.variable}>
        <Layout>
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
        </Layout>
      </AppShell>
      <Modal />
      <Toast />
    </ThemeProvider>
  );
};

const MyApp = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  // Канонический адрес страницы: путь без query и хэша (?utm_* и #anchor
  // не должны плодить «разные» страницы в индексе).
  const router = useRouter();
  const { asPath } = router;
  // Слэш у корня сохраняем: тот же вид адреса, что в sitemap.xml.
  const canonical = `${SITE_URL}${asPath.split(/[?#]/)[0]}`;

  // SPA-переходы: первый pageview уже шлёт gtag config / ym init.
  useEffect(() => {
    const onRoute = (url: string) => trackPageView(url);
    router.events.on("routeChangeComplete", onRoute);
    return () => router.events.off("routeChangeComplete", onRoute);
  }, [router.events]);

  return (
    <React.StrictMode>
      <Head>
        <title>{SITE_TITLE}</title>
        {getAppHeadContent(canonical)}
      </Head>
      <Provider store={store}>
        <AppContent Component={Component} pageProps={pageProps} />
      </Provider>
    </React.StrictMode>
  );
};

// Cookie → язык до первого рендера: сохранённый ручной выбор применяется
// на сервере, SSR отдаёт сразу верную версию (без вспышки русской до
// гидрации), а next-redux-wrapper прокидывает язык клиенту через HYDRATE.
// getInitialProps в _app отключает статическую оптимизацию всех страниц —
// для этого сайта это приемлемо: погода, лайки и праздники и так
// загружаются на клиенте.
MyApp.getInitialProps = wrapper.getInitialAppProps(
  (store) => async (appCtx) => {
    const cookieHeader = appCtx.ctx.req?.headers.cookie;
    const storedIsEnglish = parseLangCookie(cookieHeader);
    if (storedIsEnglish !== null) {
      // Ручной выбор — высший приоритет.
      store.dispatch(setLang(storedIsEnglish));
      store.dispatch(setUserSelectedLang(true));
    } else if (isRuBrowserHint(cookieHeader)) {
      // Подсказка с прошлого захода (язык браузера русский): SSR сразу
      // отдаёт русскую версию, без вспышки английского до гидрации.
      store.dispatch(setLang(false));
    }
    return await NextApp.getInitialProps(appCtx);
  }
);

export default MyApp;
