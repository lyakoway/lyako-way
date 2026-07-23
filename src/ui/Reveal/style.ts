import styled, { css, keyframes } from "styled-components";

// Появление задаём КЕЙФРЕЙМ-анимацией (а не transition): свойство animation
// не конфликтует с собственным `transition` обёрнутого компонента (например
// у ServiceItem — transition для ховера), поэтому reveal работает везде, где
// используется `as={Компонент}`, и не ломает ховер-переходы.
const revealIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(var(--reveal-y, 24px));
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// $in — показывать; $animate — проигрывать появление (при скролле). Если
// $animate=false, элемент был виден на входе — показываем мгновенно, без
// анимации. $delay — задержка (staggered списки). $y — стартовый сдвиг (px).
export const RevealBox = styled.div<{
  $in: boolean;
  $animate: boolean;
  $delay: number;
  $y: number;
}>`
  --reveal-y: ${({ $y }) => $y}px;
  opacity: ${({ $in }) => ($in ? 1 : 0)};
  transform: translateY(${({ $in }) => ($in ? "0" : "var(--reveal-y)")});
  will-change: opacity, transform;

  ${({ $in, $animate, $delay }) =>
    $in &&
    $animate &&
    css`
      /* fill-mode: backwards — держим стартовое (скрытое) состояние во время
         задержки (для стаггера), но НЕ фиксируем финальное после завершения.
         Иначе анимация удерживала бы transform: translateY(0) и перекрывала
         ховер-подъём карточки (:hover translateY(-2px)). После окончания
         возвращаемся к базовому состоянию ($in → opacity 1, translateY 0),
         совпадающему с концом анимации, — без скачка, и ховер снова работает. */
      animation: ${revealIn} 1s cubic-bezier(0.22, 1, 0.36, 1) ${$delay}ms
        backwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    animation: none;
  }
`;
