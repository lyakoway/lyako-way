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

// Шапка секции /profile: иконка в плашке + капс-заголовок — как секции
// внутри карточек опыта на /cv.
export const HeadRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 12px;

  ${StackLabel} {
    margin: 0;
  }
`;

export const HeadIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${PANEL_BORDER};
  color: ${PANEL_TEXT};

  svg {
    width: 14px;
    height: 14px;
  }
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
  color: ${PANEL_TEXT_MUTED};
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
  color: ${PANEL_TEXT};
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
    position: relative;
    display: block;
    margin: 0 0 8px;
    padding-left: 14px;
    color: ${PANEL_TEXT_MUTED};
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;

    /* акцентная точка слева — как маркеры списков выше */
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${({ theme }) => theme.color.basic.primary};
    }
  }
`;

export const StackGroupTitle = styled.h4`
  margin: 14px 0 8px;
  color: ${PANEL_TEXT};
  font-size: 14px;
  font-weight: 600;
`;

// Пайплайн: чипы-шаги, стрелки между ними — снаружи и белые.
export const PipelineFlow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin: 14px 0;

  .arrow {
    color: ${PANEL_TEXT};
  }
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

  /* Ссылка на страницу портфолио: цвет заголовка, белая стрелка-индикатор
     и подсветка при наведении. */
  a {
    color: inherit;
    text-decoration: none;

    &::after {
      content: " ↗";
      color: inherit;
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

/* ——— Мой подход: принципы дорожками — как «Схема проекта» в портфолио ——— */

// Схема принципов: слева ствол с оранжевыми узлами, справа по карточке
// на принцип, между карточками — коннекторы потока.
export const ApproachDiagram = styled.div`
  position: relative;

  /* ствол дерева */
  &::before {
    content: "";
    position: absolute;
    left: 6px;
    top: 12px;
    bottom: 12px;
    width: 2px;
    background: ${PANEL_BORDER};
  }
`;

// Дорожка = узел на стволе + карточка принципа.
export const ApproachLane = styled.div`
  position: relative;
  padding-left: 34px;

  /* горизонтальная ветка от узла к карточке */
  &::before {
    content: "";
    position: absolute;
    top: 22px;
    left: 13px;
    width: 21px;
    height: 2px;
    background: ${PANEL_BORDER};
  }

  /* оранжевый узел на стволе; кольцо цвета фона отбивает его от линий */
  &::after {
    content: "";
    position: absolute;
    top: 16px;
    left: 1px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.basic.primary};
    box-shadow: 0 0 0 4px var(--panel-bg);
    z-index: 1;
  }
`;

// Карточка принципа: заголовок-штрих + текст + чипы.
export const ApproachCard = styled.div`
  background: ${PANEL_ELEVATED};
  border: 1px solid ${PANEL_BORDER};
  border-radius: 12px;
  padding: 14px 16px;
  display: grid;
  gap: 10px;
  transition:
    border-color 0.25s ease,
    background 0.25s ease;

  &:hover {
    background: ${PANEL_ELEVATED_HOVER};
    border-color: rgba(255, 255, 255, 0.22);
  }
`;

export const ApproachCardTitle = styled.p`
  position: relative;
  margin: 0;
  padding-left: 11px;
  color: ${PANEL_TEXT_MUTED};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  line-height: 1.4;

  /* акцентная метка-штрих слева */
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 1px;
    bottom: 1px;
    width: 3px;
    border-radius: 2px;
    background: ${({ theme }) => theme.color.basic.primary};
  }
`;

export const ApproachCardText = styled.p`
  margin: 0;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 14px;
  font-weight: 300;
  line-height: 1.6;
`;

export const ApproachNodes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

// Нода-чип принципа — как ноды схемы проекта.
export const ApproachNode = styled.div`
  background: ${PANEL_ELEVATED_HOVER};
  border: 1px solid ${PANEL_BORDER};
  border-radius: 10px;
  padding: 8px 12px;
  min-width: 0;
`;

export const ApproachNodeLabel = styled.span`
  color: ${PANEL_TEXT};
  font-size: 13px;
  font-weight: 500;
  line-height: 1.35;
`;

// Коннектор между дорожками: белая линия с шевроном, по центру колонки
// карточек (34px слева занимает дерево).
export const ApproachFlow = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 26px;
  margin-left: 34px;
  font-size: 0;
  user-select: none;

  &::before {
    content: "";
    position: absolute;
    top: 3px;
    bottom: 8px;
    width: 2px;
    border-radius: 1px;
    background: linear-gradient(180deg, ${PANEL_BORDER}, ${PANEL_TEXT});
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 2px;
    width: 7px;
    height: 7px;
    border-right: 2px solid ${PANEL_TEXT};
    border-bottom: 2px solid ${PANEL_TEXT};
    transform: rotate(45deg);
  }
`;

export const CycleBlock = styled.div`
  margin-top: 26px;
`;

// Акцентный текст-цитата: оранжевая линия слева (End-to-End, «Развитие»).
export const AccentText = styled(AboutText)`
  margin-top: 14px;
  padding-left: 12px;
  border-left: 3px solid ${({ theme }) => theme.color.basic.primary};
`;
