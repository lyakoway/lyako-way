import styled, { css, keyframes } from "styled-components";

const tail1 = keyframes`
    0% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
`;
const tail = ($width: number, $height: number, $opacity: number) => keyframes`
    0% {
      opacity: 0;
    }
    50% {
      width: ${$width}px;
      height: ${$height}px;
      opacity:  ${$opacity};
    }
    100% {
      opacity: 0;
    }
`;

export const SkyContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 170px;
`;

export const StarWrapper = styled.div`
  display: flex;
`;

export const Star = styled.div<{
  $top: number;
  $left: number;
  $animationDuration: number;
  $animationDelay: number;
  $width: number;
  $height: number;
  $opacity: number;
  $background: string;
}>`
  position: absolute;
  top: ${({ $top }) => $top}%;
  left: ${({ $left }) => $left}%;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: ${({ $background }) => $background};
  //box-shadow: 0 0 6px 0 rgba(255, 255, 255, 0.8);

  //background: linear-gradient(-45deg, #5f91ff, rgba(0, 0, 255, 0));
  filter: drop-shadow(0 0 5px #2557bb);
  opacity: 0;

  //animation: star-blink 1.2s linear infinite

  ${({ $animationDuration, $animationDelay, $width, $height, $opacity }) =>
    css`
      animation: ${$width ? tail($width, $height, $opacity) : tail1}
        ${$animationDuration}s linear infinite;
      animation-delay: ${$animationDelay}s;
    `}
`;
