import React, { FC } from "react";
import { HousesWrapper } from "src/components/Window/City/Houses/style";
import House1 from "src/components/Window/City/Houses/Hause1";
import House2 from "src/components/Window/City/Houses/Hause2";
import House3 from "src/components/Window/City/Houses/Hause3";
import House4 from "src/components/Window/City/Houses/Hause4";

interface HousesProps {
  themeLight?: boolean;
}

const Houses: FC<HousesProps> = ({ themeLight }) => {
  return (
    <HousesWrapper>
      <House1 />
      <House2 />
      <House3 />
      <House4 />
    </HousesWrapper>
  );
};

export default Houses;
