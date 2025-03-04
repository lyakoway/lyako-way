import { useEffect } from "react";
import { useDispatchTyped } from "src/store";
import { setThemeList } from "src/reducers";
import SunCalc from "suncalc";
import { useTime } from "src/features/customHooks/useTime";

export const useDayTime = (): {
  sunriseTime: number;
  sunsetTime: number;
  timesHouse: number;
  dayTime: boolean;
} => {
  // Обновить тему с интревалом 10 минут;
  const timeout3Hour = 600;
  const [hour, min] = useTime(timeout3Hour);

  // координы Москвы широта и долгота
  const latitude = 55.7522;
  const longitude = 37.6156;

  const date = new Date();
  const sunTimes = SunCalc.getTimes(date, latitude, longitude);
  const moonIllumination = SunCalc.getMoonIllumination(date);

  console.log("phase", moonIllumination.phase);

  // восход в секундах
  const sunriseTime =
    (sunTimes.sunrise.getHours() * 60 + sunTimes.sunrise.getMinutes()) * 60;

  // закат в секундах
  const sunsetTime =
    (sunTimes.sunset.getHours() * 60 + sunTimes.sunset.getMinutes()) * 60;
  // текущее время в секундах
  const timesHouse = (hour * 60 + min) * 60;

  const dayTime = sunriseTime < timesHouse && timesHouse < sunsetTime;

  return { sunriseTime, sunsetTime, timesHouse, dayTime };
};
