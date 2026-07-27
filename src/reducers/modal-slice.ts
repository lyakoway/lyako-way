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
  backgroundOverlay?: string | null;
  // Фон самого окна модалки (по умолчанию — светлый из темы). Позволяет
  // отдельным модалкам использовать тёмный «панельный» стиль проекта.
  background?: string | null;
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
  backgroundOverlay: "",
  background: "",
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
      backgroundOverlay: action.payload?.backgroundOverlay || null,
      background: action.payload?.background || null,
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
      backgroundOverlay: null,
      background: null,
    }),
  },
});

export const { showModal, closeModal } = modal.actions;

export const modalReducer = modal.reducer;
