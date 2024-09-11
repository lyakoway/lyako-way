import React, { useState } from "react";
import styled from "styled-components";

import { MOBILE_660 } from "src/common/constants/media";
import { store } from "src/store";
import { ReactComponent as HeartIcon } from "src/common/icon/heart.svg";

const ButtonWrapper = styled.button<{ $positionStyle: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${({ $positionStyle }) => ($positionStyle ? "10px" : "0")};
  margin-top: ${({ $positionStyle }) => ($positionStyle ? "0" : "10px")};

  -webkit-tap-highlight-color: transparent;

  position: relative;

  background: none;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;

  color: #eee;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;

  &::after {
    content: "";
    position: absolute;
    top: -1em;
    bottom: -1em;
    left: -1em;
    right: -1em;
    border-radius: 4em;
    box-shadow: 0 0 0px rgba(0, 0, 0, 0.4), inset 0 0 0px rgba(0, 0, 0, 0.4);
    transition: box-shadow 0.3s;
  }

  &:hover,
  &:focus {
    span {
      background-color: lighten($orange, 3%);
    }
  }
  &:active {
    span {
      background-color: $orange;
      transform: scale(0.97);
      box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.2);
    }
    &::after {
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.4),
        inset -3px 3px 1em rgba(0, 0, 0, 0.4);
    }
  }

  @media ${MOBILE_660} {
    margin: 0 auto;
    margin-top: 10px;
  }
`;

const Label = styled.div`
  position: absolute;
  color: white;
  line-height: 17px;
  font-size: 10px;
  font-weight: 400;
  font-family: "Exo 2", sans-serif;
  text-transform: uppercase;
  text-align: center;
  margin-left: 28px;
  margin-top: 30px;
`;

const ButtonHeart = ({ positionStyle }: { positionStyle: boolean }) => {
  const [counter, setСounter] = useState<number>(20);
  // const handleClickOpen = () => {
  //   store.setOpenToast(true);
  // };

  // Функция для определения "мобильности" браузера
  function MobileDetect() {
    let UA = navigator.userAgent.toLowerCase();
    return /android|webos|iris|bolt|mobile|iphone|ipad|ipod|iemobile|blackberry|windows phone|opera mobi|opera mini/i.test(
      UA
    )
      ? true
      : false;
  }

  const handleClick = () => {
    const url = window.document.location; //Адрес Вашего сайта
    const title = window.document.title; //Название Вашего сайта

    setСounter(counter + 1);

    store.setOpenToast(true);

    if (!MobileDetect()) {
      try {
        window.external.AddFavorite(url, title);
      } catch (e) {
        try {
          window.sidebar.addPanel(title, url, "");
        } catch (e) {
          // handleClickOpen();
          console.log("");
        }
      }
    }

    return false;

    // if (window.sidebar) {
    //   // такой объект есть только в Gecko
    //   window.sidebar.addPanel(title, url, ""); // используем его метод добавления закладки
    // }
    // // else if (window.sidebar) {
    // //   // есть объект opera?
    // //   a.rel = "sidebar"; // добавлем закладку, смотрите вызов функции ниже
    // //   a.title = title;
    // //   a.url = url;
    // //   return true;
    // // }
    // else if (document.all) {
    //   // ну значит это Internet Explorer
    //   window.external.AddFavorite(url, title); // используем соответсвующий метод
    // } else {
    //   alert("Для !!! добавления страницы в Избранное нажмите Ctrl+D"); // для всех остальных браузеров, в т.ч. Chrome
    // }

    // return false;
  };

  return (
    <>
      <ButtonWrapper onClick={handleClick} $positionStyle={positionStyle}>
        {/* <Icon name="heart" color="red" size="large" /> */}
        <HeartIcon />
        <Label>{counter}</Label>
      </ButtonWrapper>
    </>
  );
};

export default ButtonHeart;
