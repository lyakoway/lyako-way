import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

// Импорт редьюсеров
import {
  climateReducer,
  modalReducer,
  themeReducer,
  toastReducer,
  langReducer,
  linkReducer,
  likesReducer,
  holidaysReducer,
  formReducer,
} from "src/reducers";

// --- Комбинируем редьюсеры ---
const rootReducer = combineReducers({
  climate: climateReducer,
  modal: modalReducer,
  theme: themeReducer,
  toast: toastReducer,
  lang: langReducer,
  link: linkReducer,
  likes: likesReducer,
  holidays: holidaysReducer,
  form: formReducer,
});

// --- Типы для RootState ---
export type RootState = ReturnType<typeof rootReducer>;

// --- Главный редьюсер с поддержкой HYDRATE ---
const reducer = (state: RootState | undefined, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return {
      ...state, // предыдущий state
      ...action.payload, // данные из сервера (SSR)
    };
  }
  return rootReducer(state, action);
};

// --- Создаем store ---
export const makeStore = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, // отключаем проверки сериализации для Next.js
      }),
    devTools: process.env.NODE_ENV !== "production",
  });

// --- Типы store и dispatch ---
export type Store = ReturnType<typeof makeStore>;
export type DispatchTyped = Store["dispatch"];

// --- Создаем wrapper для Next.js ---
export const wrapper = createWrapper<Store>(makeStore);

// --- Хуки для использования в компонентах ---
export const useSelectorTyped: TypedUseSelectorHook<RootState> = useSelector;

export const useDispatchTyped = () => useDispatch<DispatchTyped>();
