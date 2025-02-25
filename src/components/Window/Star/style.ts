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

export const StarWrapper = styled.div<{ $themeLight: boolean }>`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  display: flex;
  ${({ $themeLight }) =>
    css`
      animation: ${$themeLight ? ani : ani1} 4s forwards;
    `};
`;
