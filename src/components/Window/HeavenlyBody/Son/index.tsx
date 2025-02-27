import React, { FC } from "react";
import { SonContainer } from "src/components/Window/HeavenlyBody/Son/style";

interface SonProps {
  themeLight: boolean;
  sunsetSunrise: boolean;
}
const Son: FC<SonProps> = ({ themeLight, sunsetSunrise }) => {
  return (
    <SonContainer $themeLight={themeLight} $sunsetSunrise={sunsetSunrise} />
  );
};

export default Son;
