import styled from "styled-components";
import {
  PANEL_TEXT,
  PANEL_TEXT_SECONDARY,
  PANEL_TEXT_MUTED,
  PANEL_BORDER,
  PANEL_ELEVATED,
} from "src/common/lib/panelStyles";

/* ——— Хлебные крошки ——— */

export const Breadcrumb = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-bottom: 18px;
  font-size: 13px;
  color: ${PANEL_TEXT_MUTED};

  /* На десктопе навбар абсолютно позиционирован в правом-верхнем углу секции
     (top:0, right:0). Опускаем крошки и весь контент ниже навбара, чтобы
     широкие крошки/заголовок не заезжали под него. */
  @media (min-width: 1024px) {
    margin-top: 68px;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: ${PANEL_TEXT_SECONDARY};
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.color.basic.primaryLight};
    }
  }

  svg {
    width: 15px;
    height: 15px;
  }
`;

export const Crumb = styled.span`
  color: ${PANEL_TEXT};
`;

export const Sep = styled.span`
  color: ${PANEL_TEXT_MUTED};
`;

/* ——— Мета-информация ——— */

export const MetaList = styled.dl`
  margin: 22px 0 0;
  display: grid;
  gap: 14px;
`;

export const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 6px 12px;
`;

export const MetaLabel = styled.dt`
  min-width: 130px;
  color: ${PANEL_TEXT_MUTED};
  font-size: 14px;
`;

export const MetaValue = styled.dd`
  margin: 0;
  color: ${PANEL_TEXT};
  font-size: 14px;
  font-weight: 500;

  a {
    color: ${({ theme }) => theme.color.basic.primaryLight};
    text-decoration: none;
    word-break: break-all;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const TechChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;

export const Chip = styled.span`
  padding: 4px 10px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${PANEL_BORDER};
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 12px;
`;

/* ——— Описание ——— */

export const Desc = styled.div`
  margin-top: 26px;
  padding-top: 22px;
  border-top: 1px solid ${PANEL_BORDER};

  p {
    margin: 0 0 10px;
    color: ${PANEL_TEXT_SECONDARY};
    font-size: 15px;
    font-weight: 300;
    line-height: 1.65;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

/* ——— Скриншоты ——— */

export const Preview = styled.div`
  margin-top: 28px;
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const PreviewFrame = styled.button`
  display: block;
  width: 100%;
  padding: 0;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${PANEL_BORDER};
  background: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: border-color 0.25s ease, transform 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.basic.primaryLight};
    transform: translateY(-2px);
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

// Картинка в модалке-лайтбоксе: вписывается во вьюпорт.
export const ModalImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;

  img {
    display: block;
    width: 100%;
    height: auto;
    max-height: 88vh;
    object-fit: contain;
    border-radius: 6px;
  }
`;

/* ——— Кнопки-ссылки ——— */

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 26px;
`;

const buttonBase = `
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 20px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const ButtonPrimary = styled.a`
  ${buttonBase};
  background: ${({ theme }) => theme.color.basic.primary};
  color: #ffffff;

  &:hover {
    background: ${({ theme }) => theme.color.basic.hover};
  }
`;

export const ButtonSecondary = styled.a`
  ${buttonBase};
  background: ${PANEL_ELEVATED};
  border: 1px solid ${PANEL_BORDER};
  color: ${PANEL_TEXT};

  &:hover {
    border-color: ${({ theme }) => theme.color.basic.primaryLight};
    color: ${({ theme }) => theme.color.basic.primaryLight};
  }
`;

/* ——— Не найдено ——— */

export const NotFound = styled.p`
  margin-top: 20px;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 15px;
`;
