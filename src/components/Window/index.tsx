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
  HeavenlyBodyParallax,
  // WeatherConditionsWrapper,
  // WeatherConditions,
  // WeatherConditionsText,
  // IconClose,
  // Title,
} from "./style";

// import ModalClimateControl from "./ModalClimateControl";

import Cloud from "./Сloud";
import WeatherIcon from "./WeatherIcon";
import {
  useDayTime,
  useIsomorphicLayoutEffect,
  usePositionSunAndMoon,
} from "src/features/customHooks";

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

  const getParallax = (
    e: { clientX: number; clientY: number },
    dataName: string
  ) => {
    const dataParallax = Array.from(
      document?.querySelectorAll<HTMLElement>(`[${dataName}]`)
    );
    if (dataParallax) {
      const speedSun = dataParallax?.[0]?.getAttribute(dataName);
      const biasXSun = (e.clientX * Number(speedSun)) / 1000;
      const biasYSun = (e.clientY * Number(speedSun)) / 1000;
      if (dataParallax?.[0]) {
        dataParallax[0].style.transform = `translateX(${biasXSun}px) translateY(${biasYSun}px)`;
      }
    }
  };

  useIsomorphicLayoutEffect(() => {
    const dataParallaxSun = Array.from(
      document?.querySelectorAll<HTMLElement>("[data-parallax-sun]")
    );
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
        {["sunnyMoon", "cloudyWithSunMoon"].includes(climateControl) && (
          <HeavenlyBodyParallax data-parallax-sun="15">
            <HeavenlyBody
              data-heavenly-body
              $leftRotateWindowSunMoon={leftRotateWindowSunMoon}
              $timeLeftSunMoon={timeLeftSunMoon}
              $themeLight={themeLight}
              $moonOrSunColor={moonOrSunColor}
            />
          </HeavenlyBodyParallax>
        )}
        <HeavenlyBodyParallax data-parallax-cloud="30">
          <Cloud climateControl={climateControl} />
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
