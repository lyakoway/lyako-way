// Ручной выбор языка хранится в cookie (а не в localStorage): cookie уходит
// на сервер с каждым запросом, поэтому SSR рендерит сразу верную версию без
// вспышки русской до гидрации (см. MyApp.getInitialProps в pages/_app.tsx).
// Сохраняется только клик по кнопке языка — он важнее гео-детекта и
// переживает перезагрузку.

const KEY = "userLang";
const MAX_AGE = 60 * 60 * 24 * 365; // год

// true — английский, false — русский, null — сохранённого выбора нет.
export function getStoredLang(): boolean | null {
  if (typeof window === "undefined") return null;
  return parseLangCookie(document.cookie);
}

// Значение userLang из заголовка Cookie или document.cookie.
export function parseLangCookie(
  cookieHeader: string | undefined | null
): boolean | null {
  if (!cookieHeader) return null;
  const match = cookieHeader.match(
    new RegExp(`(?:^|;\\s*)${KEY}=(en|ru)(?:;|$)`)
  );
  return match ? match[1] === "en" : null;
}

export function setStoredLang(isEnglish: boolean): void {
  if (typeof window === "undefined") return;
  try {
    document.cookie = `${KEY}=${isEnglish ? "en" : "ru"}; path=/; max-age=${MAX_AGE}; samesite=lax`;
  } catch {
    /* cookie могут быть недоступны (приватный режим) — не критично */
  }
}
