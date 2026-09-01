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
    const hydrated = { ...state, ...action.payload } as RootState;
    // Выбранный город живёт в localStorage клиента, серверу он неизвестен —
    // не даём SSR-состоянию («Москва») затирать сохранённый выбор города,
    // иначе он умирал бы при каждой гидрации.
    if (state?.climate?.selectedCity) {
      hydrated.climate = {
        ...hydrated.climate,
        selectedCity: state.climate.selectedCity,
      };
    }
    return hydrated;
  }
  return rootReducer(state, action);
};

// --- Создаем store ---
export const makeStore = () =>
  configureStore({
    reducer,
    // serializableCheck включён: состояние полностью сериализуемо (иконки
    // в словарях — строковые ключи, элементы — в src/common/lib/iconRegistry).
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
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
