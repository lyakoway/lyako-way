import styled, { keyframes } from "styled-components";
// import { TABLET_1024, MOBILE_660 } from '../../../../common/media';

const falling = keyframes`
  100% {
    margin-top: 400px;
  }
`;

export const RainWrapper = styled.div`
  display: ${({ show }) => (show ? "flex" : "none")};
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

export const Drop = styled.div`
  width: 1px;
  height: 80px;
  left: ${({ left }) => left}px;
  position: absolute;
  background: linear-gradient(transparent, #d3f4ff);

  animation-name: ${falling};

  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: ${({ animationDuration }) => animationDuration}s;
`;
