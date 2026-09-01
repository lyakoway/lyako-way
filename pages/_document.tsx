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
          {/* Тема ДО первой отрисовки — та же лестница, что в рантайме (_app):
              ручной выбор (localStorage themeManual) → prefers-color-scheme →
              время суток (7–20 как приближение солнца; SunCalc в инлайне
              недоступен, точные границы применятся после гидрации).
              В рантайме атрибут синхронизируется с redux. */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(){try{localStorage.removeItem('themeMode');var m=localStorage.getItem('themeManual');var t;if(m==='light'||m==='dark'){t=m}else if(window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches){t='dark'}else{var h=new Date().getHours();t=(h>=7&&h<20)?'light':'dark'}document.documentElement.setAttribute('data-theme',t)}catch(e){}})();`,
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
