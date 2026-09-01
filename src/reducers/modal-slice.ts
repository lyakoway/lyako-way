import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Дескриптор контента модалки — сериализуемый (тип + данные). Сами
// React-элементы рендерит реестр src/ui/Modal/registry.tsx: элементы в сторе
// ломают сериализацию состояния (__NEXT_DATA__ при SSR) и подсвечиваются
// serializableCheck-ом RTK.
export type ModalType = "climate" | "image" | "pdf";

export interface ModalDescriptor {
  type: ModalType;
  data?: Record<string, string>;
}

interface IState {
  isOpened?: boolean;
  title?: string;
  icon?: string | null;
  link?: string;
  content?: ModalDescriptor | null;
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

type ShowModalPayload = {
  title?: string;
  icon?: string | null;
  link?: string;
  type?: ModalType;
  data?: Record<string, string>;
  width?: string | null;
  height?: string | null;
  padding?: string;
  hideClose?: boolean;
  backgroundOverlay?: string | null;
  background?: string | null;
};

const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<ShowModalPayload>) => ({
      ...state,
      title: action.payload.title || "",
      icon: action.payload.icon || null,
      link: action.payload.link || "",
      content: action.payload.type
        ? { type: action.payload.type, data: action.payload.data }
        : null,
      width: action.payload.width || null,
      height: action.payload.height || null,
      padding: action.payload.padding || "",
      hideClose: action.payload.hideClose ?? state.hideClose,
      backgroundOverlay: action.payload.backgroundOverlay || null,
      background: action.payload.background || null,
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
