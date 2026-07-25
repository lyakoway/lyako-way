import { useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from "src/features/customHooks/useIsomorphicLayoutEffect";

// Вписывает фиксированный по ширине дизайн (designWidth) в контейнер:
// возвращает ref на контейнер и коэффициент масштаба. Масштабируем на всех
// ширинах — холст 960px всегда вписывается, а абсолютная раскладка сцены
// остаётся неизменной (элементы на своих местах, просто меньше).
export function useFitScale(designWidth: number) {
  const ref = useRef<HTMLDivElement>(null);
  // ready=false до первого измерения: сцену показываем только после того, как
  // вычислен реальный масштаб (см. HomeStage), иначе на медленной сети она
  // успевает отрисоваться в масштабе 1 и потом «дёргается» в правильный размер.
  const [state, setState] = useState({ scale: 1, ready: false });

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el || typeof ResizeObserver === "undefined") {
      setState((s) => ({ ...s, ready: true }));
      return;
    }

    const update = () => {
      const width = el.clientWidth;
      setState({
        scale: width < designWidth ? width / designWidth : 1,
        ready: true,
      });
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

  return { ref, scale: state.scale, ready: state.ready };
}
