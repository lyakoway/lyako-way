import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ClimateType } from "src/common/types/climat";

type IState = {
  climat: ClimateType;
};

const initialState: IState = {
  climat: "sunnyMoon",
};

const climat = createSlice({
  name: "climat",
  initialState,
  reducers: {
    setClimateСontrol: (state, action: PayloadAction<ClimateType>) => {
      state.climat = action.payload;
    },
  },
});

export const { setClimateСontrol } = climat.actions;

export const climatReducer = climat.reducer;
