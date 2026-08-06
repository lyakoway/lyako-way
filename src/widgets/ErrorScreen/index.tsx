import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { useSelectorTyped } from "src/store";
import { ArticleTitle } from "src/ui/Card";
import RunBorder from "src/ui/RunBorder";
import { trackEvent } from "src/common/utils/trackAnalytics";
import { AnalyticsEvent } from "src/common/constants/analytics";

import {
  ErrorArticle,
  Wrap,
  Code,
  Note,
  Actions,
  ReloadButton,
  HomeLink,
} from "./style";

interface ErrorScreenProps {
  /** HTTP-код (404 / 500). Если не задан — общий экран ошибки. */
  statusCode?: number;
}

// Единый экран ошибки в стиле vCard (используется в pages/404, pages/_error и
// ErrorBoundary). Рендерится в области контента — оболочка (сайдбар/навбар)
// остаётся, чтобы можно было уйти на другой раздел. Тексты — из lang-словарей.
const ErrorScreen = ({ statusCode }: ErrorScreenProps) => {
  const {
    lang: { error },
  } = useSelectorTyped(({ lang }) => lang);
  const router = useRouter();
  const is404 = statusCode === 404;
  const code = statusCode ?? 0;

  useEffect(() => {
    trackEvent(AnalyticsEvent.ERROR_SCREEN_VIEW, {
      status_code: code,
      path: router.asPath.split(/[?#]/)[0] || "/",
      type: is404 ? "404" : "error",
    });
  }, [code, is404, router.asPath]);

  return (
    <ErrorArticle>
      <Wrap>
        <Code>{statusCode ?? error.errorLabel}</Code>
        <ArticleTitle>
          {is404 ? error.notFoundTitle : error.genericTitle}
        </ArticleTitle>
        <Note>{is404 ? error.notFoundNote : error.genericNote}</Note>
        <Actions>
          {/* «Обновить» — только для не-404 (перезагрузка может помочь при
              временной ошибке; для 404 бессмысленно). */}
          {!is404 && (
            <ReloadButton
              type="button"
              onClick={() => {
                trackEvent(AnalyticsEvent.ERROR_RELOAD_CLICK, {
                  status_code: code,
                });
                window.location.reload();
              }}
            >
              {error.reloadCta}
              <RunBorder radius={12} />
            </ReloadButton>
          )}
          {/* Когда рядом есть «Обновить» — «На главную» вторичная. */}
          <HomeLink
            href="/"
            $secondary={!is404}
            onClick={() =>
              trackEvent(AnalyticsEvent.ERROR_HOME_CLICK, {
                status_code: code,
                type: is404 ? "404" : "error",
              })
            }
          >
            {error.homeCta}
            <RunBorder radius={12} />
          </HomeLink>
        </Actions>
      </Wrap>
    </ErrorArticle>
  );
};

export default ErrorScreen;
