import styled from "styled-components";
import {
  PANEL_TEXT,
  PANEL_TEXT_SECONDARY,
  PANEL_TEXT_MUTED,
  PANEL_BORDER,
  PANEL_ELEVATED,
  PANEL_ELEVATED_HOVER,
} from "src/common/lib/panelStyles";

/* Поверхность вложенной карточки поверх сланцевой панели раздела. */
const cardSurface = `
  background: ${PANEL_ELEVATED};
  border: 1px solid ${PANEL_BORDER};
  border-radius: 16px;
`;

/* ——— Кнопки действий ——— */

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 34px;
`;

const buttonBase = `
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 18px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const ButtonPrimary = styled.a`
  ${buttonBase};
  background: ${({ theme }) => theme.color.basic.primary};
  color: #ffffff;

  &:hover {
    background: ${({ theme }) => theme.color.basic.hover};
  }
`;

export const ButtonSecondary = styled.a`
  ${buttonBase};
  background: ${PANEL_ELEVATED};
  border: 1px solid ${PANEL_BORDER};
  color: ${PANEL_TEXT};

  &:hover {
    border-color: ${({ theme }) => theme.color.basic.primaryLight};
    color: ${({ theme }) => theme.color.basic.primaryLight};
  }
`;

/* ——— Секции ——— */

export const Section = styled.section`
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const SectionHead = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
`;

export const SectionIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: ${PANEL_ELEVATED};
  border: 1px solid ${PANEL_BORDER};
  color: ${({ theme }) => theme.color.basic.primary};

  svg {
    width: 19px;
    height: 19px;
  }

  @media (min-width: 580px) {
    width: 40px;
    height: 40px;
    border-radius: 12px;

    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

export const SectionTitle = styled.h3`
  margin: 0;
  color: ${PANEL_TEXT};
  font-size: 19px;
  font-weight: 600;

  @media (min-width: 580px) {
    font-size: 22px;
  }
`;

/* ——— Таймлайн опыта (карточки) ——— */

export const Timeline = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const TimelineItem = styled.li`
  position: relative;
  padding-left: 30px;

  &:not(:last-child) {
    padding-bottom: 26px;
  }

  /* вертикальная линия */
  &::before {
    content: "";
    position: absolute;
    left: 5px;
    top: 8px;
    bottom: 0;
    width: 2px;
    background: ${PANEL_BORDER};
  }

  &:last-child::before {
    display: none;
  }

  /* точка на линии, выровнена с шапкой карточки */
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 22px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.basic.primary};
    box-shadow: 0 0 0 4px ${({ theme }) =>
      theme.color.background.primaryHeaderWrapper};
  }
`;

/* Универсальная карточка (опыт + образование). */
export const EntryCard = styled.div`
  ${cardSurface};
  padding: 18px;
  transition: border-color 0.25s ease, background 0.25s ease;

  &:hover {
    background: ${PANEL_ELEVATED_HOVER};
    border-color: ${({ theme }) => theme.color.basic.primaryLight};
  }

  @media (min-width: 580px) {
    padding: 22px 24px;
  }
`;

export const EntryHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 6px 14px;
`;

export const ItemRole = styled.h4`
  margin: 0;
  color: ${PANEL_TEXT};
  font-size: 16px;
  font-weight: 600;

  @media (min-width: 580px) {
    font-size: 18px;
  }
`;

export const ItemCompany = styled.p`
  margin: 3px 0 0;
  color: ${({ theme }) => theme.color.basic.primaryLight};
  font-size: 14px;
  font-weight: 500;
`;

export const PeriodBadge = styled.span`
  flex-shrink: 0;
  padding: 5px 12px;
  border-radius: 999px;
  background: ${PANEL_ELEVATED};
  border: 1px solid ${PANEL_BORDER};
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
`;

export const ItemMeta = styled.p`
  margin: 10px 0 0;
  color: ${PANEL_TEXT_MUTED};
  font-size: 13px;
`;

export const ItemSummary = styled.p`
  margin: 12px 0 0;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 14px;
  font-weight: 300;
  line-height: 1.55;
`;

export const Group = styled.div`
  margin-top: 18px;
`;

export const GroupTitle = styled.p`
  margin: 0 0 8px;
  color: ${({ theme }) => theme.color.basic.primaryLight};
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

export const Bullets = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    padding-left: 18px;
    margin-bottom: 7px;
    color: ${PANEL_TEXT_SECONDARY};
    font-size: 14px;
    font-weight: 300;
    line-height: 1.55;

    &:last-child {
      margin-bottom: 0;
    }

    &::before {
      content: "";
      position: absolute;
      left: 2px;
      top: 9px;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: ${({ theme }) => theme.color.basic.primary};
    }
  }
`;

/* ——— Навыки (сетка карточек-категорий) ——— */

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: start;
  gap: 14px;

  @media (min-width: 720px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const SkillCard = styled.div`
  ${cardSurface};
  padding: 16px 18px;
`;

export const SkillCategory = styled.p`
  display: flex;
  align-items: center;
  gap: 9px;
  margin: 0 0 13px;
  color: ${PANEL_TEXT};
  font-size: 14px;
  font-weight: 600;

  &::before {
    content: "";
    flex-shrink: 0;
    width: 3px;
    height: 15px;
    border-radius: 2px;
    background: ${({ theme }) => theme.color.basic.primary};
  }
`;

export const ChipList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Chip = styled.li`
  padding: 5px 12px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${PANEL_BORDER};
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 13px;
`;
