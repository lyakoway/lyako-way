import styled, { css } from "styled-components";
import { MOBILE_660 } from "src/common/lib/media";
import { Z_INDEX_TOAST } from "src/common/constants/zIndex";
import { Textarea } from "src/ui/Textarea/Textarea";

export const SelectContainer = styled.div<{
  $boxShadow: boolean;
}>`
  position: relative;
  height: auto;
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

  textarea {
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

export const TextareaStyle = styled.textarea`
  all: unset;
  outline: none !important;
  border: none !important;
  box-shadow: none !important;
  color: ${({ theme }) => theme.color.text.primary};
  background-color: ${({ theme }) => theme.color.background.modal};
  width: 100%;
  margin: 3px;
  padding: 9px;

  min-height: 100px;
  resize: vertical;
  overflow-y: auto;
  overflow-x: hidden;

  z-index: 2;

  &:focus {
    outline: none !important;
    border: none !important;
  }
`;

export const Text = styled.label`
  position: absolute;
  left: 12px;
  top: 12px;
  z-index: 2;

  span {
    display: inline-block;
    color: ${({ theme }) => theme.color.text.primary};
    transition: 0.3s cubic-bezier(0.53, 0.246, 0.265, 1.66);
  }
`;
