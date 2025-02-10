import styled, { keyframes } from "styled-components";

const wind = ({
  $leftRandom,
  $topRandom,
  $left,
  $top,
}: {
  $leftRandom: number;
  $topRandom: number;
  $left: number;
  $top: number;
}) => keyframes`
  50% {
    left: ${$leftRandom}px;
    top: ${$topRandom}px;
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
  $leftRandom: number;
  $topRandom: number;
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

  animation: ${({ $leftRandom, $topRandom, $left, $top }) =>
      wind({ $leftRandom, $topRandom, $left, $top })}
    ${({ $animationDuration }) => $animationDuration}s linear
    ${({ $animationDuration }) => $animationDuration}s infinite;
  animation-delay: 3s;
`;
