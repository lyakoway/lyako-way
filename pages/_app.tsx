import React, { FC, useEffect } from "react";
import Head from "next/head";

import { Provider } from "react-redux";

import { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";

import { useDispatchTyped, useSelectorTyped, wrapper } from "src/store";
import getAppHeadContent from "src/common/utils/getAppHeadContent";
import GlobalStyles from "src/common/lib/globalStyles";
import { setThemeList } from "src/reducers";
import { useDayTime } from "src/features/customHooks";
import { Modal } from "src/ui/Modal";
import { Toast } from "src/ui/Toast";

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
      <main>
        <Component {...pageProps} />
      </main>
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
