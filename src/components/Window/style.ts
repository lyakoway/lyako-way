import styled, { css, keyframes } from "styled-components";
import { TABLET_959 } from "src/common/lib/media";

interface WindowLightProps {
  $timeLeftSunMoon: number;
  $lightOffOpacitySun: number;
  $lightOffOpacityMoon: number;
  $themeLight: boolean;
  $moonOrSunColor?: string;
}

const lightning = keyframes`
  0% {
    opacity: 0;
  }
  15% {
    opacity: 0;
  }
  20% {
    opacity: 0.8;
  }
  25% {
    opacity: 0.3;
  }
  30% {
    opacity: 0.8;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

const lightOffSun = (
  $lightOffOpacitySun: number,
  $lightOffOpacityMoon: number
) => keyframes`
  from {
    opacity: 0.3;
  }
  50% {opacity: 0}
  to {
    opacity: 0.8;
  }
`;

const lightOffSunTime = (
  $lightOffOpacitySun: number,
  $lightOffOpacityMoon: number
) => keyframes`
  from { 
    opacity: 0.8;
  }
  to {
    opacity: 0.8;
  }
`;

const lightOffMoon = (
  $lightOffOpacitySun: number,
  $lightOffOpacityMoon: number
) => keyframes`
  from {
    opacity: 0.8;
  }
  50% {opacity: 0}
  to {
    opacity: 0.3;
  }
`;

const lightOffMoonTime = (
  $lightOffOpacitySun: number,
  $lightOffOpacityMoon: number
) => keyframes`
  from {
    opacity: 0.3;
  }
  to {
    opacity: 0.3;
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

export const HeavenlyBodyParallax = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
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

export const WindowLightLightning = styled.div`
  position: absolute;
  top: 11px;
  width: 135px;
  height: 395px;
  z-index: 1;
  animation: ${lightning} 3s infinite;
`;

export const WindowLightLeftLightning = styled(WindowLightLightning)`
  left: -72px;
  transform: rotate(20deg);
  background-image: linear-gradient(
    20deg,
    rgba(255, 255, 255, 0) 10%,
    rgba(255, 255, 255, 0.5)
  );
`;

export const WindowLightRightLightning = styled(WindowLightLightning)`
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
