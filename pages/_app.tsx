import React, { FC, useEffect } from "react";
import Head from "next/head";

import { useSelectorTyped } from "src/store";

import { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";

import getAppHeadContent from "src/common/utils/getAppHeadContent";
import GlobalStyles from "src/common/lib/globalStyles";
import { getDayTime } from "src/common/utils";
import { useTime } from "src/features/customHooks/useTime";
import { useDispatchTyped, wrapper } from "src/store";
import { setThemeList } from "src/reducers/theme-slice";

const MyApp: FC = ({ Component, pageProps }: AppProps) => {
  const { theme } = useSelectorTyped(({ theme }) => theme);
  const dispatch = useDispatchTyped();
  useTime();
  const dayTime = getDayTime().dayTime;

  useEffect(() => {
    dispatch(setThemeList(!dayTime));
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
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default wrapper.withRedux(MyApp);
