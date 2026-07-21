import { useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from "src/features/customHooks/useIsomorphicLayoutEffect";

// Вписывает фиксированный по ширине дизайн (designWidth) в контейнер:
// возвращает ref на контейнер и коэффициент масштаба. Масштабируем на всех
// ширинах — холст 960px всегда вписывается, а абсолютная раскладка сцены
// остаётся неизменной (элементы на своих местах, просто меньше).
export function useFitScale(designWidth: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el || typeof ResizeObserver === "undefined") return;

    const update = () => {
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
  }, [designWidth]);

  return { ref, scale };
}
