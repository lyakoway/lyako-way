import React, { FC } from "react";
import { HousesWrapper } from "src/components/Window/City/Houses/style";
import House1 from "src/components/Window/City/Houses/Hause1";

interface HousesProps {
  themeLight?: boolean;
}

const Houses: FC<HousesProps> = ({ themeLight }) => {
  return (
    <HousesWrapper>
      <House1 />
    </HousesWrapper>
  );
};

export default Houses;
