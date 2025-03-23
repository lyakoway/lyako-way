import styled, { css, keyframes } from "styled-components";

const falling = keyframes`
  0% {
    margin-top: 0;
    transform: translateX(0px);
  }
  25% {
    transform: translateX(5px);
  }
  20% {
    transform: translateX(-5px);
  }
  30% {
    transform: translateX(5px);
  }
  40% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    margin-top: 400px;
    transform: translateX(0px);
  }
`;

export const SnowWrapper = styled.div`
  width: 100%;
  gap: 2px;
  position: absolute;
  display: flex;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -50px;
  overflow: hidden;
  z-index: 300;
`;

export const SnowFlake = styled.div<{
  $top: number;
  $left: number;
  $animationDelay: number;
  $animationDuration: number;
  $opacity: number;
  $size: number;
}>`
  position: absolute;
  top: ${({ $top }) => -$top}px;
  left: ${({ $left }) => $left}px;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  background: white;
  border-radius: 50%;
  opacity: ${({ $opacity }) => $opacity};

  ${({ $animationDelay, $animationDuration }) =>
    css`
      animation: ${falling} ${$animationDuration}s ${$animationDelay}s linear
        infinite;
    `}
`;

const fallingL = keyframes`
  0% {
    margin-top: 0;
    transform: translateX(0px);
  }
  25% {
    transform: translateX(-15px);
  }
  50% {
    transform: translateX(15px);
  }
  75% {
    transform: translateX(-15px);
  }
  100% {
    margin-top: 400px;
    transform: translateX(0px);
  }
`;

const fallingR = keyframes`
  0% {
    margin-top: 0;
    transform: translateX(0px);
  }
  25% {
    transform: translateX(15px);
  }
  50% {
    transform: translateX(-15px);
  }
  75% {
    transform: translateX(15px);
  }
  100% {
    margin-top: 400px;
    transform: translateX(0px);
  }
`;

export const SnowFlakeL = styled.div<{
  $left: number;
  $animationDelay: number;
  $animationDuration: number;
}>`
  position: absolute;
  color: #fff;
  font-size: 1em;
  text-shadow: 0 0 1px #000;
  top: -30px;
  left: ${({ $left }) => $left}%;

  ${({ $animationDelay, $animationDuration }) =>
    css`
      animation: ${fallingL} ${$animationDuration}s ${$animationDelay}s
        ease-in-out infinite;
    `}
`;

export const SnowFlakeR = styled.div<{
  $left: number;
  $animationDelay: number;
  $animationDuration: number;
}>`
  position: absolute;
  color: #fff;
  font-size: 1em;
  text-shadow: 0 0 1px #000;
  top: -30px;
  left: ${({ $left }) => $left}%;

  ${({ $animationDelay, $animationDuration }) =>
    css`
      animation: ${fallingR} ${$animationDuration}s ${$animationDelay}s
        ease-in-out infinite;
    `}
`;
