import styled from "styled-components";
import {
  PANEL_TEXT,
  PANEL_TEXT_SECONDARY,
  PANEL_BORDER,
} from "src/common/lib/panelStyles";

// Навбар vCard: на мобайле фиксирован снизу (стеклянная плашка),
// на десктопе (≥1024px) — абсолютно в правом верхнем углу контента.
export const NavbarWrapper = styled.nav`
  /* <1250px: раскладка в стек — навигация фиксированной верхней панелью. */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  border: 1px solid ${PANEL_BORDER};
  border-radius: 0 0 12px 12px;
  /* темнее панелей — притемняем сланцевый фон под навбаром */
  background: ${({ theme }) =>
    theme.name === "light" ? "#39424c" : "#131519"};
  backdrop-filter: blur(10px);
  ${({ theme }) => theme.shadow.NonClickable};

  @media (min-width: 580px) {
    border-radius: 0 0 20px 20px;
  }

  /* ≥1250px: две колонки — навбар абсолютно в правом-верхнем углу контента. */
  @media (min-width: 1250px) {
    position: absolute;
    top: 0;
    left: auto;
    right: 0;
    bottom: auto;
    width: max-content;
    padding: 0 20px;
    border-radius: 0 20px;
    box-shadow: none;
  }
`;

export const NavbarList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0 4px;
  list-style: none;

  /* На узких экранах пунктов много — прокрутка по горизонтали как страховка. */
  overflow-x: auto;
  gap: 0;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    justify-content: center;
    gap: 16px;
    padding: 0 10px;
  }

  @media (min-width: 1024px) {
    overflow-x: visible;
    gap: 30px;
    padding: 0 20px;
  }
`;

export const NavbarItem = styled.li`
  flex-shrink: 0;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 8px 4px;
    color: ${PANEL_TEXT_SECONDARY};
    /* Мобайл: компактная подпись под иконкой, чтобы все 7 пунктов влезли. */
    font-size: 10px;
    text-decoration: none;
    text-transform: capitalize;
    white-space: nowrap;
    transition: color 0.25s ease;
  }

  /* нормализуем иконки из propsHeaderTopMenu и красим в белый */
  a svg {
    width: 22px;
    height: 22px;
    fill: currentColor;
  }

  a svg [fill] {
    fill: currentColor;
  }

  a:hover,
  a:focus,
  a[data-active="true"] {
    color: ${PANEL_TEXT};
  }

  @media (min-width: 768px) {
    a {
      gap: 5px;
      padding: 12px 8px;
      font-size: 13px;
    }

    a svg {
      width: 24px;
      height: 24px;
    }
  }
`;

// Подпись пункта: активный получает оранжевое подчёркивание (текст не красим).
export const NavLabel = styled.span`
  padding-bottom: 3px;
  border-bottom: 2px solid transparent;
  transition: border-color 0.25s ease;

  a[data-active="true"] & {
    border-bottom-color: ${({ theme }) => theme.color.basic.primary};
  }
`;
