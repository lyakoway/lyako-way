import React from "react";
import styled, { keyframes, css } from "styled-components";
import { ReactComponent as ChristmasTree } from "src/common/icon/christmasTree.svg";

// 🌈 Цвета гирлянды
const lightColors = [
  "#ff3b3b",
  "#ffd93b",
  "#3bff6f",
  "#3bd9ff",
  "#b43bff",
  "#ff8f3b",
];

// ✨ Мигание
const blink = keyframes`
    0%   { opacity: 1; }
    40%  { opacity: 0.3; }
    60%  { opacity: 0.8; }
    100% { opacity: 1; }
`;

const Tree = styled.div<{ $animate: boolean }>`
  position: relative;
  top: 190px;
  left: -20px;
  z-index: 5;

  path {
    stroke: #fff;
  }

  path.christmasTree_svg__light {
    ${({ $animate }) =>
      $animate &&
      css`
        animation-name: ${blink};
        animation-duration: 1.8s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        animation-fill-mode: both;
        animation-delay: 6s; /* ⏳ старт через 6 секунд */
      `}

    ${({ $animate }) => {
      let styles = "";

      for (let i = 1; i <= 120; i++) {
        const color = lightColors[(i - 1) % lightColors.length];

        styles += `
          &:nth-of-type(${i}) {
            stroke: ${color};
            ${
              $animate
                ? `animation-delay: ${24 + i * 0.15}s;` // 6с + разнобой
                : ""
            }
          }
        `;
      }

      return styles;
    }}
  }
`;

interface NewYearTreeProps {
  themeLight: boolean;
}

export const NewYearTree: React.FC<NewYearTreeProps> = ({ themeLight }) => {
  return (
    <Tree $animate={!themeLight}>
      <ChristmasTree />
    </Tree>
  );
};
