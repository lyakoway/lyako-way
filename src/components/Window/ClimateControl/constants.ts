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
  "Partly Cloudy": 'cloudyWithSunMoon'
};

// Сопоставление текста погоды с типом из списка. Сначала точное совпадение,
// затем fallback по ключевым словам — API возвращает десятки формулировок
// («Patchy rain possible», «Overcast», «Fog», «Thundery outbreaks possible»…),
// которых нет в таблице выше. Так активный тип надёжно совпадает с погодой.
export function weatherToClimate(text?: string | null): ClimateType | undefined {
  if (!text) return undefined;
  const exact = WEATHER_TO_CLIMATE[text];
  if (exact) return exact;

  const t = text.toLowerCase();
  if (t.includes("thunder") || t.includes("lightning"))
    return "cloudyWithRainAndLightning";
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
    t.includes("fog")
  )
    return "cloudy";
  if (t.includes("sun") || t.includes("clear")) return "sunnyMoon";
  return undefined;
}
