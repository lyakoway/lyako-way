import SunCalc from "suncalc";

export const getDayTime = (time) => {
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

  // восход в минутах
  const sunriseStr =
    sunTimes.sunrise.getHours() * 60 + sunTimes.sunrise.getMinutes();

  // закат в минутах
  const sunsetStr =
    sunTimes.sunset.getHours() * 60 + sunTimes.sunset.getMinutes();
  // текущее время
  const timesHouse = time.hourValue * 60 + time.minValue;

  const dayTime = sunriseStr < timesHouse && timesHouse < sunsetStr;

  return { sunriseStr, sunsetStr, timesHouse, dayTime };
};
