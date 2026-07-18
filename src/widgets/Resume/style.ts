import styled from "styled-components";
import {
  PANEL_TEXT,
  PANEL_TEXT_SECONDARY,
  PANEL_TEXT_MUTED,
  PANEL_BORDER,
  PANEL_ELEVATED,
} from "src/common/lib/panelStyles";

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 30px;
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

export const Section = styled.section`
  &:not(:last-child) {
    margin-bottom: 35px;
  }
`;

export const SectionTitle = styled.h3`
  margin: 0 0 24px;
  color: ${PANEL_TEXT};
  font-size: 18px;
  font-weight: 600;

  @media (min-width: 580px) {
    font-size: 22px;
  }
`;

/* ——— Таймлайн опыта ——— */

export const Timeline = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const TimelineItem = styled.li`
  position: relative;
  padding-left: 26px;

  &:not(:last-child) {
    padding-bottom: 30px;
  }

  /* линия */
  &::before {
    content: "";
    position: absolute;
    left: 4px;
    top: 8px;
    bottom: 0;
    width: 2px;
    background: ${PANEL_BORDER};
  }

  &:last-child::before {
    display: none;
  }

  /* точка */
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.basic.primary};
  }
`;

export const ItemRole = styled.h4`
  margin: 0 0 2px;
  color: ${PANEL_TEXT};
  font-size: 16px;
  font-weight: 600;

  @media (min-width: 580px) {
    font-size: 17px;
  }
`;

export const ItemCompany = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.basic.primaryLight};
  font-size: 14px;
  font-weight: 500;
`;

export const ItemPeriod = styled.span`
  display: block;
  margin: 4px 0;
  color: ${PANEL_TEXT_MUTED};
  font-size: 13px;
`;

export const ItemMeta = styled.p`
  margin: 0 0 4px;
  color: ${PANEL_TEXT_MUTED};
  font-size: 13px;
`;

export const ItemSummary = styled.p`
  margin: 8px 0 0;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 14px;
  font-weight: 300;
  line-height: 1.55;
`;

export const Group = styled.div`
  margin-top: 14px;
`;

export const GroupTitle = styled.p`
  margin: 0 0 6px;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

export const Bullets = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    padding-left: 16px;
    margin-bottom: 6px;
    color: ${PANEL_TEXT_SECONDARY};
    font-size: 14px;
    font-weight: 300;
    line-height: 1.55;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 9px;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: ${({ theme }) => theme.color.basic.primary};
    }
  }
`;

/* ——— Навыки ——— */

export const SkillGroup = styled.div`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const SkillCategory = styled.p`
  margin: 0 0 8px;
  color: ${PANEL_TEXT};
  font-size: 14px;
  font-weight: 500;
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
  background: ${PANEL_ELEVATED};
  border: 1px solid ${PANEL_BORDER};
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 13px;
`;
