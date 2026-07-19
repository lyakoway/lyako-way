import React, { FC, useEffect } from "react";
import Head from "next/head";
import { Poppins } from "next/font/google";

import { Provider } from "react-redux";

import { AppProps } from "next/app";

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
import GlobalStyles from "src/common/lib/globalStyles";
import { setThemeList } from "src/reducers";
import { useDayTime } from "src/features/customHooks";
import { Modal } from "src/ui/Modal";
import { Toast } from "src/ui/Toast";
import Layout from "src/widgets/Layout";

// Фон всего приложения темнее, чем карточки-разделы (сланцевый цвет карточек
// остаётся у самих разделов). Тема-зависимый.
const AppShell = styled.main`
  display: flow-root; /* не даём margin детей "протекать" наверх */
  min-height: 100vh;
  background: ${({ theme }) => (theme.name === "light" ? "#3f4954" : "#17191d")};
`;

// Внутренний компонент рендерится ВНУТРИ <Provider>, поэтому здесь
// доступны redux-хуки (useSelectorTyped/useDispatchTyped).
const AppContent: FC<{
  Component: AppProps["Component"];
  pageProps: AppProps["pageProps"];
}> = ({ Component, pageProps }) => {
  const { theme } = useSelectorTyped(({ theme }) => theme);
  const dispatch = useDispatchTyped();
  const { dayTime } = useDayTime();

  useEffect(() => {
    dispatch(setThemeList(dayTime));
  }, [dayTime]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppShell className={poppins.variable}>
        <Layout>
          <Component {...pageProps} />
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

  return (
    <React.StrictMode>
      <Head>
        <title>LYAKOWAY</title>
        {getAppHeadContent()}
      </Head>
      <Provider store={store}>
        <AppContent Component={Component} pageProps={pageProps} />
      </Provider>
    </React.StrictMode>
  );
};

export default MyApp;
