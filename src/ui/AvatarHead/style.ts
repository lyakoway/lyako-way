import styled, { keyframes, css } from "styled-components";

import { ReactComponent as BodyArt } from "./avatar-body.svg";
import { ReactComponent as HeadArt } from "./avatar-head.svg";

// Моргание: веко (скин-эллипс) быстро «закрывается» сверху и открывается.
const blink = keyframes`
  0%, 92%, 100% {
    transform: scaleY(0);
  }
  95%, 97% {
    transform: scaleY(1);
  }
`;

// Контейнер с перспективой для 3D-поворота головы.
export const Frame = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  perspective: 700px;
`;

// Статичный слой: фон + одежда + шея.
export const BodyLayer = styled(BodyArt)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
`;

// Голова целиком поворачивается вслед за курсором.
// Точка опоры — у шеи, поэтому голова «доворачивается», а плечи стоят.
export const HeadTurn = styled.div`
  position: absolute;
  inset: 0;
  transform-origin: 50% 66%;
  transform-style: preserve-3d;
  transition: transform 0.16s ease-out;
  will-change: transform;
`;

export const HeadLayer = styled(HeadArt)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`;

// Анимационный слой поверх головы (зрачки + веки).
export const Overlay = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const IrisG = styled.g<{ $motion?: boolean }>`
  ${({ $motion }) =>
    $motion &&
    css`
      transition: transform 0.12s ease-out;
    `}
`;

export const Eyelid = styled.ellipse`
  transform-box: fill-box;
  transform-origin: center top;
  transform: scaleY(0);
  animation: ${blink} 5.6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
