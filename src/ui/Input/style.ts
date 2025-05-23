import styled, { css } from "styled-components";
import { MOBILE_660 } from "src/common/lib/media";
import { Z_INDEX_TOAST } from "src/common/constants/zIndex";

export const SelectContainer = styled.div<{
  $boxShadow: boolean;
  mobile?: boolean;
}>`
  position: relative;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 0.5em;
  outline: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.background.modal};

  box-shadow: inset 0 0 0 2px
    ${({ theme, $boxShadow }) =>
      $boxShadow ? "#ff8560" : theme.color.basic.borderModal};

  @media ${MOBILE_660} {
    margin-left: 0;
  }

  &:hover {
    //transition: 0.3s ease-in-out;
    //box-shadow: 0 0 4px 1px #ff8560;
    ${({ $boxShadow }) =>
      $boxShadow &&
      css`
        box-shadow: inset 0 0 0 3px #ff8560;
      `}
  }

  &:active {
    transition: 0.3s ease-in-out;
    box-shadow: inset 0 0 0 2px
      ${({ theme, $boxShadow }) =>
        $boxShadow ? "#ff8560" : theme.color.basic.borderModal};
  }

  &:before {
    box-sizing: inherit;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform-origin: center;
    border-top: 2px solid #ff8560;
    border-bottom: 2px solid #ff8560;
    transform: scale3d(0, 1, 1);

    transition: all 0.2s linear;
    transition-duration: 0.4s;
  }

  &:after {
    box-sizing: inherit;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform-origin: center;
    border-left: 2px solid #ff8560;
    border-right: 2px solid #ff8560;
    transform: scale3d(1, 0, 1);

    transition: all 0.2s linear;
    transition-duration: 0.4s;
  }

  &:hover::before,
  &:hover::after {
    transform: scale3d(1, 1, 1); // Show full-size
    transition: transform 0.5s;
  }

  &:active::before,
  &:active::after {
    transform: scale3d(1, 1, 1); // Show full-size
    transition: transform 0.5s;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  color: #626c77;

  input {
    &:focus + label,
    &:valid + label {
      span {
        transform: translateY(-1.875rem);
        font-size: 10px;
        font-weight: 500;
      }
    }

    &::placeholder {
      opacity: 0;
    }

    &:focus {
      &::placeholder {
        color: ${({ theme }) => theme.color.text.primary};
        opacity: 0.5;
        transition: opacity 1.5s ease 0s;
      }
    }
  }
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
    box-shadow: 0 0 6px 2px #9e9e9e;
  }
`;

export const InputStyle = styled.input`
  all: unset;
  outline: none !important;
  border: none !important;
  margin: 0 !important;
  height: 100% !important;
  box-shadow: none !important;
  color: ${({ theme }) => theme.color.text.primary};
  width: 100%;
  padding: 0 30px 0 12px !important;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  z-index: 2;

  &:focus {
    outline: none !important;
    border: none !important;
  }
`;

export const Text = styled.label`
  position: absolute;
  left: 1rem;

  span {
    display: inline-block;
    color: ${({ theme }) => theme.color.text.primary};
    transition: 0.3s cubic-bezier(0.53, 0.246, 0.265, 1.66);
  }
`;
