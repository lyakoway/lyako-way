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
    // Берём ТЕКУЩЕЕ время (а не weather.location.localtime — оно «заморожено»
    // на момент запроса погоды). Так при каждом заходе на «Дом» (и первичном, и
    // по навигации) время для анимации определяется заново, по факту сейчас.
    // Эффект перевычисляется каждую минуту (hour/min из useTime) и при ремаунте.
    const now = new Date();
    let currentHour = now.getHours();
    let currentMin = now.getMinutes();

    // Если у города есть часовой пояс (tz_id из WeatherAPI) — считаем время по
    // нему (для найденного города). Иначе — локальное время браузера.
    const tzId = weather?.location?.tz_id;
    if (tzId) {
      try {
        const parts = new Intl.DateTimeFormat("en-GB", {
          timeZone: tzId,
          hour: "2-digit",
          minute: "2-digit",
          hourCycle: "h23",
        }).formatToParts(now);
        const h = parts.find((part) => part.type === "hour")?.value;
        const m = parts.find((part) => part.type === "minute")?.value;
        if (h != null) currentHour = Number(h);
        if (m != null) currentMin = Number(m);
      } catch {
        /* неверный tz — остаёмся на локальном времени браузера */
      }
    }

    // текущее время в секундах
    const timesHouse = (currentHour * 60 + currentMin) * 60;

    // ВСЕГДА считаем восход/закат (нужны для позиции солнца/луны в
    // usePositionSunAndMoon). Раньше при наличии is_day ветка выходила рано и
    // sunrise/sunset оставались 0 → позиция считалась вырожденно/NaN и
    // «сбивалась» при ремаунте (возврат на «Дом»). Теперь они есть всегда.
    const sunTimes = SunCalc.getTimes(now, latitude, longitude);
    const sunriseTime =
      (sunTimes.sunrise.getHours() * 60 + sunTimes.sunrise.getMinutes()) * 60;
    const sunsetTime =
      (sunTimes.sunset.getHours() * 60 + sunTimes.sunset.getMinutes()) * 60;

    // День/ночь: из is_day (WeatherAPI) если есть, иначе по восходу/закату.
    const dayTime =
      weather?.current?.is_day != null
        ? weather.current.is_day === 1
        : sunriseTime < timesHouse && timesHouse < sunsetTime;

    setTimes({ sunriseTime, sunsetTime, timesHouse, dayTime });
  }, [latitude, longitude, hour, min, weather]);

  return { ...times, lat: latitude, lon: longitude };
};
