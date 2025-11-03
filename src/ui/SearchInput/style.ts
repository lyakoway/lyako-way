import styled from "styled-components";
import { MOBILE_660 } from "src/common/lib/media";
import { Z_INDEX_TOAST } from "src/common/constants/zIndex";

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
