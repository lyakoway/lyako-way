import styled, { css, keyframes } from "styled-components";
import { TABLET_959, MOBILE_660, MOBILE_560 } from "src/common/lib/media";
import { Z_INDEX_MODAL } from "src/common/constants/zIndex";

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

export const Overlay = styled.div<{ $opened: boolean }>`
  display: ${({ $opened }) => ($opened ? "flex" : "none")};
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: center;

  z-index: ${Z_INDEX_MODAL};

  ${({ $opened }) =>
    $opened &&
    css`
      transition: all 0.3s ease-in-out;
      animation: ${overlayAnimation} 0.3s 1; /* Указываем название анимации, её время и количество повторов*/
      animation-fill-mode: forwards; /* Чтобы элемент оставался в конечном состоянии анимации */
    `}
`;

export const ModalComponent = styled.div<{ $opened: boolean }>`
  width: 824px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 1.2px 18px rgba(0, 0, 0, 0.08),
    0px 6.4px 29px rgba(0, 0, 0, 0.12);
  border-radius: 8px;

  @media ${TABLET_959} {
    width: 84%;
  }

  @media ${MOBILE_660} {
    height: 100vh;
    width: 100vw;
    border-radius: 0px;
  }

  ${({ $opened }) =>
    $opened &&
    css`
      transition: all 0.3s ease-in-out;
      animation: ${modalAnimation} 0.7s 1; /* Указываем название анимации, её время и количество повторов*/
      animation-fill-mode: forwards; /* Чтобы элемент оставался в конечном состоянии анимации */
    `};
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 12px;

  border-top: 2px solid #000;

  @media ${TABLET_959} {
    flex-direction: column-reverse;
  }

  @media ${MOBILE_660} {
    padding-top: 20px;
    padding-bottom: 220px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  white-space: pre-wrap;
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-transform: uppercase;
  border-bottom: 2px solid #000;

  padding: 20px 24px 20px 24px;

  @media ${MOBILE_560} {
    flex-direction: column;
    font-size: 16px;
  }
`;

export const HeaderText = styled.div`
  text-align: center;
  margin-left: 12px;
  margin-right: 12px;
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
    background-color: rgba(98, 108, 119, 0.25);
  }

  & svg {
    fill: #7b7e86;
  }

  &:hover svg {
    fill: red;
  }
`;

export const Content = styled.div<{ contentScroll?: boolean }>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  max-height: calc(100vh - 160px);

  ${({ contentScroll }) =>
    contentScroll &&
    css`
      overflow-y: auto;
      overflow-x: hidden;
    `}

  /* Основная ширина полосы прокрутки. */
  ::-webkit-scrollbar {
    width: 16px;
  }

  /* Цвет дорожки, по которой двигается бегунок прокрутки. */
  ::-webkit-scrollbar-track {
    background: #464a5352;
    border-radius: 10px;
    background-clip: content-box;
    /* opacity: 0;
  background-color: transparent; */
  }

  /* Размер и цвет бегунка. */
  ::-webkit-scrollbar-thumb {
    background: #464a53;
    border: 6px solid #f1f1f1;
    border-radius: 10px;
  }
  /* Размер бегунка при наведении на него курсора. */
  ::-webkit-scrollbar-thumb:hover {
    border: 4px solid #ffff;
  }

  @media ${MOBILE_660} {
    max-height: calc(100vh - 220px);
    border-radius: 0;
  }
`;
