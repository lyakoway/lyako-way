import styled, { keyframes } from "styled-components";

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
  width: 200px;
  height: 300px;
  transform: rotateZ(45deg);
`;

export const Star = styled.div`
  position: absolute;
  top: 20%;
  left: 20%;
  width: 0;
  height: 1px;
  background: linear-gradient(-45deg, #5f91ff, rgba(0, 0, 255, 0));
  filter: drop-shadow(0 0 5px #2557bb);
  animation: ${tail} 9s ease-in-out infinite,
    ${shooting} 9s ease-in-out infinite;
  animation-delay: 5s;

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
      #5f91ff,
      rgba(0, 0, 255, 0)
    );
    border-radius: 100%;
    transform: translateX(50%) rotateZ(45deg);
    animation: ${shining} 9s ease-in-out infinite;
    animation-delay: 5s;
  }

  &:after {
    transform: translateX(50%) rotateZ(-45deg);
  }
`;
