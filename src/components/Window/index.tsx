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
  const [animationClickTheme, setAnimationClickTheme] =
    useState<boolean>(false);
  // const [leftWindowSunMoon, setLeftWindowSunMoon] = useState(-60);
  const [dayToNightColor, setDayToNightColor] = useState<string>("#0c2233");
  const [weather, setWeather] = useState<number>(2);
  // const [climateControl, setClimateControl] = useState("sunnyMoon");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const {
    timeLeftSunMoon,
    lightOffOpacity,
    leftRotateWindowSunMoon,
    lightOffOpacitySun,
    lightOffOpacityMoon,
  } = usePositionSunAndMoon({ themeLight });

  const winter = false;

  const climateControl = climate;

  useEffect(() => {
    setAnimationClickTheme(true);
  }, [themeLight]);

  useEffect(() => {
    setAnimationClickTheme(false);
  }, []);

  useEffect(() => {
    if (climateControl === "rainy" && themeLight) {
      setDayToNightColor("rgb(29, 120, 147)");
      setAnimationClickTheme(false);
    } else if (climateControl === "cloudyWithRainAndLightning" && themeLight) {
      setDayToNightColor("rgb(0, 53, 71)");
      setAnimationClickTheme(false);
    } else if (climateControl === "cloudy" && themeLight) {
      setDayToNightColor("rgb(109, 177, 198)");
      setAnimationClickTheme(false);
    } else {
      const dayToNightColorValue = themeLight ? "#88bef5" : "#0c2233";
      setDayToNightColor(dayToNightColorValue);
    }
  }, [themeLight, climateControl, setAnimationClickTheme, setDayToNightColor]);

  console.log(55555555);

  return (
    <WindowWrapper>
      <WindowView
        data-window-view
        $dayToNightColor={dayToNightColor}
        $timeLeftSunMoon={timeLeftSunMoon}
        $animationCheckedTheme={themeLight}
        $animationClickTheme={animationClickTheme}
      >
        {["sunnyMoon", "cloudyWithSunMoon"].includes(climateControl) && (
          <HeavenlyBody
            data-heavenly-body
            $themeLight={themeLight}
            $timeLeftSunMoon={timeLeftSunMoon}
            $leftRotateWindowSunMoon={leftRotateWindowSunMoon}
            $animationClickTheme={animationClickTheme}
            $animationCheckedTheme={themeLight}
          />
        )}
        <Cloud climateControl={climateControl} />
      </WindowView>
      {["sunnyMoon", "cloudyWithSunMoon"].includes(climateControl) && (
        <WindowHotspot
          $lightOffOpacity={lightOffOpacity}
          $timeLeftSunMoon={timeLeftSunMoon}
          $animationCheckedTheme={themeLight}
          $lightOffOpacitySun={lightOffOpacitySun}
          $lightOffOpacityMoon={lightOffOpacityMoon}
          $animationClickTheme={animationClickTheme}
        />
      )}
      <WindowFrame />
      <WindowSill />

      {["sunnyMoon", "cloudyWithSunMoon"].includes(climateControl) && (
        <WindowLightLeft
          $lightOffOpacity={lightOffOpacity}
          $timeLeftSunMoon={timeLeftSunMoon}
          $animationCheckedTheme={themeLight}
          $lightOffOpacitySun={lightOffOpacitySun}
          $lightOffOpacityMoon={lightOffOpacityMoon}
          $animationClickTheme={animationClickTheme}
        />
      )}
      {["sunnyMoon", "cloudyWithSunMoon"].includes(climateControl) && (
        <WindowLightRight
          $lightOffOpacity={lightOffOpacity}
          $timeLeftSunMoon={timeLeftSunMoon}
          $animationCheckedTheme={themeLight}
          $lightOffOpacitySun={lightOffOpacitySun}
          $lightOffOpacityMoon={lightOffOpacityMoon}
          $animationClickTheme={animationClickTheme}
        />
      )}

      <WeatherIconWrapper onClick={() => setIsOpen(!isOpen)}>
        <WeatherIcon climateControl={climateControl} themeLight={themeLight} />
      </WeatherIconWrapper>
    </WindowWrapper>
  );
};

export default Window;
