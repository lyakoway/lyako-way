import styled, { keyframes } from "styled-components";

const lightning = keyframes`
    0%, 15%, 25%, 40%, 100% {
        background-color: transparent;
    }
    20%, 30% {
        background-color: rgba(255, 251, 226, 0.5);
    }
`;

export const LightningWrapper = styled.div`
  width: 222px;
  height: 400px;
  position: absolute;
  margin-top: -50px;
  overflow: hidden;
  z-index: 300;
  display: flex;

  animation: ${lightning} 3s infinite;
`;
