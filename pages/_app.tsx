import React, { FC } from "react";
import Head from "next/head";

import { observer } from "mobx-react";
import { store } from "src/store";

import { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";

import getAppHeadContent from "src/common/utils/getAppHeadContent";
import GlobalStyles from "src/common/lib/globalStyles";

const MyApp = observer(({ Component, pageProps }: AppProps) => {
  const theme = store.getToggleTheme();
  return (
    <>
      <Head>
        <title>LYAKOWAY</title>
        {getAppHeadContent()}
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
});

export default MyApp;
