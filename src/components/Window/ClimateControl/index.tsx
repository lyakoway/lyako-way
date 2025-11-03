import React, { useState } from "react";

import WeatherIcon from "../WeatherIcon";
import { useDispatchTyped, useSelectorTyped } from "src/store";

import {
  Wrapper,
  Header,
  Content,
  WeatherIconWrapper,
  SearchWrapper,
  SearchInputWrapper,
} from "./style";

import { CLIMATE_CONTROL } from "./constants";
import { fetchWeather, setClimateControl } from "src/reducers";
import { ClimateType } from "src/common/types/climat";
import { useWeather } from "src/features/customHooks";

import styled from "styled-components";
import { SearchInput } from "src/ui/SearchInput";
import ButtonStyle from "src/ui/ButtonStyle";
import { Spinner } from "src/ui/Spinner";
import ClimateBanner from "src/components/Window/ClimateControl/ClimateBanner";
import ButtonForm from "src/ui/ButtonForm";

const ClimateControl = () => {
  const {
    lang: { climateLang },
  } = useSelectorTyped(({ lang }) => lang);
  const {
    theme: { name },
  } = useSelectorTyped(({ theme }) => theme);
  const { climate } = useSelectorTyped(({ climate }) => climate);
  const dispatch = useDispatchTyped();
  // const { city, setCity, weather, forecast, loading, error, searchCity } = useWeather('Москва')
  // const handleSubmit = (e: FormEvent) => {
  //     e.preventDefault();
  //     searchCity(city);
  // };

  const {
    weather,
    forecast,
    geoCity,
    loading,
    error,
    fetchByCity,
    fetchByGeolocation,
  } = useWeather();
  const [city, setCity] = useState(geoCity);

  const handleSearch = () => {
    fetchByCity(city);
  };

  console.log("city", city);
  console.log("error", error);
  // Тип погоды
  // weather.current.condition.text

  const handleSelectCity = (selectedCity: string) => {
    dispatch(fetchWeather({ city: selectedCity }));
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
