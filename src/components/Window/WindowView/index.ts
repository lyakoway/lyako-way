import styled, { css, keyframes } from "styled-components";

const dayToNightWindow = ($dayToNightColor: string) => keyframes`
  from { 
    background: #0c2233;
  }
  16% {
    background: #0c2233;
  }
  33% {
    background: #0c2233;
  }
  70% {
    background: ${$dayToNightColor};
  }
  85% {
    background: ${$dayToNightColor};
  }
  to {
    background: ${$dayToNightColor};
  }
`;

const dayToNightWindowTime = ($dayToNightColor: string) => keyframes`
  from { 
    background: ${$dayToNightColor};
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
  }
`;

const nightToDayWindow = ($dayToNightColor: string) => keyframes`
  from { 
    background: #88bef5;
  }
  16% {
    background: #88bef5;
  }
  33% {
    background: #88bef5;
  }
  70% {
    background: ${$dayToNightColor};
  }
  85% {
    background: ${$dayToNightColor};
  }
  to {
    background: ${$dayToNightColor};
  }
`;

const nightToDayWindowTime = ($dayToNightColor: string) => keyframes`
  from { 
    background: ${$dayToNightColor};
  }
  16% {
    background: ${$dayToNightColor};
  }
  33% {
    background: ${$dayToNightColor};
  }
  70% {
    background: #88bef5;
  }
  85% {
    background: #88bef5;
  }
  to {
    background: #88bef5;
  }
`;

export const WindowView = styled.div<{
  $dayToNightColor: string;
  $timeLeftSunMoon: number;
  $themeLight: boolean;
}>`
  position: absolute;
  left: 20px;
  top: 20px;
  width: 222px;
  height: 300px;
  background: #88bef5;
  z-index: 2;
  overflow: hidden;

  ${({ $themeLight, $timeLeftSunMoon, $dayToNightColor }) =>
    css`
      animation: ${$themeLight
            ? dayToNightWindow($dayToNightColor)
            : nightToDayWindow($dayToNightColor)}
          4s infinite normal linear forwards,
        ${$themeLight
            ? dayToNightWindowTime($dayToNightColor)
            : nightToDayWindowTime($dayToNightColor)}
          ${$timeLeftSunMoon}s infinite normal linear forwards 4s;
    `}
`;

export default WindowView;
