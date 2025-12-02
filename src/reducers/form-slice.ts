import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DataFormItem {
  user_name: string;
  user_email: string;
  user_phone: string;
  typesWork: string;
  message: string;
}

type IState = {
  dataForm: DataFormItem;
};

const initialState: IState = {
  dataForm: null,
};

const form = createSlice({
  name: "form",
  initialState,
  reducers: {
    setDataForm: (state, action: PayloadAction<DataFormItem>) => {
      state.dataForm = action.payload;
    },
  },
});

export const { setDataForm } = form.actions;

export const formReducer = form.reducer;
