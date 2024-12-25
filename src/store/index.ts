import { makeAutoObservable } from "mobx";

import { LIGHT_THEME, DARK_THEME } from "src/common/themes";
import { RUSSIAN_LANGUAGE, ENGLISH_LANGUAGE } from "src/common/lang";

// class Store {
//   opendToast = false;
//   opendToastModal = false;
//   theme = LIGHT_THEME;
//   langText = RUSSIAN_LANGUAGE;
//   routeLink = "";
//   time = { hourValue: 0, minValue: 0 };
//   toggleTheme = false;
//   climateControl = "sunnyMoon";

//   constructor() {
//     makeAutoObservable(this);
//   }

//   setOpenToast(open) {
//     this.opendToast = open;
//   }

//   getOpenToast() {
//     return this.opendToast;
//   }

//   setOpenToastModal(open) {
//     this.opendToastModal = open;
//   }

//   getOpenToastModal() {
//     return this.opendToastModal;
//   }

//   setToggleTheme(themeDark) {
//     this.theme = themeDark ? DARK_THEME : LIGHT_THEME;
//   }

//   getToggleTheme() {
//     return this.theme;
//   }

//   setCheckedTheme(checkedTheme) {
//     this.toggleTheme = checkedTheme;
//   }

//   getCheckedTheme() {
//     return this.toggleTheme;
//   }

//   setToggleLang(LangEnglish) {
//     this.langText = LangEnglish ? ENGLISH_LANGUAGE : RUSSIAN_LANGUAGE;
//   }

//   getToggleLang() {
//     return this.langText;
//   }

//   setRouteLink(route) {
//     this.routeLink = route;
//   }

//   getRouteLink() {
//     return this.routeLink;
//   }

//   setTime(timeValue) {
//     this.time = timeValue;
//   }

//   getTime() {
//     return this.time;
//   }

//   setClimateControl(ClimateControlValue) {
//     this.climateControl = climateControlValue;
//   }

//   getClimateControl() {
//     return this.climateControl;
//   }
// }

// export const store = new Store();

import {
  AnyAction,
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import {
  climatReducer,
  modalReducer,
  themeReducer,
  toastReducer,
  langReducer,
  linkReducer,
} from "src/reducers";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

const rootReducer = combineReducers({
  climat: climatReducer,
  modal: modalReducer,
  theme: themeReducer,
  toast: toastReducer,
  lang: langReducer,
  link: linkReducer,
});

type RootReducer = typeof rootReducer;

const reducer: RootReducer = (
  state: ReturnType<RootReducer>,
  action: AnyAction
) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  }
  return rootReducer(state, action);
};

export const makeStore = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

// export const store = configureStore({
//   reducer: rootReducer,
//   devTools: true,
// });

export type Store = ReturnType<typeof makeStore>;
export type DispatchTyped = Store["dispatch"];
export type RootState = ReturnType<Store["getState"]>;

export const wrapper = createWrapper(makeStore);

export function useSelectorTyped<TSelected>(
  cb: (state: RootState) => TSelected
): TSelected {
  return useSelector<RootState, TSelected>(cb);
}

export function useDispatchTyped() {
  return useDispatch<DispatchTyped>();
}
