import styled from "styled-components";
import { gradientBorder } from "src/ui/Card";
import {
  PANEL_TEXT,
  PANEL_TEXT_SECONDARY,
  PANEL_TEXT_MUTED,
  PANEL_BORDER,
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

// Факты после вводного абзаца — списком с маркерами (сканируется легче, чем
// набор одиночных абзацев).
export const AboutBullets = styled.ul`
  margin: 16px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 10px;

  li {
    position: relative;
    padding-left: 18px;
    color: ${PANEL_TEXT_SECONDARY};
    font-size: 15px;
    font-weight: 300;
    line-height: 1.6;

    &::before {
      content: "";
      position: absolute;
      left: 2px;
      top: 10px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${({ theme }) => theme.color.basic.primary};
    }
  }

  @media (min-width: 580px) {
    li {
      font-size: 16px;
    }
  }
`;

// Стек технологий — компактные «чипы» вместо перечисления внутри абзаца.
export const StackBlock = styled.section`
  margin-top: 22px;
`;

// h3 (а не h4): подраздел «Обо Мне» одного уровня с «Ключевые моменты»,
// иначе после h2 идёт пропуск уровня (h2→h4) — ошибка порядка заголовков.
export const StackLabel = styled.h3`
  margin: 0 0 12px;
  color: ${PANEL_TEXT_MUTED};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const StackList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StackChip = styled.li`
  padding: 6px 12px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${PANEL_BORDER};
  color: ${PANEL_TEXT};
  font-size: 13px;
  font-weight: 500;
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
  transition: border-color 0.25s ease, background 0.25s ease;

  /* Выделение при наведении — только цветом: карточка не кликабельна, и
     сдвиг/подъём воспринимался как приглашение нажать. */
  &:hover {
    background: ${PANEL_ELEVATED_HOVER};
    border-color: rgba(255, 255, 255, 0.22);
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

/* ——— Страница /profile: Hero, статистика, секции, пайплайны, продукты ——— */

export const HeroSection = styled.header`
  margin: 0 0 30px;
`;

export const HeroRole = styled.div`
  margin: 0 0 10px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.basic.primary};
`;

export const HeroTagline = styled.p`
  margin: 0 0 20px;
  color: ${PANEL_TEXT};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;

  @media (min-width: 580px) {
    font-size: 22px;
  }
`;

export const StatsGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: 580px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StatCard = styled.li`
  ${gradientBorder};
  padding: 16px 18px;
`;

export const StatValue = styled.div`
  margin: 0 0 4px;
  color: ${({ theme }) => theme.color.basic.primary};
  font-size: 22px;
  font-weight: 700;
`;

export const StatLabel = styled.div`
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 13px;
  font-weight: 300;
`;

// Секция страницы — заголовок + контент.
// Часть вложенных блоков рендерится классами (карточки «Что я создаю»,
// строка «Стек» продукта, группы технологического стека) — стили для них
// живут здесь же.
export const SectionBlock = styled.section`
  margin-top: 34px;

  /* Карточка «Что я создаю» — в языке карточек продуктов. */
  .create-card {
    ${gradientBorder};
    padding: 18px;

    & + .create-card {
      margin-top: 14px;
    }

    @media (min-width: 580px) {
      padding: 22px;
    }
  }

  .create-card-title {
    position: relative;
    margin: 0 0 10px;
    padding-left: 14px;
    color: ${PANEL_TEXT};
    font-size: 16px;
    font-weight: 600;

    /* акцентная метка (штрих) слева — как в карточках продуктов */
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
  }

  /* Строка «Стек: …» в карточке продукта. */
  .product-stack {
    margin: 12px 0 0;
    font-size: 13px;
    line-height: 1.6;
  }

  .stack-label {
    color: ${PANEL_TEXT_MUTED};
  }

  .stack-items {
    color: ${PANEL_TEXT_SECONDARY};
  }

  /* Группы технологического стека: подпись + чипы. */
  .stack-section-row {
    margin-top: 16px;

    &:first-of-type {
      margin-top: 0;
    }
  }

  .stack-section-label {
    display: block;
    margin: 0 0 8px;
    color: ${PANEL_TEXT_MUTED};
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
`;

export const StackGroupTitle = styled.h4`
  margin: 14px 0 8px;
  color: ${PANEL_TEXT};
  font-size: 14px;
  font-weight: 600;
`;

// Пайплайн: чипы-шаги со стрелками.
export const PipelineFlow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin: 14px 0;
`;

export const PipelineStep = styled.span`
  padding: 6px 12px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${PANEL_BORDER};
  color: ${PANEL_TEXT};
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;

  .arrow {
    margin-left: 10px;
    color: ${({ theme }) => theme.color.basic.primary};
  }

  &:last-child .arrow {
    display: none;
  }
`;

// Карточка продукта / принципа.
export const ProductCard = styled.div`
  ${gradientBorder};
  padding: 18px;
  margin-bottom: 14px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 580px) {
    padding: 22px;
  }
`;

export const ProductTitle = styled.h4`
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

  /* Ссылка на страницу портфолио: цвет заголовка, стрелка-индикатор
     и подсветка при наведении. */
  a {
    color: inherit;
    text-decoration: none;

    &::after {
      content: " ↗";
      color: ${({ theme }) => theme.color.basic.primary};
      font-size: 14px;
    }

    &:hover {
      color: ${({ theme }) => theme.color.basic.primary};
    }
  }
`;

// Карточка навыка на странице /profile.
export const SkillCard = styled.div`
  ${gradientBorder};
  padding: 18px;
  margin-bottom: 14px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 580px) {
    padding: 22px;
  }
`;

export const SkillCardTitle = styled.h4`
  position: relative;
  margin: 0 0 10px;
  padding-left: 14px;
  color: ${PANEL_TEXT};
  font-size: 16px;
  font-weight: 600;

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

export const SkillCardText = styled.p`
  margin: 0 0 12px;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 14px;
  font-weight: 300;
  line-height: 1.6;
`;

export const SectionNote = styled.p`
  margin: 14px 0 0;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 14px;
  font-weight: 300;
  line-height: 1.6;
`;

/* ——— Мой подход к AI Engineering: принципы и цикл ——— */

export const ApproachItem = styled.div`
  margin-bottom: 18px;
`;

export const ApproachHead = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 6px;
`;

export const ApproachNum = styled.span`
  color: ${({ theme }) => theme.color.basic.primary};
  font-size: 13px;
  font-weight: 700;
`;

export const ApproachTitle = styled.span`
  color: ${PANEL_TEXT};
  font-size: 15px;
  font-weight: 600;
`;

export const CycleBlock = styled.div`
  margin-top: 26px;
`;
