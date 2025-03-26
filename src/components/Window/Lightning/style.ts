import styled, { keyframes } from "styled-components";

const lightning = keyframes`
    0% {
        background-color: transparent;
    }
    15% {
        background-color: transparent;
    }
    20% {
        background-color: rgba(255, 251, 226, 0.5);
    }
    25% {
        background-color: transparent;
    }
    30% {
        background-color: rgba(255, 251, 226, 0.5);
    }
    40% {
        background-color: transparent;
    }
  100% {
      background-color: transparent;
  }
`;

export const LightningWrapper = styled.div`
  width: 222px;
  position: absolute;
  display: flex;
  height: 400px;
  margin-top: -50px;
  overflow: hidden;
  z-index: 300;

  animation: ${lightning} 3s infinite;
`;
