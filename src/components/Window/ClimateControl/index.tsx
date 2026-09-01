import React, { useEffect, useRef, useState } from "react";
import { useDispatchTyped, useSelectorTyped } from "src/store";
import {
  setClimateControl,
  setSelectedCity,
  setUserSelectedClimate,
  setUserSelectedLang,
  setThemeList,
  setUserSelectedTheme,
  closeModal,
} from "src/reducers";

import {
  Wrapper,
  Header,
  Content,
  WeatherIconWrapper,
  SearchWrapper,
  SearchInputWrapper,
  GeoButton,
} from "./style";
import { CLIMATE_CONTROL, weatherToClimate } from "./constants";
import { ClimateType } from "src/common/types/climat";
import { useDayTime, useWeather } from "src/features/customHooks";

import { SearchInput } from "src/ui/SearchInput";
import ButtonStyle from "src/ui/ButtonStyle";
import ClimateBanner from "src/components/Window/ClimateControl/ClimateBanner";
import WeatherIcon from "../WeatherIcon";
import { RequestStatus } from "src/common/enums/Climate/RequestStatus";
import { useToastNotify } from "src/features/customHooks/use-toast-notify";
import { trackEvent } from "src/common/utils/trackAnalytics";
import { AnalyticsEvent } from "src/common/constants/analytics";
import { PinIcon } from "src/common/icon/socialIcons";
import { usePressAnimation } from "src/common/lib/usePressAnimation";
import RunBorder from "src/ui/RunBorder";

const ClimateControl = () => {
  const {
    lang: { climateLang },
  } = useSelectorTyped(({ lang }) => lang);

  const {
    theme: { name },
  } = useSelectorTyped(({ theme }) => theme);

  const { climate, status, userSelectedClimate, selectedCity } =
    useSelectorTyped(({ climate }) => climate);

  const dispatch = useDispatchTyped();
  const { weather, loading, fetchByCity, fetchByGeolocation } = useWeather();
  // Прожатие кнопки геолокации — как у кнопки «Найти».
  const press = usePressAnimation();
  const { dayTime } = useDayTime();
  const toastNotify = useToastNotify();

  const [city, setCity] = useState<string>("");
  const openTrackedRef = useRef(false);

  // Открытие модалки: один раз, с городом и координатами из текущей погоды.
  useEffect(() => {
    if (openTrackedRef.current) return;
    openTrackedRef.current = true;
    const loc = weather?.location;
    trackEvent(AnalyticsEvent.WEATHER_OPEN, {
      city: loc?.name || selectedCity,
      region: loc?.region,
      country: loc?.country,
      lat: loc?.lat,
      lon: loc?.lon,
    });
  }, [weather, selectedCity]);

  // Подставляем город при первой загрузке погоды
  useEffect(() => {
    if (weather?.location?.name) {
      setCity(weather.location.name);
    }
  }, [weather?.location?.name]);

  // Приоритет — погода найденного города: пока пользователь не выбрал тип
  // вручную (userSelectedClimate=false), активный тип в списке синхронизируется
  // с реальной погодой показанного города. Поиск/выбор города сбрасывает
  // userSelectedClimate в false, поэтому при смене города тип встаёт по нему.
  useEffect(() => {
    if (userSelectedClimate) return;
    const mapped = weatherToClimate(
      weather?.current?.condition?.code,
      weather?.current?.condition?.text
    );
    if (mapped && mapped !== climate) {
      dispatch(setClimateControl(mapped));
    }
  }, [weather, userSelectedClimate, climate, dispatch]);

  // Автоопределение климата/языка по погоде теперь централизовано в
  // useAutoLocaleClimate (Layout) — здесь дубль убран, чтобы не было
  // двойных dispatch и мигания.

  // 🔹 Запрашиваем погоду и обновляем climate
  const updateWeatherAndClimate = async (targetCity: string) => {
    await fetchByCity(targetCity, true);
    dispatch(setUserSelectedTheme(false));
    dispatch(setThemeList(dayTime));
    dispatch(setUserSelectedClimate(false));
    dispatch(setUserSelectedLang(false));
    if (status === RequestStatus.SUCCESS_CITY) {
      toastNotify({
        title: climateLang.titleToast,
        type: "success",
      });
    }
  };

  // 🔹 Поиск по кнопке
  const handleSearch = async () => {
    if (city) {
      trackEvent(AnalyticsEvent.WEATHER_SEARCH, { city });
      dispatch(setSelectedCity(city));
      await updateWeatherAndClimate(city);
    }
  };

  // 🔹 «Моё местоположение» — единственное место с браузерным запросом
  // разрешения на геолокацию: диалог показывается только на явный клик.
  // Если доступ ранее запрещён — диалог сам не появится, объясняем в тосте,
  // где его разрешить.
  const handleGeoLocate = () => {
    trackEvent(AnalyticsEvent.WEATHER_GEO);
    fetchByGeolocation((reason) =>
      toastNotify({
        title:
          reason === "denied"
            ? climateLang.geoDeniedToast
            : climateLang.geoErrorToast,
        type: "error",
      })
    );
  };

  // 🔹 Выбор города из дропдауна
  const handleSelectCity = async (selected: string) => {
    trackEvent(AnalyticsEvent.WEATHER_CITY_SELECT, { city: selected });
    dispatch(setSelectedCity(selected));
    setCity(selected);
    await updateWeatherAndClimate(selected);
  };

  // 🔹 Выбор погоды вручную — применяем и закрываем модалку
  const handleSelectClimate = (item: ClimateType) => {
    trackEvent(AnalyticsEvent.WEATHER_SELECT, { climate: item });
    dispatch(setClimateControl(item));
    dispatch(setUserSelectedClimate(true));
    dispatch(closeModal());
  };

  return (
    <Wrapper>
      {weather && (
        <>
          <Header>{climateLang.title}</Header>

          <SearchWrapper>
            <SearchInputWrapper>
              <SearchInput
                placeholder={climateLang.placeholder}
                searchQuery={city}
                setSearchQuery={setCity}
                onSelectCity={handleSelectCity}
                onEnterPress={updateWeatherAndClimate}
              />
              <GeoButton
                type="button"
                title={climateLang.geoButtonTitle}
                aria-label={climateLang.geoButtonTitle}
                disabled={loading}
                {...press.pressHandlers}
                $pressed={press.pressed}
                $scaling={press.scaling}
                onClick={handleGeoLocate}
              >
                <PinIcon />
                <RunBorder radius={12} />
              </GeoButton>
            </SearchInputWrapper>

            <ButtonStyle
              title={climateLang.buttonText}
              handleClick={handleSearch}
              disabled={loading}
            />
          </SearchWrapper>

          <ClimateBanner
            loading={loading}
            city={weather?.location?.name}
            icon={weather?.current?.condition?.icon}
            iconText={weather?.current?.condition?.text}
            temperature={weather?.current?.temp_c}
            temperatureFeeling={weather?.current?.feelslike_c}
            humidity={weather?.current?.humidity}
            wind={weather?.current?.wind_kph}
            pressure={weather?.current?.pressure_mb}
          />
        </>
      )}

      <Header $section>{climateLang.titleSelectWeather}</Header>
      <Content>
        {CLIMATE_CONTROL.map((item: ClimateType) => (
          <WeatherIconWrapper
            $active={item === climate}
            key={item}
            onClick={() => handleSelectClimate(item)}
          >
            <WeatherIcon climateControl={item} themeLight={name === "light"} />
          </WeatherIconWrapper>
        ))}
      </Content>
    </Wrapper>
  );
};

export default ClimateControl;
