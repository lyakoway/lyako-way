import React, { FC } from "react";
import {
  StreetlampWrapper,
  StreetlampGlow,
} from "src/components/Window/City/Streetlamp/style";

interface TreeProps {
  themeLight?: boolean;
  left: string;
  climateControl: string;
}

const Streetlamp: FC<TreeProps> = ({ themeLight, left, climateControl }) => {
  return (
    <StreetlampWrapper $left={left} $climateControl={climateControl}>
      <StreetlampGlow $themeLight={themeLight} />
    </StreetlampWrapper>
  );
};

export default Streetlamp;
