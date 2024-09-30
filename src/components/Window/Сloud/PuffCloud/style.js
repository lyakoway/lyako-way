import styled, { keyframes } from "styled-components";
// import { TABLET_1024, MOBILE_660 } from '../../../../common/media';

const wind = (props) => keyframes`
  50% {
    left: ${props.leftRandom}px;
    top: ${props.topRandom}px;
  }
  100% {
    left: ${props.left}px;
    top: ${props.top}px;
  }
`;

export const PuffCloudPattern = styled.div`
  width: 22px;
  height: 22px;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  border-radius: 50%;
  position: absolute;
  background-image: linear-gradient(
    hsl(0deg 0% ${({ colorCloud }) => colorCloud}%),
    hsl(180deg 50% ${({ colorBorder }) => colorBorder}%)
  );
  background-size: auto 30px;
  background-position: 50% 0%;
  z-index: 100;

  animation: ${(props) => wind(props)}
    ${({ animationDuration }) => animationDuration}s linear
    ${({ animationDuration }) => animationDuration}s infinite;
  animation-delay: 3s;
`;
