import styled from "styled-components";
import {
  PANEL_TEXT,
  PANEL_TEXT_SECONDARY,
  PANEL_TEXT_MUTED,
  PANEL_ELEVATED,
  PANEL_ELEVATED_HOVER,
  PANEL_BORDER,
} from "src/common/lib/panelStyles";

/* ——— Hero: роль, тезис, подзаголовок — как на /profile ——— */

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
  margin: 0 0 12px;
  color: ${PANEL_TEXT};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;

  @media (min-width: 580px) {
    font-size: 22px;
  }
`;

export const HeroSubtitle = styled.p`
  margin: 0;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 15px;
  font-weight: 300;
  line-height: 1.6;

  @media (min-width: 580px) {
    font-size: 16px;
  }
`;

/* ——— Шапка секции: иконка в плашке + капс-заголовок — как на /profile ——— */

export const SectionHead = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 12px;
`;

export const SectionIcon = styled.span`
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

export const SectionTitle = styled.h3`
  margin: 0;
  color: ${PANEL_TEXT_MUTED};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

/* ——— Карточка услуги: номер + капс-заголовок со штрихом — язык схемы
   проекта; содержимое опционально: список, пайплайн, строки стека, сноски ——— */

export const ServiceCard = styled.section`
  background: ${PANEL_ELEVATED};
  border: 1px solid ${PANEL_BORDER};
  border-radius: 12px;
  padding: 18px 16px;
  display: grid;
  gap: 10px;
  transition:
    border-color 0.25s ease,
    background 0.25s ease;

  &:hover {
    background: ${PANEL_ELEVATED_HOVER};
    border-color: rgba(255, 255, 255, 0.22);
  }

  @media (min-width: 580px) {
    padding: 22px;
  }
`;

export const ServiceCardTitle = styled.h4`
  position: relative;
  margin: 0;
  padding-left: 11px;
  color: ${PANEL_TEXT_MUTED};
  font-size: 13px;
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

  .num {
    color: ${PANEL_TEXT};
  }
`;

export const ServiceCardText = styled.p`
  margin: 0;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 14px;
  font-weight: 300;
  line-height: 1.6;
`;

// Подпись блока внутри карточки («Что реализую», «Фокус»…).
export const CardListLabel = styled.p`
  margin: 6px 0 0;
  color: ${PANEL_TEXT_MUTED};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

// Список «Что реализую» — маркеры-точки, как в «Обо мне».
export const CardList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 6px;

  li {
    position: relative;
    padding-left: 16px;
    color: ${PANEL_TEXT_SECONDARY};
    font-size: 13.5px;
    font-weight: 300;
    line-height: 1.55;

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

// Пайплайн: чипы-шаги, белые стрелки между ними (как на /profile).
export const PipelineFlow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin: 4px 0;

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

// Строка «направление → стек» (карточка 05): точка слева, без подложки.
export const TechRow = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 10px;
  padding-left: 16px;

  &::before {
    content: "";
    position: absolute;
    left: 2px;
    top: 7px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.basic.primary};
  }

  /* зазор между строками стека */
  & + & {
    margin-top: 8px;
  }
`;

export const TechRowLabel = styled.span`
  color: ${PANEL_TEXT};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  /* тире-разделитель перед технологиями */
  &::after {
    content: " —";
    color: ${PANEL_TEXT_MUTED};
    font-weight: 400;
  }
`;

export const TechRowValue = styled.span`
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 13px;
  font-weight: 300;
  line-height: 1.5;
`;

// Сноска под карточкой — приглушённый текст.
export const CardFootnote = styled.p`
  margin: 0;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 13px;
  font-weight: 300;
  line-height: 1.6;
`;

export const CardTechNote = styled.p`
  margin: 0;
  color: ${PANEL_TEXT_MUTED};
  font-size: 12.5px;
  font-weight: 400;
  letter-spacing: 0.3px;
`;

/* ——— Дерево слева: ствол с оранжевыми узлами + карточки-дорожки ——— */

