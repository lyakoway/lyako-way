import { FC } from "react";
import styled from "styled-components";

// Обводка-бегунок для кнопок (см. runningBorder).
// Надёжность: svg получает АТРИБУТЫ width/height="100%" + CSS 100% — это
// однозначно задаёт SVG-viewport, поэтому проценты у <rect> считаются от
// размера кнопки (а не от дефолтных 300×150, из-за чего бегунок раньше «убегал
// за границы» / «крутился слева»). viewBox не используем — 1 юнит = 1px,
// скругления (rx) не искажаются на широких кнопках.
const Svg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  /* !important — чтобы правила вида "svg { width: 18px }" у кнопок с иконками
     (контакты, резюме) не сжимали обводку до размера иконки (тогда бегунок
     «крутился в углу»). Обводка всегда во всю кнопку. */
  width: 100% !important;
  height: 100% !important;
  pointer-events: none;
  overflow: visible;
  z-index: 1;

  rect {
    fill: none;
    stroke: #ff8560;
    stroke-width: 1px;
    vector-effect: non-scaling-stroke;
    /* Периметр нормализован (pathLength=100). Короткий сегмент (18%), период
       паттерна 200 = 2 периметра. Смещение 18 → -182 (Δ=200) — ровно 2 прохода
       по кругу, бегунок скрыт и в покое, и в конце. */
    stroke-dasharray: 18 182;
    stroke-dashoffset: 18;
    transition: stroke-dashoffset 1s ease-in-out;
  }
`;

export const RunBorder: FC<{ radius?: number }> = ({ radius = 12 }) => (
  <Svg
    width="100%"
    height="100%"
    data-run-border
    aria-hidden="true"
    focusable="false"
  >
    <rect
      x="0"
      y="0"
      width="100%"
      height="100%"
      rx={radius}
      ry={radius}
      pathLength={100}
    />
  </Svg>
);

export default RunBorder;
