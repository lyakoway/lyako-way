import styled, { css, keyframes } from "styled-components";

const ani = keyframes`
  0% {
    background-color: #FFE9AB;
  }
  20% {
    background-color: #8f8c8c;
  }
  80% {
    background-color: #8f8c8c;
  }
  100% {
    background-color: #FFE9AB;
  }
`;

export const Window = styled.div<{
  $themeLight: boolean;
  $showAnimation: boolean;
  $animationDelay: number;
}>`
  width: 8px;
  height: 12px;
  position: relative;
  border: 1px solid #88bef5;
  background-color: ${({ $themeLight }) =>
    $themeLight ? "#d6e5fc" : "#FFE9AB"};
  transition: background 2s ease;
  opacity: 0.4;

  ${({ $themeLight, $showAnimation, $animationDelay }) =>
    !$themeLight &&
    $showAnimation &&
    css`
      animation: ${ani} 10s ${$animationDelay}s linear infinite;
    `}
`;
