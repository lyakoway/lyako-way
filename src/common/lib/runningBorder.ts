import { css } from "styled-components";

/**
 * Единый эффект для кнопок проекта — точная копия анимации кнопки «ОТПРАВИТЬ»:
 * тонкий оранжевый бегунок (SVG stroke-dashoffset) делает проход по всему
 * периметру при наведении и бежит обратно при уходе курсора (это переход, а не
 * бесконечная анимация — потому обратимо и надёжно, без @property). Фон
 * синхронно (1s) наполняется оранжевым.
 *
 * Работает в паре с компонентом <RunBorder/>, который нужно положить ВНУТРЬ
 * кнопки (абсолютный svg с прямоугольной обводкой, следующей за border-radius).
 * Срабатывает на hover / focus-visible / active (тап на мобилке).
 */
export const runningBorder = css`
  position: relative;
  transition: background-color 1s ease-in-out, border-color 1s ease-in-out,
    color 0.4s ease;

  &:hover,
  &:focus-visible,
  &:active {
    background-color: ${({ theme }) => theme.color.basic.primary};
    border-color: #ff8560;
    color: #ffffff;
  }

  /* Бегунок делает проход по периметру: dashoffset 18 → -182 (Δ=200=период
     паттерна), скрыт в покое и в конце (см. RunBorder). */
  &:hover [data-run-border] rect,
  &:focus-visible [data-run-border] rect,
  &:active [data-run-border] rect {
    stroke-dashoffset: -182;
  }
`;
