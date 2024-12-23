import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tost } from "src/common/types/tost";

type IState = {
  toastList: Tost[];
};

const initialState: IState = {
  toastList: [],
};

const toast = createSlice({
  name: "toast",
  initialState,
  reducers: {
    setToastList: (state, action: PayloadAction<Tost[]>) => {
      state.toastList = action.payload;
    },
  },
});

export const { setToastList } = toast.actions;

export const toastReducer = toast.reducer;
