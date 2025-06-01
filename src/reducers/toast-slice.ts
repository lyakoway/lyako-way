import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Toast } from "src/common/types/toast";

type IState = {
  toastList: Toast[];
};

const initialState: IState = {
  toastList: [],
};

const toast = createSlice({
  name: "toast",
  initialState,
  reducers: {
    setToastList: (state, action: PayloadAction<Toast[]>) => {
      state.toastList = action.payload;
    },
  },
});

export const { setToastList } = toast.actions;

export const toastReducer = toast.reducer;
