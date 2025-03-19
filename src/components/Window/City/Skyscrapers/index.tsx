import React, { FC } from "react";
import {
  CityWrapper,
  SkyscrapersWrapper,
  Skyscraper1,
  Skyscraper2,
  Skyscraper3,
  Skyscraper4,
  Skyscraper5,
  Skyscraper6,
  Skyscraper7,
  Skyscraper8,
} from "src/components/Window/City/Skyscrapers/style";

interface SkyscrapersProps {
  themeLight?: boolean;
}

const Skyscrapers: FC<SkyscrapersProps> = ({ themeLight }) => {
  const color = themeLight ? "#d6d6d6" : "#8f8c8c";
  return (
    <CityWrapper>
      <SkyscrapersWrapper>
        <Skyscraper1 $color={color} />
        <Skyscraper2 $color={color} />
        <Skyscraper3 $color={color} />
        <Skyscraper4 $color={color} />
        <Skyscraper5 $color={color} />
        <Skyscraper6 $color={color} />
        <Skyscraper7 $color={color} />
        <Skyscraper8 $color={color} />
      </SkyscrapersWrapper>
    </CityWrapper>
  );
};

export default Skyscrapers;
