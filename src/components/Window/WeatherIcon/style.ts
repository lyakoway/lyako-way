import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const ContainerWeather = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 4px;
  height: 40px;
  width: 40px;
`;

export const ContainerSunny = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 4px;
  animation-name: ${spin};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-delay: 10s;
`;
