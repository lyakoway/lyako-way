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

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 720px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Card = styled.a`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px 22px;
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

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Tag = styled.li`
  padding: 3px 10px;
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${PANEL_BORDER};
  color: ${({ theme }) => theme.color.basic.primaryLight};
  font-size: 11px;
  font-weight: 500;
`;

export const CardTitle = styled.h3`
  margin: 0;
  color: ${PANEL_TEXT};
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
`;

export const CardExcerpt = styled.p`
  margin: 0;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 14px;
  font-weight: 300;
  line-height: 1.55;
`;

export const CardFoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 4px;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${PANEL_TEXT_MUTED};
  font-size: 12px;

  span + span::before {
    content: "·";
    margin-right: 8px;
  }
`;

export const ReadMore = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: ${({ theme }) => theme.color.basic.primaryLight};
  font-size: 13px;
  font-weight: 500;

  svg {
    width: 15px;
    height: 15px;
  }
`;
