import { useState } from "react";

import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

// SSR-безопасный media-query хук: на сервере и на первом клиентском рендере
// возвращает defaultValue (совпадает с гидрацией), затем до отрисовки
// обновляется до реального значения — без рассинхрона гидрации и мигания.
export const useMediaQuery = (query: string, defaultValue = false): boolean => {
  const [matches, setMatches] = useState(defaultValue);

  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mql = window.matchMedia(query);
    const update = () => setMatches(mql.matches);

    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [query]);

  return matches;
};
