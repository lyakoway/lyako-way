export const YANDEX_METRIKA_ID = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID;
export const GA4_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;

/**
 * Имена событий — одинаковые для GA4 и целей Яндекс.Метрики (reachGoal).
 * Описание всех событий: docs/analytics-events.md
 */
export const AnalyticsEvent = {
  CONTACT_FORM_VIEW: "contact_form_view",
  CONTACT_FORM_START: "contact_form_start",
  CONTACT_FORM_FIELD_FOCUS: "contact_form_field_focus",
  CONTACT_FORM_SERVICE_SELECT: "contact_form_service_select",
  CONTACT_FORM_VALIDATION_ERROR: "contact_form_validation_error",
  CONTACT_FORM_SUBMIT: "contact_form_submit",
  CONTACT_FORM_SUCCESS: "contact_form_success",
  CONTACT_FORM_ERROR: "contact_form_error",
  CONTACT_CLICK: "contact_click",
  CV_DOWNLOAD: "cv_download",
  CV_VIEW: "cv_view",
  PORTFOLIO_DEMO_OPEN: "portfolio_demo_open",
  PORTFOLIO_GITHUB_OPEN: "portfolio_github_open",
  PORTFOLIO_FILTER_CLICK: "portfolio_filter_click",
  PORTFOLIO_PROJECT_OPEN: "portfolio_project_open",
  PORTFOLIO_SCREENSHOT_OPEN: "portfolio_screenshot_open",
  BLOG_FILTER_CLICK: "blog_filter_click",
  BLOG_POST_OPEN: "blog_post_open",
  BLOG_SEARCH_FOCUS: "blog_search_focus",
  BLOG_SEARCH: "blog_search",
  BLOG_SEARCH_NAVIGATE: "blog_search_navigate",
  BLOG_SEARCH_CLEAR: "blog_search_clear",
  LANGUAGE_TOGGLE: "language_toggle",
  THEME_TOGGLE: "theme_toggle",
  WEATHER_OPEN: "weather_open",
  WEATHER_CITY_SELECT: "weather_city_select",
  WEATHER_SEARCH: "weather_search",
  WEATHER_SELECT: "weather_select",
  LIKE_CLICK: "like_click",
  PROJECT_LIKE_CLICK: "project_like_click",
  SETTINGS_TOGGLE: "settings_toggle",
  ERROR_SCREEN_VIEW: "error_screen_view",
  ERROR_HOME_CLICK: "error_home_click",
  ERROR_RELOAD_CLICK: "error_reload_click",
} as const;

export type AnalyticsEventName =
  (typeof AnalyticsEvent)[keyof typeof AnalyticsEvent];
