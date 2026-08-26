import Link from "next/link";
import styled, { css } from "styled-components";
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

export const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 22px;

  /* <768px: кнопки остаются компактными (не во всю ширину каждая), но
     распределяются по строке и заполняют её целиком — как фильтры
     портфолио: каждая растёт от натурального размера, свободное место
     делится поровну. */
  @media (max-width: 767px) {
    button {
      flex: 1 0 auto;
      justify-content: center;
      text-align: center;
    }
  }
`;

export const FilterChip = styled.button<{
  $active?: boolean;
  $pressed?: boolean;
}>`
  ${runningBorder}
  ${pressedFill}
  display: inline-flex;
  align-items: center;
  height: 40px;
  padding: 0 16px;
  border-radius: 12px;
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

  /* Активный фильтр: заливка — primary, бордер — цвет бегунка (#ff8560),
     чтобы рамка читалась на фоне заливки */
  border: 1px solid ${({ $active }) => ($active ? "#ff8560" : PANEL_BORDER)};
  background: ${({ $active, theme }) =>
    $active ? theme.color.basic.primary : "rgba(255, 255, 255, 0.04)"};
  color: ${({ $active }) => ($active ? "#ffffff" : PANEL_TEXT_SECONDARY)};

  /* Активный фильтр при наведении/нажатии: белая подсветка-тень */
  ${({ $active }) =>
    $active &&
    css`
      &:hover,
      &:active {
        box-shadow: 0 0 12px rgba(255, 255, 255, 0.35),
          0 0 4px rgba(255, 255, 255, 0.2);
      }
    `}

  /* Активный фильтр: бегущая рамка раскрыта. Двойная специфичность (&&)
     чтобы гарантированно перекрывать runningBorder и pressedFill —
     рамка держится, пока фильтр выбран, не исчезает после отпускания. */
  ${({ $active }) =>
    $active &&
    css`
      && [data-run-border] rect {
        stroke-dashoffset: -182;
      }
    `}
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 720px) {
    grid-template-columns: 1fr 1fr;
  }
`;

// По умолчанию белый; оранжевым становится при наведении на карточку.
export const ReadMore = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: ${PANEL_TEXT};
  font-size: 13px;
  font-weight: 500;
  transition: color 0.25s ease;

  svg {
    width: 15px;
    height: 15px;
  }
`;

export const Card = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 12px;
  padding: 20px 22px;
  border-radius: 16px;
  background: ${PANEL_ELEVATED};
  border: 1px solid ${PANEL_BORDER};
  text-decoration: none;
  transition: border-color 0.25s ease, background 0.25s ease,
    transform 0.25s ease;

  &:hover {
    background: ${PANEL_ELEVATED_HOVER};
    border-color: rgba(255, 255, 255, 0.22);
    transform: translateY(-3px);
  }

  &:hover ${ReadMore} {
    color: ${({ theme }) => theme.color.basic.primaryLight};
  }
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
  padding: 3px 10px;
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${PANEL_BORDER};
  color: ${PANEL_TEXT};
  font-size: 11px;
  font-weight: 500;
`;

export const CardTitle = styled.h3`
  margin: 0;
  color: ${PANEL_TEXT};
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
`;

export const CardExcerpt = styled.p`
  margin: 0;
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 14px;
  font-weight: 300;
  line-height: 1.55;
`;

export const CardFoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 4px;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${PANEL_TEXT_MUTED};
  font-size: 12px;

  span + span::before {
    content: "·";
    margin-right: 8px;
  }
`;
