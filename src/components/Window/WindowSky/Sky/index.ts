import styled, { css, keyframes } from "styled-components";

const dayToNightWindow = (
  $dayToNightColor: string,
  $lightOffOpacitySun: number
) => keyframes`
  from { 
    background: #0c2233;
    opacity: ${$lightOffOpacitySun + 0.1};
  }
  16% {
    background: #0c2233;
  }
  33% {
    background: #0c2233;
  }
  50% {opacity: 0.1}
  70% {
    background: ${$dayToNightColor};
  }
  85% {
    background: ${$dayToNightColor};
  }
  to {
    background: ${$dayToNightColor};
    opacity: ${$lightOffOpacitySun + 0.1};
  }
`;

const dayToNightWindowTime = (
  $dayToNightColor: string,
  $lightOffOpacitySun: number
) => keyframes`
  from { 
    background: ${$dayToNightColor};
    opacity: ${$lightOffOpacitySun};
  }
  16% {
    background: ${$dayToNightColor};
  }
  33% {
    background: ${$dayToNightColor};
  }
  70% {
    background: #0c2233;
  }
  85% {
    background: #0c2233;
  }
  to {
    background: #0c2233;
    opacity: ${$lightOffOpacitySun};
  }
`;

const nightToDayWindow = (
  $dayToNightColor: string,
  $lightOffOpacitySun: number
) => keyframes`
  from { 
    background: -webkit-linear-gradient(bottom, rgba(249, 251, 240, 1) 10%, rgba(215, 253, 254, 1) 20%, rgba(167, 222, 253, 1) 40%, rgba(110, 175, 255, 1) 100%);
    opacity: ${$lightOffOpacitySun + 0.1};
  }
  16% {
    background: -webkit-linear-gradient(bottom, rgba(249, 251, 240, 1) 10%, rgba(215, 253, 254, 1) 20%, rgba(167, 222, 253, 1) 40%, rgba(110, 175, 255, 1) 100%);
  }
  33% {
    background: -webkit-linear-gradient(bottom, rgba(249, 251, 240, 1) 10%, rgba(215, 253, 254, 1) 20%, rgba(167, 222, 253, 1) 40%, rgba(110, 175, 255, 1) 100%);
  }
  50% {opacity: 0.1}
  70% {
    background: ${$dayToNightColor};
  }
  85% {
    background: ${$dayToNightColor};
  }
  to {
    background: ${$dayToNightColor};
    opacity: ${$lightOffOpacitySun + 0.1};
  }
`;

const nightToDayWindowTime = (
  $dayToNightColor: string,
  $lightOffOpacitySun: number
) => keyframes`
  from { 
    background: ${$dayToNightColor};
    opacity: ${$lightOffOpacitySun};
  }
  16% {
    background: ${$dayToNightColor};
  }
  33% {
    background: ${$dayToNightColor};
  }
  70% {
    background: -webkit-linear-gradient(bottom, rgba(249, 251, 240, 1) 10%, rgba(215, 253, 254, 1) 20%, rgba(167, 222, 253, 1) 40%, rgba(110, 175, 255, 1) 100%);
  }
  85% {
    background: -webkit-linear-gradient(bottom, rgba(249, 251, 240, 1) 10%, rgba(215, 253, 254, 1) 20%, rgba(167, 222, 253, 1) 40%, rgba(110, 175, 255, 1) 100%);
  }
  to {
    background: -webkit-linear-gradient(bottom, rgba(249, 251, 240, 1) 10%, rgba(215, 253, 254, 1) 20%, rgba(167, 222, 253, 1) 40%, rgba(110, 175, 255, 1) 100%);
    opacity: ${$lightOffOpacitySun};
  }
`;

export const Sky = styled.div<{
  $dayToNightColor: string;
  $timeLeftSunMoon: number;
  $themeLight: boolean;
  $lightOffOpacitySun: number;
}>`
  position: absolute;
  width: 222px;
  height: 300px;
  background: #88bef5;
  z-index: 1;
  overflow: hidden;

  opacity: ${({ $lightOffOpacitySun }) => $lightOffOpacitySun};

  ${({
    $themeLight,
    $timeLeftSunMoon,
    $dayToNightColor,
    $lightOffOpacitySun,
  }) =>
    css`
      animation: ${$themeLight
            ? dayToNightWindow($dayToNightColor, $lightOffOpacitySun)
            : nightToDayWindow($dayToNightColor, $lightOffOpacitySun)}
          4s infinite normal linear forwards,
        ${$themeLight
            ? dayToNightWindowTime($dayToNightColor, $lightOffOpacitySun)
            : nightToDayWindowTime($dayToNightColor, $lightOffOpacitySun)}
          ${$timeLeftSunMoon}s infinite normal linear forwards 4s;
    `}
`;

export default Sky;
