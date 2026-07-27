import styled, { css } from "styled-components";
import { MOBILE_660 } from "src/common/lib/media";
import { Z_INDEX_TOAST } from "src/common/constants/zIndex";
import {
  PANEL_TEXT,
  PANEL_TEXT_SECONDARY,
  PANEL_ELEVATED,
  PANEL_ELEVATED_HOVER,
} from "src/common/lib/panelStyles";

// Граница поля в покое — заметная на тёмной панели; активная/валидная — оранжевая.
const FIELD_BORDER = "rgba(255, 255, 255, 0.22)";

export const SelectContainer = styled.div<{
  $boxShadow: boolean;
  $valid: boolean;
}>`
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 0.5em;
  outline: none;
  cursor: pointer;
  /* Тёмное «приподнятое» поле в стиле проекта + скруглённые края. */
  background-color: ${PANEL_ELEVATED};
  border-radius: 10px;

  box-shadow: inset 0 0 0 2px
    ${({ $boxShadow }) => ($boxShadow ? "#ff8560" : FIELD_BORDER)};

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
      ${({ $boxShadow }) => ($boxShadow ? "#ff8560" : FIELD_BORDER)};
  }

  ${({ $valid }) =>
    !$valid &&
    css`
      box-shadow: inset 0 0 0 2px ${({ theme }) => theme.color.text.negative};
    `}

  &:before {
    box-sizing: inherit;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 10px;
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
    border-radius: 10px;
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

  input {
    &:focus + label,
    &:valid + label {
      span {
        transform: translateY(-2.2rem);
        font-size: 10px;
        font-weight: 500;
        color: #fff;
      }
    }

    &::placeholder {
      opacity: 0;
      ${({ $valid }) =>
        !$valid &&
        css`
          opacity: 0.6;
          color: ${PANEL_TEXT_SECONDARY};
        `}
    }

    &:focus {
      &::placeholder {
        color: ${PANEL_TEXT_SECONDARY};
        opacity: 0.6;
        transition: opacity 1.5s ease 0s;
      }
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  color: ${PANEL_TEXT_SECONDARY};
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
    background-color: ${PANEL_ELEVATED_HOVER};
  }
`;

export const InputStyle = styled.input`
  all: unset;
  outline: none !important;
  border: none !important;
  margin: 0 !important;
  height: 100% !important;
  box-shadow: none !important;
  color: ${PANEL_TEXT};
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
  left: 12px;

  span {
    display: inline-block;
    color: ${PANEL_TEXT_SECONDARY};
    transition: 0.3s cubic-bezier(0.53, 0.246, 0.265, 1.66);
  }
`;

export const TextDescription = styled.div`
  position: absolute;
  transform: translateY(-2.1rem);
  color: #fad67d;
  left: 12px;
  font-size: 10px;
  font-weight: 500;
`;
