import { useEffect } from "react";
import { useDispatchTyped } from "src/store";
import { setThemeList } from "src/reducers";
import SunCalc from "suncalc";
import { useTime } from "src/features/customHooks/useTime";

export const useDayTime = (): {
  sunriseStr: number;
  sunsetStr: number;
  timesHouse: number;
  dayTime: boolean;
} => {
  // Обновить тему с интревалом 3 часа;
  const timeout3Hour = 3 * 60 * 60;
  const [hour, min] = useTime(timeout3Hour);

  // координы Москвы широта и долгота
  const coordinatesLatitude = 55.7522;
  const coordinatesLongitude = 37.6156;

  const date = new Date();
  const sunTimes = SunCalc.getTimes(
    date,
    coordinatesLatitude,
    coordinatesLongitude
  );

  // const mounTimes = SunCalc.getMounTimes(
  //   date,
  //   coordinatesLatitude,
  //   coordinatesLongitude
  // );

  // восход в секундах
  const sunriseStr =
    (sunTimes.sunrise.getHours() * 60 + sunTimes.sunrise.getMinutes()) * 60;

  // закат в секундах
  const sunsetStr =
    (sunTimes.sunset.getHours() * 60 + sunTimes.sunset.getMinutes()) * 60;
  // текущее время в секундах
  const timesHouse = (hour * 60 + min) * 60;

  const dayTime = sunriseStr < timesHouse && timesHouse < sunsetStr;

  return { sunriseStr, sunsetStr, timesHouse, dayTime };
};
