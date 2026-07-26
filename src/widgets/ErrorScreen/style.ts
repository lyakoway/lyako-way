import Link from "next/link";
import styled, { css } from "styled-components";

import {
  PANEL_TEXT,
  PANEL_TEXT_SECONDARY,
  PANEL_BORDER,
  PANEL_ELEVATED_HOVER,
} from "src/common/lib/panelStyles";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 50vh;
  gap: 12px;
  padding: 8px 0;
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
  margin: 0;
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
  gap: 12px;
  margin-top: 8px;
`;

// Общая база кнопки.
const buttonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 11px 20px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
  transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease;
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

// Вторичное действие (призрачная кнопка с рамкой).
const secondaryButton = css`
  ${buttonBase};
  background: transparent;
  color: ${PANEL_TEXT};
  border-color: ${PANEL_BORDER};

  &:hover {
    background: ${PANEL_ELEVATED_HOVER};
    border-color: ${({ theme }) => theme.color.basic.primaryLight};
  }
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
