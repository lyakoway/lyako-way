import styled, { keyframes, css } from "styled-components";

import { ReactComponent as AvatarArt } from "./avatar.svg";

// Моргание: веко (скин-эллипс) быстро «закрывается» сверху и открывается.
const blink = keyframes`
  0%, 92%, 100% {
    transform: scaleY(0);
  }
  95%, 97% {
    transform: scaleY(1);
  }
`;

// Сцена задаёт перспективу для 3D-наклона головы.
export const Stage = styled.div`
  width: 100%;
  height: 100%;
`;

// Наклоняется вслед за курсором (вместе с базовым артом и слоем глаз).
export const Frame = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.16s ease-out;
  will-change: transform;
`;

// Базовый редактируемый портрет из avatar.svg.
export const BaseArt = styled(AvatarArt)`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: inherit;
`;

// Анимационный слой поверх (зрачки + веки), точно над глазами.
export const Overlay = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

// Радужка/зрачок плавно догоняют курсор.
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
