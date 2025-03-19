import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 108px;
  height: 80px;
  background-color: #8a6259;
  border-left: 3px solid #7f5b52;
  border-top: 3px solid #7f5b52;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    background-color: #61453e;
    width: 110px;
    height: 4px;
    top: -7px;
    left: -3px;
  }
  &:after {
    content: "";
    position: absolute;
    background-color: #b09b95;
    width: 97px;
    height: 50px;
    top: -57px;
    left: 2px;
    border-top: 3px solid #9c8984;
  }
`;

export const HouseRoof = styled.div`
  position: absolute;
  background-color: #6e615d;
  width: 101px;
  height: 4px;
  top: -61px;
  left: 1px;

  &:before {
    content: "";
    position: absolute;
    background-color: #c7baba;
    width: 21px;
    height: 15px;
    top: -15px;
    left: 8px;
  }
  &:after {
    content: "";
    position: absolute;
    border-top: 3px solid #c7baba;
    width: 24px;
    height: 15px;
    background: repeating-linear-gradient(
      to right,
      transparent,
      transparent 3px,
      #c7baba 3px,
      #c7baba 6px
    );
    top: -15px;
    left: 29px;
  }
`;

export const Tank = styled.div`
  background-color: #eadadb;
  position: relative;
  top: -27px;
  left: 62px;
  width: 29px;
  height: 23px;
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

export const TankDetails = styled.div`
  width: 15px;
  height: 3px;
  background-color: #ccbebf;
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;
  left: 7px;
  position: absolute;
  top: -3px;
  &:before {
    content: "";
    position: absolute;
    width: 29px;
    height: 1px;
    background-color: #ccbebf;
    bottom: -20px;
    left: -7px;
  }
  &:after {
    content: "";
    position: absolute;
    width: 29px;
    height: 4px;
    border-top: 1px solid #ccbebf;
    border-bottom: 1px solid #ccbebf;
    left: -7px;
    bottom: -10px;
  }
`;
//
export const Houses5Windows = styled.div`
  margin-top: 1px;
  margin-left: -1px;
`;

export const HousesWindowsRowTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-top: -50px;
  z-index: 101;
  left: 5px;
`;

export const HousesWindowsTop = styled.div<{ $themeLight: boolean }>`
  position: relative;
  width: 16px;
  margin: 7px;
  height: 24px;
  border: 3px solid #6e615d;
  background-color: ${({ $themeLight }) =>
    $themeLight ? "#d6e5fc" : "#FFE9AB"};
  ${({ $themeLight }) =>
    !$themeLight &&
    css`
      box-shadow: inset 0 0 5px 1px #3f6b91;
    `}
  transition: background 4s ease;

  &:before {
    content: "";
    position: absolute;
    width: 20px;
    height: 4px;
    top: -7px;
    left: -5px;
    background-color: #857570;
    border-top: 1px solid #9c8984;
  }
  &:after {
    content: "";
    position: absolute;
    width: 20px;
    height: 4px;
    bottom: -1px;
    left: -5px;
    background-color: #857570;
    border-top: 1px solid #9c8984;
  }
`;

export const Antenna = styled.div`
  width: 12px;
  height: 12px;
  background-color: #a69b9b;
  border: 5px solid #eadadb;
  position: absolute;
  z-index: 102;
  border-radius: 50%;
  right: 0;
  top: 18px;
  margin-right: 5px;

  &:before {
    content: "";
    position: absolute;
    width: 1px;
    height: 12px;
    top: -5px;
    left: 1px;
    background-color: inherit;
    opacity: 0.3;
  }
  &:after {
    content: "";
    position: absolute;
    width: 12px;
    height: 1px;
    left: -5px;
    top: 1px;
    background-color: inherit;
    opacity: 0.3;
  }
`;

export const HousesWindowsRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HousesWindows = styled.div<{ $themeLight: boolean }>`
  width: 16px;
  height: 24px;
  position: relative;
  border: 3px solid #61453e;
  margin: 7px;
  background-color: ${({ $themeLight }) =>
    $themeLight ? "#d6e5fc" : "#FFE9AB"};
  ${({ $themeLight }) =>
    !$themeLight &&
    css`
      box-shadow: inset 0 0 5px 1px #3f6b91;
    `}
  transition: background 4s ease;

  &:before {
    content: "";
    position: absolute;
    width: 20px;
    height: 4px;
    top: -7px;
    left: -5px;
    background-color: #705048;
    border-top: 1px solid #7a574f;
  }
  &:after {
    content: "";
    position: absolute;
    width: 20px;
    height: 4px;
    bottom: -1px;
    left: -5px;
    background-color: #705048;
    border-top: 1px solid #7a574f;
  }
`;

export const HousesDoor = styled.div`
  background-color: #705048;
  border: 3px solid #61453e;
  border-bottom: none;
  height: 33px;
  width: 22px;
  position: relative;
  top: 4px;
  margin: -5px 3px 3px 3px;

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
