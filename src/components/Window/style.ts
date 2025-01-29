import styled, { css, keyframes } from "styled-components";
import { TABLET_959 } from "src/common/lib/media";

interface WindowLightProps {
  $timeLeftSunMoon: number;
  $lightOffOpacitySun: number;
  $lightOffOpacityMoon: number;
  $themeLight: boolean;
  $moonOrSunColor?: string;
}

const heavenlyBodyMoveSun = (
  $leftRotateWindowSunMoon: number,
  $moonOrSunColor: string
) => keyframes`
  from {
    transform: rotate(${$leftRotateWindowSunMoon}deg);
    background: #fff;
    box-shadow: 0 0 10px 2px #fff;
  }
  16% {
    background: #fff;
    box-shadow: 0 0 10px 2px #fff;
  }
  33% {
    background: #fff;
    box-shadow: 0 0 10px 2px #fff;
  }
  70% {
    background: ${$moonOrSunColor};
    box-shadow: 0 0 10px 2px ${$moonOrSunColor};
  }
  85% {
    background: ${$moonOrSunColor};
    box-shadow: 0 0 10px 2px ${$moonOrSunColor};
  }
  to {
    transform: rotate(${360 + $leftRotateWindowSunMoon}deg);
    background: ${$moonOrSunColor};
    box-shadow: 0 0 10px 2px ${$moonOrSunColor};
  }
`;

const heavenlyBodyMoveSunTime = (
  $leftRotateWindowSunMoon: number,
  $moonOrSunColor: string
) => keyframes`
  from {
    transform: rotate(${$leftRotateWindowSunMoon}deg);
    background: ${$moonOrSunColor};
    box-shadow: 0 0 10px 2px ${$moonOrSunColor};
  }
  16% {
    background: ${$moonOrSunColor};
    box-shadow: 0 0 10px 2px ${$moonOrSunColor};
  }
  33% {
    background: ${$moonOrSunColor};
    box-shadow: 0 0 10px 2px ${$moonOrSunColor};
  }
  70% {
    background: #fff;
    box-shadow: 0 0 10px 2px #fff;
  }
  85% {
    background: #fff;
    box-shadow: 0 0 10px 2px #fff;
  }
  to {
    transform: rotate(${360 + $leftRotateWindowSunMoon}deg);
    background: #fff;
    box-shadow: 0 0 10px 2px #fff;
  }
`;

const heavenlyBodyMoveMoon = (
  $leftRotateWindowSunMoon: number,
  $moonOrSunColor: string
) => keyframes`
  from {
    transform: rotate(${$leftRotateWindowSunMoon}deg);
    background: #fff82f;
    box-shadow: 0 0 10px 2px #fff82f;
  }
  16% {
    background: #fff82f;
    box-shadow: 0 0 10px 2px #fff82f;
  }
  33% {
    background: #fff82f;
    box-shadow: 0 0 10px 2px #fff82f;
  }
  70% {
    background: ${$moonOrSunColor};
    box-shadow: 0 0 10px 2px ${$moonOrSunColor};
  }
  85% {
    background: ${$moonOrSunColor};
    box-shadow: 0 0 10px 2px ${$moonOrSunColor};
  }
  to {
    transform: rotate(${360 + $leftRotateWindowSunMoon}deg);
    background: ${$moonOrSunColor};
    box-shadow: 0 0 10px 2px ${$moonOrSunColor};
  }
`;

const heavenlyBodyMoveMoonTime = (
  $leftRotateWindowSunMoon: number,
  $moonOrSunColor: string
) => keyframes`
  from {
    transform: rotate(${$leftRotateWindowSunMoon}deg);
    background: ${$moonOrSunColor};
    box-shadow: 0 0 10px 2px ${$moonOrSunColor};
  }
  16% {
    background: ${$moonOrSunColor};
    box-shadow: 0 0 10px 2px ${$moonOrSunColor};
  }
  33% {
    background: ${$moonOrSunColor};
    box-shadow: 0 0 10px 2px ${$moonOrSunColor};
  }
  70% {
    background: #fff82f;
    box-shadow: 0 0 10px 2px #fff82f;
  }
  85% {
    background: #fff82f;
    box-shadow: 0 0 10px 2px #fff82f;
  }
  to {
    transform: rotate(${360 + $leftRotateWindowSunMoon}deg);
    background: #fff82f;
    box-shadow: 0 0 10px 2px #fff82f;
  }
`;

