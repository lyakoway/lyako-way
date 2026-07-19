import styled from "styled-components";
import {
  PANEL_TEXT,
  PANEL_TEXT_SECONDARY,
  PANEL_TEXT_MUTED,
  PANEL_BORDER,
} from "src/common/lib/panelStyles";

export const Breadcrumb = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-bottom: 18px;
  font-size: 13px;
  color: ${PANEL_TEXT_MUTED};


  a {
    color: ${PANEL_TEXT_SECONDARY};
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.color.basic.primaryLight};
    }
  }
`;

export const Crumb = styled.span`
  color: ${PANEL_TEXT};
`;

export const Sep = styled.span`
  color: ${PANEL_TEXT_MUTED};
`;

export const Lead = styled.p`
  margin: 16px 0 0;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 17px;
  font-weight: 300;
  line-height: 1.5;
`;

export const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 14px;
  margin-top: 18px;
  padding-bottom: 22px;
  border-bottom: 1px solid ${PANEL_BORDER};
`;

export const MetaDate = styled.span`
  color: ${PANEL_TEXT_MUTED};
  font-size: 13px;
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
  padding: 4px 10px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${PANEL_BORDER};
  color: ${PANEL_TEXT};
  font-size: 12px;
  font-weight: 500;
`;

export const Body = styled.div`
  margin-top: 24px;

  p {
    margin: 0 0 16px;
    color: ${PANEL_TEXT_SECONDARY};
    font-size: 16px;
    font-weight: 300;
    line-height: 1.7;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const NotFound = styled.p`
  margin-top: 20px;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 15px;

  a {
    color: ${({ theme }) => theme.color.basic.primaryLight};
    text-decoration: none;
  }
`;
