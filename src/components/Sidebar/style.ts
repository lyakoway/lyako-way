import styled from "styled-components";
import { gradientBorder } from "src/ui/Card";
import {
  PANEL_TEXT,
  PANEL_TEXT_SECONDARY,
  PANEL_TEXT_MUTED,
  PANEL_BORDER,
  PANEL_ELEVATED,
  PANEL_ELEVATED_HOVER,
} from "src/common/lib/panelStyles";

// Визитка в стиле vCard: на мобайле сворачивается (виден только верх),
// «Показать контакты» раскрывает; на десктопе (≥1024px) всегда развёрнута
// и «прилипает» слева.
export const SidebarWrapper = styled.aside<{ $active: boolean }>`
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 20px;
  background: ${({ theme }) => theme.color.background.primaryHeaderWrapper};
  border: 1px solid ${PANEL_BORDER};
  max-height: ${({ $active }) => ($active ? "480px" : "112px")};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
  ${({ theme }) => theme.shadow.NonClickable};

  @media (min-width: 580px) {
    padding: 30px;
    margin-bottom: 30px;
    max-height: ${({ $active }) => ($active ? "640px" : "180px")};
  }

  @media (min-width: 1024px) {
    position: sticky;
    top: 60px;
    max-height: max-content;
    margin-bottom: 0;
    padding-top: 60px;
  }
`;

export const SidebarInfo = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;

  @media (min-width: 580px) {
    gap: 25px;
  }

  @media (min-width: 1024px) {
    flex-direction: column;
  }
`;

export const AvatarBox = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: ${PANEL_ELEVATED};
  border: 1px solid ${PANEL_BORDER};

  svg {
    width: 60px;
    height: 60px;
  }

  @media (min-width: 580px) {
    width: 120px;
    height: 120px;
    border-radius: 30px;

    svg {
      width: 90px;
      height: 90px;
    }
  }
`;

export const InfoContent = styled.div`
  @media (min-width: 1024px) {
    text-align: center;
  }
`;

export const Name = styled.h1`
  margin: 0 0 10px;
  color: ${PANEL_TEXT};
  font-size: 17px;
  font-weight: 500;
  letter-spacing: -0.25px;

  @media (min-width: 580px) {
    font-size: 26px;
    margin-bottom: 15px;
  }

  @media (min-width: 1024px) {
    white-space: nowrap;
    text-align: center;
  }
`;

export const JobTitle = styled.p`
  width: max-content;
  padding: 3px 12px;
  border-radius: 8px;
  color: ${PANEL_TEXT_SECONDARY};
  background: ${PANEL_ELEVATED};
  font-size: 12px;
  font-weight: 300;

  @media (min-width: 1024px) {
    margin: 0 auto;
  }
`;

export const MoreBtn = styled.button`
  ${gradientBorder};
  position: absolute;
  top: -15px;
  right: -15px;
  padding: 10px;
  border: none;
  border-radius: 0 15px;
  color: ${({ theme }) => theme.color.basic.primary};
  font-size: 13px;
  cursor: pointer;
  ${({ theme }) => theme.shadow.ClickableDefault};

  span {
    display: none;
  }

  &:hover {
    color: ${({ theme }) => theme.color.basic.hover};
  }

  @media (min-width: 580px) {
    top: -30px;
    right: -30px;
    padding: 10px 15px;

    span {
      display: block;
      font-size: 12px;
    }
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const SidebarMore = styled.div<{ $active: boolean }>`
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  visibility: ${({ $active }) => ($active ? "visible" : "hidden")};
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;

  @media (min-width: 1024px) {
    opacity: 1;
    visibility: visible;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  margin: 16px 0;
  background: ${PANEL_BORDER};

  @media (min-width: 580px) {
    margin: 24px 0;
  }
`;

export const ContactsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
    gap: 30px 15px;
  }
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 100%;
`;

export const ContactInfo = styled.div`
  max-width: calc(100% - 46px);

  a,
  address {
    color: ${PANEL_TEXT};
    font-size: 13px;
    text-decoration: none;
    font-style: normal;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  a:hover {
    color: ${({ theme }) => theme.color.basic.primaryLight};
  }
`;

export const ContactTitle = styled.p`
  margin: 0 0 2px;
  color: ${PANEL_TEXT_MUTED};
  font-size: 12px;
  text-transform: uppercase;
`;

export const MessengerLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${PANEL_TEXT};
    transition: color 0.2s ease, transform 0.2s ease;
  }

  a:hover {
    color: ${({ theme }) => theme.color.basic.primaryLight};
    transform: translateY(-1px);
  }

  a svg {
    width: 20px;
    height: 20px;
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding-top: 4px;
`;

// Квадратная плашка вокруг каждой кнопки (лайк / тема / язык), чтобы каждая
// читалась как отдельная кнопка — в стиле IconBox контактов.
export const ControlItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  padding: 0;
  border-radius: 12px;
  background: ${PANEL_ELEVATED};
  border: 1px solid ${PANEL_BORDER};
  transition: border-color 0.2s ease, background 0.2s ease;

  &:hover {
    background: ${PANEL_ELEVATED_HOVER};
    border-color: rgba(255, 255, 255, 0.22);
  }
`;
