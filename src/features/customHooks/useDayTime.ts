import { useEffect, useState } from "react";
import SunCalc from "suncalc";
import { useTime } from "src/features/customHooks/useTime";
import { useSelectorTyped } from "src/store"; // ← используем твой типизированный хук для Redux

export const useDayTime = (): {
  sunriseTime: number;
  sunsetTime: number;
  timesHouse: number;
  dayTime: boolean;
  lat: number;
  lon: number;
} => {
  // Обновление каждые 10 минут
  const refreshInterval = 600;
  const [hour, min] = useTime(refreshInterval);

  // Берём координаты из стора, если есть
  const weather = useSelectorTyped((state) => state.climate.weather);

  // Фолбэк: координаты Москвы
  const defaultCoords = { lat: 55.7522, lon: 37.6156 };

  // Получаем координаты — приоритет от WeatherAPI
  const latitude = weather?.location?.lat ?? defaultCoords.lat;
  const longitude = weather?.location?.lon ?? defaultCoords.lon;

  const [times, setTimes] = useState({
    sunriseTime: 0,
    sunsetTime: 0,
    timesHouse: 0,
    dayTime: true,
  });

  useEffect(() => {
    if (latitude && longitude && hour != null && min != null) {
      const date = new Date();
      const sunTimes = SunCalc.getTimes(date, latitude, longitude);

      // восход в секундах
      const sunriseTime =
        (sunTimes.sunrise.getHours() * 60 + sunTimes.sunrise.getMinutes()) * 60;

      // закат в секундах
      const sunsetTime =
        (sunTimes.sunset.getHours() * 60 + sunTimes.sunset.getMinutes()) * 60;

      // текущее время в секундах
      const timesHouse = (hour * 60 + min) * 60;

      const dayTime = sunriseTime < timesHouse && timesHouse < sunsetTime;

      setTimes({ sunriseTime, sunsetTime, timesHouse, dayTime });
    }
  }, [latitude, longitude, hour, min]);

  return {
    ...times,
    lat: latitude,
    lon: longitude,
  };
};
