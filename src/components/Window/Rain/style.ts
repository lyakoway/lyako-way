import styled, { keyframes } from "styled-components";

const falling = keyframes`
    100% {
        margin-top: 400px;
    }
`;

export const RainWrapper = styled.div`
  width: 100%;
  gap: 2px;
  position: absolute;
  display: flex;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  overflow: hidden;
  z-index: 300;
`;

export const Drop = styled.div<{ $left: number; $animationDuration: number }>`
  width: 1px;
  height: 20px;
  left: ${({ $left }) => $left}px;
  background: linear-gradient(transparent, #d3f4ff);

  animation-name: ${falling};

  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: ${({ $animationDuration }) => $animationDuration}s;
`;
