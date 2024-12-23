import SunCalc from "suncalc";
import { useSelectorTyped } from "src/store";

export const getDayTime = () => {
  const {
    time: { hour, min },
  } = useSelectorTyped(({ theme }) => theme);

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
