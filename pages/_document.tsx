import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ru">
        <Head>
          {/* Определяем тему ДО первой отрисовки (localStorage или по времени
              суток) и ставим html[data-theme] — CSS-фоны сразу рисуются в
              правильной теме, без вспышки «светлая→тёмная» на медленной сети.
              В рантайме атрибут синхронизируется с redux-темой (см. _app). */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(){try{var t=localStorage.getItem('themeMode');var d;if(t==='light'){d=true}else if(t==='dark'){d=false}else{var h=new Date().getHours();d=h>=7&&h<20}document.documentElement.setAttribute('data-theme',d?'light':'dark')}catch(e){}})();`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
