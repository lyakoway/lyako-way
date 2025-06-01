import React, { FC, useEffect } from "react";
import Head from "next/head";

import { useDispatchTyped, useSelectorTyped } from "src/store";

import { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";

import getAppHeadContent from "src/common/utils/getAppHeadContent";
import GlobalStyles from "src/common/lib/globalStyles";
import { wrapper } from "src/store";
import { setThemeList } from "src/reducers";
import { useDayTime } from "src/features/customHooks";
import { Modal } from "src/ui/Modal";
import { Toast } from "src/ui/Toast";

const MyApp: FC = ({ Component, pageProps }: AppProps) => {
  const { theme } = useSelectorTyped(({ theme }) => theme);
  const dispatch = useDispatchTyped();
  const { dayTime } = useDayTime();

  useEffect(() => {
    dispatch(setThemeList(dayTime));
  }, [dayTime]);

  return (
    <React.StrictMode>
      <Head>
        <title>LYAKOWAY</title>
        {getAppHeadContent()}
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
        <Modal />
        <Toast />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default wrapper.withRedux(MyApp);
