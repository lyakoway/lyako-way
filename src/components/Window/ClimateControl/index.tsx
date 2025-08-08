import React, {useState} from "react";

import WeatherIcon from "../WeatherIcon";
import { useDispatchTyped, useSelectorTyped } from "src/store";

import { Wrapper, Header, Content, WeatherIconWrapper } from "./style";

import { CLIMATE_CONTROL } from "./constants";
import { setClimateControl } from "src/reducers";
import { ClimateType } from "src/common/types/climat";
import {useWeather} from "src/features/customHooks";

import styled from "styled-components";
export const SearchWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const CityInput = styled.input`
  padding: 0.5rem 0.75rem;
  border: 1px solid #ccc;
  border-right: none;
  border-radius: 6px 0 0 6px;
  font-size: 16px;
  outline: none;
  flex: 1;

  &:focus {
    border-color: #3b82f6;
  }
`;

export const SearchButton = styled.button`
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0 6px 6px 0;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #2563eb;
  }
`;

export const WeatherWrapper = styled.div`
  padding: 1rem;
  border-radius: 12px;
  background: #f9fafb;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

export const LocationTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

export const LocalTime = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 1rem;
`;

export const WeatherInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  img {
    width: 64px;
    height: 64px;
    margin-right: 1rem;
  }

  h3 {
    font-size: 24px;
    margin: 0;
  }

  p {
    margin: 0.25rem 0;
  }
`;

export const WeatherDetails = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 0.25rem;
    font-size: 14px;
  }
`;

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

    const { weather,
        forecast,
        geoCity,
        loading,
        error,
        fetchByCity,
        fetchByGeolocation } = useWeather();
    const [city, setCity] = useState(geoCity);

    const handleSearch = () => {
        fetchByCity(city);
    };

  return (
      <Wrapper>
          <Header>{climateLang.title}</Header>
          <SearchWrapper>
              <CityInput
                  type="text"
                  placeholder="Введите город"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
              />
              <SearchButton onClick={handleSearch}>Найти</SearchButton>
          </SearchWrapper>

          {loading && <p>Загрузка...</p>}
          {error && <p>{error}</p>}

          {weather && (
              <WeatherWrapper>
                  <LocationTitle>
                      {weather.location.name}, {weather.location.region}, {weather.location.country}
                  </LocationTitle>
                  <LocalTime>Местное время: {weather.location.localtime}</LocalTime>

                  <WeatherInfo>
                      <img
                          src={weather.current.condition.icon.startsWith("//")
                              ? `https:${weather.current.condition.icon}`
                              : weather.current.condition.icon}
                          alt={weather.current.condition.text}
                      />
                      <div>
                          <h3>{weather.current.temp_c}°C</h3>
                          <p>{weather.current.condition.text}</p>
                          <p>Ощущается как: {weather.current.feelslike_c}°C</p>
                      </div>
                  </WeatherInfo>

                  <WeatherDetails>
                      <li>Влажность: {weather.current.humidity}%</li>
                      <li>Ветер: {weather.current.wind_kph} км/ч {weather.current.wind_dir}</li>
                      <li>Давление: {weather.current.pressure_mb} мбар</li>
                      <li>UV индекс: {weather.current.uv}</li>
                  </WeatherDetails>
              </WeatherWrapper>
          )}
          <Header>Выбрать погоду</Header>
          <Content>
              {CLIMATE_CONTROL.map((item: ClimateType) => (
                  <WeatherIconWrapper
                      $active={item === climate}
                      key={item}
                      onClick={() => dispatch(setClimateControl(item))}
                  >
                      <WeatherIcon climateControl={item} themeLight={name === "light"}/>
                  </WeatherIconWrapper>
              ))}
          </Content>
      </Wrapper>
  );
};

export default ClimateControl;
