import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Gifts } from "src/components/Gifts";

type IState = {
  santaShown: boolean;
  giftsLocked: boolean;
};

const initialState: IState = {
  santaShown: false,
  giftsLocked: false,
};

const link = createSlice({
  name: "holidays",
  initialState,
  reducers: {
    setSantaShown: (state, action: PayloadAction<boolean>) => {
      state.santaShown = action.payload;
    },
    setGiftsLocked: (state, action: PayloadAction<boolean>) => {
      state.giftsLocked = action.payload;
    },
  },
});

export const { setSantaShown, setGiftsLocked } = link.actions;

export const holidaysReducer = link.reducer;
