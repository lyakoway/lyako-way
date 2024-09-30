import styled, { keyframes } from "styled-components";
// import { TABLET_1024, MOBILE_660 } from '../../../../common/media';

const wind = (left) => keyframes`
  100% {
    left: ${Number(left.left) + 300}px;
  }
`;

export const CloudWrapper = styled.div`
  top: ${(props) => props.top}px;
  left: ${({ left }) => left - 200}px;
  margin: 0 auto;
  position: absolute;
  width: 80px;
  border: 1px solid transparent;

  // animation: ${wind} 8s linear infinite;
  animation-name: ${(left) => wind(left)};

  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: ${({ animationDuration }) => animationDuration}s;
  // animation-delay: 0.8s;
`;
