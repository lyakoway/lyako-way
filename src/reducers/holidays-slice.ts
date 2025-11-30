import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IState = {
  santaShown: boolean;
};

const initialState: IState = {
  santaShown: false,
};

const link = createSlice({
  name: "holidays",
  initialState,
  reducers: {
    setSantaShown: (state, action: PayloadAction<boolean>) => {
      state.santaShown = action.payload;
    },
  },
});

export const { setSantaShown } = link.actions;

export const holidaysReducer = link.reducer;
