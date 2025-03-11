import React, { FC } from "react";
import {
  SkyscrapersWrapper,
  Skyscraper1,
  Skyscraper2,
  Skyscraper3,
  Skyscraper4,
  Skyscraper5,
  Skyscraper6,
} from "src/components/Window/City/Skyscrapers/style";

interface SkyscrapersProps {
  themeLight?: boolean;
}

const Skyscrapers: FC<SkyscrapersProps> = ({ themeLight }) => {
  return (
    <SkyscrapersWrapper>
      <Skyscraper1 />
      <Skyscraper2 />
      <Skyscraper3 />
      <Skyscraper4 />
      <Skyscraper5 />
      <Skyscraper6 />
    </SkyscrapersWrapper>
  );
};

export default Skyscrapers;
