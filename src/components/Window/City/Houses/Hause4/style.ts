import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ $climateControl: string }>`
  background: linear-gradient(
    to bottom,
    #babdb0,
    #babdb0 40%,
    #ced1c3 40%,
    #ced1c3
  );
  background-size: 100% 4px;
  width: 50px;
  height: 115px;
  border-top: 25px solid #ced1c3;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 54px;
    height: 25px;
    border-top: 3px solid
      ${({ $climateControl }) =>
        $climateControl === "snowy" ? "#fff" : "#5a6666"};
    border-bottom: 3px solid
      ${({ $climateControl }) =>
        $climateControl === "snowy" ? "#fff" : "#5a6666"};
    top: -25px;
    left: -2px;
  }
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 11px solid
      ${({ $climateControl }) =>
        $climateControl === "snowy" ? "#fff" : "#738282"};
    top: -36px;
  }
`;
//

export const HouseWindowCircle = styled.div<{ $themeLight: boolean }>`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 3px solid #5a6666;
  position: relative;
  left: 16px;
  top: -20px;
  background-color: ${({ $themeLight }) =>
    $themeLight ? "#cde1fe" : "#FFE9AB"};
  ${({ $themeLight }) =>
    !$themeLight &&
    css`
      box-shadow: inset 0 0 5px 1px #3f6b91;
    `}
  transition: background 4s ease;

  &:before {
    content: "";
    position: absolute;
    width: 2px;
    height: 9px;
    background-color: #5a6666;
    left: 3px;
  }

  &:after {
    content: "";
    position: absolute;
    width: 9px;
    height: 2px;
    background-color: #5a6666;
    top: 3px;
  }
`;

export const Houses4Windows = styled.div`
  margin-top: -11px;
`;
export const HousesWindowsRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HousesWindows = styled.div<{
  $themeLight: boolean;
  $climateControl: string;
}>`
  position: relative;
  width: 25px;
  height: 25px;
  border: 3px solid #5a6666;
  margin: 6px;

  background-color: ${({ $themeLight }) =>
    $themeLight ? "#cce1ff" : "#FFE9AB"};
  ${({ $themeLight }) =>
    !$themeLight &&
    css`
      box-shadow: inset 0 0 5px 1px #3f6b91;
    `}
  transition: background 4s ease;

  &:before {
    content: "";
    position: absolute;
    width: 2px;
    left: 8px;
    height: 100%;
    background-color: #5a6666;
  }
  &:after {
    content: "";
    position: absolute;
    background-color: #738282;
    border-top: 1px solid
      ${({ $climateControl }) =>
        $climateControl === "snowy" ? "#fff" : "#8b9e9e"};
    width: 29px;
    height: 4px;
    bottom: -1px;
    left: -5px;
  }
`;

export const HouseWindowFrame = styled.div`
  width: 13px;
  height: 100%;
  left: 3px;
  position: absolute;
  border-left: 2px solid #5a6666;
  border-right: 2px solid #5a6666;

  &:before {
    content: "";
    position: absolute;
    background-color: #5a6666;
    width: 3px;
    height: 2px;
    top: 10px;
    left: -5px;
  }

  &:after {
    content: "";
    position: absolute;
    background-color: #5a6666;
    width: 3px;
    height: 2px;
    top: 10px;
    right: -5px;
  }
`;

export const HousesDoor = styled.div`
  position: relative;
  top: 4px;
  margin: 3px;
  left: 12px;
  background-color: #5a6666;
  border: 3px solid #738282;
  border-bottom: none;
  height: 33px;
  width: 19px;

  &:before {
    content: "";
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background-color: #f9bd82;
    top: 50%;
    right: 2px;
  }
  &:after {
    content: "";
    position: absolute;
    width: 26px;
    height: 6px;
    bottom: -5px;
    left: -5px;
  }
`;

export const HouseDoorStairs = styled.div`
  background-color: #cfebeb;
  width: 28px;
  height: 3px;
  position: relative;
  top: 35px;
  left: -4px;

  &:before {
    content: "";
    position: absolute;
    background-color: inherit;
    width: 25px;
    height: 3px;
    top: -3px;
  }
  &:after {
    content: "";
    position: absolute;
    background-color: inherit;
    width: 22px;
    height: 3px;
    top: -6px;
  }
`;

export const HouseDoorRail = styled.div`
  top: -13px;
  left: 5px;
  position: absolute;
  background-color: transparent;
  width: 7px;
  height: 7px;
  border-left: 2px solid #cfebeb;
  border-right: 2px solid #cfebeb;

  &:before {
    content: "";
    position: absolute;
    width: 17px;
    height: 2px;
    background-color: #cfebeb;
    top: -2px;
    left: -7px;
  }
  &:after {
    content: "";
    position: absolute;
    background-color: transparent;
    width: 17px;
    height: 7px;
    border-left: 2px solid #cfebeb;
    border-right: 2px solid #cfebeb;
    left: -7px;
  }
`;
