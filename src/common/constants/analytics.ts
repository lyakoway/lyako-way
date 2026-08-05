export const YANDEX_METRIKA_ID = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID;
export const GA4_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;

/** Имена событий — одинаковые для GA4 и целей Яндекс.Метрики (reachGoal). */
export const AnalyticsEvent = {
  CTA_ORDER_CLICK: "cta_order_click",
  CONTACT_FORM_SUBMIT: "contact_form_submit",
  CONTACT_FORM_SUCCESS: "contact_form_success",
  CONTACT_FORM_ERROR: "contact_form_error",
  CONTACT_CLICK: "contact_click",
  CV_DOWNLOAD: "cv_download",
  CV_VIEW: "cv_view",
  PORTFOLIO_DEMO_OPEN: "portfolio_demo_open",
  PORTFOLIO_GITHUB_OPEN: "portfolio_github_open",
  LANGUAGE_TOGGLE: "language_toggle",
  THEME_TOGGLE: "theme_toggle",
  WEATHER_OPEN: "weather_open",
  WEATHER_CITY_SELECT: "weather_city_select",
  WEATHER_SEARCH: "weather_search",
  WEATHER_SELECT: "weather_select",
  LIKE_CLICK: "like_click",
} as const;

export type AnalyticsEventName =
  (typeof AnalyticsEvent)[keyof typeof AnalyticsEvent];
