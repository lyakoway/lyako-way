import { useEffect, useState } from "react";
import SunCalc from "suncalc";
import { useTime } from "src/features/customHooks/useTime";
import { useSelectorTyped } from "src/store";

// Часы:минуты в нужном TZ (город из WeatherAPI или локаль браузера).
function getHourMin(date: Date, tzId?: string): { hour: number; min: number } {
  if (tzId) {
    try {
      const parts = new Intl.DateTimeFormat("en-GB", {
        timeZone: tzId,
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23",
      }).formatToParts(date);
      const h = parts.find((part) => part.type === "hour")?.value;
      const m = parts.find((part) => part.type === "minute")?.value;
      if (h != null && m != null) {
        return { hour: Number(h), min: Number(m) };
      }
    } catch {
      /* неверный tz — локальное время браузера */
    }
  }
  return { hour: date.getHours(), min: date.getMinutes() };
}

function toSecs(hour: number, min: number) {
  return (hour * 60 + min) * 60;
}

function nextSunBoundary(now: Date, lat: number, lon: number): Date {
  const today = SunCalc.getTimes(now, lat, lon);
  if (now < today.sunrise) return today.sunrise;
  if (now < today.sunset) return today.sunset;
  const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
  return SunCalc.getTimes(tomorrow, lat, lon).sunrise;
}

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
  // Доп. тик на точный момент восхода/заката (не ждать следующую минуту).
  const [boundaryTick, setBoundaryTick] = useState(0);

  const weather = useSelectorTyped((state) => state.climate.weather);

  const defaultCoords = { lat: 55.7522, lon: 37.6156 };
  const latitude = weather?.location?.lat ?? defaultCoords.lat;
  const longitude = weather?.location?.lon ?? defaultCoords.lon;
  const tzId = weather?.location?.tz_id;

  const [times, setTimes] = useState({
    sunriseTime: 0,
    sunsetTime: 0,
    timesHouse: 0,
    dayTime: true,
  });

  useEffect(() => {
    const now = new Date();
    const { hour: currentHour, min: currentMin } = getHourMin(now, tzId);
    const timesHouse = toSecs(currentHour, currentMin);

    // Восход/закат в той же TZ, что и текущее время города — иначе при
    // расхождении TZ браузера и города день/ночь и позиция солнца сбиваются.
    const sunTimes = SunCalc.getTimes(now, latitude, longitude);
    const sunriseParts = getHourMin(sunTimes.sunrise, tzId);
    const sunsetParts = getHourMin(sunTimes.sunset, tzId);
    const sunriseTime = toSecs(sunriseParts.hour, sunriseParts.min);
    const sunsetTime = toSecs(sunsetParts.hour, sunsetParts.min);

    // Только астрономия (SunCalc): is_day из API — снимок на момент запроса
    // и не обновляется до следующего fetch, поэтому для темы не используем.
    const dayTime = sunriseTime < timesHouse && timesHouse < sunsetTime;

    setTimes({ sunriseTime, sunsetTime, timesHouse, dayTime });

    const nextBoundary = nextSunBoundary(now, latitude, longitude);
    const delay = nextBoundary.getTime() - now.getTime();
    if (delay <= 0 || delay > 24 * 60 * 60 * 1000) return;

    const id = window.setTimeout(() => {
      setBoundaryTick((n) => n + 1);
    }, delay + 250);

    return () => window.clearTimeout(id);
  }, [latitude, longitude, hour, min, tzId, boundaryTick]);

  return { ...times, lat: latitude, lon: longitude };
};
