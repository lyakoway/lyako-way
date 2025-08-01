import styled, { keyframes } from "styled-components";

const falling = keyframes`
  0% {
    margin-top: 0;
    transform: translateX(0px);
  }
  25% {
    transform: translateX(3px);
  }
  50% {
    transform: translateX(-3px);
  }
  75% {
    transform: translateX(3px);
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

export const SnowFlake = styled.div.attrs<{
  $left: number;
  $animationDelay: number;
  $animationDuration: number;
}>((props) => ({
  style: {
    left: `${props.$left}px`,
    animationDelay: `${props.$animationDelay}s`,
    animationDuration: `${props.$animationDuration}s`,
  },
}))`
  position: absolute;
  top: -30px;
  color: #d7fdfe;
  font-size: 0.4em;
  animation-name: ${falling};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;
