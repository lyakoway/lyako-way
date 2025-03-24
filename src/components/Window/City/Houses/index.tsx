import React, { FC } from "react";
import { HousesWrapper } from "src/components/Window/City/Houses/style";
import House1 from "src/components/Window/City/Houses/Hause1";
import House2 from "src/components/Window/City/Houses/Hause2";
import House3 from "src/components/Window/City/Houses/Hause3";
import House4 from "src/components/Window/City/Houses/Hause4";
import House5 from "src/components/Window/City/Houses/Hause5";

interface HousesProps {
  themeLight?: boolean;
  climateControl: string;
}

const Houses: FC<HousesProps> = ({ themeLight, climateControl }) => {
  return (
    <HousesWrapper>
      <House1 themeLight={themeLight} climateControl={climateControl} />
      <House2 themeLight={themeLight} climateControl={climateControl} />
      <House3 themeLight={themeLight} climateControl={climateControl} />
      <House4 themeLight={themeLight} climateControl={climateControl} />
      <House5 themeLight={themeLight} climateControl={climateControl} />
    </HousesWrapper>
  );
};

export default Houses;
