import React from "react";

import WeatherIcon from "../WeatherIcon";
import { useDispatchTyped, useSelectorTyped } from "src/store";

import { Wrapper, Header, Content, WeatherIconWrapper } from "./style";

import { CLIMATE_CONTROL } from "./constants";
import { setClimateControl } from "src/reducers";
import { ClimateType } from "src/common/types/climat";

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

  return (
    <Wrapper>
      <Header>{climateLang.title}</Header>
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
