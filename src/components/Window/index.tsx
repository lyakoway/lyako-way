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
import { useDayTime } from "src/features/customHooks";

// import { Popup } from "semantic-ui-react";

// import { ReactComponent as CloseOutline } from "../../../common/icon/CloseOutline.svg";

interface WindowLightProps {
  themeLight?: boolean;
}

const Window: FC<WindowLightProps> = ({ themeLight }) => {
  const { climate } = useSelectorTyped(({ climate }) => climate);
  const { sunriseTime, sunsetTime, timesHouse } = useDayTime();
  const [animationClickTheme, setAnimationClickTheme] =
    useState<boolean>(false);
  const [animationCheckedTheme, setAnimationCheckedTheme] =
    useState<boolean>(true);
  const [timeLeftSunMoon, setTimeLeftSunMoon] = useState<number>(0);
  const [percentRemainingSunMoon, setPercentRemainingSunMoon] =
    useState<number>(0);
  // const [leftWindowSunMoon, setLeftWindowSunMoon] = useState(-60);
  const [leftRotateWindowSunMoon, setLeftRotateWindowSunMoon] =
    useState<number>(-60);
  const [lightOffOpacitySun, setLightOffOpacitySun] = useState<number>(0);
  const [lightOffOpacityMoon, setLightOffOpacityMoon] = useState<number>(0);
  const [lightOffOpacity, setLightOffOpacity] = useState<number>(0);
  const [dayToNightColor, setDayToNightColor] = useState<string>("#0c2233");
  const [weather, setWeather] = useState<number>(2);
  // const [climateControl, setClimateControl] = useState("sunnyMoon");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const winter = false;

  const climateControl = climate;

  // сколько процентов осталось до захода солнца от дна
  const percentRemainingSunValue = Math.round(
    ((sunsetTime - timesHouse) * 100) / (sunsetTime - sunriseTime)
  );

  // сколько времени осталось до захода солца в секундах
  const timesRemainingSunset = Math.abs(sunsetTime - timesHouse);

  // констатнта для добавления расчтета сикунда анимации для определения продолжительности (пока вынуждено так для учета времени если перевалило за 24:00)
  const timeDeltaMoon = Math.abs(86400 - sunsetTime);
  // сколько времени осталось до захода луны
  const timesMoon =
    timesHouse <= sunriseTime
      ? Math.abs(sunriseTime - timesHouse)
      : Math.abs(86400 - timesHouse + sunriseTime);
  // 86400 - timesHouse + sunriseTime
  // сколько процентов осталось до захода луны
  const percentRemainingMoonValue = Math.round(
    (timesMoon * 100) / (sunriseTime + timeDeltaMoon)
  );

  // сколько в процентах пути прошло солце и луна
  const lengthLeftSunMoon = 100 - percentRemainingSunMoon;

  // сколько прошло солце или луна
  // const lightOff = Math.round((lengthLeftSunMoon * 120) / 100);
  // сколько прошло солце или луна от полного круга 360deg в прроцентах (всего 33%)
  // const lightOffPercent = Math.round((lightOff * 100) / 360);

  useEffect(() => {
    setAnimationCheckedTheme(themeLight);
    setAnimationClickTheme(true);
  }, [themeLight]);

  useEffect(() => {
    setAnimationClickTheme(false);
  }, []);

  useEffect(() => {
    if (themeLight) {
      setTimeLeftSunMoon(timesRemainingSunset);
      setPercentRemainingSunMoon(percentRemainingSunValue);
    } else {
      setTimeLeftSunMoon(timesMoon);
      setPercentRemainingSunMoon(percentRemainingMoonValue);
    }

    const lightOffOpacityValue = themeLight
      ? lightOffOpacitySun
      : lightOffOpacityMoon;

    setLightOffOpacity(lightOffOpacityValue);

    // ширина окна
    const windowView = document?.querySelector("[data-window-view]");

    if (windowView) {
      // расположение солнца или луны в градусах от левого края окна
      // длина пройденного пути в грудах = 120 по ширине окна
      // расчет сколько крадусов прошел от левого края в соотношения процентов ко времени половины дня (так как значение должно быть отрицательно и уменьшатся от -60 в первую половину дня и потом до 60)
      if (lengthLeftSunMoon <= 50) {
        const leftRotate = Math.round((60 * lengthLeftSunMoon) / 50) - 60;
        setLeftRotateWindowSunMoon(leftRotate);
        //какую яркость задать от пройденного процента по кругу 360deg для 1
        if (themeLight) {
          setLightOffOpacitySun(lengthLeftSunMoon / 50);
        } else {
          // для 0.4
          setLightOffOpacityMoon((lengthLeftSunMoon * 0.4) / 50);
        }
      } else {
        const leftRotate = Math.abs(
          60 - Math.round((60 * lengthLeftSunMoon) / 50)
        );
        setLeftRotateWindowSunMoon(leftRotate);
        //какую яркость задать от пройденного процента по кругу 360deg для 1
        if (themeLight) {
          setLightOffOpacitySun(2 - lengthLeftSunMoon / 50);
        } else {
          // для 0.4
          setLightOffOpacityMoon(0.8 - (lengthLeftSunMoon * 0.4) / 50);
        }
      }
    }
  }, [
    percentRemainingMoonValue,
    percentRemainingSunMoon,
    percentRemainingSunValue,
    timesMoon,
    timesRemainingSunset,
    themeLight,
    lengthLeftSunMoon,
    lightOffOpacitySun,
    lightOffOpacityMoon,
  ]);

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
