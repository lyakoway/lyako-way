import React, { FC } from "react";
import {
  StreetlampWrapper,
  StreetlampGlow,
} from "src/components/Window/City/Streetlamp/style";

interface TreeProps {
  themeLight?: boolean;
  left: string;
}

const Streetlamp: FC<TreeProps> = ({ themeLight, left }) => {
  return (
    <StreetlampWrapper left={left}>
      <StreetlampGlow $themeLight={themeLight} />
    </StreetlampWrapper>
  );
};

export default Streetlamp;
