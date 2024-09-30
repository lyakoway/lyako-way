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

const WeatherIcon = ({ сlimateСontrol, theme }) => {
  if (сlimateСontrol === "sunnyMoon" && theme === "light") {
    return <WeatherIconSunny />;
  }
  if (сlimateСontrol === "sunnyMoon" && theme !== "light") {
    return <WeatherIconClearNight />;
  }
  if (сlimateСontrol === "cloudyWithSunMoon" && theme === "light") {
    return <WeatherIconCloudyWithSun />;
  }
  if (сlimateСontrol === "cloudyWithSunMoon" && theme !== "light") {
    return <WeatherIconCloudyWithMoon />;
  }
  if (сlimateСontrol === "cloudy") {
    return <WeatherIconCloudy />;
  }
  if (сlimateСontrol === "rainy") {
    return <WeatherIconRainy />;
  }
  if (сlimateСontrol === "cloudyWithRainAndLightning") {
    return <WeatherIconCloudyWithRainAndLightning />;
  }
  if (сlimateСontrol === "snowy") {
    return <WeatherIconSnowy />;
  }
};

export default WeatherIcon;
