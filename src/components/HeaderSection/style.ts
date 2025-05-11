import styled, { keyframes, css } from "styled-components";
import {
  TABLET_1024,
  TABLET_959,
  MOBILE_660,
  MOBILE_560,
} from "src/common/lib/media";

import myIconComp from "src/common/icon/icon-header/comp.png";
import myIconCompn from "src/common/icon/icon-header/compn.png";
import myIconMap from "src/common/icon/icon-header/map.png";
import myIconMapn from "src/common/icon/icon-header/mapn.png";
import myIconBook from "src/common/icon/icon-header/books.png";
import myIconBookn from "src/common/icon/icon-header/booksn.png";
import myIconPicture from "src/common/icon/icon-header/image.png";
import myIconPicturen from "src/common/icon/icon-header/imagen.png";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const spinBack = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
`;

export const HeaderSectionWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 506px;
  width: 960px;
  margin: 0 auto;
  padding-top: 20px;

  @media ${TABLET_1024} {
    width: 100%;
    min-height: 600px;
  }

  @media ${MOBILE_660} {
    padding-top: 100px;
  }
`;

export const HeaderContactWrapper = styled.div`
  display: flex;

  @media ${MOBILE_560} {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin: 0 auto;
    width: 100%;
  }
`;

export const HeaderSectionGetsite = styled.div`
  position: absolute;
  left: 411px;
  top: 34px;

  @media ${TABLET_959} {
    left: 20px;
  }

  @media ${MOBILE_660} {
    top: 100px;
  }

  @media ${MOBILE_560} {
    position: initial;
    margin-top: 18px;
  }
`;

export const HeaderSectionConteiner = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 20;

  @media ${MOBILE_560} {
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderSectionLabel = styled.span`
  color: white;
  font-size: 13px;
  font-weight: 400;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
  margin: 7px 0px;
  font-style: italic;
  line-height: 18px;
  white-space: nowrap;

  @media ${MOBILE_560} {
    text-align: center;
  }
`;

export const HeaderSectionContacts = styled.div`
  display: flex;
  width: 232px;
  position: absolute;
  top: 30px;
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.1);
  color: #fff;
  right: 0;

  @media ${TABLET_1024} {
    right: 20px;
  }

  @media ${MOBILE_660} {
    top: 100px;
  }

  @media ${MOBILE_560} {
    position: initial;
    align-items: center;
    justify-content: center;
  }
`;

export const Phones = styled.div`
  display: flex;
  align-items: center;
`;

export const PhonesConteiner = styled(HeaderSectionConteiner)`
  margin-left: 10px;
`;

export const PhonesNumber = styled.a`
  display: flex;
  align-items: center;
  -webkit-tap-highlight-color: transparent;
  color: white;
  font-size: 19px;
  font-weight: 700;
  line-height: 28px;
  text-decoration: none;
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.1);
  font-family: "Exo 2", sans-serif;
  position: relative;
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  &:hover:before {
    position: absolute;
    content: "";
    width: calc(100% + (1px * 2));
    height: 2px;
    bottom: 0;
    background: #fff;
  }
`;

export const PhonesTextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const PhonesTextDivide = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 19px;
  font-weight: 700;
  line-height: 28px;
  text-decoration: none;
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.1);
  font-family: "Exo 2", sans-serif;
  margin-right: 8px;
  margin-left: 8px;
  white-space: pre;
`;

export const PhonesText = styled.a`
  display: flex;
  align-items: center;
  -webkit-tap-highlight-color: transparent;
  color: white;
  font-size: 19px;
  font-weight: 700;
  line-height: 28px;
  text-decoration: none;
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.1);
  font-family: "Exo 2", sans-serif;
  position: relative;
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  &:hover:before {
    position: absolute;
    content: "";
    width: calc(100% + (1px * 2));
    height: 2px;
    bottom: 0;
    background: #fff;
    color: #fff;
  }
`;

export const Emails = styled(Phones)`
  margin-bottom: 7px;

  @media ${MOBILE_560} {
    justify-content: center;
  }
`;

export const ContactsText = styled(PhonesText)`
  font-size: 15px;
  margin-left: 10px;
  -webkit-tap-highlight-color: transparent;
`;

export const Skype = styled(Phones)`
  @media ${MOBILE_560} {
    justify-content: center;
  }
`;

export const HeaderSectionFon = styled.div`
  position: relitive;
  display: flex;

  @media ${TABLET_959} {
    display: flex;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    flex-direction: column-reverse;
  }
`;

export const IconComp = styled.div<{ $themeLight?: boolean }>`
  ${({ $themeLight }) =>
    $themeLight
      ? css`
          background: url(${myIconComp.src}) 100% 100% no-repeat;
        `
      : css`
          background: url(${myIconCompn.src}) 100% 100% no-repeat;
        `};
  transition: background 4s ease;
  display: flex;
  width: 697px;
  height: 321px;
  position: absolute;
  bottom: 0;
  left: 115px;
  z-index: 10;

  @media ${TABLET_959} {
    position: initial;
  }

  @media ${MOBILE_660} {
    width: 94%;
    background-size: 100%;
    z-index: 0;
  }
`;

export const SettingIconWrapper = styled.div<{ openedPopup: boolean }>`
  display: flex;
  -webkit-tap-highlight-color: transparent;
  animation: ${spin} 10s linear infinite;

  &:hover {
    animation: ${spinBack} 10s linear infinite;
    & svg {
      fill: #ff8560;
    }
  }

  ${({ openedPopup }) =>
    openedPopup &&
    css`
      animation: ${spinBack} 10s linear infinite;
      & svg {
        fill: #ff8560;
      }
    `}
`;

export const SettingWrapper = styled.div`
  display: flex;
  width: 36px;
  height: 36px;
  margin-left: 532px;
  margin-top: 12px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  @media ${MOBILE_660} {
    display: none;
  }
`;

export const IconMap = styled.div<{ $themeLight?: boolean }>`
  ${({ $themeLight }) =>
    $themeLight
      ? css`
          background: url(${myIconMap.src}) no-repeat;
        `
      : css`
          background: url(${myIconMapn.src}) no-repeat;
        `};
  transition: background 4s ease;
  display: flex;
  width: 183px;
  height: 140px;
  position: absolute;
  top: 160px;
  left: -299px;
`;

export const IconBook = styled.div<{ $themeLight?: boolean }>`
  ${({ $themeLight }) =>
    $themeLight
      ? css`
          background: url(${myIconBook.src}) no-repeat;
        `
      : css`
          background: url(${myIconBookn.src}) no-repeat;
        `};
  transition: background 4s ease;
  display: flex;
  width: 212px;
  height: 96px;
  position: absolute;
  top: 220px;
  right: 0;

  @media ${TABLET_1024} {
    right: 20px;
  }

  @media ${TABLET_959} {
    display: none;
  }
`;

export const IconPicture = styled.div<{ $themeLight?: boolean }>`
  ${({ $themeLight }) =>
    $themeLight
      ? css`
          background: url(${myIconPicture.src}) no-repeat;
        `
      : css`
          background: url(${myIconPicturen.src}) no-repeat;
        `};
  transition: background 4s ease;
  display: flex;
  width: 233px;
  height: 107px;
  position: absolute;
  top: 160px;
  right: -341px;
`;
