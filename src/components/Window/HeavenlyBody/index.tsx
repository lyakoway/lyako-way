import styled, { css, keyframes } from "styled-components";
import React, { FC, useMemo } from "react";
import Moon from "src/components/Window/HeavenlyBody/Moon";
import Son from "src/components/Window/HeavenlyBody/Son";

// «Эпоха» анимации + ключ (тема). Хранятся на уровне модуля → переживают
// клиентские переходы (ремаунт «Дома»). Разница (сейчас − эпоха) идёт в
// ОТРИЦАТЕЛЬНЫЙ animation-delay:
//  • тот же ключ (возврат на «Дом») → фаза = прошедшее время → анимация
//    ПРОДОЛЖАЕТСЯ, не перезапускается → солнце/луна не «сбиваются»;
//  • сменился ключ (переключение темы свет↔тёмная) → эпоха сбрасывается →
//    фаза = 0 → анимация играет С НАЧАЛА (тело делает оборот и возвращается).
let animationEpochMs: number | null = null;
let animationKey: string | null = null;
function getAnimationPhaseSeconds(key: string): number {
  if (typeof window === "undefined") return 0; // SSR — старт с нуля
  if (animationEpochMs == null || animationKey !== key) {
    animationEpochMs = Date.now();
    animationKey = key;
    return 0; // первый запуск или смена темы → анимация с начала (оборот)
  }
  return (Date.now() - animationEpochMs) / 1000;
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

const HeavenlyBodyContainer = styled.div<{
  $leftRotateWindowSunMoon: number;
  $timeLeftSunMoon: number;
  $themeLight: boolean;
  $moonOrSunColor: string;
  $phase: number;
}>`
  position: absolute;
  left: 86px;
  //width: 50px;
  //height: 50px;
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
    $phase,
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
          ${$timeLeftSunMoon}s infinite normal ease-in-out forwards;
      /* Фаза привязана к первому запуску (эпоха на уровне модуля): интро сдвинуто
         на -$phase, основной оборот — на (4 − $phase). На первом заходе это даёт
         прежний тайминг (интро 0–4с, затем основной с 4с). При возврате на «Дом»
         (большой $phase) основной оборот уже активен и продолжается с нужного
         места, а интро не переигрывается — позиция не сбивается. */
      animation-delay: -${$phase}s, ${4 - $phase}s;
    `}
`;

interface HeavenlyBodyProps {
  leftRotateWindowSunMoon: number;
  timeLeftSunMoon: number;
  themeLight: boolean;
  moonOrSunColor: string;
  lightOffOpacitySun: number;
}

const HeavenlyBody: FC<HeavenlyBodyProps> = ({
  leftRotateWindowSunMoon,
  timeLeftSunMoon,
  themeLight,
  moonOrSunColor,
  lightOffOpacitySun,
}) => {
  // Фаза с ключом по теме: при возврате на «Дом» (тот же ключ) — «прошедшее
  // время» (анимация продолжается, без сбоя), при смене темы (новый ключ) —
  // 0 (анимация с начала: тело делает оборот и возвращается на место).
  const phase = useMemo(
    () => getAnimationPhaseSeconds(themeLight ? "light" : "dark"),
    [themeLight]
  );

  return (
    <HeavenlyBodyContainer
      $leftRotateWindowSunMoon={leftRotateWindowSunMoon}
      $timeLeftSunMoon={timeLeftSunMoon}
      $themeLight={themeLight}
      $moonOrSunColor={moonOrSunColor}
      $phase={phase}
    >
      <Son lightOffOpacitySun={lightOffOpacitySun} themeLight={themeLight} />
      <Moon themeLight={themeLight} />
    </HeavenlyBodyContainer>
  );
};

export default HeavenlyBody;
