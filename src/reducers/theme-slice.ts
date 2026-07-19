import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import SunCalc from "suncalc";
import { LIGHT_THEME, DARK_THEME } from "src/common/themes";
import { Theme } from "src/common/types/theme";

type IState = {
  theme: Theme;
};

const THEME_KEY = "themeMode";

// НАЧАЛЬНОЕ значение — детерминированное (светлая), совпадает с SSR, чтобы не
// было рассинхрона гидрации. Реальная тема применяется на клиенте в layout-
// эффекте (_app) ДО отрисовки — без вспышки и без ошибки гидрации.
const initialState: IState = {
  theme: LIGHT_THEME,
};

// День/ночь по локальному времени и координатам Москвы (как fallback в useDayTime).
function computeDayTime(): boolean {
  const now = new Date();
  const t = SunCalc.getTimes(now, 55.7522, 37.6156);
  const secs = (now.getHours() * 60 + now.getMinutes()) * 60;
  const sunrise = (t.sunrise.getHours() * 60 + t.sunrise.getMinutes()) * 60;
  const sunset = (t.sunset.getHours() * 60 + t.sunset.getMinutes()) * 60;
  return sunrise < secs && secs < sunset;
}

// Предпочтительная тема на клиенте: сохранённая или по времени суток.
// Возвращает true = светлая (day), false = тёмная (night).
export function getPreferredIsDay(): boolean {
  if (typeof window === "undefined") return true;
  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "light") return true;
    if (stored === "dark") return false;
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
      // Персистим выбор, чтобы при следующей загрузке применить его сразу.
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
