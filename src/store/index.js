import { makeAutoObservable } from "mobx";

import { LIGHT_THEME, DARK_THEME } from "src/common/themes";
import { RUSSIAN_LANGUAGE, ENGLISH_LANGUAGE } from "src/common/lang";

class Store {
  opendToast = false;
  opendToastModal = false;
  theme = LIGHT_THEME;
  langText = RUSSIAN_LANGUAGE;
  routeLink = "";
  time = { hourValue: 0, minValue: 0 };
  toggleTheme = false;
  climateСontrol = "sunnyMoon";

  constructor() {
    makeAutoObservable(this);
  }

  setOpenToast(open) {
    this.opendToast = open;
  }

  getOpenToast() {
    return this.opendToast;
  }

  setOpenToastModal(open) {
    this.opendToastModal = open;
  }

  getOpenToastModal() {
    return this.opendToastModal;
  }

  setToggleTheme(themeDark) {
    this.theme = themeDark ? DARK_THEME : LIGHT_THEME;
  }

  getToggleTheme() {
    return this.theme;
  }

  setCheckedTheme(checkedTheme) {
    this.toggleTheme = checkedTheme;
  }

  getCheckedTheme() {
    return this.toggleTheme;
  }

  setToggleLang(LangEnglish) {
    this.langText = LangEnglish ? ENGLISH_LANGUAGE : RUSSIAN_LANGUAGE;
  }

  getToggleLang() {
    return this.langText;
  }

  setRouteLink(route) {
    this.routeLink = route;
  }

  getRouteLink() {
    return this.routeLink;
  }

  setTime(timeValue) {
    this.time = timeValue;
  }

  getTime() {
    return this.time;
  }

  setClimateСontrol(climateСontrolValue) {
    this.climateСontrol = climateСontrolValue;
  }

  getClimateСontrol() {
    return this.climateСontrol;
  }
}

export const store = new Store();
