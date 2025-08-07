import { useEffect, useState } from 'react';

import {fetchWeather} from "src/reducers";
import {useDispatchTyped, useSelectorTyped} from "src/store";

export function useWeather(defaultCity: string = 'Москва') {
    const dispatch = useDispatchTyped();
    const { weather, forecast, loading, error } = useSelectorTyped(
        ({ climate }) => climate
    );
    const [city, setCity] = useState(defaultCity);

    // Загрузка по геолокации
    useEffect(() => {
        const fetchByGeo = async () => {
            if (!navigator.geolocation) {
                dispatch(fetchWeather({city: defaultCity}));
                return;
            }

            navigator.geolocation.getCurrentPosition(
                async (pos) => {
                    const { latitude, longitude } = pos.coords;
                    try {
                        const res = await fetch(`/api/weather?lat=${latitude}&lon=${longitude}`);
                        const data = await res.json();
                        if (data.name) {
                            setCity(data.name);
                            dispatch(fetchWeather({city: data.name}));
                        }
                    } catch (err) {
                        console.error('Ошибка геолокации:', err);
                        dispatch(fetchWeather({city: defaultCity}));
                    }
                },
                () => dispatch(fetchWeather({city: defaultCity})),
                { timeout: 5000 }
            );
        };

        fetchByGeo();
    }, [dispatch, defaultCity]);

    const searchCity = (newCity: string) => {
        if (newCity.trim()) {
            setCity(newCity);
            dispatch(fetchWeather({city: newCity}));
        }
    };

    return {
        city,
        setCity,
        weather,
        forecast,
        loading,
        error,
        searchCity,
    };
}