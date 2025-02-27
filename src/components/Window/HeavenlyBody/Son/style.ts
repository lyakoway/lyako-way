import styled, { css, keyframes } from "styled-components";

const ani = keyframes`
  0% {
    opacity: 0;
  }
  50%{
    opacity: 0;
  }
  75%{
    opacity: 1;
    box-shadow: -0px -10px 50px 50px rgba(254, 255, 255, 0.8),
    -0px -10px 50px 50px rgba(236, 255, 0, 35),
    -0px -20px 70px 60px rgba(253, 50, 41, 17),
    -0px -30px 90px 70px rgba(243, 0, 0, 0.13),
    -0px -40px 100px 80px rgba(93, 0, 0, 0.08);
  }
  80% {
    opacity: 1;
    box-shadow: -0px -10px 50px 50px rgba(254, 255, 255, 0.8),
    -0px -10px 50px 50px rgba(236, 255, 0, 0.8),
    -0px -20px 70px 60px rgba(253, 50, 41, 0.5),
    -0px -30px 90px 70px rgba(243, 0, 0, 0.1),
    -0px -40px 100px 80px rgba(93, 0, 0, 0.04);
  }
  100% {
    opacity: 1;
    box-shadow: -0px -10px 50px 50px rgb(242, 248, 247),
    -0px -10px 50px 50px rgb(249, 249, 28, 0.33),
    -0px -20px 70px 60px rgb(247, 214, 46, 0.15),
    -0px -30px 90px 70px rgb(248, 200, 95, 0.11),
    -0px -40px 100px 80px rgb(201, 165, 132, 0.06);
  }
`;

const ani1 = keyframes`
  0% {
    opacity: 1;
    box-shadow: -0px -10px 50px 50px rgb(242, 248, 247),
    -0px -10px 50px 50px rgb(249, 249, 28, 0.33),
    -0px -20px 70px 60px rgb(247, 214, 46, 0.15),
    -0px -30px 90px 70px rgb(248, 200, 95, 0.11),
    -0px -40px 100px 80px rgb(201, 165, 132, 0.06);
  }
  40%{
    opacity: 0.8;
    box-shadow: -0px -10px 50px 50px rgba(254, 255, 255, 0.8),
    -0px -10px 50px 50px rgba(236, 255, 0, 0.8),
    -0px -20px 70px 60px rgba(253, 50, 41, 0.5),
    -0px -30px 90px 70px rgba(243, 0, 0, 0.1),
    -0px -40px 100px 80px rgba(93, 0, 0, 0.04);
  }
  45%{
    opacity: 0.6;
    box-shadow: -0px -10px 50px 50px rgba(254, 255, 255, 0.8),
    -0px -10px 50px 50px rgba(236, 255, 0, 35),
    -0px -20px 70px 60px rgba(253, 50, 41, 17),
    -0px -30px 90px 70px rgba(243, 0, 0, 0.13),
    -0px -40px 100px 80px rgba(93, 0, 0, 0.08);
  }
  50%{
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

const ani2 = keyframes`
  0% {
    opacity: 0;
  }
  50%{
    opacity: 0;
  }
  75%{
    opacity: 0;
  }
  100% {
    opacity: 1;
    box-shadow: -0px -10px 50px 50px rgba(254, 255, 255, 0.8),
    -0px -10px 50px 50px rgba(236, 255, 0, 35),
    -0px -20px 70px 60px rgba(253, 50, 41, 17),
    -0px -30px 90px 70px rgba(243, 0, 0, 0.13),
    -0px -40px 100px 80px rgba(93, 0, 0, 0.08);
  }
`;

const ani3 = keyframes`
  0% {
    opacity: 1;
    box-shadow: -0px -10px 50px 50px rgba(254, 255, 255, 0.8),
    -0px -10px 50px 50px rgba(236, 255, 0, 0.8),
    -0px -20px 70px 60px rgba(253, 50, 41, 0.5),
    -0px -30px 90px 70px rgba(243, 0, 0, 0.1),
    -0px -40px 100px 80px rgba(93, 0, 0, 0.04);
  }
  25%{
    opacity: 0.3;
    box-shadow: -0px -10px 50px 50px rgba(254, 255, 255, 0.8),
    -0px -10px 50px 50px rgba(236, 255, 0, 0.8),
    -0px -20px 70px 60px rgba(253, 50, 41, 0.5),
    -0px -30px 90px 70px rgba(243, 0, 0, 0.1),
    -0px -40px 100px 80px rgba(93, 0, 0, 0.04);
  }
  50%{
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

export const SonContainer = styled.div<{
  $themeLight: boolean;
  $sunsetSunrise: boolean;
}>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  z-index: 2;
  background: #f1f1f1;
  box-shadow: 0 0 60px 19px #f1f1f1;
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
