import Link from "next/link";
import styled, { css } from "styled-components";

import { Article } from "src/ui/Card";
import {
  PANEL_TEXT,
  PANEL_TEXT_SECONDARY,
  PANEL_BORDER,
} from "src/common/lib/panelStyles";
import { runningBorder } from "src/common/lib/runningBorder";

// Карточка ошибки: на десктопе высота = min-height сайдбара (702px), поэтому
// правый блок по длине точно совпадает с левым; контент — по центру.
export const ErrorArticle = styled(Article)`
  @media (min-width: 1250px) {
    min-height: 702px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 55vh;
  gap: 14px;
  padding: 8px 0;

  @media (min-width: 1250px) {
    /* высоту держит ErrorArticle, здесь не растягиваем */
    min-height: auto;
  }
`;

// Крупный код статуса (404 / 500) — белым.
export const Code = styled.span`
  font-size: 72px;
  font-weight: 700;
  line-height: 1;
  color: #ffffff;

  @media (min-width: 580px) {
    font-size: 96px;
  }
`;

export const Note = styled.p`
  margin: 0 auto;
  max-width: 520px;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 15px;
  font-weight: 300;
  line-height: 1.6;
`;

// Ряд действий (кнопки). На узких экранах кнопки переносятся.
export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 8px;
`;

// Общая база кнопки (высота 40 / радиус 12 + бегунок при наведении, как везде).
const buttonBase = css`
  ${runningBorder}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 20px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
`;

// Основное действие (оранжевое, белый текст — контраст AA).
const primaryButton = css`
  ${buttonBase};
  background: ${({ theme }) => theme.color.basic.primary};
  color: #ffffff;

  &:hover {
    background: ${({ theme }) => theme.color.basic.hover};
  }
`;

// Вторичное действие (призрачная кнопка с рамкой). Заливку/бегунок при
// наведении задаёт runningBorder.
const secondaryButton = css`
  ${buttonBase};
  background: transparent;
  color: ${PANEL_TEXT};
  border-color: ${PANEL_BORDER};
`;

// Кнопка «Обновить» — перезагрузка страницы (клиентское действие).
export const ReloadButton = styled.button`
  ${primaryButton};
`;

// Кнопка «на главную»: styled(Link) => рендерится <a href>, доступно без JS.
// $secondary — призрачный вид (когда рядом есть основная кнопка «Обновить»).
export const HomeLink = styled(Link)<{ $secondary?: boolean }>`
  ${({ $secondary }) => ($secondary ? secondaryButton : primaryButton)};
`;
