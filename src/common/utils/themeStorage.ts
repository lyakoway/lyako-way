// Ручной выбор темы в localStorage: переживает перезагрузку и главнее
// системной настройки и солнца. null — ручного выбора нет (работает
// авто-лестница: prefers-color-scheme → солнце по городу).

const KEY = "themeManual";

// true — светлая, false — тёмная, null — ручного выбора нет.
export function getStoredTheme(): boolean | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    if (raw === "light") return true;
    if (raw === "dark") return false;
    return null;
  } catch {
    return null;
  }
}

export function setStoredTheme(isLight: boolean): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(KEY, isLight ? "light" : "dark");
  } catch {
    /* localStorage может быть недоступен — не критично */
  }
}
