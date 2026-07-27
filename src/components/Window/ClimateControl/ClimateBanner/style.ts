import styled from "styled-components";
import {
  PANEL_TEXT,
  PANEL_TEXT_SECONDARY,
  PANEL_BORDER,
  PANEL_ELEVATED,
} from "src/common/lib/panelStyles";

export const WeatherWrapper = styled.div<{ $alignItems?: string }>`
  display: flex;
  justify-content: center;
  align-items: ${({ $alignItems }) =>
    $alignItems === "center" ? "center" : "start"};
  flex-direction: column;
  gap: 12px;
  padding: 1rem;
  margin: 0 20px;
  min-height: 204px;
  border-radius: 12px;
  /* Приподнятый блок поверх тёмной панели модалки — как карточки в проекте. */
  background-color: ${PANEL_ELEVATED};
  border: 1px solid ${PANEL_BORDER};
  color: ${PANEL_TEXT};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;

export const LocationTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  color: ${PANEL_TEXT};
`;

export const WeatherInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  img {
    width: 64px;
    height: 64px;
  }

  h3 {
    font-size: 24px;
    margin: 0;
    color: ${PANEL_TEXT};
  }

  p {
    margin: 0.25rem 0;
    color: ${PANEL_TEXT_SECONDARY};
  }
`;

export const WeatherDetails = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;

  li {
    font-size: 14px;
    color: ${PANEL_TEXT_SECONDARY};
  }
`;
