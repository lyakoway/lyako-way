import styled, { css, keyframes } from "styled-components";
import { MOBILE_660 } from "src/common/lib/media";
import {
  PANEL_TEXT,
  PANEL_TEXT_SECONDARY,
  PANEL_BORDER,
  PANEL_ELEVATED,
  PANEL_ELEVATED_HOVER,
} from "src/common/lib/panelStyles";

const fadeSlideIn = keyframes`
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeSlideOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-5px); }
`;

export const SelectContainer = styled.div<{
  $boxShadow: boolean;
  mobile?: boolean;
}>`
  position: relative;
  height: 40px;
  width: 100%;
  border: 1px solid ${PANEL_BORDER};
  display: flex;
  align-items: center;
  gap: 0.5em;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  /* Тёмное «приподнятое» поле в стиле проекта. */
  background: ${PANEL_ELEVATED};
  transition: border-color 0.25s ease, box-shadow 0.25s ease;

  @media ${MOBILE_660} {
    margin-left: 0;
  }

  /* Подсветка при наведении/фокусе — оранжевая (брендовая), не синяя. */
  &:hover,
  &:focus-within {
    border-color: ${({ theme }) => theme.color.basic.primaryLight};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.color.basic.primaryLight}55;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 6px 8px 6px 12px;
  color: ${PANEL_TEXT_SECONDARY};
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;

  svg {
    width: 24px;
    height: 24px;
  }
  /* Иконка лупы — светлая на тёмном поле (в svg жёсткий fill перебиваем). */
  svg path {
    fill: ${PANEL_TEXT_SECONDARY};
  }
`;

export const DeleteIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  cursor: pointer;
  position: absolute;
  right: 6px;
  /* Локальный порядок внутри поля — над инпутом (z-index:2). Раньше стоял
     Z_INDEX_TOAST (100) — уровень тостов, из-за чего кнопка вылезала поверх
     закреплённой шапки модалки при скролле. */
  z-index: 3;

  svg {
    width: 20px;
    height: 20px;
  }
  /* Крестик очистки — белый (в svg жёсткий fill перебиваем). */
  svg path {
    fill: ${PANEL_TEXT};
  }

  &:hover {
    border-radius: 8px;
    background-color: ${PANEL_ELEVATED_HOVER};
  }
`;

export const Input = styled.input`
  all: unset;
  outline: none !important;
  border: none !important;
  margin: 0 !important;
  height: auto !important;
  box-shadow: none !important;
  color: ${PANEL_TEXT};
  width: 100%;
  padding: 0 30px 2px 30px !important;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  z-index: 2;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none !important;
    border: none !important;
  }
`;

export const Dropdown = styled.div<{ $closing?: boolean }>`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  background: #1b1b1b;
  border: 1px solid #333;
  border-radius: 8px;
  max-height: 220px;
  overflow-y: auto;
  z-index: 15;
  padding: 4px 0;
  transition: opacity 0.25s ease, transform 0.25s ease;

  ${({ $closing }) =>
    $closing &&
    css`
      opacity: 0;
      transform: translateY(-5px);
    `}
`;

export const DropdownItem = styled.div<{
  $closing?: boolean;
  $highlighted?: boolean;
}>`
  padding: 8px 12px;
  /* Несовпавшую часть приглушаем — тогда ярко-белое жирное совпадение (mark)
     заметно выделяется контрастом. */
  color: rgba(255, 255, 255, 0.55);
  /* Активный пункт (навигация с клавиатуры) выделяем фоном, а не цветом. */
  background: ${({ $highlighted }) => ($highlighted ? "#2c2c2c" : "transparent")};
  cursor: pointer;
  user-select: none;
  transition: background 0.2s ease;
  animation: ${({ $closing }) => ($closing ? fadeSlideOut : fadeSlideIn)} 0.25s
    ease forwards;

  &:hover {
    background: #2c2c2c;
  }
`;

export const DropdownMessage = styled.div`
  padding: 8px 12px;
  color: #aaa;
  text-align: center;
  font-size: 14px;
`;
