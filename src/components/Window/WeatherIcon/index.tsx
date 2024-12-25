import React from "react";
import WeatherIconSunny from "./Sunny";
import WeatherIconCloudy from "./Cloudy";
import WeatherIconRainy from "./Rainy";
import WeatherIconCloudyWithSun from "./CloudyWithSun";
// import WeatherIconCloudyWithLightning from "./CloudyWithLightning";
import WeatherIconCloudyWithMoon from "./CloudyWithMoon";
import WeatherIconCloudyWithRainAndLightning from "./CloudyWithRainAndLightning";
import WeatherIconClearNight from "./ClearNight";
// import WeatherIconSunnyWithWind from "./SunnyWithWind";
import WeatherIconSnowy from "./Snowy";
import { ClimateType } from "src/common/types/climat";

const WeatherIcon = ({
  climateControl,
  theme,
}: {
  climateControl: ClimateType;
  theme: "light" | "dark";
}) => {
  if (climateControl === "sunnyMoon" && theme === "light") {
    return <WeatherIconSunny />;
  }
  if (climateControl === "sunnyMoon" && theme !== "light") {
    return <WeatherIconClearNight />;
  }
  if (climateControl === "cloudyWithSunMoon" && theme === "light") {
    return <WeatherIconCloudyWithSun />;
  }
  if (climateControl === "cloudyWithSunMoon" && theme !== "light") {
    return <WeatherIconCloudyWithMoon />;
  }
  if (climateControl === "cloudy") {
    return <WeatherIconCloudy />;
  }
  if (climateControl === "rainy") {
    return <WeatherIconRainy />;
  }
  if (climateControl === "cloudyWithRainAndLightning") {
    return <WeatherIconCloudyWithRainAndLightning />;
  }
  if (climateControl === "snowy") {
    return <WeatherIconSnowy />;
  }
};

export default WeatherIcon;
