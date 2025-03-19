import React, { FC } from "react";
import { HousesWrapper } from "src/components/Window/City/Houses/style";
import House1 from "src/components/Window/City/Houses/Hause1";
import House2 from "src/components/Window/City/Houses/Hause2";
import House3 from "src/components/Window/City/Houses/Hause3";
import House4 from "src/components/Window/City/Houses/Hause4";
import House5 from "src/components/Window/City/Houses/Hause5";

interface HousesProps {
  themeLight?: boolean;
}

const Houses: FC<HousesProps> = ({ themeLight }) => {
  return (
    <HousesWrapper>
      <House1 themeLight={themeLight} />
      <House2 themeLight={themeLight} />
      <House3 themeLight={themeLight} />
      <House4 themeLight={themeLight} />
      <House5 themeLight={themeLight} />
    </HousesWrapper>
  );
};

export default Houses;
