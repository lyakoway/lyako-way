import styled from "styled-components";
import {
  PANEL_TEXT,
  PANEL_TEXT_SECONDARY,
  PANEL_BORDER,
} from "src/common/lib/panelStyles";

// Навбар vCard: на мобайле фиксирован снизу (стеклянная плашка),
// на десктопе (≥1024px) — абсолютно в правом верхнем углу контента.
export const NavbarWrapper = styled.nav`
  /* <1250px: раскладка в стек — навигация фиксированной верхней панелью.
     Ширина — как у контента ниже: во всю ширину на <580px, далее те же
     max-width по брейкпоинтам (520/700/950), по центру. */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  margin: 0 auto;
  z-index: 5;
  border: 1px solid ${PANEL_BORDER};
  border-radius: 0 0 12px 12px;
  /* темнее панелей — притемняем сланцевый фон под навбаром.
     Через CSS-переменную (data-theme) — верная тема с первой отрисовки. */
  background: var(--navbar-bg);
  backdrop-filter: blur(10px);
  ${({ theme }) => theme.shadow.NonClickable};

  @media (min-width: 580px) {
    max-width: 520px;
    border-radius: 0 0 20px 20px;
  }

  @media (min-width: 768px) {
    max-width: 700px;
  }

  @media (min-width: 1024px) {
    max-width: 950px;
  }

  /* ≥1250px: две колонки — навбар абсолютно в правом-верхнем углу контента. */
  @media (min-width: 1250px) {
    position: absolute;
    top: 0;
    left: auto;
    right: 0;
    bottom: auto;
    width: max-content;
    margin: 0;
    padding: 0 20px;
    border-radius: 0 20px;
    box-shadow: none;
  }
`;

export const NavbarList = styled.ul`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0 8px;
  list-style: none;

  /* На узких экранах пунктов много — прокрутка по горизонтали как страховка. */
  overflow-x: auto;
  gap: 0;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 580px) {
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
    /* Убираем серую вспышку-подложку браузера по тапу. */
    -webkit-tap-highlight-color: transparent;
  }

  /* нормализуем иконки из propsHeaderTopMenu и красим в белый */
  a svg {
    width: 22px;
    height: 22px;
    fill: currentColor;
    /* Вместе с подчёркиванием иконка чуть приподнимается. */
    transition: transform 0.25s ease;
  }

  a svg [fill] {
    fill: currentColor;
  }

  a[data-active="true"] {
    color: ${PANEL_TEXT};
  }

  /* Наведение НЕ через :hover: на тач-устройствах он залипает после тапа (а
     media (hover: hover) там врёт — и в эмуляции DevTools, и на части
     Android-браузеров). Признак ставит Navbar по pointer-событиям мыши. */
  a[data-hover="true"],
  a:focus-visible {
    color: ${PANEL_TEXT};
  }

  a[data-hover="true"] svg,
  a:focus-visible svg {
    transform: translateY(-2px);
  }

  @media (prefers-reduced-motion: reduce) {
    a svg {
      transition: none;
    }

    a[data-hover="true"] svg,
    a:focus-visible svg {
      transform: none;
    }
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

/* Подпись пункта: линия растёт из центра к краям (scaleX от центра) и так же
   уезжает обратно. При наведении она белая, у выбранного пункта — оранжевая
   (у активного цвет держится и под курсором). */
export const NavLabel = styled.span`
  position: relative;
  padding-bottom: 3px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    border-radius: 2px;
    background: ${PANEL_TEXT};
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.25s ease;
  }

  /* Эта линия — исключительно индикатор наведения: белая, появляется только под
     настоящим курсором (data-hover ставит Navbar по pointer-событиям мыши) или
     при фокусе с клавиатуры. С активным пунктом она не связана — иначе при
     переходе она мигала бы белым и на новом пункте, и на прежнем. */
  /* У выбранного пункта линию не показываем — там уже оранжевый бегунок, а
     белая вылезала бы из-под него кромкой по краям. */
  a[data-hover="true"]:not([data-active="true"]) &::after,
  a:focus-visible:not([data-active="true"]) &::after {
    transform: scaleX(1);
  }

  /* Оранжевую линию выбранного пункта рисует бегунок (NavIndicator). Пока он
     не измерен (SSR, первый кадр) — рисуем её здесь, чтобы подчёркивание
     активного пункта не появлялось из ниоткуда. */
  [data-slider="off"] a[data-active="true"] &::after {
    background: ${({ theme }) => theme.color.basic.primary};
    transform: scaleX(1);
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      transition: none;
    }
  }
`;

/* Бегунок: одна полоса на весь навбар. При смене активного пункта уезжает к
   новому — по пути проходит над всеми промежуточными пунктами. Позицию и
   ширину считает Navbar по метрикам подписи и передаёт инлайном. */
export const NavIndicator = styled.span`
  position: absolute;
  left: 0;
  height: 2px;
  border-radius: 2px;
  background: ${({ theme }) => theme.color.basic.primary};
  pointer-events: none;
  will-change: transform, width;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    width 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
