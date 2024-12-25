import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LIGHT_THEME, DARK_THEME } from "src/common/themes";
import { Theme } from "src/common/types/theme";

type IState = {
  theme: Theme;
};

const initialState: IState = {
  theme: LIGHT_THEME,
};

const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeList: (state, action: PayloadAction<boolean>) => {
      state.theme = action.payload ? LIGHT_THEME : DARK_THEME;
    },
  },
});

export const { setThemeList } = theme.actions;

export const themeReducer = theme.reducer;
