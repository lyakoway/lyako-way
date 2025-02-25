import React, { useCallback, useEffect, useState, FC } from "react";

import { useSelectorTyped } from "src/store";

import {
  WindowWrapper,
  WindowFrame,
  WindowSill,
  WindowLightLeft,
  WindowLightRight,
  WindowHotspot,
  WeatherIconWrapper,
  HeavenlyBodyParallax,
  // WeatherConditionsWrapper,
  // WeatherConditions,
  // WeatherConditionsText,
  // IconClose,
  // Title,
} from "./style";

// import ModalClimateControl from "./ModalClimateControl";

import Cloud from "src/components/Window/Сloud";
import WeatherIcon from "src/components/Window/WeatherIcon";
import {
  useDayTime,
  useIsomorphicLayoutEffect,
  usePositionSunAndMoon,
} from "src/features/customHooks";
import { getParallax } from "src/common/utils";
import WindowView from "src/components/Window/WindowView";
import Star from "src/components/Window/Star";
import HeavenlyBody from "src/components/Window/HeavenlyBody";
import WindowSky from "src/components/Window/WindowSky";

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
    sunsetSunrise,
  } = usePositionSunAndMoon({ themeLight });

  const winter = false;

  const climateControl = climate;

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
      const dayToNightColorValue = themeLight
        ? "-webkit-linear-gradient(bottom, rgba(249, 251, 240, 1) 10%, rgba(215, 253, 254, 1) 20%, rgba(167, 222, 253, 1) 40%, rgba(110, 175, 255, 1) 100%);"
        : "#0c2233";
      setDayToNightColor(dayToNightColorValue);
    }
  }, [themeLight, climateControl, setDayToNightColor, setMoonOrSunColor]);

  useIsomorphicLayoutEffect(() => {
    const parallax = (e: { clientX: number; clientY: number }) => {
      getParallax(e, "data-parallax-sun");
      getParallax(e, "data-parallax-cloud");
    };
    document.addEventListener("mousemove", parallax);
    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  });

  return (
    <WindowWrapper>
      <WindowView
        data-window-view
        $dayToNightColor={dayToNightColor}
        $timeLeftSunMoon={timeLeftSunMoon}
        $themeLight={themeLight}
      >
        <WindowSky
          dayToNightColor={dayToNightColor}
          timeLeftSunMoon={timeLeftSunMoon}
          themeLight={themeLight}
          lightOffOpacitySun={lightOffOpacitySun}
          sunsetSunrise={sunsetSunrise}
        />
        {["sunnyMoon", "cloudyWithSunMoon"].includes(climateControl) && (
          <HeavenlyBodyParallax data-parallax-sun="15">
            <HeavenlyBody
              data-heavenly-body
              leftRotateWindowSunMoon={leftRotateWindowSunMoon}
              timeLeftSunMoon={timeLeftSunMoon}
              themeLight={themeLight}
              moonOrSunColor={moonOrSunColor}
            />
          </HeavenlyBodyParallax>
        )}
        <HeavenlyBodyParallax data-parallax-cloud="30">
          <Cloud climateControl={climateControl} />
        </HeavenlyBodyParallax>
        {["sunnyMoon", "cloudyWithSunMoon"].includes(climateControl) && (
          <Star themeLight={themeLight} />
        )}
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
