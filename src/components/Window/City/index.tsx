import React, { FC } from "react";
import { CityWrapper } from "src/components/Window/City/style";

interface CloudProps {
  themeLight?: boolean;
}

const City: FC<CloudProps> = ({ themeLight }) => {
  return <CityWrapper>111</CityWrapper>;
};

export default City;
