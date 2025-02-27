import React, { FC } from "react";
import { SonContainer } from "src/components/Window/HeavenlyBody/Son/style";

interface SonProps {
  themeLight: boolean;
  lightOffOpacitySun: number;
}
const Son: FC<SonProps> = ({ themeLight, lightOffOpacitySun }) => {
  const sunsetSunrise = lightOffOpacitySun <= 0.12 && lightOffOpacitySun !== 0;
  // const morningEvening =
  //   lightOffOpacitySun > 0.12 &&
  //   lightOffOpacitySun < 3 &&
  //   lightOffOpacitySun !== 0;
  return (
    <SonContainer $themeLight={themeLight} $sunsetSunrise={sunsetSunrise} />
  );
};

export default Son;