const lightOff = ($lightOffOpacity: number) => keyframes`
  from { 
    opacity: ${$lightOffOpacity};
  }
  to {
    opacity: ${$lightOffOpacity};
  }
`;

const lightOffSun = (
  $lightOffOpacitySun: number,
  $lightOffOpacityMoon: number
) => keyframes`
  from {
    opacity: ${$lightOffOpacityMoon};
  }
  50% {opacity: 0}
  to {
    opacity: ${$lightOffOpacitySun};
  }
`;

const lightOffSunTime = (
  $lightOffOpacitySun: number,
  $lightOffOpacityMoon: number
) => keyframes`
  from { 
    opacity: ${$lightOffOpacitySun};
  }
  to {
    opacity: ${$lightOffOpacitySun};
  }
`;

const lightOffMoon = (
  $lightOffOpacitySun: number,
  $lightOffOpacityMoon: number
) => keyframes`
  from {
    opacity: ${$lightOffOpacitySun};
  }
  50% {opacity: 0}
  to {
    opacity: ${$lightOffOpacityMoon};
  }
`;

const lightOffMoonTime = (
  $lightOffOpacitySun: number,
  $lightOffOpacityMoon: number
) => keyframes`
  from {
    opacity: ${$lightOffOpacityMoon};
  }
  to {
    opacity: ${$lightOffOpacityMoon};
  }
`;

export const WindowFrame = styled.div`
  position: absolute;
  top: 20px;
  left: 126px;
  width: 10px;
  height: 300px;
  background: #e4e4e4;
  z-index: 3;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 3px;
    width: 4px;
    height: 300px;
    background: #fff;
    z-index: 0;
  }
`;

export const WindowSill = styled.div`
  position: absolute;
  bottom: 0;
  left: -20px;
  width: 300px;
  height: 20px;
  background: #fff;
`;

export const WindowWrapper = styled.div`
  position: relative;
  width: 260px;
  height: 340px;
  background: #fff;
  z-index: 2;

  @media ${TABLET_959} {
    display: none;
  }
`;

export const HeavenlyBody = styled.div<{
  $leftRotateWindowSunMoon: number;
  $timeLeftSunMoon: number;
  $themeLight: boolean;
  $moonOrSunColor: string;
}>`
  position: absolute;
  left: 86px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 10px 2px #fff;

  transform-origin: 50% 400%;
  margin-top: 5%;

  ${({
    $themeLight,
    $timeLeftSunMoon,
    $leftRotateWindowSunMoon,
    $moonOrSunColor,
  }) =>
    css`
      animation: ${$themeLight
            ? heavenlyBodyMoveSun($leftRotateWindowSunMoon, $moonOrSunColor)
            : heavenlyBodyMoveMoon($leftRotateWindowSunMoon, $moonOrSunColor)}
          4s infinite normal ease-in-out forwards,
        ${$themeLight
            ? heavenlyBodyMoveSunTime($leftRotateWindowSunMoon, $moonOrSunColor)
            : heavenlyBodyMoveMoonTime(
                $leftRotateWindowSunMoon,
                $moonOrSunColor
              )}
          ${$timeLeftSunMoon}s infinite normal ease-in-out forwards 4s;
    `}
`;

