import styled from "styled-components";
import {
  PANEL_TEXT,
  PANEL_TEXT_SECONDARY,
  PANEL_BORDER,
  PANEL_ELEVATED,
} from "src/common/lib/panelStyles";

export const Intro = styled.p`
  margin: 0 0 28px;
  max-width: 640px;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 15px;
  font-weight: 300;
  line-height: 1.6;
`;

export const ContactBlock = styled.section`
  &:not(:last-child) {
    margin-bottom: 26px;
  }
`;

export const InfoText = styled.p`
  display: flex;
  align-items: center;
  gap: 9px;
  margin: 0;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 14px;

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    color: ${PANEL_TEXT};
  }
`;

export const SectionLabel = styled.h3`
  margin: 0 0 14px;
  color: ${PANEL_TEXT};
  font-size: 16px;
  font-weight: 600;

  @media (min-width: 580px) {
    font-size: 18px;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const LinkItem = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 10px 16px;
  border-radius: 12px;
  background: ${PANEL_ELEVATED};
  border: 1px solid ${PANEL_BORDER};
  color: ${PANEL_TEXT};
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.basic.primaryLight};
    color: ${({ theme }) => theme.color.basic.primaryLight};
    transform: translateY(-2px);
  }

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
`;

// Карточка со встроенной формой (фон модалки для корректных цветов полей).
export const FormCard = styled.div`
  margin-top: 32px;
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid ${PANEL_BORDER};
  background: ${PANEL_ELEVATED};
`;
