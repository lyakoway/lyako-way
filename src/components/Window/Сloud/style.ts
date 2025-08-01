import styled, { keyframes } from "styled-components";

const wind = keyframes`
  100% {
    transform: translateX(500px);
  }
`;

export const CloudWrapper = styled.div<{ $duration: number }>`
  margin: 0 auto;
  position: absolute;
  width: 80px;
  border: 1px solid transparent;

  animation-name: ${wind};
  animation-duration: ${({ $duration }) => $duration}s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;
