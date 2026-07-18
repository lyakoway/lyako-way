import { useCallback, useEffect, useRef, useState } from "react";
import { fetchWeather, setSelectedCity } from "src/reducers";
import { useDispatchTyped, useSelectorTyped } from "src/store";
import { useToastNotify } from "src/features/customHooks/use-toast-notify";
import { RequestStatus } from "src/common/enums/Climate/RequestStatus";

// autoInit — только ОДИН экземпляр хука должен запускать погоду (драйвер,
// живёт в Layout через useAutoLocaleClimate). Остальные (Window,
// ClimateControl) читают уже загруженные данные из стора и делают ручные
// запросы по действию пользователя. Иначе несколько экземпляров шлют
// дублирующие запросы, конкурентно обновляют weather → скачет тема/мигание.
export function useWeather(options?: { autoInit?: boolean }) {
  const autoInit = options?.autoInit ?? false;
  const dispatch = useDispatchTyped();
  const { weather, forecast, loading, error, selectedCity, status } =
    useSelectorTyped(({ climate }) => climate);

  const {
    lang: { toast },
  } = useSelectorTyped(({ lang }) => lang);

  const [geoCity, setGeoCity] = useState<string>("Москва");
  const didInitRef = useRef(false);

  const toastNotify = useToastNotify();

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

  // Инициализируем погоду только у драйвера (autoInit) и ровно один раз.
  useEffect(() => {
    if (!autoInit || didInitRef.current) return;
    didInitRef.current = true;
    if (selectedCity) {
      fetchByCity(selectedCity);
    } else {
      fetchByGeolocation();
    }
  }, [autoInit, selectedCity, fetchByCity, fetchByGeolocation]);

  // Тост об ошибке показываем тоже только у драйвера — иначе несколько
  // экземпляров дублируют уведомление.
  useEffect(() => {
    if (!autoInit) return;
    if (
      status === RequestStatus.ERROR_CLIMATE ||
      status === RequestStatus.ERROR_CITY
    ) {
      toastNotify({
        title: toast.textError,
        type: "error",
      });
    }
  }, [status, autoInit]);

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
