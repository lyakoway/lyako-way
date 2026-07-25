import { ForecastItem, Weather } from "src/common/types/climat";

// Кэш погоды в localStorage с TTL: повторные заходы/переходы в пределах TTL
// берут данные из кэша — без запроса к API (мгновенно). Ключ — по городу
// (или координатам), поэтому разные локации кэшируются отдельно.

export interface WeatherPayload {
  weather: Weather | null;
  forecast: ForecastItem[];
}

interface CacheEntry {
  data: WeatherPayload;
  ts: number;
}

const TTL = 20 * 60 * 1000; // 20 минут
const PREFIX = "weatherCache:";

const keyFor = (city: string) => `${PREFIX}${city.trim().toLowerCase()}`;

export function getCachedWeather(city: string): WeatherPayload | null {
  if (typeof window === "undefined" || !city) return null;
  try {
    const raw = localStorage.getItem(keyFor(city));
    if (!raw) return null;
    const entry = JSON.parse(raw) as CacheEntry;
    if (!entry?.ts || Date.now() - entry.ts > TTL) {
      localStorage.removeItem(keyFor(city));
      return null;
    }
    return entry.data;
  } catch {
    return null;
  }
}

export function setCachedWeather(city: string, data: WeatherPayload): void {
  if (typeof window === "undefined" || !city) return;
  try {
    const entry: CacheEntry = { data, ts: Date.now() };
    localStorage.setItem(keyFor(city), JSON.stringify(entry));
  } catch {
    /* localStorage может быть недоступен/переполнен — не критично */
  }
}
