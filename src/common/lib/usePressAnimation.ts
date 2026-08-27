import { useCallback, useEffect, useRef, useState } from "react";
import { css } from "styled-components";

/**
 * Управление закраской кнопки при нажатии: при коротком тапе закраска
 * доигрывает до конца (~1с) и плавно уходит; при удержании — держится,
 * пока палец на кнопке. Даёт «полный проход» анимации как при ховере.
 *
 * Использование:
 *   const press = usePressAnimation();
 *   <MyButton {...press.pressHandlers} $pressed={press.pressed}>...</MyButton>
 *   (стили — pressedFill из этого же модуля)
 */
export const usePressAnimation = () => {
  const [pressed, setPressed] = useState(false);
  const releaseTimer = useRef<number | null>(null);
  const downRef = useRef(false);

  const onPointerDown = useCallback(() => {
    downRef.current = true;
    if (releaseTimer.current) window.clearTimeout(releaseTimer.current);
    setPressed(true);
  }, []);

  const onPointerUp = useCallback(() => {
    downRef.current = false;
    // Даём закраске доиграть до конца (переход 1с), затем плавный возврат
    releaseTimer.current = window.setTimeout(() => {
      if (!downRef.current) setPressed(false);
    }, 1100);
  }, []);

  const onPointerLeave = useCallback(() => {
    // Откатываем сразу ТОЛЬКО если палец/курсор ещё прижат и уводится с
    // кнопки (drag out). Если палец уже отпущен (downRef=false), НЕ трогаем:
    // на таче pointerleave срабатывает сразу после pointerup и раньше
    // обрывал закраску на полпути — теперь таймер из onPointerUp доводит
    // анимацию до конца и плавно отпускает.
    if (downRef.current) {
      downRef.current = false;
      setPressed(false);
      if (releaseTimer.current) window.clearTimeout(releaseTimer.current);
    }
  }, []);

  useEffect(
    () => () => {
      if (releaseTimer.current) window.clearTimeout(releaseTimer.current);
    },
    []
  );

  // Мгновенное продавливание (scale): true по pointerdown, false сразу
  // по pointerup — без таймера. На тач-устройствах CSS :active срабатывает
  // с задержкой (~200мс, палец нужно удерживать) — JS-состояние решает это.
  const [scaling, setScaling] = useState(false);

  return {
    pressed,
    scaling,
    pressHandlers: {
      onPointerDown: useCallback(() => {
        onPointerDown();
        setScaling(true);
      }, [onPointerDown]),
      onPointerUp: useCallback(() => {
        onPointerUp();
        setScaling(false);
      }, [onPointerUp]),
      onPointerLeave: useCallback(() => {
        onPointerLeave();
        setScaling(false);
      }, [onPointerLeave]),
    },
  };
};

// Закраска кнопки при $pressed — та же, что у :hover/:active в runningBorder,
// но управляется JS: живёт до конца анимации даже если палец уже отпущен.
// Нужен transition на background-color/border-color/color в базовом стиле
// кнопки (см. buttonBase).
export const pressedFill = css<{ $pressed?: boolean }>`
  ${({ $pressed }) =>
    $pressed &&
    css`
      background-color: ${({ theme }) => theme.color.basic.primary} !important;
      border-color: #ff8560 !important;
      color: #ffffff !important;

      [data-run-border] rect {
        stroke-dashoffset: -182 !important;
      }
    `}
`;
