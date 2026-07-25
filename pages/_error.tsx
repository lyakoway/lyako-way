import { NextPageContext } from "next";

import ErrorScreen from "src/widgets/ErrorScreen";

interface ErrorPageProps {
  statusCode?: number;
}

// Кастомная страница ошибок (500 и прочие) в стиле сайта вместо дефолтной
// белой страницы Next. Рендерится на сервере при SSR-ошибке и на клиенте.
function ErrorPage({ statusCode }: ErrorPageProps) {
  return <ErrorScreen statusCode={statusCode} />;
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext): ErrorPageProps => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 500;
  return { statusCode };
};

export default ErrorPage;
