import styled from "styled-components";
import { gradientBorder } from "src/ui/Card";
import {
  PANEL_TEXT,
  PANEL_TEXT_SECONDARY,
  PANEL_ELEVATED_HOVER,
} from "src/common/lib/panelStyles";

export const AboutText = styled.div`
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 15px;
  font-weight: 300;
  line-height: 1.7;

  p {
    margin: 0 0 14px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  /* Первый абзац — вводный: крупнее и светлее (lead). */
  p:first-of-type {
    color: ${PANEL_TEXT};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
  }

  @media (min-width: 580px) {
    font-size: 16px;

    p:first-of-type {
      font-size: 18px;
    }
  }
`;

export const HighlightsSection = styled.section`
  margin-top: 36px;
`;

export const HighlightsTitle = styled.h3`
  margin: 0 0 20px;
  color: ${PANEL_TEXT};
  font-size: 18px;
  font-weight: 600;

  @media (min-width: 580px) {
    font-size: 24px;
  }
`;

export const HighlightsGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 16px 18px;
  }
`;

export const HighlightCard = styled.li`
  ${gradientBorder};
  padding: 18px;
  ${({ theme }) => theme.shadow.ClickableDefault};
  transition: border-color 0.25s ease, background 0.25s ease,
    transform 0.25s ease;

  /* выделение при наведении — как на «Резюме», + лёгкий подъём */
  &:hover {
    background: ${PANEL_ELEVATED_HOVER};
    border-color: rgba(255, 255, 255, 0.22);
    transform: translateY(-2px);
  }

  @media (min-width: 580px) {
    padding: 22px;
  }
`;

export const HighlightCardTitle = styled.h4`
  position: relative;
  margin: 0 0 10px;
  padding-left: 14px;
  color: ${PANEL_TEXT};
  font-size: 16px;
  font-weight: 600;

  /* акцентная метка (штрих) слева */
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 3px;
    bottom: 3px;
    width: 4px;
    border-radius: 2px;
    background: ${({ theme }) => theme.color.basic.primary};
  }
`;

export const HighlightCardText = styled.p`
  margin: 0;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 14px;
  font-weight: 300;
  line-height: 1.6;
`;
