import styled, { css, keyframes } from "styled-components";

// Появление задаём КЕЙФРЕЙМ-анимацией (а не transition): свойство animation
// не конфликтует с собственным `transition` обёрнутого компонента и не ломает
// ховер-переходы. Поддерживаем две оси: $y — сдвиг снизу (по умолчанию),
// $x — сдвиг сбоку (например «выезд справа» у карточек резюме).
const revealIn = keyframes`
  from {
    opacity: 0;
    transform: translate(var(--reveal-x, 0px), var(--reveal-y, 24px));
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

// $in — показывать; $animate — проигрывать появление (при скролле). Если
// $animate=false, элемент был виден на входе — показываем мгновенно.
// $delay — задержка (staggered). $x/$y — стартовый сдвиг (px).
export const RevealBox = styled.div<{
  $in: boolean;
  $animate: boolean;
  $delay: number;
  $x: number;
  $y: number;
}>`
  --reveal-x: ${({ $x }) => $x}px;
  --reveal-y: ${({ $y }) => $y}px;
  opacity: ${({ $in }) => ($in ? 1 : 0)};
  transform: ${({ $in }) =>
    $in ? "translate(0, 0)" : "translate(var(--reveal-x), var(--reveal-y))"};
  will-change: opacity, transform;

  ${({ $in, $animate, $delay }) =>
    $in &&
    $animate &&
    css`
      /* fill-mode: backwards — держим стартовое (скрытое) состояние во время
         задержки (для стаггера), но НЕ фиксируем финальное после завершения,
         чтобы не перекрывать ховер-трансформ карточки. */
      animation: ${revealIn} 1s cubic-bezier(0.22, 1, 0.36, 1) ${$delay}ms
        backwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    animation: none;
  }
`;
