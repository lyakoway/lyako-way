import {fetchRequest} from "src/features/server/fetch";

// export const WEATHER_API_KEY = 'a792257f419e4aa2897145911250408';
export const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const BASE_URL = 'https://api.weatherapi.com/v1';

export async function getWeather(city: string) {
    const url = `${BASE_URL}/current.json?key=${WEATHER_API_KEY}&q=${city}&aqi=no`;
    try {
        console.log('url', url)
        return await fetchRequest(url);
    } catch (error) {
        console.error('Ошибка при получении данных погоды:', error);
        throw error;
    }
}

export async function getForecast(city: string) {
    const url = `${BASE_URL}/forecast.json?key=${WEATHER_API_KEY}&q=${city}&days=5&aqi=no&alerts=no`;
    try {
        return await fetchRequest(url);
    } catch (error) {
        console.error('Ошибка при получении прогноза:', error);
        throw error;
    }
}
