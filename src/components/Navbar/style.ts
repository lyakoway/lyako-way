import styled from "styled-components";
import {
  PANEL_TEXT,
  PANEL_TEXT_SECONDARY,
  PANEL_BORDER,
} from "src/common/lib/panelStyles";

// Навбар vCard: на мобайле фиксирован снизу (стеклянная плашка),
// на десктопе (≥1024px) — абсолютно в правом верхнем углу контента.
export const NavbarWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  border: 1px solid ${PANEL_BORDER};
  border-radius: 12px 12px 0 0;
  /* темнее панелей — притемняем сланцевый фон под навбаром */
  background: ${({ theme }) =>
    theme.name === "light" ? "#39424c" : "#131519"};
  backdrop-filter: blur(10px);
  ${({ theme }) => theme.shadow.NonClickable};

  @media (min-width: 580px) {
    border-radius: 20px 20px 0 0;
  }

  @media (min-width: 1024px) {
    position: absolute;
    top: 0;
    left: auto;
    right: 0;
    bottom: auto;
    width: max-content;
    padding: 0 20px;
    border-radius: 0 20px;
    box-shadow: none;
  }
`;

export const NavbarList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0;
  margin: 0;
  padding: 0 10px;
  list-style: none;

  @media (min-width: 580px) {
    gap: 20px;
  }

  @media (min-width: 1024px) {
    gap: 30px;
    padding: 0 20px;
  }
`;

export const NavbarItem = styled.li`
  a {
    display: block;
    padding: 20px 7px;
    color: ${PANEL_TEXT_SECONDARY};
    font-size: 12px;
    text-decoration: none;
    text-transform: capitalize;
    transition: color 0.25s ease;
  }

  a:hover,
  a:focus {
    color: ${PANEL_TEXT};
  }

  a[data-active="true"] {
    color: ${({ theme }) => theme.color.basic.primaryLight};
    font-weight: 500;
  }

  @media (min-width: 580px) {
    a {
      font-size: 14px;
    }
  }

  @media (min-width: 768px) {
    a {
      font-size: 15px;
    }
  }
`;
