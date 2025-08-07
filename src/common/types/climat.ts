export type ClimateType =
  | "sunnyMoon"
  | "cloudyWithSunMoon"
  | "cloudy"
  | "rainy"
  | "cloudyWithRainAndLightning"
  | "snowy";


export interface Weather {
    name: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
    };
    weather: { description: string; icon: string }[];
}

export interface ForecastItem {
    dt_txt: string;
    main: { temp: number };
    weather: { description: string; icon: string }[];
}

export interface ForecastResponse {
    list: ForecastItem[];
}