import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import SunCalc from "suncalc";
import { LIGHT_THEME, DARK_THEME } from "src/common/themes";
import { Theme } from "src/common/types/theme";

type IState = {
  theme: Theme;
  // Ручной выбор темы — только на сессию (не в localStorage). Сбрасывается
  // при реальной смене дня/ночи (восход/закат), чтобы тема снова шла за солнцем.
  userSelectedTheme: boolean;
};

// НАЧАЛЬНОЕ значение — детерминированное (светлая), совпадает с SSR, чтобы не
// было рассинхрона гидрации. Реальная тема применяется на клиенте в layout-
// эффекте (_app) ДО отрисовки — без вспышки и без ошибки гидрации.
const initialState: IState = {
  theme: LIGHT_THEME,
  userSelectedTheme: false,
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

// Тема на клиенте всегда по времени суток — без localStorage, чтобы после
// рассвета/заката не «залипала» вчерашняя ручная тема.
export function getPreferredIsDay(): boolean {
  if (typeof window === "undefined") return true;
  // Убираем устаревший ключ от прошлых версий, если он ещё лежит в браузере.
  try {
    localStorage.removeItem("themeMode");
  } catch {
    /* localStorage может быть недоступен */
  }
  return computeDayTime();
}

const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeList: (state, action: PayloadAction<boolean>) => {
      state.theme = action.payload ? LIGHT_THEME : DARK_THEME;
    },
    setUserSelectedTheme: (state, action: PayloadAction<boolean>) => {
      state.userSelectedTheme = action.payload;
    },
  },
});

export const { setThemeList, setUserSelectedTheme } = theme.actions;

export const themeReducer = theme.reducer;
