import React from "react";
import styled, { keyframes, css } from "styled-components";
import { ReactComponent as ChristmasTree } from "src/common/icon/christmasTree.svg";

// 🌲 Контейнер елки
const Tree = styled.div`
  position: relative;
  top: 190px;
  left: -20px;
  z-index: 5;

  path {
    stroke: #fff;
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
