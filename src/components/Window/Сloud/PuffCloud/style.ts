import styled from "styled-components";

export const PuffCloudPattern = styled.div<{
  $top: number;
  $left: number;
  $colorCloud: number;
  $colorBorder: number;
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
`;
