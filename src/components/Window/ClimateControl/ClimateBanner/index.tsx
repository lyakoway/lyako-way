import React, { FC } from "react";

import { useSelectorTyped } from "src/store";

import {
  LocationTitle,
  WeatherWrapper,
  WeatherInfo,
  WeatherDetails,
} from "./style";
import { Spinner } from "src/ui/Spinner";

interface ClimateBannerProps {
  loading?: boolean;
  city?: string;
  icon?: string;
  iconText?: string;
  temperature?: number;
  temperatureFeeling?: number;
  humidity?: number;
  wind?: number;
  pressure?: number;
}

const ClimateBanner: FC<ClimateBannerProps> = ({
  loading = false,
  city = "",
  icon = "",
  iconText = "",
  temperature = "",
  temperatureFeeling = "",
  humidity = "",
  wind = "",
  pressure = "",
}) => {
  const {
    lang: { climateLang },
  } = useSelectorTyped(({ lang }) => lang);
  const {
    theme: { name },
  } = useSelectorTyped(({ theme }) => theme);

  if (loading) {
    return (
      <WeatherWrapper alignItems="center">
        <Spinner color="#ff8560" size="medium" />
      </WeatherWrapper>
    );
  }

  return (
    <WeatherWrapper>
      <LocationTitle>{city}</LocationTitle>
      <WeatherInfo>
        {icon && (
          <img
            src={icon.startsWith("//") ? `https:${icon}` : icon}
            alt={iconText}
          />
        )}
        {temperature && (
          <div>
            <h3>{temperature}°C</h3>
            <p>Ощущается как: {temperatureFeeling}°C</p>
          </div>
        )}
      </WeatherInfo>

      <WeatherDetails>
        {humidity && <li>Влажность: {humidity}%</li>}
        {wind && <li>Ветер: {wind} км/ч</li>}
        {pressure && <li>Давление: {pressure} мбар</li>}
      </WeatherDetails>
    </WeatherWrapper>
  );
};

export default ClimateBanner;
