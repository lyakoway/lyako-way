import React, { FC } from "react";
import { CityWrapper } from "src/components/Window/City/style";
import Skyscrapers from "src/components/Window/City/Skyscrapers";
import Houses from "src/components/Window/City/Houses";

interface CloudProps {
  themeLight?: boolean;
}

const City: FC<CloudProps> = ({ themeLight }) => {
  return (
    <CityWrapper>
      <Skyscrapers />
      <Houses />
    </CityWrapper>
  );
};

export default City;
