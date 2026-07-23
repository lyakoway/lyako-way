import { useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

type UseInViewOptions = IntersectionObserverInit & {
  /** Сработать один раз и отключиться (по умолчанию true). */
  once?: boolean;
};

type InViewState = {
  /** Показывать элемент. */
  inView: boolean;
  /** Проигрывать переход (появление при скролле). false — показываем мгновенно
   *  (элемент был виден на входе на страницу). */
  animate: boolean;
};

/**
 * Отслеживает попадание элемента во вьюпорт.
 * Анимируем появление ТОЛЬКО при реальном скролле пользователя. Если элемент
 * виден сразу (на загрузке или при переходе на страницу) — показываем без
 * анимации. Так карточки не «едут» при заходе на страницу без скролла, а
 * плавно проявляются только когда к ним доскроллили.
 * SSR-safe: на сервере/без IO элемент сразу видим.
 */
export const useInView = <T extends HTMLElement = HTMLDivElement>(
  options?: UseInViewOptions
) => {
  const ref = useRef<T>(null);
  const [state, setState] = useState<InViewState>({
    inView: false,
    animate: false,
  });

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setState({ inView: true, animate: false });
      return;
    }

    // Синхронная проверка ДО отрисовки: элемент уже в зоне видимости на входе
    // → показываем сразу, без анимации.
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh && rect.bottom > 0) {
      setState({ inView: true, animate: false });
      return;
    }

    // Элемент ниже сгиба. Анимируем его появление ТОЛЬКО если пользователь
    // реально скроллил — а не из-за досчёта вёрстки/перехода между страницами
    // (тогда observer тоже сработает, но скролла не было → показываем мгновенно).
    let userScrolled = false;
    const onScroll = () => {
      userScrolled = true;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const { once = true, threshold, rootMargin, root } = options ?? {};

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setState({ inView: true, animate: userScrolled });
            if (once) io.disconnect();
          } else if (!once) {
            setState({ inView: false, animate: true });
          }
        });
      },
      {
        threshold: threshold ?? 0,
        rootMargin: rootMargin ?? "0px",
        root: root ?? null,
      }
    );

    io.observe(el);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
    // options читаем один раз при монтировании — намеренно.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, inView: state.inView, animate: state.animate };
};
