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

// ✨ Анимация мигания
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
        animation: ${blink} 1.8s infinite ease-in-out;
      `}

    ${({ $animate }) => {
      let styles = "";

      // ⚠️ число должно быть > количества path.light
      for (let i = 1; i <= 101; i++) {
        const color = lightColors[(i - 1) % lightColors.length];

        styles += `
          &:nth-of-type(${i}) {
            stroke: ${color};
            ${$animate ? `animation-delay: ${i * 0.15}s;` : ""}
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
