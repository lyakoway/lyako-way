import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import SunCalc from "suncalc";
import { LIGHT_THEME, DARK_THEME } from "src/common/themes";
import { Theme } from "src/common/types/theme";

type IState = {
  theme: Theme;
  // Ждём вердикт дня/ночи нового города: флаг ставят явные действия
  // (поиск города, Enter, дропдаун, кнопка геолокации — ClimateControl).
  // Когда день/ночь нового места становится известен, _app применяет его
  // поверх ручного выбора и снимает флаг.
  cityVerdictPending: boolean;
};

// НАЧАЛЬНОЕ значение — детерминированное (светлая), совпадает с SSR, чтобы не
// было рассинхрона гидрации. Реальная тема применяется на клиенте в layout-
// эффекте (_app) ДО отрисовки — без вспышки и без ошибки гидрации.
const initialState: IState = {
  theme: LIGHT_THEME,
  cityVerdictPending: false,
};

// День/ночь по локальному времени и координатам Москвы (как fallback в useDayTime).
export function computeDayTime(): boolean {
  const now = new Date();
  const t = SunCalc.getTimes(now, 55.7522, 37.6156);
  const secs = (now.getHours() * 60 + now.getMinutes()) * 60;
  const sunrise = (t.sunrise.getHours() * 60 + t.sunrise.getMinutes()) * 60;
  const sunset = (t.sunset.getHours() * 60 + t.sunset.getMinutes()) * 60;
  return sunrise < secs && secs < sunset;
}

// Системная тёмная тема (prefers-color-scheme: dark).
export function prefersDarkScheme(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  } catch {
    return false;
  }
}

const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeList: (state, action: PayloadAction<boolean>) => {
      state.theme = action.payload ? LIGHT_THEME : DARK_THEME;
    },
    setCityVerdictPending: (state, action: PayloadAction<boolean>) => {
      state.cityVerdictPending = action.payload;
    },
  },
});

export const { setThemeList, setCityVerdictPending } = theme.actions;

export const themeReducer = theme.reducer;
