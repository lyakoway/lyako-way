import { useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from "src/features/customHooks/useIsomorphicLayoutEffect";

// Вписывает фиксированный по ширине дизайн (designWidth) в контейнер:
// возвращает ref на контейнер и коэффициент масштаба.
// Масштабируем только на десктопе (≥ breakpoint), где сцена использует
// фиксированный холст; ниже — своя адаптивная вёрстка (scale = 1).
export function useFitScale(designWidth: number, breakpoint = 1024) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el || typeof ResizeObserver === "undefined") return;

    const update = () => {
      if (window.innerWidth < breakpoint) {
        setScale(1);
        return;
      }
      const width = el.clientWidth;
      setScale(width < designWidth ? width / designWidth : 1);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener("resize", update);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [designWidth, breakpoint]);

  return { ref, scale };
}
