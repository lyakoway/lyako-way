import React, { useEffect, useState } from "react";
import { useDispatchTyped, useSelectorTyped } from "src/store";
import { setClimateControl, setSelectedCity } from "src/reducers";

import {
  Wrapper,
  Header,
  Content,
  WeatherIconWrapper,
  SearchWrapper,
  SearchInputWrapper,
} from "./style";
import { CLIMATE_CONTROL, WEATHER_TO_CLIMATE } from "./constants";
import { ClimateType } from "src/common/types/climat";
import { useWeather } from "src/features/customHooks";

import { SearchInput } from "src/ui/SearchInput";
import ButtonStyle from "src/ui/ButtonStyle";
import ClimateBanner from "src/components/Window/ClimateControl/ClimateBanner";
import WeatherIcon from "../WeatherIcon";

const ClimateControl = () => {
  const {
    lang: { climateLang },
  } = useSelectorTyped(({ lang }) => lang);
  const {
    theme: { name },
  } = useSelectorTyped(({ theme }) => theme);
  const { climate } = useSelectorTyped(({ climate }) => climate);
  const dispatch = useDispatchTyped();

  const { weather, loading, fetchByCity } = useWeather();

  const [city, setCity] = useState<string>("");

  // Подставляем город в input при загрузке погоды
  useEffect(() => {
    if (weather?.location?.name) {
      setCity(weather.location.name);
    }
  }, [weather?.location?.name]);

  // 🔹 Автоматически устанавливаем анимацию климата по тексту из API
  useEffect(() => {
    if (weather?.current?.condition?.text) {
      const conditionText = weather.current.condition.text;
      const mappedClimate = WEATHER_TO_CLIMATE[conditionText];
      if (mappedClimate) {
        dispatch(setClimateControl(mappedClimate));
      }
    }
  }, [weather, dispatch]);

  const handleSearch = () => {
    if (city) fetchByCity(city);
  };

  const handleSelectCity = (selectedCity: string) => {
    dispatch(setSelectedCity(selectedCity));
    fetchByCity(selectedCity);
  };

  return (
    <Wrapper>
      <Header>{climateLang.title}</Header>

      <SearchWrapper>
        <SearchInputWrapper>
          <SearchInput
            placeholder="Введите город"
            searchQuery={city}
            setSearchQuery={setCity}
            onSelectCity={handleSelectCity}
          />
        </SearchInputWrapper>
        <ButtonStyle
          title="Найти"
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

      <Header>Выбрать погоду</Header>
      <Content>
        {CLIMATE_CONTROL.map((item: ClimateType) => (
          <WeatherIconWrapper
            $active={item === climate}
            key={item}
            onClick={() => dispatch(setClimateControl(item))}
          >
            <WeatherIcon climateControl={item} themeLight={name === "light"} />
          </WeatherIconWrapper>
        ))}
      </Content>
    </Wrapper>
  );
};

export default ClimateControl;
