import styled, { keyframes } from "styled-components";

const falling = keyframes`
    0% {
        transform: translateY(-100%);
        opacity: 1;
    }
    100% {
        transform: translateY(400px);
        opacity: 0.6;
    }
`;

export const RainWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 3px;
  position: absolute;
  top: 0;
  height: 400px;
  overflow: hidden;
  z-index: 300;
  pointer-events: none;
`;

interface DropProps {
  $animationDuration: number;
  $height: number;
}

export const Drop = styled.div.attrs<DropProps>((props) => ({
  style: {
    animationDuration: `${props.$animationDuration}s`,
    height: `${props.$height}px`,
  },
}))`
  width: 2px;
  background: linear-gradient(transparent, #d3f4ff);
  border-radius: 1px;

  animation-name: ${falling};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;
