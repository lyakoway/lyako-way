import styled, { css, keyframes } from "styled-components";

export const StreetlampWrapper = styled.div<{ $left: string }>`
  position: absolute;
  bottom: -60px;
  width: 2px;
  height: 61px;
  background-color: #677575;
  margin: 0 85px;
  cursor: pointer;
  z-index: 200;
  left: ${({ $left }) => $left};
  display: flex;

  &:before {
    content: "";
    position: absolute;
    width: 4px;
    height: 12px;
    background-color: #809191;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    bottom: 0;
    left: -1px;
  }
  &:after {
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: #809191;
    border-radius: 50%;
    left: -2px;
    top: -5px;
  }
`;

const ani = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const ani1 = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const StreetlampGlow = styled.div<{ $themeLight: boolean }>`
  position: absolute;
  z-index: 102;
  width: 6px;
  height: 6px;
  top: -5px;
  left: -2px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 0 30px 15px #fff;
  opacity: 0;
  ${({ $themeLight }) =>
    css`
      animation: ${$themeLight ? ani : ani1} 2s forwards;
    `};
`;
