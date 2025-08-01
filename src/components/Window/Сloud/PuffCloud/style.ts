import styled from "styled-components";

interface PuffCloudPatternProps {
  $top: number;
  $left: number;
  $colorCloud: number;
  $colorBorder: number;
}

export const PuffCloudPattern = styled.div.attrs<PuffCloudPatternProps>(
  (props) => ({
    style: {
      top: `${props.$top}px`,
      left: `${props.$left}px`,
      backgroundImage: `linear-gradient(
        hsl(0deg 0% ${props.$colorCloud}%),
        hsl(180deg 50% ${props.$colorBorder}%)
      )`,
    },
  })
)`
  width: 22px;
  height: 22px;
  position: absolute;
  border-radius: 50%;
  background-size: auto 30px;
  background-position: 50% 0;
  z-index: 100;
`;
