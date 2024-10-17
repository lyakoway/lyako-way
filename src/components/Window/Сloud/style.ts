import styled, { keyframes } from "styled-components";

const wind = ($left: number) => keyframes`
  100% {
    left: ${Number($left) + 300}px;
  }
`;

export const CloudWrapper = styled.div<{
  $top: number;
  $left: number;
  $duration: number;
}>`
  margin: 0 auto;
  position: absolute;
  width: 80px;
  border: 1px solid transparent;
  top: ${({ $top }) => $top}px;
  left: ${({ $left }) => $left - 200}px;

  animation-duration: ${({ $duration }) => $duration}s;
  animation-name: ${({ $left }) => wind($left)};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;
