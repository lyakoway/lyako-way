import React from "react";
import Head from "next/head";

import { observer } from "mobx-react";
import { store } from "@/store";

import { ThemeProvider } from "styled-components";

import getAppHeadContent from "@/common/utils/helpers/getAppHeadContent";
import GlobalStyles from "@/common/constants/globalStyles";

const MyApp = observer(({ Component, pageProps }) => {
  const theme = store.getToggleTheme();
  return (
    <>
      <Head>
        <title>LYAKOWAY</title>
        {getAppHeadContent()}
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
});

export default MyApp;
