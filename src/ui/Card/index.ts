import styled, { css } from "styled-components";
import {
  PANEL_TEXT,
  PANEL_BORDER,
  PANEL_ELEVATED,
} from "src/common/lib/panelStyles";

// Приёмы шаблона vCard на сланцевых панелях (см. panelStyles).
// Панели — сланцевый фон (theme.color.background.primaryHeaderWrapper),
// текст светлый, акцент — синий бренд (theme.color.basic.primary).

// Вложенный «приподнятый» блок поверх панели (чуть светлее фона + рамка).
export const gradientBorder = css`
  position: relative;
  z-index: 1;
  border-radius: 14px;
  background: ${PANEL_ELEVATED};
  border: 1px solid ${PANEL_BORDER};
`;

// Базовая карточка-поверхность.
export const Card = styled.div`
  ${gradientBorder};
  padding: 15px;
  ${({ theme }) => theme.shadow.NonClickable};

  @media (min-width: 580px) {
    padding: 30px;
  }
`;

// Карточка-раздел (article) — сланцевая панель с рамкой вокруг рабочего
// пространства. $scene — вариант «Дома»: без внутренних отступов, сцена
// прижата к низу.
export const Article = styled.article<{ $scene?: boolean }>`
  position: relative;
  border-radius: 20px;
  padding: 15px;
  background: ${({ theme }) => theme.color.background.primaryHeaderWrapper};
  border: 1px solid ${PANEL_BORDER};
  ${({ theme }) => theme.shadow.NonClickable};

  @media (min-width: 580px) {
    padding: 30px;
  }

  /* На десктопе карточка тянется на всю высоту колонки (= высоте сайдбара). */
  @media (min-width: 1250px) {
    flex: 1;
  }

  /* Для «Дома» сцена прижата к низу — убираем отступы, чтобы стол касался рамки. */
  ${({ $scene }) =>
    $scene &&
    css`
      display: flex;
      flex-direction: column;
      padding: 0;
      overflow: hidden;

      /* перебиваем @media(≥580){padding:30px} — иначе stylis выносит базовый
         padding:0 ПЕРЕД медиа-правилом и он не срабатывает */
      @media (min-width: 580px) {
        padding: 0;
      }
    `}
`;

// Заголовок раздела с акцентным подчёркиванием.
export const ArticleTitle = styled.h2`
  position: relative;
  margin: 0 0 20px;
  padding-bottom: 15px;
  color: ${PANEL_TEXT};
  font-size: 24px;
  font-weight: 600;
  text-transform: capitalize;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 4px;
    border-radius: 3px;
    background: ${({ theme }) => theme.color.basic.primary};
  }

  @media (min-width: 580px) {
    font-size: 32px;
  }
`;

// Квадратная иконка-плашка с акцентным цветом (icon-box в vCard).
export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: ${PANEL_ELEVATED};
  border: 1px solid ${PANEL_BORDER};
  color: ${PANEL_TEXT};

  /* Иконки контактов имеют inline fill="#fff"; CSS перебивает
     presentation-атрибут, красим в белый (currentColor). */
  svg {
    width: 18px;
    height: 18px;
  }

  svg,
  svg [fill] {
    fill: currentColor;
  }

  @media (min-width: 580px) {
    width: 48px;
    height: 48px;
    border-radius: 12px;
  }
`;
