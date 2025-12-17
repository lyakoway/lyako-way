import React from "react";
import styled from "styled-components";
import { ReactComponent as ChristmasTree } from "src/common/icon/christmasTree.svg";

// 🌲 Массив цветов для огоньков
const lightColors = [
  "#ff0000",
  "#ffff00",
  "#00ff00",
  "#00ffff",
  "#ff00ff",
  "#ffa500",
  "#ff69b4",
  "#8a2be2",
];

const Tree = styled.div`
  position: relative;
  top: 190px;
  left: -20px;
  z-index: 5;

  path {
    stroke: #fff;
  }

  path.christmasTree_svg__light {
    ${(props) => {
      let styles = "";
      // проходим по большому количеству path (например 101)
      for (let i = 1; i <= 101; i++) {
        const color = lightColors[(i - 1) % lightColors.length]; // циклически берём цвет
        styles += `&:nth-of-type(${i}) { stroke: ${color}; }\n`;
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
    <Tree $animate={themeLight}>
      <ChristmasTree />
    </Tree>
  );
};
