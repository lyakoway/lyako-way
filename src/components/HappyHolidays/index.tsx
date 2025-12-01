import React from "react";
import styled, { keyframes, css } from "styled-components";
import { useSelectorTyped } from "src/store";
import { isNewYearPeriod } from "src/common/utils/isNewYearPeriod";

const balloon = keyframes`
  0%, 50%, 70% {
    opacity: 0;
    transform: translateY(0px);
  }
  80% {
    opacity: 1;
    transform: translateY(-15px);
  }
  90%, 100% {
    opacity: 0;
    transform: translateY(0px);
  }
`;

const Holidays = styled.h2<{ $visible: boolean }>`
  margin: 0;
  position: absolute;
  right: 280px;
  white-space: nowrap;
  top: -25px;
  display: flex;
  z-index: 5;
  font-family: "Mountains of Christmas", cursive;
  font-size: 2em;
  background: #fff;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.14);
  opacity: 0;

  ${({ $visible }) =>
    $visible &&
    css`
      animation: ${balloon} 24s ease-in forwards;
    `}

  &::before {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border-left: 30px solid transparent;
    border-right: 0 solid transparent;
    border-top: 40px solid #fff;
    bottom: -31px;
    right: 33px;
    transform: rotateZ(-20deg);
  }
`;

interface HappyHolidaysProps {
  themeLight?: boolean;
}

export const HappyHolidays: React.FC<HappyHolidaysProps> = ({ themeLight }) => {
  const santaShown = useSelectorTyped((state) => state.holidays.santaShown);
  const showTree = isNewYearPeriod();

  if (themeLight || !santaShown || !showTree) {
    return null;
  }

  return <Holidays $visible={santaShown}>Happy Holidays!</Holidays>;
};
