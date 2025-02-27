import styled, { css, keyframes } from "styled-components";

const ani = keyframes`
  0% {
    opacity: 1;
    box-shadow: -0px -10px 20px 10px #93e6f3, -0px -20px 40px 20px rgba(57, 167, 255, 1), -0px -30px 60px 30px rgba(13, 98, 245, 1), -0px -40px 80px 40px rgba(57, 167, 255, 0.65);
  }
  25%{
    opacity: 0.5;
    box-shadow: -0px -10px 20px 10px #93e6f3, -0px -20px 40px 20px rgba(57, 167, 255, 1), -0px -30px 60px 30px rgba(13, 98, 245, 1), -0px -40px 80px 40px rgba(57, 167, 255, 0.65);
  }
  50%{
    opacity: 0;
  }
  75%{
    opacity: 0.6;
    box-shadow: -0px -10px 50px 50px rgba(255, 153, 0, 0.25),
    -0px -20px 70px 60px rgba(246, 149, 52, 0.5), -0px -30px 90px 70px #93e6f3,
    -0px -40px 100px 80px rgba(24, 75, 106, 0);
  }
  100% {
    opacity: 0;
  }
`;

const ani1 = keyframes`
  0% {
    opacity: 0;
  }
  20%{
    opacity: 0.3;
    box-shadow: -0px -10px 50px 50px rgba(255, 153, 0, 0.25),
    -0px -20px 70px 60px rgba(246, 149, 52, 0.5), -0px -30px 90px 70px #93e6f3,
    -0px -40px 100px 80px rgba(24, 75, 106, 0);
  }
  25%{
    opacity: 0.6;
    box-shadow: -0px -10px 50px 50px rgba(255, 153, 0, 0.25),
    -0px -20px 70px 60px rgba(246, 149, 52, 0.5), -0px -30px 90px 70px #93e6f3,
    -0px -40px 100px 80px rgba(24, 75, 106, 0);
  }
  35%{
    opacity: 0.3;
    box-shadow: -0px -10px 50px 50px rgba(255, 153, 0, 0.25),
    -0px -20px 70px 60px rgba(246, 149, 52, 0.5), -0px -30px 90px 70px #93e6f3,
    -0px -40px 100px 80px rgba(24, 75, 106, 0);
  }
  50%{
    opacity: 0;
  }
  75%{
    opacity: 0.4;
    box-shadow: -0px -10px 20px 10px #93e6f3, -0px -20px 40px 20px rgba(57, 167, 255, 1), -0px -30px 60px 30px rgba(13, 98, 245, 1), -0px -40px 80px 40px rgba(57, 167, 255, 0.65);
  }
  100% {
    opacity: 0.8;
    box-shadow: -0px -10px 20px 10px #93e6f3, -0px -20px 40px 20px rgba(57, 167, 255, 1), -0px -30px 60px 30px rgba(13, 98, 245, 1), -0px -40px 80px 40px rgba(57, 167, 255, 0.65);
  }
`;

const ani2 = keyframes`
  0% {
    opacity: 0;
  }
  75%{
    opacity: 0;
  }
  100% {
    opacity: 1;
    box-shadow: -0px -10px 50px 50px rgba(255, 153, 0, 0.25),
    -0px -20px 70px 60px rgba(246, 149, 52, 0.5), -0px -30px 90px 70px #93e6f3,
    -0px -40px 100px 80px rgba(24, 75, 106, 0);
  }
`;

const ani3 = keyframes`
  0% {
    opacity: 1;
    box-shadow: -0px -10px 50px 50px rgba(255, 153, 0, 0.25),
    -0px -20px 70px 60px rgba(246, 149, 52, 0.5), -0px -30px 90px 70px #93e6f3,
    -0px -40px 100px 80px rgba(24, 75, 106, 0);
  }
  25%{
    opacity: 0.3;
    box-shadow: -0px -10px 50px 50px rgba(255, 153, 0, 0.25),
    -0px -20px 70px 60px rgba(246, 149, 52, 0.5), -0px -30px 90px 70px #93e6f3,
    -0px -40px 100px 80px rgba(24, 75, 106, 0);
  }
  75%{
    opacity: 0.4;
    box-shadow: -0px -10px 20px 10px #93e6f3, -0px -20px 40px 20px rgba(57, 167, 255, 1), -0px -30px 60px 30px rgba(13, 98, 245, 1), -0px -40px 80px 40px rgba(57, 167, 255, 0.65);
  }
  100% {
    opacity: 0.8;
    box-shadow: -0px -10px 20px 10px #93e6f3, -0px -20px 40px 20px rgba(57, 167, 255, 1), -0px -30px 60px 30px rgba(13, 98, 245, 1), -0px -40px 80px 40px rgba(57, 167, 255, 0.65);
  }
`;

export const HorizonNight = styled.div<{
  $themeLight: boolean;
  $sunsetSunrise: boolean;
}>`
  position: absolute;
  left: 0;
  width: 100%;
  height: 50%;
  top: 100%;

  z-index: 2;

  ${({ $themeLight }) =>
    css`
      animation: ${$themeLight ? ani : ani1} 4s forwards;
    `};
  ${({ $sunsetSunrise, $themeLight }) =>
    $sunsetSunrise &&
    css`
      animation: ${$themeLight ? ani2 : ani3} 4s forwards;
    `};
`;

export default HorizonNight;
