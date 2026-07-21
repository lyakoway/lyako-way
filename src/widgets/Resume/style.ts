import styled from "styled-components";
import {
  PANEL_TEXT,
  PANEL_TEXT_SECONDARY,
  PANEL_TEXT_MUTED,
  PANEL_BORDER,
  PANEL_ELEVATED,
  PANEL_ELEVATED_HOVER,
} from "src/common/lib/panelStyles";

/* Поверхность вложенной карточки поверх сланцевой панели раздела. */
const cardSurface = `
  background: ${PANEL_ELEVATED};
  border: 1px solid ${PANEL_BORDER};
  border-radius: 16px;
`;

/* ——— Кнопки действий ——— */

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 34px;
`;

const buttonBase = `
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 18px;
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

/* ——— Секции ——— */

export const Section = styled.section`
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const SectionHead = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
`;

export const SectionIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: ${PANEL_ELEVATED};
  border: 1px solid ${PANEL_BORDER};
  color: ${PANEL_TEXT};

  svg {
    width: 19px;
    height: 19px;
  }

  @media (min-width: 580px) {
    width: 40px;
    height: 40px;
    border-radius: 12px;

    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

export const SectionTitle = styled.h3`
  margin: 0;
  color: ${PANEL_TEXT};
  font-size: 19px;
  font-weight: 600;

  @media (min-width: 580px) {
    font-size: 22px;
  }
`;

/* ——— Таймлайн опыта (карточки) ——— */

export const Timeline = styled.ol`
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;

  /* ствол дерева слева — как в «Ключевых навыках» */
  &::before {
    content: "";
    position: absolute;
    left: 6px;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: ${PANEL_BORDER};
  }
`;

export const TimelineItem = styled.li`
  position: relative;
  /* дерево слева: ствол — на обёртке, карточка справа с местом под узел/ветку */
  padding-left: 34px;

  &:not(:last-child) {
    padding-bottom: 26px;
  }

  /* горизонтальная ветка от узла к карточке */
  &::before {
    content: "";
    position: absolute;
    top: 29px;
    left: 13px;
    width: 21px;
    height: 2px;
    background: ${PANEL_BORDER};
  }

  /* круглый узел на стволе — как точки в дереве навыков */
  &::after {
    content: "";
    position: absolute;
    top: 23px;
    left: 1px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.basic.primary};
    box-shadow: 0 0 0 4px ${({ theme }) =>
      theme.color.background.primaryHeaderWrapper};
    z-index: 1;
  }
`;

/* Универсальная карточка (опыт + образование). */
export const EntryCard = styled.div`
  ${cardSurface};
  padding: 18px;
  transition: border-color 0.25s ease, background 0.25s ease;

  &:hover {
    background: ${PANEL_ELEVATED_HOVER};
    border-color: ${({ theme }) => theme.color.basic.primaryLight};
  }

  @media (min-width: 580px) {
    padding: 22px 24px;
  }
`;

export const EntryHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 6px 14px;
`;

export const ItemRole = styled.h4`
  margin: 0;
  color: ${PANEL_TEXT};
  font-size: 16px;
  font-weight: 600;

  @media (min-width: 580px) {
    font-size: 18px;
  }
`;

export const ItemCompany = styled.p`
  margin: 3px 0 0;
  color: ${PANEL_TEXT};
  font-size: 14px;
  font-weight: 500;
`;

export const PeriodBadge = styled.span`
  flex-shrink: 0;
  padding: 5px 12px;
  border-radius: 999px;
  background: ${PANEL_ELEVATED};
  border: 1px solid ${PANEL_BORDER};
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
`;

export const ItemMeta = styled.p`
  margin: 10px 0 0;
  color: ${PANEL_TEXT_MUTED};
  font-size: 13px;
`;

export const ItemSummary = styled.p`
  margin: 12px 0 0;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 14px;
  font-weight: 300;
  line-height: 1.55;
`;

export const Group = styled.div`
  margin-top: 18px;
`;

export const GroupTitle = styled.p`
  margin: 0 0 8px;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

export const Bullets = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    padding-left: 18px;
    margin-bottom: 7px;
    color: ${PANEL_TEXT_SECONDARY};
    font-size: 14px;
    font-weight: 300;
    line-height: 1.55;

    &:last-child {
      margin-bottom: 0;
    }

    &::before {
      content: "";
      position: absolute;
      left: 2px;
      top: 9px;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: ${({ theme }) => theme.color.basic.primary};
    }
  }
