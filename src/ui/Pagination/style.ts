import styled, { css } from "styled-components";
import {
  PANEL_TEXT_SECONDARY,
  PANEL_TEXT_MUTED,
  PANEL_BORDER,
  PANEL_ELEVATED,
} from "src/common/lib/panelStyles";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 28px;
  padding-top: 22px;
  border-top: 1px solid ${PANEL_BORDER};
`;

// Общая база кнопки пагинации — в стиле контролов проекта.
const base = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 36px;
  height: 36px;
  padding: 0 8px;
  border-radius: 10px;
  border: 1px solid ${PANEL_BORDER};
  background: ${PANEL_ELEVATED};
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: ${({ theme }) => theme.color.basic.primaryLight};
      border-color: ${({ theme }) => theme.color.basic.primaryLight};
    }
  }
`;

export const PageBtn = styled.button<{ $active?: boolean }>`
  ${base}
  ${({ $active, theme }) =>
    $active &&
    css`
      background: ${theme.color.basic.primary};
      border-color: ${theme.color.basic.primary};
      color: #ffffff;
    `}
`;

export const ArrowBtn = styled.button`
  ${base}
  padding: 0;

  svg {
    width: 18px;
    height: 18px;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export const Dots = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 36px;
  color: ${PANEL_TEXT_MUTED};
`;
