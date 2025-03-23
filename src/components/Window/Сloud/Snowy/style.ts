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
        transform: translateX(-5px);
    }
    75% {
        transform: translateX(10px);
    }
    100% {
        margin-top: 200px;
        transform: translateX(0px);
    }
`;

export const SnowyWrapper = styled.div<{ $show: boolean }>`
  display: ${({ $show }) => ($show ? "flex" : "none")};
  width: 32px;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  overflow: hidden;
  z-index: 0;
`;

export const Rain = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
`;

export const SnowFlake = styled.div<{
  $left: number;
  $animationDelay: number;
  $animationDuration: number;
}>`
  width: 3px;
  height: 3px;
  left: ${({ $left }) => $left}px;
  position: absolute;
  background: #d7fdfe;
  //background: #a7defd;
  //background: #cfebeb;
  border-radius: 50%;

  ${({ $animationDelay, $animationDuration }) =>
    css`
      animation: ${falling} ${$animationDuration}s ${$animationDelay}s linear
        infinite;
    `}
`;
