import styled, { keyframes } from "styled-components";

const SIZE = {
  big: 48,
  medium: 24,
  small: 16,
};

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export type Size = "big" | "medium" | "small";

export const SpinnerIconWrapper = styled.div<{ size: Size; color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${spin} 1s linear infinite;
  height: ${({ size }) => SIZE[size]}px;
  width: ${({ size }) => SIZE[size]}px;
  color: ${({ color }) => color};
`;
