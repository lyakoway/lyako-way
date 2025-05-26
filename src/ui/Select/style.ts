import styled, { css, keyframes } from "styled-components";
import {
  Z_INDEX_DROPDOWN_LIST_SELECT,
  Z_INDEX_TOAST,
} from "src/common/constants/zIndex";

const dropdownListAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const SelectContainer = styled.div<{
  $boxShadow: boolean;
}>`
  position: relative;
  height: 50px;
  width: 100%;
  min-height: 1.5em;
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.5em;
  outline: none;
  cursor: pointer;
  //background: #fff;
  //border: solid 2px #000;
  background-color: ${({ theme }) => theme.color.background.modal};

  box-shadow: inset 0 0 0 2px
    ${({ theme, $boxShadow }) =>
      $boxShadow ? "#ff8560" : theme.color.basic.borderModal};

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

  &:focus + label,
  &:valid + label {
    span {
      transform: translateY(-2.2rem);
      font-size: 10px;
      font-weight: 500;
    }
  }
`;

export const InputText = styled.div`
  flex-grow: 1;
  display: flex;
  gap: 0.5em;
  flex-wrap: wrap;
  overflow: hidden;
  padding-right: 44px;
  height: 32px;
  align-items: center;
`;

export const Chips = styled.button`
  display: flex;
  align-items: center;
  border-radius: 0.25em;
  padding: 0.15em 0.25em 0.16em 0.15em;
  gap: 0.25em;
  cursor: pointer;
  background: none;
  outline: none;
  margin: 2px 4px 2px 4px;
  height: 28px;
  background: rgb(81, 92, 102);
  color: white;
  z-index: 2;

  &:hover {
    background-color: #ffffff;
    color: black;

    span {
      color: red;
    }
  }

  &:active {
    background-color: hsl(0, 100%, 90%);
    color: white;

    span {
      font-weight: 700;
    }
  }

  span {
    &:hover {
      color: hsl(0, 100%, 50%);
      font-weight: 700;
    }
  }
`;

export const ChipsItem = styled.button`
  display: flex;
  align-items: center;
  border-radius: 0.25em;
  gap: 0.25em;
  background: none;
  outline: none;
  margin: 2px -51px 2px 2px;
  height: 28px;
  gap: 0.25em;
  background: rgb(81, 92, 102);
  color: white;
`;

export const NotChosen = styled.label<{ $moveText?: boolean }>`
  position: absolute;
  left: 12px;

  span {
    display: inline-block;
    color: ${({ theme }) => theme.color.text.primary};
    transition: 0.3s cubic-bezier(0.53, 0.246, 0.265, 1.66);
  }

  ${({ $moveText }) =>
    $moveText &&
    css`
      span {
        transform: translateY(-2.2rem);
        font-size: 10px;
        font-weight: 500;
      }
    `}
`;

export const ChipsClose = styled.span`
  font-size: 1.25em;
  color: white;
  padding-bottom: 0.1em;
`;

export const Divider = styled.div`
  background-color: ${({ theme }) => theme.color.basic.borderModal};

  align-self: stretch;
  width: 0.05em;
`;

export const Caret = styled.div<{ $isOpen?: boolean }>`
  transform: translate(0, ${({ $isOpen }) => ($isOpen ? 0 : "50%")});
  border: 0.35em solid transparent;
  border-top-color: ${({ $isOpen, theme }) =>
    $isOpen ? "none" : theme.color.basic.borderModal};
  border-bottom-color: ${({ $isOpen, theme }) =>
    $isOpen ? theme.color.basic.borderModal : "none"};
`;

export const DropdownList = styled.ul<{ $isOpen?: boolean }>`
  position: absolute;
  margin: 0;
  padding: 0;
  list-style: none;
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  max-height: 15em;
  overflow-y: auto;
  border: 0.3em solid #ddd;
  border-radius: 0.25em;
  width: 100%;
  left: 0;
  top: calc(100% + 0.25em);
  background-color: white;
  z-index: ${Z_INDEX_DROPDOWN_LIST_SELECT};

  color: white;
  background-color: rgb(43, 48, 55);

  transition: all 0.3s ease-in-out;
  animation: ${dropdownListAnimation} 0.7s 1; /* Указываем название анимации, её время и количество повторов*/
  animation-fill-mode: forwards; /* Чтобы элемент оставался в конечном состоянии анимации */
`;

export const ListOption = styled.li<{
  selected?: boolean;
  $highlighted?: boolean;
}>`
  display: flex;
  align-items: center;
  padding: 0.25em 0.5em;
  cursor: pointer;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }

  background-color: ${({ selected }) => selected && "hsl(209, 11%, 36%)"};
  ${({ $highlighted }) =>
    $highlighted &&
    css`
      background-color: hsl(209, 11%, 56%);
      color: white;
    `}
`;

export const CheckboxIcon = styled.div<{ checked: boolean }>`
  display: inline;
  cursor: pointer;

  display: inline-block;
  transition: all 0.2s;
  position: relative;
  padding-left: 20px;

  &:before {
    position: absolute;
    left: 0;
    display: inline-block;
    font-weight: 900;
    font-size: 14px;
    content: "\\002B";
    transition: transform 0.3s ease-in-out;

    ${({ checked }) =>
      checked &&
      css`
        color: #4caf50;
        content: "\\2713";
        transform: rotate(-360deg);
        transition: transform 0.3s ease-in-out;
      `};
  }
`;

export const DeleteIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  cursor: pointer;
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
