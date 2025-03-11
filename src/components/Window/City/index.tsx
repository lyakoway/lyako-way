import React, { FC } from "react";
import { CityWrapper } from "src/components/Window/City/style";
import Skyscrapers from "src/components/Window/City/Skyscrapers";

interface CloudProps {
  themeLight?: boolean;
}

const City: FC<CloudProps> = ({ themeLight }) => {
  return (
    <CityWrapper>
      <Skyscrapers />
    </CityWrapper>
  );
};

export default City;
