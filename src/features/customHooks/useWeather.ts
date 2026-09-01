import { useCallback, useEffect, useRef, useState } from "react";
import { fetchWeather } from "src/reducers";
import { useDispatchTyped, useSelectorTyped } from "src/store";
import { useToastNotify } from "src/features/customHooks/use-toast-notify";
import { RequestStatus } from "src/common/enums/Climate/RequestStatus";

// Как часто драйвер принудительно обновляет погоду (минуя кэш).
const WEATHER_REFRESH_MS = 15 * 60 * 1000;

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
  // Последний запрос погоды (дефолт/выбранный город/IP-координаты) — по нему
  // же идёт периодический рефреш, иначе через 15 минут IP-погода молча
  // заменялась бы Москвой.
  const lastQueryRef = useRef("");

  const toastNotify = useToastNotify();

  const fetchByCity = useCallback(
    (city: string, force = false) => {
      if (!city) return;
      setGeoCity(city);
      lastQueryRef.current = city;
      dispatch(fetchWeather({ city, force }));
      // selectedCity сюда НЕ пишем: localStorage — только явный выбор города
      // пользователем (ClimateControl диспатчит setSelectedCity сам), иначе
      // дефолтная «Москва» сохраняется как будто её выбрал человек.
    },
    [dispatch]
  );

  const fetchByCoords = useCallback(
    (lat: number, lon: number) => {
      const query = `${lat},${lon}`;
      lastQueryRef.current = query;
      dispatch(fetchWeather({ city: query }));
    },
    [dispatch]
  );

  // Тихое определение местоположения по IP — работает без разрешений
  // браузера, поэтому годится для загрузки страницы (язык, климат, погода).
  const fetchByIP = useCallback(async () => {
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

  // Точная геолокация — ТОЛЬКО по действию пользователя (кнопка в окне
  // климата): браузерный диалог разрешения не показываем при загрузке.
  // Отказ/ошибка/нет API — тихо откатываемся на IP и сообщаем в окно климата
  // причину: при запрещённом доступе диалог больше не появится сам —
  // пользователю нужно разрешить геолокацию в настройках сайта в браузере.
  const fetchByGeolocation = useCallback(
    (onFail?: (reason: "denied" | "unavailable") => void) => {
      if (!navigator.geolocation) {
        fetchByIP();
        onFail?.("unavailable");
        return;
      }
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          fetchByCoords(latitude, longitude);
        },
        (err) => {
          fetchByIP();
          onFail?.(
            err.code === err.PERMISSION_DENIED ? "denied" : "unavailable"
          );
        },
        // maximumAge — разрешаем недавно полученную системой позицию
        // (быстрее), timeout — чтобы запрос не висел вечно.
        { timeout: 10000, maximumAge: 5 * 60 * 1000 }
      );
    },
    [fetchByCoords, fetchByIP]
  );

  // Инициализируем погоду только у драйвера (autoInit) и ровно один раз.
  // Явный выбор города (localStorage) главнее автоматики — как ручной выбор
  // языка: он остаётся после перезагрузки, IP-детект не запускается.
  // Без выбора — мгновенно дефолтная Москва, которую тихое IP-определение
  // (без разрешений браузера) перезапишет реальным местоположением.
  // Диалог разрешения геолокации при загрузке не вызываем —
  // navigator.geolocation только по кнопке в окне климата.
  useEffect(() => {
    if (!autoInit || didInitRef.current) return;
    didInitRef.current = true;
    const hasPick =
      typeof window !== "undefined" &&
      !!window.localStorage.getItem("selectedCity");
    if (selectedCity) {
      fetchByCity(selectedCity);
    }
    if (!hasPick) {
      fetchByIP();
    }
  }, [autoInit, selectedCity, fetchByCity, fetchByIP]);

  // Периодический realtime-рефреш у драйвера — сцена и климат не устаревают.
  useEffect(() => {
    if (!autoInit) return;
    const id = window.setInterval(() => {
      const city = lastQueryRef.current;
      if (city) dispatch(fetchWeather({ city, force: true }));
    }, WEATHER_REFRESH_MS);
    return () => window.clearInterval(id);
  }, [autoInit, dispatch]);

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
