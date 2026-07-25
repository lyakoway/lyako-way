import React from "react";

import ErrorScreen from "src/widgets/ErrorScreen";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

// Ловит ошибки рендера на клиенте и показывает единый экран ошибки вместо
// «белого экрана»/сломанной страницы. Оборачивает контент внутри Layout, так
// что оболочка (сайдбар/навбар) остаётся — можно перейти в другой раздел.
class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Точка для отправки в мониторинг (Sentry и т.п.), если появится.
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.error("ErrorBoundary caught:", error, info);
    }
  }

  render() {
    if (this.state.hasError) {
      return <ErrorScreen statusCode={500} />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
