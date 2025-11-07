import { useEffect, useState } from "react";
import SunCalc from "suncalc";
import { useTime } from "src/features/customHooks/useTime";
import { useSelectorTyped } from "src/store";

export const useDayTime = (): {
  sunriseTime: number;
  sunsetTime: number;
  timesHouse: number;
  dayTime: boolean;
  lat: number;
  lon: number;
} => {
  const refreshInterval = 60; // обновление каждые 1 минут
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
    const date = weather?.location?.localtime
      ? new Date(weather.location.localtime)
      : new Date();

    // Час и минута текущего времени
    const currentHour = date.getHours();
    const currentMin = date.getMinutes();

    // текущее время в секундах
    const timesHouse = (currentHour * 60 + currentMin) * 60;

    // Если есть is_day из WeatherAPI — используем напрямую
    if (weather?.current?.is_day != null) {
      setTimes((prev) => ({
        ...prev,
        timesHouse,
        dayTime: weather.current.is_day === 1,
      }));
      return;
    }

    // fallback на SunCalc
    const sunTimes = SunCalc.getTimes(date, latitude, longitude);

    // восход в секундах
    const sunriseTime =
      (sunTimes.sunrise.getHours() * 60 + sunTimes.sunrise.getMinutes()) * 60;

    // закат в секундах
    const sunsetTime =
      (sunTimes.sunset.getHours() * 60 + sunTimes.sunset.getMinutes()) * 60;

    const dayTime = sunriseTime < timesHouse && timesHouse < sunsetTime;

    setTimes({ sunriseTime, sunsetTime, timesHouse, dayTime });
  }, [latitude, longitude, hour, min, weather]);

  return { ...times, lat: latitude, lon: longitude };
};
