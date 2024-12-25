import styled, { keyframes } from "styled-components";
import {
  TABLET_959,
  MOBILE_660,
  MOBILE_560,
  MOBILE_480,
} from "src/common/lib/media";

import {
  PADDING,
  BUTTONS_MARGIN_BETWEEN,
  BUTTONS_PADDING_BOTTOM,
  PADDING_RIGHT,
  PADDING_TOP,
} from "./constants";

const weatherIconBorder = keyframes`
  from {
    border-color: #ffff;
  }
  50% {
    border-color: #2185d0;
  }
  to {
    border-color: #ffff;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;

  @media ${TABLET_959} {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  white-space: pre-wrap;
  padding: ${PADDING};
  color: ${({ theme }) => theme.color.text.primary};
  font-family: Inter;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  width: 100%;

  @media ${TABLET_959} {
    padding: 0;
    padding-top: ${({ top }) => (top ? "16px" : "8px")};
  }
`;

export const ContentRadio = styled(Content)`
  padding: 0 24px 0 24px;

  @media ${TABLET_959} {
    padding: 0;
    padding-top: ${({ top }) => (top ? "16px" : "8px")};
  }
`;

export const ContentAnimation = styled.div`
  margin-left: 200px;

  @media ${TABLET_959} {
    margin-left: 40px;
  }

  @media ${MOBILE_480} {
    display: none;
  }
`;

export const ContentText = styled.div`
  white-space: pre-wrap;
  overflow-y: auto;
  padding: ${PADDING} ${PADDING} ${PADDING} ${PADDING};
  color: inherit;
  font-family: Inter;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;

  @media ${TABLET_959} {
    padding: 8px 0;
    width: 100%;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding-bottom: ${BUTTONS_PADDING_BOTTOM};
  padding-right: ${PADDING_RIGHT};

  button:not(:first-child) {
    margin-left: ${BUTTONS_MARGIN_BETWEEN};
  }

  @media ${TABLET_959} {
    flex-direction: column-reverse;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: pre-wrap;
  color: ${({ theme }) => theme.color.text.primary};
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-transform: uppercase;
  border-bottom: 2px solid ${({ theme }) => theme.color.basic.borderModal};

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
  top: ${PADDING_TOP};
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

export const ModalComponent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  outline: 0;

  width: 470px;
  background-color: ${({ theme }) => theme.color.background.modal};
  box-shadow: 0 1.2px 18px rgba(0, 0, 0, 0.08),
    0 6.4px 29px rgba(0, 0, 0, 0.12);
  border-radius: 8px;

  @media ${TABLET_959} {
    width: 84%;
  }

  @media ${MOBILE_660} {
    width: 100%;
    height: 100%;
    max-height: calc(100vh);
    border-radius: 0;
  }
`;

export const ModalSectionWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: calc(100vh - 120px);

  background-color: #d4d4d559;
  border-radius: 0 0 8px 8px;

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

  @media ${TABLET_959} {
    padding: 0 24px 0 24px;
  }

  @media ${MOBILE_660} {
    max-height: calc(100vh - 85px);
    padding-bottom: 220px;
    border-radius: 0;
  }
`;

export const ModalSection = styled.div`
  display: flex;
  margin: 20px;
  justify-content: space-between;
  // flex-direction: column;
`;

export const Overlay = styled.div`
  ${({ $opened }) => ($opened ? "" : "display: none;")};
  position: fixed;
  top: 0;
  left: 0;
  inset: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease 0s;
  background: rgba(0, 0, 0, 0.4);
`;

export const WeatherIconWrapper = styled.div`
  display: flex;
  // position: absolute;
  z-index: 1000;
  bottom: 0;
  left: 0;
  border: solid 4px #ffff;
  cursor: pointer;
  background: linear-gradient(to bottom, #57c1eb 0%, #246fa8 100%);
  border-radius: 50%;
  &:checked {
    animation: ${weatherIconBorder} 10s linear infinite;
  }
`;
