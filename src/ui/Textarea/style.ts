import styled, { css } from "styled-components";
import { MOBILE_660 } from "src/common/lib/media";
import { Z_INDEX_TOAST } from "src/common/constants/zIndex";
import { Textarea } from "src/ui/Textarea/Textarea";
import {
  PANEL_TEXT,
  PANEL_TEXT_SECONDARY,
  PANEL_ELEVATED,
} from "src/common/lib/panelStyles";

// Граница поля в покое — заметная на тёмной панели; активная — оранжевая.
const FIELD_BORDER = "rgba(255, 255, 255, 0.22)";

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
  /* Тёмное «приподнятое» поле в стиле проекта + скруглённые края. */
  background-color: ${PANEL_ELEVATED};
  border-radius: 10px;

  box-shadow: inset 0 0 0 2px
    ${({ $boxShadow }) => ($boxShadow ? "#ff8560" : FIELD_BORDER)};

  @media ${MOBILE_660} {
    margin-left: 0;
  }

  &:hover {
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

  /* Ревил-рамка: полная скруглённая рамка + раскрытие через clip-path (углы
     скруглены по границе поля, без «хвостиков»). */
  &:before,
  &:after {
    box-sizing: inherit;
    content: "";
    position: absolute;
    inset: 0;
    border: 2px solid #ff8560;
    border-radius: inherit;
    pointer-events: none;
    transition: clip-path 0.4s ease;
  }
  &:before {
    clip-path: inset(0 50% 0 50%);
  }
  &:after {
    clip-path: inset(50% 0 50% 0);
  }

  &:hover::before,
  &:active::before,
  &:hover::after,
  &:active::after {
    clip-path: inset(0 0 0 0);
  }

  textarea {
    &:focus + label,
    &:valid + label {
      span {
        transform: translateY(-1.875rem);
        font-size: 10px;
        font-weight: 500;
        color: #fff;
      }
    }

    &::placeholder {
      opacity: 0;
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

export const TextareaStyle = styled.textarea`
  all: unset;
  outline: none !important;
  border: none !important;
  box-shadow: none !important;
  color: ${PANEL_TEXT};
  background-color: transparent;
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
    color: ${PANEL_TEXT_SECONDARY};
    transition: 0.3s cubic-bezier(0.53, 0.246, 0.265, 1.66);
  }
`;
