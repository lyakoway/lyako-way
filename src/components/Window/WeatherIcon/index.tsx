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
  themeLight,
}: {
  climateControl: ClimateType;
  themeLight: boolean;
}) => {
  if (climateControl === "sunnyMoon" && themeLight) {
    return <WeatherIconSunny />;
  }
  if (climateControl === "sunnyMoon" && !themeLight) {
    return <WeatherIconClearNight />;
  }
  if (climateControl === "cloudyWithSunMoon" && themeLight) {
    return <WeatherIconCloudyWithSun />;
  }
  if (climateControl === "cloudyWithSunMoon" && !themeLight) {
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
