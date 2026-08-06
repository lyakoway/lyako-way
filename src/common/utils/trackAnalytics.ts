import {
  YANDEX_METRIKA_ID,
  GA4_MEASUREMENT_ID,
  AnalyticsEventName,
} from "src/common/constants/analytics";

export type AnalyticsParams = Record<
  string,
  string | number | boolean | undefined
>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    ym?: (id: number | string, method: string, ...args: unknown[]) => void;
  }
}

const cleanParams = (params?: AnalyticsParams) => {
  if (!params) return undefined;
  const entries = Object.entries(params).filter(([, v]) => v !== undefined);
  return entries.length ? Object.fromEntries(entries) : undefined;
};

/** Событие в GA4 + цель в Яндекс.Метрике (если счётчики подключены). */
export const trackEvent = (
  name: AnalyticsEventName | string,
  params?: AnalyticsParams
) => {
  if (typeof window === "undefined") return;
  const payload = cleanParams(params);

  if (GA4_MEASUREMENT_ID && typeof window.gtag === "function") {
    window.gtag("event", name, payload);
  }

  if (YANDEX_METRIKA_ID && typeof window.ym === "function") {
    window.ym(YANDEX_METRIKA_ID, "reachGoal", name, payload);
  }
};

/** Pageview при клиентской навигации Next (первый заход уже шлёт init/config). */
export const trackPageView = (url: string) => {
  if (typeof window === "undefined") return;
  const path = url.split(/[?#]/)[0] || "/";

  if (GA4_MEASUREMENT_ID && typeof window.gtag === "function") {
    window.gtag("config", GA4_MEASUREMENT_ID, { page_path: path });
  }

  if (YANDEX_METRIKA_ID && typeof window.ym === "function") {
    window.ym(YANDEX_METRIKA_ID, "hit", path);
  }
};

/**
 * Привязка визита к пользователю после заявки (хеш почты/телефона).
 * Метрика: setUserID + userParams.UserID (чтобы видеть в отчётах);
 * GA4: user_id.
 */
export const setAnalyticsUserId = (userId: string) => {
  if (typeof window === "undefined" || !userId) return;

  if (YANDEX_METRIKA_ID && typeof window.ym === "function") {
    window.ym(YANDEX_METRIKA_ID, "setUserID", userId);
    // Без userParams значение setUserID в отчётах Метрики не отображается.
    window.ym(YANDEX_METRIKA_ID, "userParams", { UserID: userId });
  }

  if (GA4_MEASUREMENT_ID && typeof window.gtag === "function") {
    window.gtag("set", { user_id: userId });
    window.gtag("config", GA4_MEASUREMENT_ID, { user_id: userId });
  }
};

const withTimeout = <T,>(
  run: (finish: (value: T) => void) => void,
  fallback: T,
  ms = 2000
): Promise<T> =>
  new Promise((resolve) => {
    let done = false;
    const finish = (value: T) => {
      if (done) return;
      done = true;
      resolve(value);
    };
    try {
      run(finish);
    } catch {
      finish(fallback);
      return;
    }
    window.setTimeout(() => finish(fallback), ms);
  });

/** ClientID Яндекс.Метрики (браузер/устройство) — для связи заявки с визитом. */
export const getMetrikaClientId = (): Promise<string | null> => {
  if (
    typeof window === "undefined" ||
    !YANDEX_METRIKA_ID ||
    typeof window.ym !== "function"
  ) {
    return Promise.resolve(null);
  }

  return withTimeout((finish) => {
    window.ym!(YANDEX_METRIKA_ID!, "getClientID", (id: string) =>
      finish(id ? String(id) : null)
    );
  }, null);
};

/**
 * Client ID GA4 (браузер/устройство).
 * gtag('get', …) — официальный способ; иначе парсим cookie `_ga`.
 */
export const getGaClientId = (): Promise<string | null> => {
  if (typeof window === "undefined" || !GA4_MEASUREMENT_ID) {
    return Promise.resolve(null);
  }

  const fromCookie = (): string | null => {
    const match = document.cookie.match(/(?:^|;\s*)_ga=([^;]+)/);
    if (!match) return null;
    // _ga=GA1.1.XXXXXXXX.YYYYYYYY → client_id = XXXXXXXX.YYYYYYYY
    const parts = decodeURIComponent(match[1]).split(".");
    if (parts.length < 4) return null;
    return `${parts[parts.length - 2]}.${parts[parts.length - 1]}`;
  };

  if (typeof window.gtag !== "function") {
    return Promise.resolve(fromCookie());
  }

  return withTimeout((finish) => {
    window.gtag!(
      "get",
      GA4_MEASUREMENT_ID,
      "client_id",
      (id: string | undefined) => finish(id ? String(id) : fromCookie())
    );
  }, null).then((id) => id ?? fromCookie());
};
