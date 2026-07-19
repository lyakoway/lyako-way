import styled from "styled-components";
import {
  PANEL_TEXT,
  PANEL_TEXT_SECONDARY,
  PANEL_TEXT_MUTED,
  PANEL_BORDER,
  PANEL_ELEVATED,
  PANEL_ELEVATED_HOVER,
} from "src/common/lib/panelStyles";

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
`;

// Декоративная обложка карточки (окно браузера) — не зависит от ассетов.
export const CardThumb = styled.div`
  position: relative;
  aspect-ratio: 16 / 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    rgba(249, 87, 33, 0.22),
    rgba(255, 255, 255, 0.04)
  );
  color: rgba(255, 255, 255, 0.85);

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
