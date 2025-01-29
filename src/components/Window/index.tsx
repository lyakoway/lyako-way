import React, { useCallback, useEffect, useState, FC } from "react";

import { useSelectorTyped } from "src/store";

import {
  HeavenlyBody,
  WindowWrapper,
  WindowFrame,
  WindowSill,
  WindowLightLeft,
  WindowLightRight,
  WindowHotspot,
  WindowView,
  WeatherIconWrapper,
  // WeatherConditionsWrapper,
  // WeatherConditions,
  // WeatherConditionsText,
  // IconClose,
  // Title,
} from "./style";

// import ModalClimateControl from "./ModalClimateControl";

import Cloud from "./Сloud";
import WeatherIcon from "./WeatherIcon";
import { useDayTime, usePositionSunAndMoon } from "src/features/customHooks";

// import { Popup } from "semantic-ui-react";

// import { ReactComponent as CloseOutline } from "../../../common/icon/CloseOutline.svg";

interface WindowLightProps {
  themeLight?: boolean;
}

const Window: FC<WindowLightProps> = ({ themeLight }) => {
  const { climate } = useSelectorTyped(({ climate }) => climate);
  // const [animationClickTheme, setAnimationClickTheme] =
  //   useState<boolean>(false);
  // const [leftWindowSunMoon, setLeftWindowSunMoon] = useState(-60);
  const [dayToNightColor, setDayToNightColor] = useState<string>("#0c2233");
  const [moonOrSunColor, setMoonOrSunColor] = useState<string>("#fff");
  const [weather, setWeather] = useState<number>(2);
  // const [climateControl, setClimateControl] = useState("sunnyMoon");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const {
    timeLeftSunMoon,
    leftRotateWindowSunMoon,
    lightOffOpacitySun,
    lightOffOpacityMoon,
  } = usePositionSunAndMoon({ themeLight });

  const winter = false;

  const climateControl = climate;

  // useEffect(() => {
  //   if ((!dayTime && themeLight)) {
  //     setAnimationClickTheme(true);
  //   }
  // }, [themeLight, dayTime]);

  // useEffect(() => {
  //   // setAnimationClickTheme(false);
  // }, []);

  useEffect(() => {
    const moonOrSunColorValue = themeLight ? "#fff82f" : "#fff";
    setMoonOrSunColor(moonOrSunColorValue);

    if (climateControl === "rainy" && themeLight) {
      setDayToNightColor("rgb(29, 120, 147)");
      // setAnimationClickTheme(false);
    } else if (climateControl === "cloudyWithRainAndLightning" && themeLight) {
      setDayToNightColor("rgb(0, 53, 71)");
      // setAnimationClickTheme(false);
    } else if (climateControl === "cloudy" && themeLight) {
      setDayToNightColor("rgb(109, 177, 198)");
      // setAnimationClickTheme(false);
    } else {
      const dayToNightColorValue = themeLight ? "#88bef5" : "#0c2233";
      setDayToNightColor(dayToNightColorValue);
    }
  }, [themeLight, climateControl, setDayToNightColor, setMoonOrSunColor]);

  return (
    <WindowWrapper>
      <WindowView
        data-window-view
        $dayToNightColor={dayToNightColor}
        $timeLeftSunMoon={timeLeftSunMoon}
        $themeLight={themeLight}
      >
        {["sunnyMoon", "cloudyWithSunMoon"].includes(climateControl) && (
          <HeavenlyBody
            data-heavenly-body
            $leftRotateWindowSunMoon={leftRotateWindowSunMoon}
            $timeLeftSunMoon={timeLeftSunMoon}
            $themeLight={themeLight}
            $moonOrSunColor={moonOrSunColor}
          />
        )}
        <Cloud climateControl={climateControl} />
      </WindowView>
      {["sunnyMoon", "cloudyWithSunMoon"].includes(climateControl) && (
        <WindowHotspot
          $timeLeftSunMoon={timeLeftSunMoon}
          $lightOffOpacitySun={lightOffOpacitySun}
          $lightOffOpacityMoon={lightOffOpacityMoon}
          $themeLight={themeLight}
        />
      )}
      <WindowFrame />
      <WindowSill />

      {["sunnyMoon", "cloudyWithSunMoon"].includes(climateControl) && (
        <WindowLightLeft
          $timeLeftSunMoon={timeLeftSunMoon}
          $lightOffOpacitySun={lightOffOpacitySun}
          $lightOffOpacityMoon={lightOffOpacityMoon}
          $themeLight={themeLight}
        />
      )}
      {["sunnyMoon", "cloudyWithSunMoon"].includes(climateControl) && (
        <WindowLightRight
          $timeLeftSunMoon={timeLeftSunMoon}
          $lightOffOpacitySun={lightOffOpacitySun}
          $lightOffOpacityMoon={lightOffOpacityMoon}
          $themeLight={themeLight}
        />
      )}

      <WeatherIconWrapper onClick={() => setIsOpen(!isOpen)}>
        <WeatherIcon climateControl={climateControl} themeLight={themeLight} />
      </WeatherIconWrapper>
    </WindowWrapper>
  );
};

export default Window;
