import React, { FC } from "react";
import { CityWrapper } from "src/components/Window/City/style";
import Skyscrapers from "src/components/Window/City/Skyscrapers";
import Houses from "src/components/Window/City/Houses";
import Tree from "src/components/Window/City/Tree";

interface CloudProps {
  themeLight?: boolean;
}

const City: FC<CloudProps> = ({ themeLight }) => {
  return (
    <CityWrapper>
      <Skyscrapers />
      <Houses />
      <Tree left="12px" />
      <Tree left="448px" />
    </CityWrapper>
  );
};

export default City;
