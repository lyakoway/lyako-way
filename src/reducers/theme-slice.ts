import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LIGHT_THEME, DARK_THEME } from "src/common/themes";
import { Theme, Time } from "src/common/types/theme";

type IState = {
  time: Time;
  theme: Theme;
};

const initialState: IState = {
  time: {
    hour: 0,
    min: 0,
    sec: 0,
  },
  theme: LIGHT_THEME,
};

const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeList: (state, action: PayloadAction<boolean>) => {
      state.theme = action.payload ? LIGHT_THEME : DARK_THEME;
    },
    setTime: (state, action: PayloadAction<Time>) => {
      state.time = action.payload;
    },
  },
});

export const { setThemeList, setTime } = theme.actions;

export const themeReducer = theme.reducer;
