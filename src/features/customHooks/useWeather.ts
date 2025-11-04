import { useCallback, useEffect, useState } from "react";
import { fetchWeather } from "src/reducers";
import { useDispatchTyped, useSelectorTyped } from "src/store";

export function useWeather() {
  const [geoCity, setGeoCity] = useState<string>("Москва");
  const dispatch = useDispatchTyped();
  const { weather, forecast, loading, error } = useSelectorTyped(
    ({ climate }) => climate
  );

  const fetchByCity = useCallback(
    (city: string) => {
      if (!city) return;
      setGeoCity(city);
      dispatch(fetchWeather({ city }));
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
      if (!res.ok) throw new Error(`Ошибка сети: ${res.status}`);
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

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      fetchByCoords(latitude, longitude);
    }, fetchByIPFallback);
  }, [fetchByCoords, fetchByIPFallback]);

  useEffect(() => {
    fetchByGeolocation();
  }, [fetchByGeolocation]);

  return {
    weather,
    forecast,
    geoCity,
    loading,
    error,
    fetchByCity,
    fetchByGeolocation,
  };
}
