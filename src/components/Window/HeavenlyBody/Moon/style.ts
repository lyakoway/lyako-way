import styled, { css, keyframes } from "styled-components";

const ani = keyframes`
  0% {
    opacity: 1;
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
    opacity: 1;
  }
`;

export const MoonContainer = styled.div<{ $themeLight: boolean }>`
  width: 50px;
  height: 50px;
  //background-color: #f1f1f1;
  border-radius: 50%;
  position: relative;
  z-index: 100;
  //box-shadow: 0 0 60px 19px #f1f1f1;
  ${({ $themeLight }) =>
    css`
      animation: ${$themeLight ? ani : ani1} 4s forwards;
    `};
`;

export const Crater = styled.div<{
  $top: number;
  $left: number;
  $width: number;
  $height: number;
}>`
  position: absolute;
  background: #e6e6e6;
  border-radius: 50%;
  box-shadow: inset -2px 2px 5px 0 rgba(0, 0, 0, 0.3);
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  top: ${({ $top }) => $top}%;
  left: ${({ $left }) => $left}%;
`;
