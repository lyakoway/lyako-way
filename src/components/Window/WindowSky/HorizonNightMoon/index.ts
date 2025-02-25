import styled, { css, keyframes } from "styled-components";

const ani = keyframes`
  0% {
    opacity: 0.65;
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
    opacity: 0.65;
  }
`;

export const HorizonNightMoon = styled.div<{
  $themeLight: boolean;
}>`
  position: absolute;
  left: 0;
  width: 100%;
  height: 50%;
  top: 50%;
  //background: -webkit-radial-gradient(
  //  40% 55%,
  //  circle,
  //  rgba(249, 249, 250, 0) 0%,
  //  rgba(189, 255, 254, 0) 0%,
  //  rgba(8, 49, 78, 1) 0%,
  //  rgba(8, 26, 56, 1) 10%,
  //  rgba(4, 16, 46, 1) 40%,
  //  rgba(2, 8, 13, 1) 70%
  //);
  box-shadow: -0px -10px 30px 10px #ffc1a0, -0px -20px 40px 20px #fe9c7f,
    -0px -30px 60px 30px #be6590, -0px -50px 150px 75px #632b6c;
  z-index: 2;

  ${({ $themeLight }) =>
    css`
      animation: ${$themeLight ? ani : ani1} 4s forwards;
    `};
`;

export default HorizonNightMoon;
