import React, { useEffect, useState } from "react";
import { useDispatchTyped, useSelectorTyped } from "src/store";
import {
  setClimateControl,
  setSelectedCity,
  setUserSelectedClimate,
  setUserSelectedLang,
  setThemeList,
} from "src/reducers";

import {
  Wrapper,
  Header,
  Content,
  WeatherIconWrapper,
  SearchWrapper,
  SearchInputWrapper,
} from "./style";
import { CLIMATE_CONTROL } from "./constants";
import { ClimateType } from "src/common/types/climat";
import { useDayTime, useWeather } from "src/features/customHooks";

import { SearchInput } from "src/ui/SearchInput";
import ButtonStyle from "src/ui/ButtonStyle";
import ClimateBanner from "src/components/Window/ClimateControl/ClimateBanner";
import WeatherIcon from "../WeatherIcon";
import { RequestStatus } from "src/common/enums/Climate/RequestStatus";
import { useToastNotify } from "src/features/customHooks/use-toast-notify";

const ClimateControl = () => {
  const {
    lang: { climateLang },
  } = useSelectorTyped(({ lang }) => lang);

  const {
    theme: { name },
  } = useSelectorTyped(({ theme }) => theme);

  const { climate, status } = useSelectorTyped(({ climate }) => climate);

  const dispatch = useDispatchTyped();
  const { weather, loading, fetchByCity } = useWeather();
  const { dayTime } = useDayTime();
  const toastNotify = useToastNotify();

  const [city, setCity] = useState<string>("");

  // Подставляем город при первой загрузке погоды
  useEffect(() => {
    if (weather?.location?.name) {
      setCity(weather.location.name);
    }
  }, [weather?.location?.name]);

  // Автоопределение климата/языка по погоде теперь централизовано в
  // useAutoLocaleClimate (Layout) — здесь дубль убран, чтобы не было
  // двойных dispatch и мигания.

  // 🔹 Запрашиваем погоду и обновляем climate
  const updateWeatherAndClimate = async (targetCity: string) => {
    await fetchByCity(targetCity);
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
      dispatch(setSelectedCity(city));
      await updateWeatherAndClimate(city);
    }
  };

  // 🔹 Выбор города из дропдауна
  const handleSelectCity = async (selectedCity: string) => {
    dispatch(setSelectedCity(selectedCity));
    setCity(selectedCity);
    await updateWeatherAndClimate(selectedCity);
  };

  // 🔹 Выбор погоды вручную
  const handleSelectClimate = (item: ClimateType) => {
    dispatch(setClimateControl(item)); // сохраняется userSelectedClimate = true
    dispatch(setUserSelectedClimate(true));
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

      <Header>{climateLang.titleSelectWeather}</Header>
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
