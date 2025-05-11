import styled, { css, keyframes } from "styled-components";
import { TABLET_959, MOBILE_660 } from "src/common/lib/media";
import { Z_INDEX_MODAL } from "src/common/constants/zIndex";
import myIconComp from "src/common/icon/modal/fonIt.png";

const modalAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const overlayAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Overlay = styled.div`
  display: flex;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background: url(${myIconComp.src}) no-repeat center;
  background-size: cover;
  align-items: center;
  justify-content: center;

  z-index: ${Z_INDEX_MODAL};

  transition: all 0.3s ease-in-out;
  animation: ${overlayAnimation} 0.3s 1; /* Указываем название анимации, её время и количество повторов*/
  animation-fill-mode: forwards; /* Чтобы элемент оставался в конечном состоянии анимации */
`;

export const ModalComponent = styled.div`
  width: 824px;
  //background-color: rgb(255, 255, 255);
  background-color: ${({ theme }) => theme.color.background.modal};
  box-shadow: 0 1.2px 18px rgba(0, 0, 0, 0.08), 0 6.4px 29px rgba(0, 0, 0, 0.12);
  border-radius: 8px;

  @media ${TABLET_959} {
    width: 84%;
  }

  @media ${MOBILE_660} {
    height: 100vh;
    width: 100vw;
    border-radius: 0;
  }

  transition: all 0.3s ease-in-out;
  animation: ${modalAnimation} 0.7s 1; /* Указываем название анимации, её время и количество повторов*/
  animation-fill-mode: forwards; /* Чтобы элемент оставался в конечном состоянии анимации */
`;

export const IconClose = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: calc(22px);

  &:hover {
    cursor: pointer;
  }

  &:hover:before {
    content: "";
    position: absolute;
    top: -6px;
    left: -6px;
    bottom: -6px;
    right: -6px;
    border-radius: 50%;
    background-color: ${({ theme }) =>
      theme.name === "light" ? "rgba(98, 108, 119, 0.25)" : "#d4d4d559"};
  }

  & svg {
    fill: ${({ theme }) => (theme.name === "light" ? "#7b7e86" : "#fff")};
  }

  &:hover svg {
    fill: red;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
