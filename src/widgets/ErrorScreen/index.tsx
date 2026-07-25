import React from "react";

import { useSelectorTyped } from "src/store";
import { Article, ArticleTitle } from "src/ui/Card";

import { Wrap, Code, Note, Actions, ReloadButton, HomeLink } from "./style";

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
  const is404 = statusCode === 404;

  return (
    <Article style={{ minHeight: "60vh" }}>
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
              onClick={() => window.location.reload()}
            >
              {error.reloadCta}
            </ReloadButton>
          )}
          {/* Когда рядом есть «Обновить» — «На главную» вторичная. */}
          <HomeLink href="/" $secondary={!is404}>
            {error.homeCta}
          </HomeLink>
        </Actions>
      </Wrap>
    </Article>
  );
};

export default ErrorScreen;
