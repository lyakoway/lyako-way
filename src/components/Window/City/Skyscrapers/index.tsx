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
  return (
    <CityWrapper>
      <SkyscrapersWrapper>
        <Skyscraper1 />
        <Skyscraper2 />
        <Skyscraper3 />
        <Skyscraper4 />
        <Skyscraper5 />
        <Skyscraper6 />
        <Skyscraper7 />
        <Skyscraper8 />
      </SkyscrapersWrapper>
    </CityWrapper>
  );
};

export default Skyscrapers;
