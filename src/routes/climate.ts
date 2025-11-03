import { fetchRequest } from "src/features/server/fetch";

// export const WEATHER_API_KEY = 'a792257f419e4aa2897145911250408';
export const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const BASE_URL = "https://api.weatherapi.com/v1";

function buildQuery(params: {
  city?: string;
  lat?: number;
  lon?: number;
}): string {
  if (params.city) {
    return `q=${encodeURIComponent(params.city)}`;
  }

  if (params.lat != null && params.lon != null) {
    return `q=${params.lat},${params.lon}`;
  }

  throw new Error("Не указаны параметры для получения погоды");
}

export async function getWeather(params: {
  city?: string;
  lat?: number;
  lon?: number;
}) {
  const query = buildQuery(params);
  const url = `${BASE_URL}/current.json?key=${WEATHER_API_KEY}&${query}&aqi=no`;
  try {
    return await fetchRequest(url);
  } catch (error) {
    console.error("Ошибка при получении данных погоды:", error);
    throw error;
  }
}

export async function getForecast(params: {
  city?: string;
  lat?: number;
  lon?: number;
}) {
  const query = buildQuery(params);
  const url = `${BASE_URL}/forecast.json?key=${WEATHER_API_KEY}&${query}&days=5&aqi=no&alerts=no`;
  try {
    return await fetchRequest(url);
  } catch (error) {
    console.error("Ошибка при получении прогноза:", error);
    throw error;
  }
}

export async function getCities({ city }: { city?: string }) {
  const url = `${BASE_URL}/search.json?key=${WEATHER_API_KEY}&q=${encodeURIComponent(
    city
  )}`;
  try {
    return await fetchRequest(url);
  } catch (error) {
    console.error("Ошибка при получении прогноза:", error);
    throw error;
  }
}
