import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RUSSIAN_LANGUAGE, ENGLISH_LANGUAGE } from "src/common/lang";
import { LanguageProps } from "src/common/types/lang";

type IState = {
  lang: LanguageProps;
};

const initialState: IState = {
  lang: RUSSIAN_LANGUAGE,
};

const lang = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<boolean>) => {
      state.lang = action.payload ? ENGLISH_LANGUAGE : RUSSIAN_LANGUAGE;
    },
  },
});

export const { setLang } = lang.actions;

export const langReducer = lang.reducer;
