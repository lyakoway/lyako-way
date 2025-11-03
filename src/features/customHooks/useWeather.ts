import { useCallback, useEffect, useState } from "react";

import { fetchWeather } from "src/reducers";
import { useDispatchTyped, useSelectorTyped } from "src/store";

// const NEXT_PUBLIC_YOUR_API_KEY = process.env.NEXT_PUBLIC_YOUR_API_KEY;

export function useWeather() {
  // const [geoError, setGeoError] = useState<string | null>(null);
  const [geoCity, setGeoCity] = useState<string | null>("Москва");

  const dispatch = useDispatchTyped();
  const { weather, forecast, loading, error } = useSelectorTyped(
    ({ climate }) => climate
  );

  const fetchByCity = useCallback(
    (city: string) => {
      if (!city) return;
      dispatch(fetchWeather({ city }));
    },
    [dispatch]
  );

  const fetchByCoords = useCallback(async (lat: number, lon: number) => {
    const query = `${lat},${lon}`;
    dispatch(fetchWeather({ city: query }));
  }, []);

  const fetchByIPFallback = useCallback(async () => {
    try {
      const res = await fetch("https://geolocation-db.com/json/");
      if (!res.ok) {
        throw new Error(`Ошибка сети: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();

      // В geolocation-db поля latitude/longitude могут называться немного иначе
      const latitude = data.latitude || data.lat;
      const longitude = data.longitude || data.lon || data.lng;
      const cityitude = data?.city || "Москва";

      if (!latitude || !longitude) {
        throw new Error("IP fallback не вернул координаты");
      }
      setGeoCity(cityitude);
      fetchByCoords(latitude, longitude);
    } catch (err: any) {
      fetchByCity("Москва");
      console.log(
        `Ошибка при определении местоположения по IP: ${err.message}`
      );
      // setGeoError(`Ошибка при определении местоположения по IP: ${err.message}`);
    }
  }, [fetchByCoords]);

  // https://app.ipbase.com/dashboard
  // const fetchByIPFallback = useCallback(async () => {
  //     try {
  //         const res = await fetch('https://api.ipbase.com/v2/info?apikey=ipb_live_76juM4vsS8f92uy8MKMDVyOsmU6QlNCHa3O2vCa8&ip=1.1.1.1');
  //
  //         if (!res.ok) {
  //             throw new Error(`Ошибка сети: ${res.status} ${res.statusText}`);
  //         }
  //
  //         const data = await res.json();
  //         const latitude = data?.data?.location?.latitude;
  //         const longitude = data?.data?.location?.longitude;
  //
  //         if (!latitude || !longitude) {
  //             throw new Error('IP fallback не вернул координаты');
  //         }
  //
  //         fetchByCoords(latitude, longitude);
  //     } catch (err: any) {
  //         fetchByCity('Москва');
  //         setGeoError(`Ошибка при определении местоположения по IP: ${err.message}`);
  //     }
  // }, [fetchByCoords]);

  const fetchByGeolocation = useCallback(async () => {
    if (!navigator.geolocation) {
      // setGeoError('Геолокация не поддерживается, используем IP fallback...');
      await fetchByIPFallback();
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchByCoords(latitude, longitude);
      },
      (err) => {
        // setGeoError(`Геолокация отклонена: ${err.message}, используем IP fallback...`);
        fetchByIPFallback();
      }
    );
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
