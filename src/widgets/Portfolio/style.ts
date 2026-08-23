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

export const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 22px;
`;

export const FilterChip = styled.button<{ $active?: boolean }>`
  ${runningBorder}
  display: inline-flex;
  align-items: center;
  height: 40px;
  padding: 0 16px;
  border-radius: 12px;
  border: 1px solid
    ${({ $active, theme }) =>
      $active ? theme.color.basic.primary : PANEL_BORDER};
  background: ${({ $active, theme }) =>
    $active ? theme.color.basic.primary : "rgba(255, 255, 255, 0.04)"};
  color: ${({ $active }) => ($active ? "#ffffff" : PANEL_TEXT_SECONDARY)};
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

// Затемняющий оверлей с иконкой «глаз», проявляется при наведении на карточку.
export const ThumbOverlay = styled.div`
  position: absolute;
  inset: 0;
  /* поверх тематических обложек (ThemeThumb: z-index 1–2) — иначе глаз
      при наведении прятался под активной картинкой */
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(10, 12, 16, 0.5);
  color: #ffffff;
  opacity: 0;
  transition: opacity 0.25s ease;

  svg {
    width: 34px;
    height: 34px;
    transform: scale(0.85);
    transition: transform 0.25s ease;
  }
`;

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
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

  &:hover ${ThumbOverlay} {
    opacity: 1;
  }

  &:hover ${ThumbOverlay} svg {
    transform: scale(1);
  }
`;

// Декоративная обложка карточки (окно браузера) — не зависит от ассетов.
// $grad — индивидуальный градиент карточки.
export const CardThumb = styled.div<{ $grad?: string }>`
  position: relative;
  aspect-ratio: 16 / 10;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${({ $grad }) =>
    $grad ||
    "linear-gradient(135deg, rgba(249, 87, 33, 0.22), rgba(255, 255, 255, 0.04))"};
  color: rgba(255, 255, 255, 0.85);

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
  }

  svg {
    width: 44px;
    height: 44px;
  }
`;

// Тематическая обложка: обе версии (light/dark) лежат стопкой. Какая
// активна, решает html[data-theme] — атрибут ставит инлайн-скрипт в <head>
// ДО первой отрисовки, поэтому при загрузке сразу видна верная картинка:
// без вспышки светлой и без кроссфейда на старте. При переключении темы
// въезжающая проявляется СВЕРХУ (opacity 0→1 без задержки), прежняя держит
// непрозрачность под ней и гаснет лишь потом — базовое правило несёт
// задержку 3s, равную длительности кроссфейда. Так в кадре всегда смесь
// двух картинок: иначе сквозь них просвечивал бы градиент обложки и в
// конце возникал бы рывок контраста. S-кривая (sinusoidal ease-in-out) —
// мягкий старт и мягкий финиш. Геометрию (absolute/cover) наследует от
// правила `img` в CardThumb. Класс theme-thumb исключает элемент из
// глобального theme-transition (см. globalStyles) — иначе !important
// перебил бы переход именно в момент смены темы.
export const ThemeThumb = styled.img<{ $variant: "light" | "dark" }>`
  z-index: 1;
  opacity: 0;
  transition: opacity 3s cubic-bezier(0.37, 0, 0.63, 1) 3s;

  /* Светлая версия активна и когда атрибута нет вовсе (JS отключён —
     SSR по умолчанию светлая), и в светлой теме. */
  ${({ $variant }) =>
    $variant === "light" &&
    css`
      html:not([data-theme="dark"]) && {
        z-index: 2;
        opacity: 1;
        transition-delay: 0s;
      }
    `}

  ${({ $variant }) =>
    $variant === "dark" &&
    css`
      html[data-theme="dark"] && {
        z-index: 2;
        opacity: 1;
        transition-delay: 0s;
      }
    `}

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

// Бейдж «в разработке» в углу обложки.
export const WipBadge = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  /* как у ThumbOverlay: выше тематических обложек (z-index 1–2) */
  z-index: 3;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(10, 12, 16, 0.62);
  border: 1px solid rgba(255, 255, 255, 0.22);
  color: #ffffff;
  font-size: 11px;
  font-weight: 500;
  backdrop-filter: blur(4px);
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 18px;
`;

export const CardName = styled.h3`
  margin: 0;
  color: ${PANEL_TEXT};
  font-size: 16px;
  font-weight: 600;
`;

export const CardDate = styled.span`
  color: ${PANEL_TEXT_MUTED};
  font-size: 12px;
`;

export const ChipList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 4px 0 0;
  padding: 0;
  list-style: none;
`;

export const Chip = styled.li`
  padding: 3px 9px;
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${PANEL_BORDER};
  color: ${PANEL_TEXT_SECONDARY};
  font-size: 11px;
`;
