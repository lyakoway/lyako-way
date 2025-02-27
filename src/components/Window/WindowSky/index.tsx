import React, { FC } from "react";
import { WindowSkyWrapper } from "src/components/Window/WindowSky/style";
import Sky from "src/components/Window/WindowSky/Sky";
import HorizonNight from "src/components/Window/WindowSky/HorizonNight";
import HorizonNightMoon from "src/components/Window/WindowSky/HorizonNightMoon";

interface CloudProps {
  dayToNightColor: string;
  timeLeftSunMoon: number;
  themeLight: boolean;
  lightOffOpacitySun: number;
}

const WindowSky: FC<CloudProps> = ({
  dayToNightColor,
  timeLeftSunMoon,
  themeLight,
  lightOffOpacitySun,
}) => {
  const sunsetSunrise = lightOffOpacitySun <= 0.12 && lightOffOpacitySun !== 0;
  return (
    <WindowSkyWrapper>
      <Sky
        $dayToNightColor={dayToNightColor}
        $timeLeftSunMoon={timeLeftSunMoon}
        $themeLight={themeLight}
        $lightOffOpacitySun={lightOffOpacitySun}
      />
      <HorizonNight $themeLight={themeLight} $sunsetSunrise={sunsetSunrise} />
      {/*<HorizonNightMoon $themeLight={themeLight} />*/}
    </WindowSkyWrapper>
  );
};

export default WindowSky;
