import styled, { keyframes } from "styled-components";

const falling = keyframes`
  0% { margin-top: 0; transform: translateX(0px); }
  25% { transform: translateX(5px); }
  50% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
  100% { margin-top: 400px; transform: translateX(0px); }
`;

export const SnowWrapper = styled.div`
  width: 100%;
  position: absolute;
  height: 400px;
  margin-top: -50px;
  overflow: hidden;
  z-index: 300;
  pointer-events: none;
`;

export const SnowFlake = styled.div.attrs<{
  $top: number;
  $left: number;
  $animationDelay: number;
  $animationDuration: number;
  $opacity: number;
  $size: number;
}>((props) => ({
  style: {
    top: `-${props.$top}px`,
    left: `${props.$left}px`,
    width: `${props.$size}px`,
    height: `${props.$size}px`,
    opacity: props.$opacity,
    animationDelay: `${props.$animationDelay}s`,
    animationDuration: `${props.$animationDuration}s`,
  },
}))`
  position: absolute;
  background: white;
  border-radius: 50%;
  animation-name: ${falling};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

const fallingL = keyframes`
  0% { margin-top: 0; transform: translateX(0px); }
  25% { transform: translateX(-15px); }
  50% { transform: translateX(15px); }
  75% { transform: translateX(-15px); }
  100% { margin-top: 400px; transform: translateX(0px); }
`;

const fallingR = keyframes`
  0% { margin-top: 0; transform: translateX(0px); }
  25% { transform: translateX(15px); }
  50% { transform: translateX(-15px); }
  75% { transform: translateX(15px); }
  100% { margin-top: 400px; transform: translateX(0px); }
`;

export const SnowFlakeL = styled.div.attrs<{
  $left: number;
  $delay: number;
  $duration: number;
}>((props) => ({
  style: {
    left: `${props.$left}%`,
    animationDelay: `${props.$delay}s`,
    animationDuration: `${props.$duration}s`,
  },
}))`
  position: absolute;
  color: #fff;
  font-size: 1em;
  text-shadow: 0 0 1px #000;
  top: -30px;
  animation-name: ${fallingL};
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
`;

export const SnowFlakeR = styled.div.attrs<{
  $left: number;
  $delay: number;
  $duration: number;
}>((props) => ({
  style: {
    left: `${props.$left}%`,
    animationDelay: `${props.$delay}s`,
    animationDuration: `${props.$duration}s`,
  },
}))`
  position: absolute;
  color: #fff;
  font-size: 1em;
  text-shadow: 0 0 1px #000;
  top: -30px;
  animation-name: ${fallingR};
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
`;
