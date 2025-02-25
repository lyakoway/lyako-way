import styled, { css, keyframes } from "styled-components";

const shining = keyframes`
    0% {
        width: 0;
    }
    10% {
        width: 20px;
    }
    32% {
        width: 0;
    }
    100% {
        width: 0;
    }
`;

const tail = keyframes`
    0% {
        width: 0;
    }
    10% {
        width: 50px;
    }
    25% {
        width: 0;
    }
    100% {
        width: 0;
    }
`;

const shooting = keyframes`
    0% {
        transform: translateX(0);
    }
    30% {
        transform: translateX(150px);
    }
    100% {
        transform: translateX(150px);
    }
`;

export const SkyContainer = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  transform: rotateZ(45deg);
  top: -30px;
  left: -30px;
`;

export const StarWrapper = styled.div`
  display: flex;
`;

export const Star = styled.div<{
  $top: number;
  $left: number;
  $animationDuration: number;
  $animationDelay: number;
}>`
  position: absolute;
  top: ${({ $top }) => $top}%;
  left: ${({ $left }) => $left}%;
  width: 0;
  height: 1px;
  background: linear-gradient(-45deg, #ffffff, rgba(0, 0, 255, 0));
  filter: drop-shadow(0 0 5px #ffffff);

  ${({ $animationDuration, $animationDelay }) =>
    css`
      animation: ${tail} ${$animationDuration}s ease-in-out infinite,
        ${shooting} ${$animationDuration}s ease-in-out infinite;
      animation-delay: ${$animationDelay}s;
    `}

  &:before,
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(
      -45deg,
      rgba(0, 0, 255, 0),
      #ffffff,
      rgba(0, 0, 255, 0)
    );
    border-radius: 100%;
    transform: translateX(50%) rotateZ(45deg);

    ${({ $animationDuration, $animationDelay }) =>
      css`
        animation: ${shining} ${$animationDuration}s ease-in-out infinite;
        animation-delay: ${$animationDelay}s;
      `}
  }

  &:after {
    transform: translateX(50%) rotateZ(-45deg);
  }
`;
