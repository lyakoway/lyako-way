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

export const HorizonNight = styled.div<{
  $themeLight: boolean;
}>`
  position: absolute;
  left: 0;
  width: 100%;
  height: 50%;
  top: 100%;
  box-shadow: -0px -10px 20px 10px #93e6f3,
    -0px -20px 40px 20px rgba(57, 167, 255, 1),
    -0px -30px 60px 30px rgba(13, 98, 245, 1),
    -0px -40px 80px 40px rgba(57, 167, 255, 0.65);
  z-index: 2;

  //box-shadow: -0px -10px 20px 10px #ff9900,
  //-0px -20px 40px 30px rgba(246, 149, 52, 0.8), -0px -30px 60px 40px #93e6f3,
  //-0px -40px 80px 50px rgba(24, 75, 106, 0);

  ${({ $themeLight }) =>
    css`
      animation: ${$themeLight ? ani : ani1} 4s forwards;
    `};
`;

export default HorizonNight;
