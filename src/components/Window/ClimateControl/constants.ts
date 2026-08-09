import { ClimateType } from "src/common/types/climat";

export const CLIMATE_CONTROL = [
  "sunnyMoon",
  "cloudyWithSunMoon",
  "cloudy",
  "rainy",
  "cloudyWithRainAndLightning",
  "snowy",
];

// Маппинг по стабильному condition.code WeatherAPI (не зависит от языка/формулировки).
// Источник: https://www.weatherapi.com/docs/weather_conditions.json
export const CODE_TO_CLIMATE: Record<number, ClimateType> = {
  1000: "sunnyMoon",
  1003: "cloudyWithSunMoon",
  1006: "cloudy",
  1009: "cloudy",
  // Haze / dust / smoke / smog → облачность (нет отдельной сцены)
  1012: "cloudy",
  1015: "cloudy",
  1018: "cloudy",
  1021: "cloudy",
  1024: "cloudy",
  1027: "cloudy",
  1030: "cloudy",
  1033: "cloudy",
  1036: "cloudy",
  1039: "cloudy",
  1042: "cloudy",
  1045: "cloudy",
  1048: "cloudy",
  1063: "rainy",
  1066: "snowy",
  1069: "snowy",
  1072: "rainy",
  1087: "cloudyWithRainAndLightning",
  1114: "snowy",
  1117: "snowy",
  1135: "cloudy",
  1147: "cloudy",
  1150: "rainy",
  1153: "rainy",
  1168: "rainy",
  1171: "rainy",
  1180: "rainy",
  1183: "rainy",
  1186: "rainy",
  1189: "rainy",
  1192: "rainy",
  1195: "rainy",
  1198: "rainy",
  1201: "rainy",
  1204: "snowy",
  1207: "snowy",
  1210: "snowy",
  1213: "snowy",
  1216: "snowy",
  1219: "snowy",
  1222: "snowy",
  1225: "snowy",
  1237: "snowy",
  1240: "rainy",
  1243: "rainy",
  1246: "rainy",
  1249: "snowy",
  1252: "snowy",
  1255: "snowy",
  1258: "snowy",
  1261: "snowy",
  1264: "snowy",
  1273: "cloudyWithRainAndLightning",
  1276: "cloudyWithRainAndLightning",
  // Гром + снег → снежная сцена (приоритет осадков)
  1279: "snowy",
  1282: "snowy",
};

// Fallback по тексту — для старого кэша без code или неизвестных кодов.
export const WEATHER_TO_CLIMATE: Record<string, ClimateType> = {
  Sunny: "sunnyMoon",
  Clear: "sunnyMoon",
  "Partly cloudy": "cloudyWithSunMoon",
  "Partly Cloudy": "cloudyWithSunMoon",
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

// Сопоставление погоды с типом сцены. Сначала code (точный), затем text.
export function weatherToClimate(
  code?: number | null,
  text?: string | null
): ClimateType | undefined {
  if (code != null && CODE_TO_CLIMATE[code]) {
    return CODE_TO_CLIMATE[code];
  }

  if (!text) return undefined;
  const exact = WEATHER_TO_CLIMATE[text];
  if (exact) return exact;

  const t = text.toLowerCase();
  if (t.includes("thunder") || t.includes("lightning")) {
    if (t.includes("snow")) return "snowy";
    return "cloudyWithRainAndLightning";
  }
  if (
    t.includes("snow") ||
    t.includes("sleet") ||
    t.includes("blizzard") ||
    t.includes("ice")
  )
    return "snowy";
  if (t.includes("rain") || t.includes("drizzle") || t.includes("shower"))
    return "rainy";
  if (t.includes("partly")) return "cloudyWithSunMoon";
  if (
    t.includes("cloud") ||
    t.includes("overcast") ||
    t.includes("mist") ||
    t.includes("fog") ||
    t.includes("haze") ||
    t.includes("dust") ||
    t.includes("smoke") ||
    t.includes("smog")
  )
    return "cloudy";
  if (t.includes("sun") || t.includes("clear")) return "sunnyMoon";
  return undefined;
}
