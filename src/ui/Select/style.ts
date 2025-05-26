import styled, { css, keyframes } from "styled-components";
import { Z_INDEX_DROPDOWN_LIST_SELECT } from "src/common/constants/zIndex";

const dropdownListAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const SelectContainer = styled.div`
  position: relative;
  //max-width: 20em;
  height: 50px;
  width: 100%;
  min-height: 1.5em;
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.5em;
  //border-radius: 0.25em;
  outline: none;
  cursor: pointer;
  background: #fff;
  border: solid 2px #000;

  &:hover {
    box-shadow: 0 0 4px #fff;
  }
  &:focus {
    box-shadow: 0 0 8px #fff;
  }
`;

export const InputText = styled.span`
  flex-grow: 1;
  display: flex;
  gap: 0.5em;
  flex-wrap: wrap;
  overflow: hidden;
  padding-right: 44px;
  height: 32px;
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
  margin: 2px 4px 2px 8px;
  height: 28px;
  background: rgb(81, 92, 102);
  color: white;

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

export const NotChosen = styled.div`
  margin: 2px 4px 2px 2px;
  display: flex;
  align-items: center;
  color: #000;
  white-space: nowrap;
`;

export const ChipsClose = styled.span`
  font-size: 1.25em;
  color: white;
`;

export const InputDelete = styled.button`
  background: none;
  color: #000;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  font-size: 1.25em;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  min-width: 16px;
  font-weight: 400;

  background: none;
  border: none;

  cursor: pointer;

  &:hover:before {
    content: "";
    position: absolute;
    top: -3px;
    left: -4px;
    bottom: -6px;
    right: -4px;
    border-radius: 50%;
    background-color: rgba(98, 108, 119, 0.25);
    box-shadow: 0 0 6px #fff;
  }

  color: #000;

  &:hover {
    color: red;
    font-weight: 700;
  }
  &:active {
    color: #fff;
    font-weight: 700;
  }
`;

export const Divider = styled.div`
  background-color: #000;
  align-self: stretch;
  width: 0.05em;
`;

export const Caret = styled.div<{ $isOpen?: boolean }>`
  transform: translate(0, ${({ $isOpen }) => ($isOpen ? 0 : "50%")});
  border: 0.35em solid transparent;
  border-top-color: ${({ $isOpen }) => ($isOpen ? "none" : "#000")};
  border-bottom-color: ${({ $isOpen }) => ($isOpen ? "#000" : "none")};
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