export const WindowLight = styled.div<WindowLightProps>`
  position: absolute;
  top: 11px;
  width: 135px;
  height: 395px;
  z-index: 1;

  ${({
    $themeLight,
    $timeLeftSunMoon,
    $lightOffOpacitySun,
    $lightOffOpacityMoon,
  }) =>
    css`
      animation: ${$themeLight
            ? lightOffSun($lightOffOpacitySun, $lightOffOpacityMoon)
            : lightOffMoon($lightOffOpacitySun, $lightOffOpacityMoon)}
          4s infinite normal linear forwards,
        ${$themeLight
            ? lightOffSunTime($lightOffOpacitySun, $lightOffOpacityMoon)
            : lightOffMoonTime($lightOffOpacitySun, $lightOffOpacityMoon)}
          ${$timeLeftSunMoon}s infinite normal linear forwards 4s;
    `}
`;

export const WindowLightLeft = styled(WindowLight)<WindowLightProps>`
  left: -72px;
  transform: rotate(20deg);
  background-image: linear-gradient(
    20deg,
    rgba(255, 255, 255, 0) 10%,
    rgba(255, 255, 255, 0.5)
  );
`;

export const WindowLightRight = styled(WindowLight)<WindowLightProps>`
  left: 198px;
  transform: rotate(-20deg);
  background-image: linear-gradient(
    -20deg,
    rgba(255, 255, 255, 0) 10%,
    rgba(255, 255, 255, 0.5)
  );
`;

export const WindowHotspot = styled.div<WindowLightProps>`
  position: absolute;
  left: 20px;
  top: 20px;
  z-index: 2;
  width: 220px;
  height: 300px;
  background: transparent;
  background-image: linear-gradient(
    to right top,
    transparent 60%,
    rgba(255, 255, 255, 0.1) 60%,
    rgba(255, 255, 255, 0.1) 70%,
    transparent 70%,
    transparent 73%,
    rgba(255, 255, 255, 0.1) 73%,
    rgba(255, 255, 255, 0.1) 76%,
    transparent 76%
  );

  ${({
    $themeLight,
    $timeLeftSunMoon,
    $lightOffOpacitySun,
    $lightOffOpacityMoon,
  }) =>
    css`
      animation: ${$themeLight
            ? lightOffSun($lightOffOpacitySun, $lightOffOpacityMoon)
            : lightOffMoon($lightOffOpacitySun, $lightOffOpacityMoon)}
          4s infinite normal linear forwards,
        ${$themeLight
            ? lightOffSunTime($lightOffOpacitySun, $lightOffOpacityMoon)
            : lightOffMoonTime($lightOffOpacitySun, $lightOffOpacityMoon)}
          ${$timeLeftSunMoon}s infinite normal linear forwards 4s;
    `}
`;

const dayToNight = ($dayToNightColor: string) => keyframes`
  from {
    background: ${$dayToNightColor};
  }
  to {
    background: ${$dayToNightColor};
  }
`;

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

const weatherIconBorder = keyframes`
  from {
    border-color: #ffff;
  }
  50% {
    border-color: #8cd9d9;
  }
  to {
    border-color: #ffff;
  }
`;

export const WeatherIconWrapper = styled.div`
  display: flex;
  border: solid 4px #ffff;
  cursor: pointer;
  background: linear-gradient(to bottom, #57c1eb 0%, #246fa8 100%);
  border-radius: 50%;
  position: absolute;
  z-index: 1000;
  bottom: 0;
  left: 0;
  animation: ${weatherIconBorder} 10s linear infinite;
`;

export const WeatherConditionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  width: 100%;
`;

export const WeatherConditionsText = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 0;
  color: white;
`;

export const WeatherConditions = styled.input`
  width: 100%;
  background: linear-gradient(0.25turn, #88bef5, #2d3136);
  border-radius: 20px;
  margin: 10px;
  -webkit-appearance: none;

  ::-webkit-slider-thumb {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #ebf6ff;
    cursor: pointer;
    -webkit-appearance: none;
  }
`;

export const IconClose = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  right: calc(22px);

  &:hover {
    cursor: pointer;
  }

  &:hover:before {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${({ theme }) =>
      theme.name === "light" ? "rgba(98, 108, 119, 0.25)" : "#d4d4d559"};
  }

  & svg {
    fill: ${({ theme }) => (theme.name === "light" ? "#7b7e86" : "#fff")};
  }

  &:hover svg {
    fill: red;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
`;
