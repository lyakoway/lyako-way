import styled, { css, keyframes } from "styled-components";

const ani = keyframes`
  0% {
    opacity: 1;
  }
  50%{
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

const ani1 = keyframes`
  0% {
    opacity: 0;
  }
  75%{
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const phase1 = keyframes`
  0% {
    transform: rotateY(1turn);
  }
  100% {
    transform: rotateY(0);
  }
`;

const phase2 = keyframes`
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(1turn);
  }
`;

export const MoonContainer = styled.div<{ $themeLight: boolean }>`
  width: 50px;
  height: 50px;
  //background-color: #f1f1f1;
  border-radius: 50%;
  position: relative;
  z-index: 100;
  //box-shadow: 0 0 60px 19px #f1f1f1;
  ${({ $themeLight }) =>
    css`
      animation: ${$themeLight ? ani : ani1} 4s forwards;
    `};
`;

export const MoonPhase = styled.div<{
  $themeLight: boolean;
  $timeMoonPhase: number;
}>`
  width: 50px;
  height: 50px;
  //background-color: red;
  //background: linear-gradient(to right, #222 50%, #f1f1f1 100%);
  background: linear-gradient(to right, #222 50%, #f1f1f1 0);
  filter: hue-rotate(-72deg);
  border-radius: 50%;
  position: absolute;
  z-index: 100;
  box-shadow: 0 0 60px 19px #f1f1f1;
  counter-increment: phase;
  ${({ $themeLight, $timeMoonPhase }) =>
    css`
      animation: ${$themeLight ? phase1 : phase2} ${3.2 * $timeMoonPhase}s
        infinite;
    `};
  animation-delay: ${({ $timeMoonPhase }) => -0.4 * $timeMoonPhase}s;
  animation-timing-function: steps(2);

  &:before,
  &:after {
    content: "";
    position: absolute;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    backface-visibility: hidden;

    ${({ $themeLight, $timeMoonPhase }) =>
      css`
        animation: ${$themeLight ? phase1 : phase2} ${3.2 * $timeMoonPhase}s
          infinite;
      `};
    animation-delay: ${({ $timeMoonPhase }) => -0.4 * $timeMoonPhase}s;
    animation-timing-function: linear;
  }

  &:before {
    background: linear-gradient(to right, transparent calc(50% - 1px), #222 0);
  }

  &:after {
    animation-delay: ${({ $timeMoonPhase }) => -2 * $timeMoonPhase}s;
    background: linear-gradient(
      to right,
      #f1f1f1 calc(50% + 1px),
      transparent 0
    );
  }
`;

export const Crater = styled.div<{
  $top: number;
  $left: number;
  $width: number;
  $height: number;
}>`
  position: absolute;
  z-index: 101;
  background: #e6e6e6;
  border-radius: 50%;
  box-shadow: inset -2px 2px 5px 0 rgba(0, 0, 0, 0.3);
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  top: ${({ $top }) => $top}%;
  left: ${({ $left }) => $left}%;
`;