export const Tree = styled.div`
  position: relative;
  margin-top: 14px;

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

export const TreeLane = styled.div`
  position: relative;
  padding-left: 34px;

  /* горизонтальная ветка от ствола к карточке */
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

  & + & {
    margin-top: 12px;
  }

  /* Карточка внутри дорожки — без собственных вертикальных отступов. */
  > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  /* До 580px: круг мельче (10px), ветка от круга до блока вдвое короче. */
  @media (max-width: 579px) {
    padding-left: 22px;

    &::before {
      left: 12px;
      width: 10px;
    }

    &::after {
      top: 17px;
      left: 2px;
      width: 10px;
      height: 10px;
    }
  }
`;

/* ——— Как я работаю: шаги + цепочка цикла ——— */

export const ProcessSection = styled.section`
  margin-top: 34px;
`;

export const StepCard = styled.div`
  background: ${PANEL_ELEVATED};
  border: 1px solid ${PANEL_BORDER};
  border-radius: 12px;
  padding: 14px 16px;
  display: grid;
  gap: 6px;
  transition:
    border-color 0.25s ease,
    background 0.25s ease;

  &:hover {
    background: ${PANEL_ELEVATED_HOVER};
    border-color: rgba(255, 255, 255, 0.22);
  }
`;

export const StepTitle = styled.h4`
  position: relative;
  margin: 0;
  padding-left: 11px;
  color: ${PANEL_TEXT_MUTED};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  line-height: 1.4;

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

  .num {
    color: ${PANEL_TEXT};
  }
`;

export const StepText = styled.p`
  margin: 0;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 13.5px;
  font-weight: 300;
  line-height: 1.55;
`;

// Итоговая цепочка цикла под шагами.
export const CycleFlow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-top: 14px;

  .arrow {
    color: ${PANEL_TEXT};
  }
`;

export const CycleStep = styled.span`
  padding: 6px 12px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${PANEL_BORDER};
  color: ${PANEL_TEXT};
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
`;

/* ——— Что получает заказчик: сетка карточек 2 колонки ——— */

export const ResultsSection = styled.section`
  margin-top: 34px;
`;

export const ResultsGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 14px 18px;
  }
`;

export const ResultCard = styled.li`
  background: ${PANEL_ELEVATED};
  border: 1px solid ${PANEL_BORDER};
  border-radius: 12px;
  padding: 16px 18px;
  transition:
    border-color 0.25s ease,
    background 0.25s ease;

  &:hover {
    background: ${PANEL_ELEVATED_HOVER};
    border-color: rgba(255, 255, 255, 0.22);
  }
`;

export const ResultTitle = styled.h4`
  position: relative;
  margin: 0 0 8px;
  padding-left: 11px;
  color: ${PANEL_TEXT};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;

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

export const ResultText = styled.p`
  margin: 0;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 13.5px;
  font-weight: 300;
  line-height: 1.6;
`;

/* ——— CTA: акцентная карточка со ссылкой на /contacts ——— */

export const CtaSection = styled.section`
  margin-top: 34px;
`;

export const CtaCard = styled.div`
  position: relative;
  border-radius: 14px;
  padding: 22px 18px;
  background: ${PANEL_ELEVATED};
  border: 1px solid ${({ theme }) => theme.color.basic.primary};
  display: grid;
  gap: 12px;

  @media (min-width: 580px) {
    padding: 26px;
  }
`;

export const CtaTitle = styled.h3`
  margin: 0;
  color: ${PANEL_TEXT};
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;

  @media (min-width: 580px) {
    font-size: 22px;
  }
`;

export const CtaText = styled.p`
  margin: 0;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 14px;
  font-weight: 300;
  line-height: 1.6;
`;

// Строка «Демо: RAG Chat · AI Data Pilot» — ссылки-кейсы: белые, жирные,
// со стрелкой ↗ (как заголовки продуктов на /profile), оранжевые при наведении.
export const CtaCases = styled.p`
  margin: 0;
  color: ${PANEL_TEXT_MUTED};
  font-size: 14px;

  .label {
    color: ${PANEL_TEXT_MUTED};
  }

  a {
    color: ${PANEL_TEXT};
    font-weight: 600;
    text-decoration: none;
    transition: color 0.25s ease;

    &::after {
      content: " ↗";
      color: inherit;
    }

    &:hover {
      color: ${({ theme }) => theme.color.basic.primary};
    }
  }
`;

export const CtaLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
  color: ${PANEL_TEXT};
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.25s ease;

  .arrow {
    transition: transform 0.25s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.color.basic.primary};

    .arrow {
      transform: translateX(4px);
    }
  }
`;
