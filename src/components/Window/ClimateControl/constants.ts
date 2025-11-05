import { ClimateType } from "src/common/types/climat";

export const CLIMATE_CONTROL = [
  "sunnyMoon",
  "cloudyWithSunMoon",
  "cloudy",
  "rainy",
  "cloudyWithRainAndLightning",
  "snowy",
];

export const WEATHER_TO_CLIMATE: Record<string, ClimateType> = {
  Sunny: "sunnyMoon",
  Clear: "sunnyMoon",
  "Partly cloudy": "cloudyWithSunMoon",
  Cloudy: "cloudy",
  Overcast: "cloudy",
  Rain: "rainy",
  "Light rain": "rainy",
  "Heavy rain": "rainy",
  Thunderstorm: "cloudyWithRainAndLightning",
  Snow: "snowy",
  "Light snow": "snowy",
  "Heavy snow": "snowy",
  Mist: "cloudy",
};
