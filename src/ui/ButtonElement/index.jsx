import React, { useEffect } from "react";
import styled from "styled-components";

import { MOBILE_660 } from "src/common/constants/media";

import { ReactComponent as LangEnglishIcon } from "src/common/icon/lang/gb.svg";
import { ReactComponent as LangRussiaIcon } from "src/common/icon/lang/ru.svg";

import { store } from "src/store";

const ButtonWrapper = styled.button`
  display: flex;
  -webkit-tap-highlight-color: transparent;
  justify-content: center;
  align-items: center;
  margin-left: ${({ positionStyle }) => (positionStyle ? "6px" : "0")};
  margin-top: ${({ positionStyle }) => (positionStyle ? "0" : "16px")};
  width: 40px;
  height: 40px;
  background-color: #2b3037;
  border-radius: 8px;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    box-shadow 0px 15px 25px -5px rgba(darken(dodgerblue, 40%));
    transform scale(1.03);
  }
  &:active {
    box-shadow 0px 4px 8px rgba(darken(dodgerblue, 30%));
    transform scale(.98);
  }

  @media ${MOBILE_660} {
    margin: 0 auto;
    margin-top: 16px;
  }
`;

const ButtonElement = ({ opened, handleClick, positionStyle }) => {
  const Icon = opened ? LangRussiaIcon : LangEnglishIcon;

  useEffect(() => {
    store.setToggleLang(opened);
  }, [opened]);

  return (
    <ButtonWrapper onClick={handleClick} positionStyle={positionStyle}>
      <Icon />
    </ButtonWrapper>
  );
};

export default ButtonElement;
