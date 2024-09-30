import React, { useEffect } from "react";
import styled from "styled-components";

import { ReactComponent as LangEnglishIcon } from "src/common/icon/lang/gb.svg";
import { ReactComponent as LangRussiaIcon } from "src/common/icon/lang/ru.svg";

import { store } from "src/store";

const ButtonWrapper = styled.button`
  display: flex;
  -webkit-tap-highlight-color: transparent;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #2b3037;
  border-radius: 8px;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    box-shadow: 0px 15px 25px -5px rgba(darken(dodgerblue, 40%));
    transform: scale(1.03);
  }
  &:active {
    box-shadow: 0px 4px 8px rgba(darken(dodgerblue, 30%));
    transform: scale(0.98);
  }
`;

const ButtonElement = ({
  opened,
  handleClick,
}: {
  opened: boolean;
  handleClick: () => void;
}) => {
  const Icon = opened ? LangRussiaIcon : LangEnglishIcon;

  useEffect(() => {
    store.setToggleLang(opened);
  }, [opened]);

  return (
    <ButtonWrapper onClick={handleClick}>
      <Icon />
    </ButtonWrapper>
  );
};

export default ButtonElement;
