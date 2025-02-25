import { useEffect, useState } from "react";
import { useDayTime } from "src/features/customHooks/useDayTime";

export const usePositionSunAndMoon = ({
  themeLight,
}: {
  themeLight: boolean;
}): {
  timeLeftSunMoon: number;
  leftRotateWindowSunMoon: number;
  lightOffOpacitySun: number;
  lightOffOpacityMoon: number;
  sunsetSunrise: boolean;
} => {
  const { sunriseTime, sunsetTime, timesHouse, dayTime } = useDayTime();
  const [timeLeftSunMoon, setTimeLeftSunMoon] = useState<number>(0);
  const [lightOffOpacitySun, setLightOffOpacitySun] = useState<number>(0);
  const [lightOffOpacityMoon, setLightOffOpacityMoon] = useState<number>(0);
  const [leftRotateWindowSunMoon, setLeftRotateWindowSunMoon] =
    useState<number>(-60);
  const [percentRemainingSunMoon, setPercentRemainingSunMoon] =
    useState<number>(0);
  const [sunsetSunrise, setSunsetSunrise] = useState<boolean>(false);

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

  useEffect(() => {
    const windowView = document?.querySelector("[data-window-view]");
    // ширина окна
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
    lengthLeftSunMoon,
    themeLight,
    setLeftRotateWindowSunMoon,
    setLightOffOpacitySun,
    setLightOffOpacityMoon,
  ]);

  // сколько прошло солце или луна
  // const lightOff = Math.round((lengthLeftSunMoon * 120) / 100);
  // сколько прошло солце или луна от полного круга 360deg в прроцентах (всего 33%)
  // const lightOffPercent = Math.round((lightOff * 100) / 360);

  useEffect(() => {
    if (dayTime) {
      setTimeLeftSunMoon(timesRemainingSunset);
      setPercentRemainingSunMoon(percentRemainingSunValue);
      // setLightOffOpacitySun(lengthLeftSunMoon / 50);
    } else {
      setTimeLeftSunMoon(timesMoon);
      setPercentRemainingSunMoon(percentRemainingMoonValue);
      // setLightOffOpacityMoon((lengthLeftSunMoon * 0.4) / 50);
    }
    const isSunsetSunrise =
      (lightOffOpacitySun < 0.1 || lightOffOpacityMoon < 0.1) &&
      lightOffOpacitySun !== 0 &&
      lightOffOpacityMoon !== 0;
    setSunsetSunrise(isSunsetSunrise);
  }, [
    dayTime,
    timesRemainingSunset,
    percentRemainingSunValue,
    percentRemainingMoonValue,
    lightOffOpacitySun,
    lightOffOpacityMoon,
    timesMoon,
    themeLight,
  ]);

  return {
    timeLeftSunMoon,
    leftRotateWindowSunMoon,
    lightOffOpacitySun,
    lightOffOpacityMoon,
    sunsetSunrise,
  };
};
