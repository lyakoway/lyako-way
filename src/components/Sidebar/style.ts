import styled, { keyframes } from "styled-components";
import {
  PANEL_TEXT,
  PANEL_TEXT_SECONDARY,
  PANEL_TEXT_MUTED,
  PANEL_BORDER,
  PANEL_ELEVATED,
  PANEL_ELEVATED_HOVER,
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
  color: ${PANEL_TEXT_SECONDARY};
  background: ${PANEL_ELEVATED};
  font-size: 12px;
  font-weight: 300;

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

// Обёртка блока настроек. Мобайл (<768px): строка-пункт «Настройки»
// (плашка-шестерёнка + подпись, как контактные строки) + выпадающий дропдаун
// с кнопками (лайк/тема/язык). Десктоп (≥768px): кнопки сразу инлайн.
export const SettingsBox = styled.div`
  position: relative;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

// Плашка-иконка как у контактных строк (RowIconBox), но шестерёнка крутится.
export const SettingsIconBox = styled(RowIconBox)`
  transition: color 0.2s ease, border-color 0.2s ease;

  svg {
    fill: currentColor;
    animation: ${spin} 6s linear infinite;
  }
`;

// Выглядит как обычный пункт (не кнопка): без фона/рамки, иконка слева + текст.
export const SettingsBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  color: ${PANEL_TEXT};
  font-size: 13px;
  text-align: left;
  cursor: pointer;

  /* при наведении и пока открыт попап — шестерёнка оранжевая */
  &:hover ${SettingsIconBox},
  &[aria-expanded="true"] ${SettingsIconBox} {
    color: ${({ theme }) => theme.color.basic.primary};
    border-color: ${({ theme }) => theme.color.basic.primary};
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Controls = styled.div<{ $open?: boolean }>`
  /* Мобайл: выпадающий дропдаун над шестерёнкой (прижат к левому краю). */
  position: absolute;
  bottom: calc(100% + 12px);
  left: 0;
  z-index: 6;
  display: ${({ $open }) => ($open ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 14px;
  border-radius: 16px;
  background: ${({ theme }) => theme.color.background.primaryHeaderWrapper};
  border: 1px solid ${PANEL_BORDER};
  ${({ theme }) => theme.shadow.NonClickable};

  /* стрелочка вниз к шестерёнке (по центру плашки-иконки слева) */
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 15px;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 12px;
    height: 12px;
    background: ${({ theme }) => theme.color.background.primaryHeaderWrapper};
    border-right: 1px solid ${PANEL_BORDER};
    border-bottom: 1px solid ${PANEL_BORDER};
  }

  @media (min-width: 580px) {
    &::after {
      left: 24px;
    }
  }

  /* Десктоп: кнопки сразу инлайн, без дропдауна. */
  @media (min-width: 768px) {
    position: static;
    transform: none;
    display: flex;
    flex-direction: row;
    gap: 12px;
    padding: 4px 0 0;
    border: none;
    box-shadow: none;
    background: none;

    &::after {
      display: none;
    }
  }
`;

// Квадратная плашка вокруг каждой кнопки (лайк / тема / язык), чтобы каждая
// читалась как отдельная кнопка — в стиле IconBox контактов.
export const ControlItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  padding: 0;
  border-radius: 12px;
  background: ${PANEL_ELEVATED};
  border: 1px solid ${PANEL_BORDER};
  transition: border-color 0.2s ease, background 0.2s ease;

  &:hover {
    background: ${PANEL_ELEVATED_HOVER};
    border-color: rgba(255, 255, 255, 0.22);
  }
`;
