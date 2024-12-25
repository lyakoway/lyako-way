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
  theme: string;
  checkedTheme?: boolean;
}

const Window: FC<WindowLightProps> = ({ theme, checkedTheme }) => {
  const { climat } = useSelectorTyped(({ climat }) => climat);
  const { sunriseStr, sunsetStr, timesHouse } = useDayTime();
  const [animationClikTeme, setAnimationClikTeme] = useState<boolean>(false);
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

  const climateControl = climat;

  // сколько процентов осталось до захода солнца от дна
  const percentRemainingSunValue = Math.round(
    ((sunsetStr - timesHouse) * 100) / (sunsetStr - sunriseStr)
  );

  // сколько времени осталось до захода солца в секундах
  const timesSunsetStr = Math.abs(sunsetStr - timesHouse);

  // констатнта для добавления расчтета сикунда анимации для определения продолжительности (пока вынуждено так для учета времени если перевалило за 24:00)
  const timeDeltaMoon = Math.abs(86400 - sunsetStr);
  // сколько времени осталось до захода луны
  const timesMoon =
    timesHouse <= sunriseStr
      ? Math.abs(sunriseStr - timesHouse)
      : Math.abs(86400 - timesHouse + sunriseStr);
  // 86400 - timesHouse + sunriseStr
  // сколько процентов осталось до захода луны
  const percentRemainingMoonValue = Math.round(
    (timesMoon * 100) / (sunriseStr + timeDeltaMoon)
  );

  // сколько в процентах пути прошло солце и луна
  const lenghtLeftSunMoon = 100 - percentRemainingSunMoon;

  // сколько прошло солце или луна
  // const lightOff = Math.round((lenghtLeftSunMoon * 120) / 100);
  // сколько прошло солце или луна от полного круга 360deg в прроцентах (всего 33%)
  // const lightOffPercent = Math.round((lightOff * 100) / 360);

  useEffect(() => {
    setAnimationCheckedTheme(theme === "light");
    setAnimationClikTeme(true);
  }, [theme]);

  useEffect(() => {
    setAnimationClikTeme(false);
  }, []);

  useEffect(() => {
    if (theme === "light") {
      setTimeLeftSunMoon(timesSunsetStr);
      setPercentRemainingSunMoon(percentRemainingSunValue);
    } else {
      setTimeLeftSunMoon(timesMoon);
      setPercentRemainingSunMoon(percentRemainingMoonValue);
    }

    const lightOffOpacityValue =
      theme === "light" ? lightOffOpacitySun : lightOffOpacityMoon;

    setLightOffOpacity(lightOffOpacityValue);

    // ширина окна
    const windowView = document?.querySelector("[data-window-view]");

    if (windowView) {
      // расположение солнца или луны в градусах от левого края окна
      // длина пройденного пути в грудах = 120 по ширине окна
      // расчет сколько крадусов прошел от левого края в соотношения процентов ко времени половины дня (так как значение должно быть отрицательно и уменьшатся от -60 в первую половину дня и потом до 60)
      if (lenghtLeftSunMoon <= 50) {
        const leftRotate = Math.round((60 * lenghtLeftSunMoon) / 50) - 60;
        setLeftRotateWindowSunMoon(leftRotate);
        //какую яркость задать от пройденного процента по кругу 360deg для 1
        if (theme === "light") {
          setLightOffOpacitySun(lenghtLeftSunMoon / 50);
        } else {
          // для 0.4
          setLightOffOpacityMoon((lenghtLeftSunMoon * 0.4) / 50);
        }
      } else {
        const leftRotate = Math.abs(
          60 - Math.round((60 * lenghtLeftSunMoon) / 50)
        );
        setLeftRotateWindowSunMoon(leftRotate);
        //какую яркость задать от пройденного процента по кругу 360deg для 1
        if (theme === "light") {
          setLightOffOpacitySun(2 - lenghtLeftSunMoon / 50);
        } else {
          // для 0.4
          setLightOffOpacityMoon(0.8 - (lenghtLeftSunMoon * 0.4) / 50);
        }
      }
    }
  }, [
    percentRemainingMoonValue,
    percentRemainingSunMoon,
    percentRemainingSunValue,
    timesMoon,
    timesSunsetStr,
    theme,
    lenghtLeftSunMoon,
    lightOffOpacitySun,
    lightOffOpacityMoon,
  ]);

  useEffect(() => {
    if (climateControl === "rainy" && theme === "light") {
      setDayToNightColor("rgb(29, 120, 147)");
      setAnimationClikTeme(false);
    } else if (
      climateControl === "cloudyWithRainAndLightning" &&
      theme === "light"
    ) {
      setDayToNightColor("rgb(0, 53, 71)");
      setAnimationClikTeme(false);
    } else if (climateControl === "cloudy" && theme === "light") {
      setDayToNightColor("rgb(109, 177, 198)");
      setAnimationClikTeme(false);
    } else {
      const dayToNightColorValue = theme === "light" ? "#88bef5" : "#0c2233";
      setDayToNightColor(dayToNightColorValue);
    }
  }, [theme, climateControl, checkedTheme, setAnimationClikTeme]);

  return (
    <WindowWrapper>
      <WindowView
        data-window-view
        $dayToNightColor={dayToNightColor}
        $timeLeftSunMoon={timeLeftSunMoon}
        $animationCheckedTheme={theme === "light"}
        $animationClikTeme={animationClikTeme}
      >
        {["sunnyMoon", "cloudyWithSunMoon"].includes(climateControl) && (
          <HeavenlyBody
            data-heavenly-body
            theme={theme}
            $timeLeftSunMoon={timeLeftSunMoon}
            $leftRotateWindowSunMoon={leftRotateWindowSunMoon}
            $animationClikTeme={animationClikTeme}
            $animationCheckedTheme={theme === "light"}
          />
        )}
        <Cloud climateControl={climateControl} />
      </WindowView>
      {["sunnyMoon", "cloudyWithSunMoon"].includes(climateControl) && (
        <WindowHotspot
          $lightOffOpacity={lightOffOpacity}
          $timeLeftSunMoon={timeLeftSunMoon}
          $animationCheckedTheme={theme === "light"}
          $lightOffOpacitySun={lightOffOpacitySun}
          $lightOffOpacityMoon={lightOffOpacityMoon}
          $animationClikTeme={animationClikTeme}
        />
      )}
      <WindowFrame />
      <WindowSill />

      {["sunnyMoon", "cloudyWithSunMoon"].includes(climateControl) && (
        <WindowLightLeft
          $lightOffOpacity={lightOffOpacity}
          $timeLeftSunMoon={timeLeftSunMoon}
          $animationCheckedTheme={theme === "light"}
          $lightOffOpacitySun={lightOffOpacitySun}
          $lightOffOpacityMoon={lightOffOpacityMoon}
          $animationClikTeme={animationClikTeme}
        />
      )}
      {["sunnyMoon", "cloudyWithSunMoon"].includes(climateControl) && (
        <WindowLightRight
          $lightOffOpacity={lightOffOpacity}
          $timeLeftSunMoon={timeLeftSunMoon}
          $animationCheckedTheme={theme === "light"}
          $lightOffOpacitySun={lightOffOpacitySun}
          $lightOffOpacityMoon={lightOffOpacityMoon}
          $animationClikTeme={animationClikTeme}
        />
      )}

      <WeatherIconWrapper onClick={() => setIsOpen(!isOpen)}>
        <WeatherIcon climateControl={climateControl} theme={theme} />
      </WeatherIconWrapper>
    </WindowWrapper>
  );
};

export default Window;
