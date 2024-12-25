import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ClimateType } from "src/common/types/climat";

type IState = {
  climate: ClimateType;
};

const initialState: IState = {
  climate: "sunnyMoon",
};

const climate = createSlice({
  name: "climate",
  initialState,
  reducers: {
    setClimateControl: (state, action: PayloadAction<ClimateType>) => {
      state.climate = action.payload;
    },
  },
});

export const { setClimateControl } = climate.actions;

export const climateReducer = climate.reducer;
