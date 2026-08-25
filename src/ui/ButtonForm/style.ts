import styled, { css, keyframes } from "styled-components";


// Полёт самолётика: приседание, разгон вверх-вправо и растворение.
const mailFly = keyframes`
  0%, 50% {
    transform: translateY(-50%) translate3d(0, 0, 0) scale(1);
  }
  60% {
    transform: translateY(-50%) translate3d(-3px, 2px, 0) scale(1.05);
  }
  70% {
    opacity: 1;
  }
  85% {
    opacity: 0;
  }
  100% {
    transform: translateY(-50%) translate3d(30px, -14px, 0) scale(0.4);
    opacity: 0;
  }
`;

// Иконка «Отправить» с анимацией (по мотивам известной демки): конверт
// нарисован штрихом; при клике ($fly) его штрих стирается (dashoffset),
// сверху рисуется бумажный самолётик и улетает. Координаты — из демки
// (viewBox 0 0 120 70 / 0 0 120 110), масштаб — CSS-размером обёртки.
export const MailIconWrap = styled.span<{ $fly?: boolean }>`
  position: relative;
  flex-shrink: 0;
  width: 26px;
  height: 16px;

  svg {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    fill: none;
    stroke: currentColor;
    stroke-width: 7;
    stroke-linecap: square;
    pointer-events: none;
  }

  svg.mail {
    width: 26px;
    height: 16px;
    stroke-dasharray: 325 325;
    stroke-dashoffset: 0;
    transition: stroke-dashoffset 0.5s ease-in-out;
  }

  svg.plane {
    width: 18px;
    height: 17px;
    margin-left: 4px;
    /* штрих считается на каждый polyline отдельно, и замкнутые контуры
       демки (318 и 182 единицы) короче периода 325 — рисуются целиком */
    stroke-dasharray: 325 325;
    stroke-dashoffset: 325;
    transition: stroke-dashoffset 0.5s ease-in-out 0.35s;
  }

  ${({ $fly }) =>
    $fly &&
    css`
      svg.mail {
        stroke-dashoffset: 326;
      }

      svg.plane {
        stroke-dashoffset: 0;
        animation: ${mailFly} 1.2s ease-in-out 0.85s both;
      }
    `}

  @media (prefers-reduced-motion: reduce) {
    svg.mail,
    svg.plane {
      transition: none;
    }

    svg.plane {
      animation: none;
    }
  }
`;
