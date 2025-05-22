import styled from "styled-components";
import { MOBILE_660 } from "src/common/lib/media";
import { Z_INDEX_TOAST } from "src/common/constants/zIndex";

export const SelectContainer = styled.div<{
  $boxShadow: boolean;
  mobile?: boolean;
}>`
  position: relative;
  height: 40px;
  border: 2px solid
    ${({ theme, $boxShadow }) =>
      $boxShadow ? "#ff8560" : theme.color.basic.borderModal};
  display: flex;
  align-items: center;
  gap: 0.5em;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.background.modal};

  @media ${MOBILE_660} {
    margin-left: 0;
  }

  &:hover {
    transition: 0.3s ease-in-out;
    box-shadow: 0 0 4px 1px #ff8560;
  }
  &:active {
    transition: 0.3s ease-in-out;
    border-color: #ff8560;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 6px 8px 6px 12px;
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
  height: auto !important;
  box-shadow: none !important;
  color: ${({ theme }) => theme.color.text.primary};
  width: 100%;
  padding: 0 30px 2px 0 !important;

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
