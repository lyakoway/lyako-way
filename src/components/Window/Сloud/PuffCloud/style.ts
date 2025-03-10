import styled, { keyframes } from "styled-components";

const wind = ({ $left, $top }: { $left: number; $top: number }) => keyframes`
  0% {
    left: ${$left}px;
    top: ${$top}px;
  }
  25% {
    left: ${$left + 1}px;
    top: ${$top + 1}px;
  }
  50% {
    left: ${$left}px;
    top: ${$top}px;
  }
  75% {
    left: ${$left - 1}px;
    top: ${$top - 1}px;
  }
  100% {
    left: ${$left}px;
    top: ${$top}px;
  }
`;

export const PuffCloudPattern = styled.div<{
  $top: number;
  $left: number;
  $colorCloud: number;
  $colorBorder: number;
  $animationDuration: number | null;
}>`
  width: 22px;
  height: 22px;
  top: ${({ $top }) => $top}px;
  left: ${({ $left }) => $left}px;
  border-radius: 50%;
  position: absolute;
  background-image: linear-gradient(
    hsl(0deg 0% ${({ $colorCloud }) => $colorCloud}%),
    hsl(180deg 50% ${({ $colorBorder }) => $colorBorder}%)
  );
  background-size: auto 30px;
  background-position: 50% 0;
  z-index: 100;

  animation: ${({ $left, $top }) => wind({ $left, $top })}
    ${({ $animationDuration }) => $animationDuration}s linear
    ${({ $animationDuration }) => $animationDuration}s infinite;
  animation-delay: 3s;
`;
