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
  return (
    <WindowSkyWrapper>
      <Sky
        $dayToNightColor={dayToNightColor}
        $timeLeftSunMoon={timeLeftSunMoon}
        $themeLight={themeLight}
        $lightOffOpacitySun={lightOffOpacitySun}
      />
      <HorizonNight $themeLight={themeLight} />
      {/*<HorizonNightMoon $themeLight={themeLight} />*/}
    </WindowSkyWrapper>
  );
};

export default WindowSky;
