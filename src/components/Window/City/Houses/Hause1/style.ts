import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ $climateControl: string }>`
  background-color: #edc181;
  width: 72px;
  height: 138px;
  position: relative;
  border-top: 3px solid #d9b176;
  border-right: 3px solid #d9b176;

  &:before {
    content: "";
    position: absolute;
    background-color: ${({ $climateControl }) =>
      $climateControl === "snowy" ? "#fff" : "#666961"};
    transition: background 4s ease;
    height: 6px;
    width: 74px;
    right: -3px;
    top: -9px;
  }
`;

export const Houses1Windows = styled.div`
  margin-top: 8px;
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
  width: 16px;
  height: 28px;
  position: relative;
  border: 3px solid #666961;
  margin: 6px;
  background-color: ${({ $themeLight }) =>
    $themeLight ? "#b2c7e6" : "#FFE9AB"};

  ${({ $themeLight }) =>
    !$themeLight &&
    css`
      box-shadow: inset 0 0 5px 1px #3f6b91;
    `}
  transition: background 4s ease;

  &:before {
    content: "";
    position: absolute;
    width: 11px;
    height: 2px;
    background-color: #666961;
    bottom: 50%;
  }
  &:after {
    content: "";
    position: absolute;
    width: 20px;
    height: 4px;
    bottom: -1px;
    left: -5px;
    background-color: #7c7f76;
    border-top: 2px solid
      ${({ $climateControl }) =>
        $climateControl === "snowy" ? "#fff" : "#93968c"};
  }
`;

export const HousesDoor = styled.div`
  width: 22px;
  height: 37px;
  position: relative;
  top: 4px;
  margin: 3px;
  background-color: #93968c;
  border: 3px solid #666961;

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
    background-color: #8b8f85;
    border-bottom: 2px solid #b6baad;
    border-top: 2px solid #b6baad;
  }
`;
