export type ClimateType =
  | "sunnyMoon"
  | "cloudyWithSunMoon"
  | "cloudy"
  | "rainy"
  | "cloudyWithRainAndLightning"
  | "snowy";

export interface Weather {
  location: {
    name: string;
    region: string;
    country: string;
    localtime: string;
    lat?: number;
    lon?: number;
  };
  current: {
    temp_c: number;
    feelslike_c: number;
    condition: { text: string; icon: string };
    humidity: number;
    wind_kph: number;
    wind_dir: string;
    pressure_mb: number;
    uv: number;
    is_day?: number;
  };
}

export interface ForecastItem {
  dt_txt: string;
  main: { temp: number };
  weather: { description: string; icon: string }[];
}

export interface ForecastResponse {
  list: ForecastItem[];
}
