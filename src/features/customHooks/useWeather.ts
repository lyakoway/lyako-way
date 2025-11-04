import { useCallback, useEffect, useState } from "react";
import { fetchWeather, setSelectedCity } from "src/reducers";
import { useDispatchTyped, useSelectorTyped } from "src/store";

export function useWeather() {
  const dispatch = useDispatchTyped();
  const { weather, forecast, loading, error, selectedCity } = useSelectorTyped(
    ({ climate }) => climate
  );

  const [geoCity, setGeoCity] = useState<string>("Москва");
  const [initialized, setInitialized] = useState(false);

  const fetchByCity = useCallback(
    (city: string) => {
      if (!city) return;
      setGeoCity(city);
      dispatch(fetchWeather({ city }));
      dispatch(setSelectedCity(city));
    },
    [dispatch]
  );

  const fetchByCoords = useCallback(
    (lat: number, lon: number) => {
      const query = `${lat},${lon}`;
      dispatch(fetchWeather({ city: query }));
    },
    [dispatch]
  );

  const fetchByIPFallback = useCallback(async () => {
    try {
      const res = await fetch("https://geolocation-db.com/json/");
      const data = await res.json();
      const latitude = data.latitude || data.lat;
      const longitude = data.longitude || data.lon || data.lng;
      const cityName = data?.city || "Москва";
      setGeoCity(cityName);
      if (latitude && longitude) fetchByCoords(latitude, longitude);
      else fetchByCity("Москва");
    } catch {
      fetchByCity("Москва");
    }
  }, [fetchByCity, fetchByCoords]);

  const fetchByGeolocation = useCallback(() => {
    if (!navigator.geolocation) return fetchByIPFallback();
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        fetchByCoords(latitude, longitude);
      },
      () => fetchByIPFallback()
    );
  }, [fetchByCoords, fetchByIPFallback]);

  // Выполняем геолокацию только 1 раз — если пользователь не выбирал город ранее
  useEffect(() => {
    if (!initialized) {
      if (selectedCity) {
        fetchByCity(selectedCity);
      } else {
        fetchByGeolocation();
      }
      setInitialized(true);
    }
  }, [initialized, selectedCity, fetchByCity, fetchByGeolocation]);

  return {
    weather,
    forecast,
    geoCity: selectedCity || geoCity,
    loading,
    error,
    fetchByCity,
    fetchByGeolocation,
  };
}
