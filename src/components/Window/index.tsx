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
  WindowLightLeftLightning,
  WindowLightRightLightning,
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
import City from "src/components/Window/City";
import Skyscrapers from "src/components/Window/City/Skyscrapers";
import Rain from "src/components/Window/Rain";
import Snow from "src/components/Window/Snow";
import Lightning from "src/components/Window/Lightning";

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
  const [climateControl, setClimateControl] = useState("sunnyMoon");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const {
    timeLeftSunMoon,
    leftRotateWindowSunMoon,
    lightOffOpacitySun,
    lightOffOpacityMoon,
  } = usePositionSunAndMoon({ themeLight });

  const winter = false;

  // const climateControl = "snowy";

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
      getParallax(e, "data-parallax-sun", 1000, 1000);
      getParallax(e, "data-parallax-cloud", 1000, 1000);
      getParallax(e, "data-parallax-skyscrapers", 1000, 2500);
      getParallax(e, "data-parallax-city", 1600, 2800);
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
        {(climateControl === "rainy" ||
          climateControl === "cloudyWithRainAndLightning") && (
          <Rain climateControl={climateControl} />
        )}
        {climateControl === "cloudyWithRainAndLightning" && (
          <Lightning climateControl={climateControl} />
        )}
        {climateControl === "snowy" && <Snow climateControl={climateControl} />}
        <WindowSky
          dayToNightColor={dayToNightColor}
          timeLeftSunMoon={timeLeftSunMoon}
          themeLight={themeLight}
          lightOffOpacitySun={lightOffOpacitySun}
        />
        {["sunnyMoon", "cloudyWithSunMoon"].includes(climateControl) && (
          <HeavenlyBodyParallax data-parallax-sun="15">
            <HeavenlyBody
              data-heavenly-body
              leftRotateWindowSunMoon={leftRotateWindowSunMoon}
              timeLeftSunMoon={timeLeftSunMoon}
              themeLight={themeLight}
              moonOrSunColor={moonOrSunColor}
              lightOffOpacitySun={lightOffOpacitySun}
            />
          </HeavenlyBodyParallax>
        )}
        <HeavenlyBodyParallax data-parallax-cloud="30">
          <Cloud climateControl={climateControl} />
        </HeavenlyBodyParallax>
        {["sunnyMoon", "cloudyWithSunMoon"].includes(climateControl) && (
          <Star themeLight={themeLight} />
        )}
        <HeavenlyBodyParallax data-parallax-skyscrapers="120">
          <Skyscrapers themeLight={themeLight} />
        </HeavenlyBodyParallax>
        <HeavenlyBodyParallax data-parallax-city="220">
          <City themeLight={themeLight} climateControl={climateControl} />
        </HeavenlyBodyParallax>
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
        <>
          <WindowLightLeft
            $timeLeftSunMoon={timeLeftSunMoon}
            $lightOffOpacitySun={lightOffOpacitySun}
            $lightOffOpacityMoon={lightOffOpacityMoon}
            $themeLight={themeLight}
          />
          <WindowLightRight
            $timeLeftSunMoon={timeLeftSunMoon}
            $lightOffOpacitySun={lightOffOpacitySun}
            $lightOffOpacityMoon={lightOffOpacityMoon}
            $themeLight={themeLight}
          />
        </>
      )}

      {climateControl === "cloudyWithRainAndLightning" && (
        <>
          <WindowLightLeftLightning />
          <WindowLightRightLightning />
        </>
      )}

      <WeatherIconWrapper onClick={() => setIsOpen(!isOpen)}>
        <WeatherIcon climateControl={climateControl} themeLight={themeLight} />
      </WeatherIconWrapper>
    </WindowWrapper>
  );
};

export default Window;
