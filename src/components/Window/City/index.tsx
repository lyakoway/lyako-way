import React, { FC } from "react";
import { CityWrapper } from "src/components/Window/City/style";
import Houses from "src/components/Window/City/Houses";
import Tree from "src/components/Window/City/Tree";
import Streetlamp from "src/components/Window/City/Streetlamp";

interface CloudProps {
  themeLight?: boolean;
}

const City: FC<CloudProps> = ({ themeLight }) => {
  return (
    <CityWrapper>
      <Houses themeLight={themeLight} />
      <Tree left="12px" />
      <Tree left="448px" />
      <Streetlamp left="38px" themeLight={themeLight} />
      <Streetlamp left="213px" themeLight={themeLight} />
    </CityWrapper>
  );
};

export default City;
