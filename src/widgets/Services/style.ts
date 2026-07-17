import styled from "styled-components";
import { gradientBorder } from "src/ui/Card";
import { PANEL_TEXT, PANEL_TEXT_SECONDARY } from "src/common/lib/panelStyles";

export const ServiceSection = styled.section`
  margin-top: 10px;
`;

export const ServiceTitle = styled.h3`
  margin: 0 0 20px;
  color: ${PANEL_TEXT};
  font-size: 18px;
  font-weight: 600;

  @media (min-width: 580px) {
    font-size: 24px;
  }
`;

export const ServiceList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 20px 25px;
  }
`;

export const ServiceItem = styled.li`
  ${gradientBorder};
  padding: 20px;
  ${({ theme }) => theme.shadow.ClickableDefault};

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;

  @media (min-width: 580px) {
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
    gap: 18px;
    padding: 30px;
  }
`;

export const ServiceIconBox = styled.div`
  flex-shrink: 0;
  color: ${({ theme }) => theme.color.basic.primary};

  svg {
    width: 40px;
    height: 40px;
  }

  /* иконки имеют inline fill — красим в акцент */
  svg [fill] {
    fill: currentColor;
  }
`;

export const ServiceItemTitle = styled.h4`
  margin: 0 0 7px;
  color: ${PANEL_TEXT};
  font-size: 16px;
  font-weight: 500;

  @media (min-width: 580px) {
    font-size: 18px;
  }
`;

export const ServiceItemText = styled.p`
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 14px;
  font-weight: 300;
  line-height: 1.6;
`;
