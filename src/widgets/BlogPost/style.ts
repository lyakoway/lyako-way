import styled, { css } from "styled-components";
import {
  PANEL_TEXT,
  PANEL_TEXT_SECONDARY,
  PANEL_TEXT_MUTED,
  PANEL_BORDER,
  PANEL_ELEVATED,
  PANEL_ELEVATED_HOVER,
} from "src/common/lib/panelStyles";

/* ——— Поиск внутри статьи ——— */

export const SearchRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;
`;

// Поле ввода в тёмном стиле проекта + подсветка оранжевым, пока поле в фокусе
// или в нём что-то введено ($filled) — чтобы активный поиск был виден и после
// того, как фокус ушёл.
export const SearchField = styled.div<{
  $focused?: boolean;
  $filled?: boolean;
}>`
  position: relative;
  /* min-width:0 обязателен: иначе флекс-элемент не сжимается ниже ширины
     контента и ряд «вылезает» за карточку на узких экранах. */
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 12px;
  border-radius: 10px;
  background: ${PANEL_ELEVATED};
  /* Базовая рамка всегда нейтральная: оранжевую рисует только ревил-рамка
     ниже, иначе они складывались в две концентрические линии. */
  border: 1px solid ${PANEL_BORDER};
  transition: border-color 0.2s ease, background 0.25s ease;

  &:hover {
    background: ${PANEL_ELEVATED_HOVER};
  }

  /* Ревил-рамка при наведении — как у полей контактной формы: каждый
     псевдоэлемент рисует ПОЛНУЮ скруглённую рамку, а «разбегание из центра»
     задаёт clip-path (::before по горизонтали, ::after по вертикали), поэтому
     углы получаются скруглёнными и без хвостиков. */
  &::before,
  &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    /* -1px: absolute-дети считаются от padding-box, поэтому при inset:0 рамка
       легла бы ВНУТРЬ базовой и линий стало бы две. Здесь она точно накрывает
       базовую (радиус, соответственно, 10px + 1px). */
    inset: -1px;
    border: 1px solid ${({ theme }) => theme.color.basic.primaryLight};
    border-radius: 11px;
    pointer-events: none;
    transition: clip-path 0.4s ease;
  }

  &::before {
    clip-path: inset(0 50% 0 50%);
  }

  &::after {
    clip-path: inset(50% 0 50% 0);
  }

  &:hover::before,
  &:hover::after {
    clip-path: inset(0 0 0 0);
  }

  /* Активное или заполненное поле: рамка раскрыта всегда, без наведения.
     Толщина одна и та же (1px) — утолщение под курсором смотрелось слишком
     грубо на поле высотой 40px. */
  ${({ $focused, $filled }) =>
    ($focused || $filled) &&
    css`
      &::before,
      &::after {
        clip-path: inset(0 0 0 0);
      }
    `}

  @media (prefers-reduced-motion: reduce) {
    &::before,
    &::after {
      transition: none;
    }
  }

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    fill: none;
    /* Иконка белая: дети svg рисуются stroke="currentColor", поэтому цвет
       задаём через color. */
    color: ${PANEL_TEXT};
  }

  input {
    all: unset;
    flex: 1;
    min-width: 0;
    color: ${PANEL_TEXT};
    font-size: 14px;
  }
`;

// Кнопка очистки поля (×) — показывается, когда что-то введено.
export const ClearBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  border: none;
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.1);
  color: ${PANEL_TEXT};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: background 0.2s ease, color 0.2s ease;

  svg {
    width: 12px;
    height: 12px;
    stroke: currentColor;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.18);
    color: ${({ theme }) => theme.color.basic.primaryLight};
  }
`;

// Плейсхолдер отдельным текстовым узлом (а не атрибутом input) — чтобы его
// «ловил» эффект распыления текста при смене языка (disperseTextSwap).
export const Placeholder = styled.span`
  position: absolute;
  left: 38px; /* padding 12 + иконка 18 + gap 8 */
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
`;

export const MatchCount = styled.span`
  flex-shrink: 0;
  color: ${PANEL_TEXT_MUTED};
  font-size: 13px;
  white-space: nowrap;
`;

export const NavBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  border-radius: 9px;
  border: 1px solid ${PANEL_BORDER};
  background: ${PANEL_ELEVATED};
  color: ${PANEL_TEXT_SECONDARY};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: color 0.2s ease, border-color 0.2s ease;

  svg {
    width: 16px;
    height: 16px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: ${({ theme }) => theme.color.basic.primaryLight};
      border-color: ${({ theme }) => theme.color.basic.primaryLight};
    }
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

// Подсветка совпадения; активное (текущее) — оранжевым.
export const Mark = styled.mark`
  background: rgba(255, 133, 96, 0.28);
  color: inherit;
  border-radius: 3px;
  padding: 0 1px;
  scroll-margin-top: 90px;

  &[data-active="true"] {
    background: ${({ theme }) => theme.color.basic.primary};
    color: #ffffff;
  }
`;

export const Breadcrumb = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-bottom: 18px;
  font-size: 13px;
  color: ${PANEL_TEXT_MUTED};


  a {
    color: ${PANEL_TEXT_SECONDARY};
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.color.basic.primaryLight};
    }
  }
`;

export const Crumb = styled.span`
  color: ${PANEL_TEXT};
`;

export const Sep = styled.span`
  color: ${PANEL_TEXT_MUTED};
`;

// <580px — без верхнего отступа: у заголовка выше уже есть свои 20px, вместе
// они отрывали лид от заголовка (как было с метой на странице проекта).
export const Lead = styled.p`
  margin: 0;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 17px;
  font-weight: 300;
  line-height: 1.5;

  @media (min-width: 580px) {
    margin-top: 16px;
  }
`;

export const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 14px;
  margin-top: 18px;
  padding-bottom: 22px;
  border-bottom: 1px solid ${PANEL_BORDER};
`;

export const MetaDate = styled.span`
  color: ${PANEL_TEXT_MUTED};
  font-size: 13px;
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Tag = styled.li`
  padding: 4px 10px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${PANEL_BORDER};
  color: ${PANEL_TEXT};
  font-size: 12px;
  font-weight: 500;
`;

export const Body = styled.div`
  margin-top: 24px;

  p {
    margin: 0 0 16px;
    color: ${PANEL_TEXT_SECONDARY};
    font-size: 16px;
    font-weight: 300;
    line-height: 1.7;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const NotFound = styled.p`
  margin-top: 20px;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 15px;

  a {
    color: ${({ theme }) => theme.color.basic.primaryLight};
    text-decoration: none;
  }
`;
