import React, { useEffect, useRef, useState } from "react";
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

  path.christmasTree_svg__light {
    /* присваиваем цвета через nth-of-type */
    &:nth-of-type(3) {
      stroke: red;
    }
    &:nth-of-type(5) {
      stroke: yellow;
    }
    &:nth-of-type(7) {
      stroke: green;
    }
    &:nth-of-type(9) {
      stroke: blue;
    }
    &:nth-of-type(11) {
      stroke: orange;
    }
    &:nth-of-type(13) {
      stroke: pink;
    }
    &:nth-of-type(15) {
      stroke: violet;
    }

    &:nth-of-type(17) {
      stroke: red;
    }
    &:nth-of-type(19) {
      stroke: yellow;
    }
    &:nth-of-type(21) {
      stroke: green;
    }
    &:nth-of-type(23) {
      stroke: blue;
    }
    &:nth-of-type(25) {
      stroke: orange;
    }
    &:nth-of-type(27) {
      stroke: pink;
    }
    &:nth-of-type(29) {
      stroke: violet;
    }

    &:nth-of-type(31) {
      stroke: red;
    }
    &:nth-of-type(33) {
      stroke: yellow;
    }
    &:nth-of-type(35) {
      stroke: green;
    }
    &:nth-of-type(37) {
      stroke: blue;
    }
    &:nth-of-type(39) {
      stroke: orange;
    }
    &:nth-of-type(41) {
      stroke: pink;
    }
    &:nth-of-type(43) {
      stroke: violet;
    }

    &:nth-of-type(45) {
      stroke: red;
    }

    &:nth-of-type(48) {
      stroke: yellow;
    }
    &:nth-of-type(50) {
      stroke: green;
    }
    &:nth-of-type(52) {
      stroke: blue;
    }
    &:nth-of-type(54) {
      stroke: orange;
    }
    &:nth-of-type(56) {
      stroke: pink;
    }
    &:nth-of-type(58) {
      stroke: violet;
    }

    &:nth-of-type(60) {
      stroke: red;
    }
    &:nth-of-type(48) {
      stroke: yellow;
    }
    &:nth-of-type(50) {
      stroke: green;
    }
    &:nth-of-type(52) {
      stroke: blue;
    }
    &:nth-of-type(54) {
      stroke: orange;
    }
    &:nth-of-type(56) {
      stroke: pink;
    }

    &:nth-of-type(58) {
      stroke: red;
    }
    &:nth-of-type(60) {
      stroke: yellow;
    }
    &:nth-of-type(62) {
      stroke: green;
    }
    &:nth-of-type(64) {
      stroke: blue;
    }
    &:nth-of-type(66) {
      stroke: orange;
    }
    &:nth-of-type(68) {
      stroke: pink;
    }

    &:nth-of-type(70) {
      stroke: red;
    }
    &:nth-of-type(72) {
      stroke: yellow;
    }
    &:nth-of-type(74) {
      stroke: green;
    }

    &:nth-of-type(79) {
      stroke: red;
    }
    &:nth-of-type(81) {
      stroke: yellow;
    }
    &:nth-of-type(83) {
      stroke: green;
    }
    &:nth-of-type(85) {
      stroke: blue;
    }
    &:nth-of-type(87) {
      stroke: orange;
    }
    &:nth-of-type(89) {
      stroke: pink;
    }

    &:nth-of-type(91) {
      stroke: red;
    }
    &:nth-of-type(93) {
      stroke: yellow;
    }
    &:nth-of-type(95) {
      stroke: green;
    }
    &:nth-of-type(97) {
      stroke: blue;
    }
    &:nth-of-type(99) {
      stroke: orange;
    }
    &:nth-of-type(101) {
      stroke: pink;
    }
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
