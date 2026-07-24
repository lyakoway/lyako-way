import styled, { keyframes } from "styled-components";
import {
  PANEL_TEXT,
  PANEL_TEXT_MUTED,
  PANEL_BORDER,
  PANEL_ELEVATED,
} from "src/common/lib/panelStyles";

// Визитка в стиле vCard: всегда развёрнута; на десктопе (≥1024px)
// «прилипает» слева.
export const SidebarWrapper = styled.aside`
  padding: 15px;
  /* ≤767px — зазор между блоками 18px; ≥768px — 26px. */
  margin-bottom: 18px;
  border-radius: 20px;
  background: ${({ theme }) => theme.color.background.primaryHeaderWrapper};
  border: 1px solid ${PANEL_BORDER};
  ${({ theme }) => theme.shadow.NonClickable};

  @media (min-width: 580px) {
    padding: 30px;
  }

  @media (min-width: 768px) {
    margin-bottom: 26px;
  }

  @media (min-width: 1250px) {
    position: sticky;
    top: 60px;
    margin-bottom: 0;
    padding-top: 60px;
    /* Не тянемся на всю высоту контента, но не ниже блока «Дом». */
    min-height: 702px;
  }
`;

export const SidebarInfo = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;

  @media (min-width: 580px) {
    gap: 25px;
  }

  @media (min-width: 1250px) {
    flex-direction: column;
  }
`;

export const AvatarBox = styled.figure`
  display: block;
  margin: 0;
  flex-shrink: 0;
  overflow: hidden;
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: ${PANEL_ELEVATED};
  border: 1px solid ${PANEL_BORDER};

  @media (min-width: 580px) {
    width: 120px;
    height: 120px;
    border-radius: 30px;
  }
`;

export const InfoContent = styled.div`
  @media (min-width: 1250px) {
    text-align: center;
  }
`;

export const Name = styled.h1`
  margin: 0 0 10px;
  color: ${PANEL_TEXT};
  font-size: 17px;
  font-weight: 500;
  letter-spacing: -0.25px;

  @media (min-width: 580px) {
    font-size: 26px;
    margin-bottom: 15px;
  }

  @media (min-width: 1250px) {
    white-space: nowrap;
    text-align: center;
  }
`;

export const JobTitle = styled.p`
  width: max-content;
  padding: 3px 12px;
  border-radius: 8px;
  /* Тёмная подложка + непрозрачный белый текст: контраст ~7:1 (AA) на светлой
     панели, где прежний полупрозрачный текст на светлом чипе давал ~3.4:1. */
  color: ${PANEL_TEXT};
  background: rgba(0, 0, 0, 0.2);
  font-size: 12px;
  font-weight: 400;

  @media (min-width: 1250px) {
    margin: 0 auto;
  }
`;

export const SidebarMore = styled.div``;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  margin: 16px 0;
  background: ${PANEL_BORDER};

  @media (min-width: 580px) {
    margin: 24px 0;
  }
`;

// Группа контактов (разделитель + список). До 1250px скрыта: там навбар
// сверху, а контакты показываются в разделе «Контакты». Видна только в
// двухколоночной раскладке (≥1250px), где сайдбар — левая колонка.
export const ContactsGroup = styled.div`
  @media (max-width: 1249px) {
    display: none;
  }
`;

export const ContactsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 100%;
`;

// Плашка иконки строки (телефон/мессенджеры/локация). В отличие от IconBox
// не форсирует fill — корректно показывает outline-иконки (stroke).
export const RowIconBox = styled.span`
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

  svg {
    width: 20px;
    height: 20px;
  }

  @media (min-width: 580px) {
    width: 48px;
    height: 48px;
    border-radius: 12px;

    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

// Кликабельная иконка-обёртка (напр. почта в сайдбаре — только иконка).
export const IconLink = styled.a`
  display: inline-flex;
  border-radius: 12px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:hover > div {
    border-color: ${({ theme }) => theme.color.basic.primaryLight};
    color: ${({ theme }) => theme.color.basic.primaryLight};
  }
`;

export const ContactInfo = styled.div`
  max-width: calc(100% - 46px);

  a,
  address {
    color: ${PANEL_TEXT};
    font-size: 13px;
    text-decoration: none;
    font-style: normal;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  a:hover {
    color: ${({ theme }) => theme.color.basic.primaryLight};
  }
`;

export const ContactTitle = styled.p`
  margin: 0 0 2px;
  color: ${PANEL_TEXT_MUTED};
  font-size: 12px;
  text-transform: uppercase;
`;

export const MessengerLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${PANEL_TEXT};
    transition: color 0.2s ease, transform 0.2s ease;
  }

  a:hover {
    color: ${({ theme }) => theme.color.basic.primaryLight};
    transform: translateY(-1px);
  }

  a svg {
    width: 20px;
    height: 20px;
  }
`;

// Блок «Настройки»: заголовок с шестерёнкой по центру, ниже — кнопки по центру.
export const SettingsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

// Заголовок «Настройки» + белая крутящаяся шестерёнка справа от надписи.
export const SettingsTitle = styled.p`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 0 0 10px;
  color: ${PANEL_TEXT_MUTED};
  font-size: 12px;
  line-height: 1;
  text-transform: uppercase;

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    fill: ${PANEL_TEXT};
    animation: ${spin} 6s linear infinite;
  }
`;

// Ряд кнопок (язык / тема / лайк) под заголовком «Настройки».
export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
`;

// Обёртка каждой кнопки (лайк / тема / язык) — без фона/рамки, центрирование.
export const ControlItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 44px;
  padding: 0;
`;

/* ——— Компактный режим (<1250px): шестерёнка в углу блока + попап ——— */

// Правый верхний угол блока аватар+имя (SidebarInfo — position: relative).
export const SettingsCorner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

// Кнопка-шестерёнка: белая при закрытом попапе, оранжевая при открытом.
export const GearButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  border-radius: 10px;
  background: none;
  color: ${PANEL_TEXT};
  cursor: pointer;
  transition: color 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  svg {
    width: 22px;
    height: 22px;
    fill: currentColor;
    animation: ${spin} 6s linear infinite;
  }

  /* Открыт попап — всегда оранжевая. */
  &[aria-expanded="true"] {
    color: ${({ theme }) => theme.color.basic.primary};
  }

  /* Hover-подсветка только на устройствах с реальным курсором — чтобы на
     тач-экранах «залипший» hover не оставлял шестерёнку оранжевой при
     закрытом попапе. */
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: ${({ theme }) => theme.color.basic.primary};
    }
  }
`;

// Попап с кнопками (лайк/тема/язык), выпадает из шестерёнки вниз.
export const SettingsPopup = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 12px 22px 12px 16px;
  border-radius: 16px;
  background: ${({ theme }) => theme.color.background.primaryHeaderWrapper};
  border: 1px solid ${PANEL_BORDER};
  ${({ theme }) => theme.shadow.NonClickable};

  /* стрелочка вверх к шестерёнке */
  &::after {
    content: "";
    position: absolute;
    bottom: 100%;
    right: 14px;
    transform: translateY(50%) rotate(45deg);
    width: 12px;
    height: 12px;
    background: ${({ theme }) => theme.color.background.primaryHeaderWrapper};
    border-left: 1px solid ${PANEL_BORDER};
    border-top: 1px solid ${PANEL_BORDER};
  }
`;
