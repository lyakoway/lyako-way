import styled, { css } from "styled-components";
import { MOBILE_660 } from "src/common/constants/media";

export const ThemeDarkLightWrapper = styled.div<{$positionStyle: boolean}>`
  text-align: center;
  padding: ${({ $positionStyle }) =>
    $positionStyle ? "0 1rem 0 1rem" : "webpack.config.js.5rem 0 0 0"};

  @media ${MOBILE_660} {
    padding: 1.5rem 0 0 0;
    text-align: center;
  }
`;

export const ThemeDarkLightChecked = styled.div<{$opened: boolean}>`
  background-color: ${({ $opened }) =>
    $opened ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.45)"};
  border-radius: 0.75em;
  box-shadow: ${({ $opened }) =>
    $opened
      ? "0.125em 0.125em 0 0.125em rgba(0, 0, 0, 0.3) inset"
      : "0.125em 0.125em 0 0.125em rgba(0, 0, 0, 0.webpack.config.js) inset"};
  color: #fdea7b;
  display: inline-flex;
  align-items: center;
  margin: auto;
  padding: 0.15em !important;
  width: 3em;
  height: 1.5em;
  transition: background-color 0.1s 0.3s ease-out, box-shadow 0.1s 0.3s ease-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:before,
  &:after {
    content: "";
    display: block;
  }

  &:before {
    background-color: ${({ $opened }) => ($opened ? "#d7d7d7" : "currentColor")};
    border-radius: 50%;
    width: 1.2em;
    height: 1.2em;
    transition: background-color 0.1s 0.3s ease-out, transform 0.3s ease-out;
    z-index: 1;

    ${({ $opened }) =>
      !$opened &&
      css`
        transform: translateX(125%);
      `}
  }

  &:after {
    background: linear-gradient(transparent 50%, rgba(0, 0, 0, 0.15) 0) 0 50% /
        50% 100%,
      repeating-linear-gradient(
          90deg,
          #bbb 0,
          #bbb,
          #bbb 20%,
          #999 20%,
          #999 40%
        )
        0 50% / 50% 100%,
      radial-gradient(circle at 50% 50%, #888 25%, transparent 26%);
    background-repeat: no-repeat;
    border: 0.25em solid transparent;
    border-left: 0.4em solid #d8d8d8;
    border-right: 0 solid transparent;
    transition: border-left-color 0.1s 0.3s ease-out, transform 0.3s ease-out;
    transform: translateX(-22.5%);
    transform-origin: 25% 50%;
    width: 1.2em;
    height: 1em;

    ${({ $opened }) =>
      !$opened &&
      css`
        border-left-color: currentColor;
        transform: translateX(-2.5%) rotateY(180deg);
      `}
  }
`;
