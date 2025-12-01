import React, { useCallback, useEffect, useState, FC, Fragment } from "react";

import { useDispatchTyped, useSelectorTyped } from "src/store";

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
} from "./style";

import WeatherIcon from "src/components/Window/WeatherIcon";
import {
  useIsomorphicLayoutEffect,
  usePositionSunAndMoon,
  useWeather,
} from "src/features/customHooks";
import { getParallax } from "src/common/utils";
import WindowView from "src/components/Window/WindowView";
import Star from "src/components/Window/Star";
import HeavenlyBody from "src/components/Window/HeavenlyBody";
import WindowSky from "src/components/Window/WindowSky";
import City from "src/components/Window/City";
import Skyscrapers from "src/components/Window/City/Skyscrapers";
import { showModal } from "src/reducers";
import ClimateControl from "src/components/Window/ClimateControl";
import { useForceUpdate } from "src/features/customHooks/useForceUpdate";
import Weather from "src/components/Window/Weather";
import { SantaClaus } from "src/components/SantaClaus";
import { HappyHolidays } from "src/components/HappyHolidays";
import SantaClausWithDeer from "src/components/SantaClausWithDeer";

interface WindowLightProps {
  themeLight?: boolean;
}

const Window: FC<WindowLightProps> = ({ themeLight }) => {
  const { climate } = useSelectorTyped(({ climate }) => climate);
  const [dayToNightColor, setDayToNightColor] = useState<string>("#0c2233");
  const [moonOrSunColor, setMoonOrSunColor] = useState<string>("#fff");

  const trigger = useForceUpdate(climate);

  const {
    timeLeftSunMoon,
    leftRotateWindowSunMoon,
    lightOffOpacitySun,
    lightOffOpacityMoon,
  } = usePositionSunAndMoon({ themeLight });

  const dispatch = useDispatchTyped();

  const handleClickModal = useCallback(() => {
    dispatch(
      showModal({
        content: <ClimateControl />,
        width: "auto",
        backgroundOverlay: "rgba(0, 0, 0, 0.4)",
      })
    );
  }, [dispatch]);

  useEffect(() => {
    const moonOrSunColorValue = themeLight ? "#fff82f" : "#fff";
    setMoonOrSunColor(moonOrSunColorValue);

    if (climate === "rainy" && themeLight) {
      setDayToNightColor("rgb(29, 120, 147)");
    } else if (climate === "cloudyWithRainAndLightning" && themeLight) {
      setDayToNightColor("rgb(0, 53, 71)");
    } else if (climate === "cloudy" && themeLight) {
      setDayToNightColor("rgb(109, 177, 198)");
    } else {
      const dayToNightColorValue = themeLight
        ? "-webkit-linear-gradient(bottom, rgba(249, 251, 240, 1) 10%, rgba(215, 253, 254, 1) 20%, rgba(167, 222, 253, 1) 40%, rgba(110, 175, 255, 1) 100%);"
        : "#0c2233";
      setDayToNightColor(dayToNightColorValue);
    }
  }, [themeLight, climate, setDayToNightColor, setMoonOrSunColor]);

  useIsomorphicLayoutEffect(() => {
    const parallax = (e: { clientX: number; clientY: number }) => {
      getParallax(e, "data-parallax-sun", 1000, 1000, 2);
      getParallax(e, "data-parallax-cloud", 1000, 1000, 3);
      getParallax(e, "data-parallax-skyscrapers", 1000, 2500, 4);
      getParallax(e, "data-parallax-city", 1600, 2800, 4);
    };
    document.addEventListener("mousemove", parallax);
    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  });

  return (
    <WindowWrapper>
      <HappyHolidays themeLight={themeLight} />
      <WindowView
        data-window-view
        $dayToNightColor={dayToNightColor}
        $timeLeftSunMoon={timeLeftSunMoon}
        $themeLight={themeLight}
      >
        <SantaClausWithDeer themeLight={themeLight} />
        <SantaClaus themeLight={themeLight} />
        <Fragment key={trigger}>
          <Weather climateControl={climate} />
        </Fragment>
        <WindowSky
          dayToNightColor={dayToNightColor}
          timeLeftSunMoon={timeLeftSunMoon}
          themeLight={themeLight}
          lightOffOpacitySun={lightOffOpacitySun}
        />
        {["sunnyMoon", "cloudyWithSunMoon"].includes(climate) && (
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
        {["sunnyMoon", "cloudyWithSunMoon"].includes(climate) && (
          <Star themeLight={themeLight} />
        )}
        <HeavenlyBodyParallax data-parallax-skyscrapers="120">
          <Skyscrapers themeLight={themeLight} />
        </HeavenlyBodyParallax>
        <HeavenlyBodyParallax data-parallax-city="220">
          <City themeLight={themeLight} climateControl={climate} />
        </HeavenlyBodyParallax>
      </WindowView>
      {["sunnyMoon", "cloudyWithSunMoon"].includes(climate) && (
        <WindowHotspot
          $timeLeftSunMoon={timeLeftSunMoon}
          $lightOffOpacitySun={lightOffOpacitySun}
          $lightOffOpacityMoon={lightOffOpacityMoon}
          $themeLight={themeLight}
        />
      )}
      <WindowFrame />
      <WindowSill />

      {["sunnyMoon", "cloudyWithSunMoon"].includes(climate) && (
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

      {climate === "cloudyWithRainAndLightning" && (
        <>
          <WindowLightLeftLightning />
          <WindowLightRightLightning />
        </>
      )}

      <WeatherIconWrapper onClick={handleClickModal}>
        <WeatherIcon climateControl={climate} themeLight={themeLight} />
      </WeatherIconWrapper>
    </WindowWrapper>
  );
};

export default Window;