`;

/* ——— Навыки (сетка карточек-категорий) ——— */

/* «Дерево навыков»: центральный ствол по середине, карточки-ветви
   чередуются слева/справа, каждая соединена с стволом горизонтальной
   веткой и квадратным узлом. На мобиле — обычная стопка карточек. */
export const SkillsTree = styled.div`
  position: relative;

  /* Ствол слева — дерево слева на всех ширинах. */
  &::before {
    content: "";
    position: absolute;
    left: 6px;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: ${PANEL_BORDER};
  }
`;

export const Branch = styled.div`
  position: relative;
  /* ствол слева, карточка справа — место под узел и ветку */
  padding-left: 34px;

  &:not(:last-child) {
    margin-bottom: 18px;
  }

  /* горизонтальная ветка от узла к карточке */
  &::before {
    content: "";
    position: absolute;
    top: 29px;
    left: 13px;
    width: 21px;
    height: 2px;
    background: ${PANEL_BORDER};
  }

  /* круглый узел на стволе — как точки в таймлайне опыта выше */
  &::after {
    content: "";
    position: absolute;
    top: 23px;
    left: 1px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.basic.primary};
    box-shadow: 0 0 0 4px
      ${({ theme }) => theme.color.background.primaryHeaderWrapper};
    z-index: 1;
  }
`;

export const SkillCard = styled.div`
  ${cardSurface};
  padding: 16px 18px;
  transition: border-color 0.25s ease, background 0.25s ease;

  /* подсветка border при наведении — как у карточек опыта выше */
  &:hover {
    background: ${PANEL_ELEVATED_HOVER};
    border-color: ${({ theme }) => theme.color.basic.primaryLight};
  }
`;

export const SkillHead = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
`;

export const SkillIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  border-radius: 9px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid ${PANEL_BORDER};
  color: ${PANEL_TEXT};

  svg {
    width: 17px;
    height: 17px;
  }
`;

export const SkillCategory = styled.p`
  margin: 0;
  color: ${PANEL_TEXT};
  font-size: 14px;
  font-weight: 600;
`;

export const ChipList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Chip = styled.li`
  padding: 6px 12px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${PANEL_BORDER};
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 13px;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  cursor: default;

  &:hover {
    color: ${PANEL_TEXT};
    border-color: rgba(255, 255, 255, 0.32);
    background: rgba(255, 255, 255, 0.1);
  }
`;

/* ——— Просмотр PDF в модалке ——— */
/* Контент рендерится внутри ModalComponent (фон theme.background.modal),
   поэтому здесь используем обычные цвета темы, а не сланцевые PANEL_*. */

export const PdfModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 85vh;
  overflow: hidden;
  border-radius: 8px;

  @media (max-width: 659px) {
    height: 100vh;
    border-radius: 0;
  }
`;

export const PdfModalHead = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  /* высота = 64px, чтобы центр заголовка (32px) совпал с центром общей
     кнопки-крестика модалки (top:20 + 24/2 = 32) и они были на одной линии */
  height: 64px;
  /* справа оставляем место под встроенную кнопку закрытия модалки */
  padding: 0 56px 0 20px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.text.primary};
  border-bottom: 1px solid ${({ theme }) => theme.color.basic.borderModal};
`;

export const PdfFrame = styled.iframe`
  flex: 1;
  width: 100%;
  border: 0;
`;
