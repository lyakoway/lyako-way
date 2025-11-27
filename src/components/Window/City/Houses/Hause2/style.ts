import styled, { css } from "styled-components";
import { bgTransition } from "src/common/utils/bgTransition";

export const Wrapper = styled.div<{ $climateControl: string }>`
  background-color: #ceae99;
  width: 101px;
  height: 165px;
  position: relative;
  border-top: 21px solid #b89b88;

  &:before {
    content: "";
    position: absolute;
    background-color: ${({ $climateControl }) =>
      $climateControl === "snowy" ? "#fff" : "#997071"};
    ${bgTransition};
    width: 109px;
    height: 7px;
    top: -11px;
    left: -4px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
  }

  &:after {
    content: "";
    position: absolute;
    background-color: ${({ $climateControl }) =>
      $climateControl === "snowy" ? "#fff" : "#997071"};
    ${bgTransition};
    width: 113px;
    height: 7px;
    top: -21px;
    left: -6px;
  }
`;

export const Tank = styled.div<{ $climateControl }>`
  width: 24px;
  height: 27px;
  background-color: ${({ $climateControl }) =>
    $climateControl === "snowy" ? "#fff" : "#eadadb"};
  ${bgTransition};
  position: relative;
  top: -52px;
  left: 7px;

  &:before {
    content: "";
    position: absolute;
    width: 3px;
    height: 4px;
    background-color: #ccbebf;
    border-top: 2px solid #a59a9a;
    bottom: -4px;
  }

  &:after {
    content: "";
    position: absolute;
    width: 3px;
    height: 4px;
    background-color: #ccbebf;
    border-top: 2px solid #a59a9a;
    bottom: -4px;
    right: 0;
  }
`;

export const TankDetails = styled.div<{ $climateControl: string }>`
  width: 11px;
  height: 3px;
  background-color: ${({ $climateControl }) =>
    $climateControl === "snowy" ? "#fff" : "#ccbebf"};
  ${bgTransition};
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;
  left: 6px;
  position: absolute;
  top: -3px;

  &:before {
    content: "";
    position: absolute;
    width: 24px;
    height: 1px;
    background-color: #ccbebf;
    bottom: -25px;
    left: -6px;
  }

  &:after {
    content: "";
    position: absolute;
    width: 24px;
    height: 4px;
    border-top: 1px solid #ccbebf;
    border-bottom: 1px solid #ccbebf;
    bottom: -10px;
    left: -6px;
  }
`;

export const House2Sign = styled.div<{ $climateControl: string }>`
  width: 11px;
  height: 50px;
  border-radius: 5px;
  background-color: ${({ $climateControl }) =>
    $climateControl === "snowy" ? "#fff" : "#8d8f8c"};
  ${bgTransition};
  border: 3px solid #caccc8;
  position: absolute;
  right: -14px;
  top: 5px;
  z-index: 100;

  &:before {
    content: "";
    position: absolute;
    width: 3px;
    height: 3px;
    background-color: inherit;
    left: -6px;
    top: 4px;
  }

  &:after {
    content: "";
    position: absolute;
    width: 3px;
    height: 3px;
    background-color: inherit;
    left: -6px;
    bottom: 4px;
  }
`;

//
export const Houses2Windows = styled.div`
  margin-top: -27px;
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
  border: 3px solid #997071;
  margin: 6px;
  background-color: ${({ $themeLight }) =>
    $themeLight ? "#cce1ff" : "#FFE9AB"};
  ${({ $themeLight }) =>
    !$themeLight &&
    css`
      box-shadow: inset 0 0 5px 1px #3f6b91;
    `}
  ${bgTransition};

  &:before {
    content: "";
    position: absolute;
    width: 12px;
    height: 2px;
    background-color: #997071;
    bottom: 70%;
  }
  &:after {
    content: "";
    position: absolute;
    width: 20px;
    height: 4px;
    bottom: -1px;
    left: -5px;
    background-color: #a87b7c;
    border-top: 1px solid
      ${({ $climateControl }) =>
        $climateControl === "snowy" ? "#fff" : "#c28e8f"};
  }
`;

export const HousesDoor = styled.div`
  width: 22px;
  height: 37px;
  position: relative;
  margin: 3px;
  background-color: #705253;
  border: 3px solid #997071;
  top: 21px;

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
    background-color: #8a6566;
    border-bottom: 2px solid #c28e8f;
    border-top: 2px solid #c28e8f;
  }
`;

export const House2Rack = styled.div`
  position: absolute;
  width: 47px;
  background-color: #b89b88;
  height: 2px;
  margin-top: 7px;
  margin-left: 41px;

  &:before {
    content: "";
    position: absolute;
    border: 2px solid #e8ebe6;
    top: -2px;
    width: 47px;
    height: 16px;
    border-radius: 2px;
    background: repeating-linear-gradient(
      to right,
      transparent,
      transparent 6px,
      #e8ebe6 6px,
      #e8ebe6 10px
    );
  }
`;
