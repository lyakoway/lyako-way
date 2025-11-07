import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RUSSIAN_LANGUAGE, ENGLISH_LANGUAGE } from "src/common/lang";
import { LanguageProps } from "src/common/types/lang";

type IState = {
  lang: LanguageProps;
  userSelectedLang: boolean;
};

const initialState: IState = {
  lang: RUSSIAN_LANGUAGE,
  userSelectedLang: false,
};

const lang = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<boolean>) => {
      state.lang = action.payload ? ENGLISH_LANGUAGE : RUSSIAN_LANGUAGE;
    },
    setUserSelectedLang: (state, action: PayloadAction<boolean>) => {
      state.userSelectedLang = action.payload;
    },
  },
});

export const { setLang, setUserSelectedLang } = lang.actions;

export const langReducer = lang.reducer;
