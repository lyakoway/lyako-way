import styled, { keyframes } from "styled-components";
import { MOBILE_660 } from "src/common/lib/media";
import { Z_INDEX_TOAST } from "src/common/constants/zIndex";

const fadeSlideIn = keyframes`
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeSlideOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-5px); }
`;

export const SelectContainer = styled.div<{
  $boxShadow: boolean;
  mobile?: boolean;
}>`
  position: relative;
  height: 40px;
  width: 100%;
  border: 0.05em solid #ffffff;
  display: flex;
  align-items: center;
  gap: 0.5em;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  background: #fff;

  @media ${MOBILE_660} {
    margin-left: 0;
  }

  &:hover {
    transition: 0.3s ease-in-out;
    box-shadow: ${({ $boxShadow }) =>
      $boxShadow ? "0px 0px 5px 2px #039be5" : "0px 0px 6px 2px #039be5"};
  }
  &:active {
    transition: 0.3s ease-in-out;
    box-shadow: ${({ $boxShadow }) =>
      $boxShadow ? "0px 0px 5px 2px #039be5" : "0px 0px 6px 2px #039be5"};
  }

  box-shadow: ${({ $boxShadow }) =>
    $boxShadow ? "0px 0px 5px 2px #039be5" : "box-shadow: 0 0 10px #999"};
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 6px 8px 6px 12px;
  color: #626c77;
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const DeleteIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  cursor: pointer;
  position: absolute;
  right: 6px;
  z-index: ${Z_INDEX_TOAST};

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    border-radius: 8px;
    background-color: #f2f3f7;
    box-shadow: 0px 0px 6px 2px #9e9e9e;
  }
`;

export const Input = styled.input`
  all: unset;
  outline: none !important;
  border: none !important;
  margin: 0 !important;
  height: auto !important;
  box-shadow: none !important;
  color: #1d2023;
  width: 100%;
  padding: 0 30px 2px 30px !important;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  z-index: 2;

  &:focus {
    outline: none !important;
    border: none !important;
  }
`;

export const Dropdown = styled.div<{ $closing?: boolean }>`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  background: #1b1b1b;
  border: 1px solid #333;
  border-radius: 8px;
  max-height: 220px;
  overflow-y: auto;
  z-index: 15;
`;

export const DropdownItem = styled.div<{
  $closing?: boolean;
  $highlighted?: boolean;
}>`
  padding: 8px 12px;
  color: #fff;
  cursor: pointer;
  animation: ${({ $closing }) => ($closing ? fadeSlideOut : fadeSlideIn)} 0.25s
    ease forwards;
  background-color: ${({ $highlighted }) =>
    $highlighted ? "#2c2c2c" : "transparent"};

  &:hover {
    background: #2c2c2c;
  }
`;

export const DropdownMessage = styled.div`
  padding: 8px 12px;
  color: #aaa;
  text-align: center;
  font-size: 14px;
`;
