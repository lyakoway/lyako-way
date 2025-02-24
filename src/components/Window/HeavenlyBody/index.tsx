import styled, { css, keyframes } from "styled-components";
import React, { FC } from "react";
import Moon from "src/components/Window/HeavenlyBody/Moon";

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

const HeavenlyBodyContainer = styled.div<{
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
  //box-shadow: 0 0 10px 2px #fff;
  box-shadow: 0 0 60px 19px #f1f1f1;

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

interface HeavenlyBodyProps {
  leftRotateWindowSunMoon: number;
  timeLeftSunMoon: number;
  themeLight: boolean;
  moonOrSunColor: string;
}

const HeavenlyBody: FC<HeavenlyBodyProps> = ({
  leftRotateWindowSunMoon,
  timeLeftSunMoon,
  themeLight,
  moonOrSunColor,
}) => {
  return (
    <HeavenlyBodyContainer
      $leftRotateWindowSunMoon={leftRotateWindowSunMoon}
      $timeLeftSunMoon={timeLeftSunMoon}
      $themeLight={themeLight}
      $moonOrSunColor={moonOrSunColor}
    >
      <Moon themeLight={themeLight} />
    </HeavenlyBodyContainer>
  );
};

export default HeavenlyBody;
