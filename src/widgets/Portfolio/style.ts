import styled from "styled-components";
import {
  PANEL_TEXT,
  PANEL_TEXT_SECONDARY,
  PANEL_TEXT_MUTED,
  PANEL_BORDER,
  PANEL_ELEVATED,
  PANEL_ELEVATED_HOVER,
} from "src/common/lib/panelStyles";

export const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 22px;
`;

export const FilterChip = styled.button<{ $active?: boolean }>`
  padding: 7px 14px;
  border-radius: 999px;
  border: 1px solid
    ${({ $active, theme }) =>
      $active ? theme.color.basic.primary : PANEL_BORDER};
  background: ${({ $active, theme }) =>
    $active ? theme.color.basic.primary : "rgba(255, 255, 255, 0.04)"};
  color: ${({ $active }) => ($active ? "#ffffff" : PANEL_TEXT_SECONDARY)};
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease, background 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: ${({ $active }) => ($active ? "#ffffff" : PANEL_TEXT)};
    border-color: ${({ $active, theme }) =>
      $active ? theme.color.basic.primary : "rgba(255, 255, 255, 0.28)"};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

// Затемняющий оверлей с иконкой «глаз», проявляется при наведении на карточку.
export const ThumbOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(10, 12, 16, 0.5);
  color: #ffffff;
  opacity: 0;
  transition: opacity 0.25s ease;

  svg {
    width: 34px;
    height: 34px;
    transform: scale(0.85);
    transition: transform 0.25s ease;
  }
`;

export const Card = styled.a`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 16px;
  background: ${PANEL_ELEVATED};
  border: 1px solid ${PANEL_BORDER};
  text-decoration: none;
  transition: border-color 0.25s ease, background 0.25s ease,
    transform 0.25s ease;

  &:hover {
    background: ${PANEL_ELEVATED_HOVER};
    border-color: rgba(255, 255, 255, 0.22);
    transform: translateY(-3px);
  }

  &:hover ${ThumbOverlay} {
    opacity: 1;
  }

  &:hover ${ThumbOverlay} svg {
    transform: scale(1);
  }
`;

// Декоративная обложка карточки (окно браузера) — не зависит от ассетов.
// $grad — индивидуальный градиент карточки.
export const CardThumb = styled.div<{ $grad?: string }>`
  position: relative;
  aspect-ratio: 16 / 10;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${({ $grad }) =>
    $grad ||
    "linear-gradient(135deg, rgba(249, 87, 33, 0.22), rgba(255, 255, 255, 0.04))"};
  color: rgba(255, 255, 255, 0.85);

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
  }

  svg {
    width: 44px;
    height: 44px;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 18px;
`;

export const CardName = styled.h3`
  margin: 0;
  color: ${PANEL_TEXT};
  font-size: 16px;
  font-weight: 600;
`;

export const CardDate = styled.span`
  color: ${PANEL_TEXT_MUTED};
  font-size: 12px;
`;

export const ChipList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 4px 0 0;
  padding: 0;
  list-style: none;
`;

export const Chip = styled.li`
  padding: 3px 9px;
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${PANEL_BORDER};
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 11px;
`;
