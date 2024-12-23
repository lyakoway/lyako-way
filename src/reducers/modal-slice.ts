import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReactElement } from "react";

interface IState {
  isOpened?: boolean;
  title?: string;
  icon?: string | null;
  link?: string;
  content?: ReactElement | null;
  width?: string | null;
  height?: string | null;
  padding?: string;
  isInited: boolean;
  hideClose?: boolean;
}

const initialState: IState = {
  isOpened: false,
  title: "",
  icon: null,
  link: "",
  content: null,
  width: "",
  height: "",
  padding: "",
  isInited: false,
  hideClose: false,
};

const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<Partial<IState | null>>) => ({
      ...state,
      title: action.payload?.title || "",
      icon: action.payload?.icon || null,
      link: action.payload?.link || "",
      content: action.payload?.content || null,
      width: action.payload?.width || null,
      height: action.payload?.height || null,
      padding: action.payload?.padding || "",
      hideClose: action.payload?.hideClose ?? state.hideClose,
      isOpened: true,
      isInited: true,
    }),
    closeModal: (state) => ({
      ...state,
      title: "",
      icon: null,
      link: "",
      content: null,
      width: null,
      height: null,
      padding: "",
      isOpened: false,
      isInited: true,
      hideClose: false,
    }),
  },
});

export const { showModal, closeModal } = modal.actions;

export const modalReducer = modal.reducer;
