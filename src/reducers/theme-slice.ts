import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import SunCalc from "suncalc";
import { LIGHT_THEME, DARK_THEME } from "src/common/themes";
import { Theme } from "src/common/types/theme";

type IState = {
  theme: Theme;
};

const THEME_KEY = "themeMode";

// День/ночь по локальному времени и координатам Москвы (совпадает с
// fallback в useDayTime). Нужно, чтобы НАЧАЛЬНАЯ тема сразу совпадала с той,
// что вычислит эффект — иначе при каждом монтировании/перезагрузке мелькает
// светлая→тёмная (особенно заметно при обрывах сети в dev с HMR-реконнектом).
function computeDayTime(): boolean {
  const now = new Date();
  const lat = 55.7522;
  const lon = 37.6156;
  const t = SunCalc.getTimes(now, lat, lon);
  const secs = (now.getHours() * 60 + now.getMinutes()) * 60;
  const sunrise = (t.sunrise.getHours() * 60 + t.sunrise.getMinutes()) * 60;
  const sunset = (t.sunset.getHours() * 60 + t.sunset.getMinutes()) * 60;
  return sunrise < secs && secs < sunset;
}

function getInitialTheme(): Theme {
  // SSR — детерминированно (без window): светлая. Клиент подстроит после гидрации.
  if (typeof window === "undefined") return LIGHT_THEME;
  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "light") return LIGHT_THEME;
    if (stored === "dark") return DARK_THEME;
  } catch {
    /* localStorage может быть недоступен */
  }
  return computeDayTime() ? LIGHT_THEME : DARK_THEME;
}

const initialState: IState = {
  theme: getInitialTheme(),
};

const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeList: (state, action: PayloadAction<boolean>) => {
      state.theme = action.payload ? LIGHT_THEME : DARK_THEME;
      // Персистим выбор, чтобы перезагрузка/перемонтирование не сбрасывали
      // тему в дефолт и не вызывали мигание.
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem(THEME_KEY, action.payload ? "light" : "dark");
        } catch {
          /* игнорируем недоступность localStorage */
        }
      }
    },
  },
});

export const { setThemeList } = theme.actions;

export const themeReducer = theme.reducer;
