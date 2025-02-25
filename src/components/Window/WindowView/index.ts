import styled from "styled-components";

export const WindowView = styled.div<{
  $dayToNightColor: string;
  $timeLeftSunMoon: number;
  $themeLight: boolean;
}>`
  position: absolute;
  left: 20px;
  top: 20px;
  width: 222px;
  height: 300px;
  background: ${({ $themeLight }) => ($themeLight ? "#88bef5" : "#0c2233")};
  z-index: 2;
  overflow: hidden;
  border: 1px solid rgba(167, 222, 253, 1);
`;

export default WindowView;
