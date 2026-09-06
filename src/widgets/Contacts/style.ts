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
import { runningBorder } from "src/common/lib/runningBorder";
import { pressedFill } from "src/common/lib/usePressAnimation";

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

export const LinkItem = styled.a<{ $pressed?: boolean }>`
  ${runningBorder}
  ${pressedFill}
  display: inline-flex;
  align-items: center;
  gap: 9px;
  height: 40px;
  padding: 0 16px;
  border-radius: 12px;
  background: ${PANEL_ELEVATED};
  border: 1px solid ${PANEL_BORDER};
  color: ${PANEL_TEXT};
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  /* Продавливание: при нажатии сжимается и возвращается */
  transition: transform 0.15s cubic-bezier(0.22, 1, 0.36, 1),
    background-color 1s ease-in-out, border-color 1s ease-in-out,
    color 0.4s ease;

  &:active {
    transform: scale(0.94);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:active {
      transform: none;
    }
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

/* ——— Новые разделы сверху страницы: hero, направления, доказательства ——— */

export const HeroSection = styled.header`
  margin: 0 0 30px;
  display: grid;
  gap: 10px;
`;

export const HeroTitle = styled.h3`
  margin: 0 0 2px;
  color: ${PANEL_TEXT};
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;

  @media (min-width: 580px) {
    font-size: 32px;
  }
`;

export const HeroRole = styled.div`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  color: ${PANEL_TEXT_MUTED};
`;

export const HeroText = styled.p`
  margin: 4px 0 0;
  max-width: 640px;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 15px;
  font-weight: 300;
  line-height: 1.6;

  @media (min-width: 580px) {
    font-size: 16px;
  }
`;

export const HeroChips = styled.p`
  margin: 2px 0 0;
  color: ${({ theme }) => theme.color.basic.primary};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.3px;
`;

export const HeroSubtitle = styled.p`
  margin: 0;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 14px;
  font-weight: 300;
  line-height: 1.6;
`;

// Шапка секции: иконка в плашке + капс-заголовок (как на /profile).
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

/* What can I help with — сетка 2×3 */
export const HelpSection = styled.section`
  margin-top: 34px;
`;

export const HelpGrid = styled.ul`
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

export const HelpCard = styled.li`
  ${gradientBorder};
  padding: 18px;
  display: grid;
  gap: 8px;
  align-content: start;
  transition: border-color 0.25s ease, background 0.25s ease;

  &:hover {
    background: ${PANEL_ELEVATED_HOVER};
    border-color: rgba(255, 255, 255, 0.22);
  }

  @media (min-width: 580px) {
    padding: 20px;
  }
`;

export const HelpTitle = styled.h4`
  position: relative;
  margin: 0;
  padding-left: 11px;
  color: ${PANEL_TEXT};
  font-size: 14.5px;
  font-weight: 600;
  line-height: 1.4;

  /* акцентный штрих слева */
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

export const HelpText = styled.p`
  margin: 0;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 13.5px;
  font-weight: 300;
  line-height: 1.6;
`;

export const HelpPipeline = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;

  .arrow {
    color: ${PANEL_TEXT};
    font-size: 12px;
  }
`;

export const HelpChip = styled.span`
  padding: 4px 10px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${PANEL_BORDER};
  color: ${PANEL_TEXT};
  font-size: 11.5px;
  font-weight: 500;
  white-space: nowrap;
`;

/* AI Engineering in practice — доказательства в одну строку */
export const PracticeSection = styled.section`
  margin-top: 34px;
`;

export const StatsGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const StatCard = styled.li`
  ${gradientBorder};
  padding: 16px;
  display: grid;
  gap: 3px;
  align-content: start;
`;

export const StatValue = styled.div`
  color: ${PANEL_TEXT};
  font-size: 20px;
  font-weight: 700;
  white-space: nowrap;
`;

export const StatLabel = styled.div`
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 13px;
  font-weight: 500;
  line-height: 1.35;
`;

export const StatNote = styled.div`
  color: ${PANEL_TEXT_MUTED};
  font-size: 11.5px;
  font-weight: 300;
  line-height: 1.45;
`;

/* Let's discuss your task — подводка к контактам и форме */
export const DiscussSection = styled.section`
  margin-top: 34px;
`;

export const DiscussText = styled.p`
  margin: 0 0 10px;
  max-width: 720px;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 14px;
  font-weight: 300;
  line-height: 1.6;
`;
