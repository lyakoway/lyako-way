import styled, { css } from "styled-components";

// Плавное появление: прозрачность + лёгкий сдвиг снизу вверх.
// $animate — проигрывать переход (появление при скролле). Если false, элемент
// уже был виден на загрузке — показываем мгновенно, без анимации.
// $delay — задержка для «ступенчатого» (staggered) появления списков.
// $y — величина стартового сдвига (px). Уважает prefers-reduced-motion.
export const RevealBox = styled.div<{
  $in: boolean;
  $animate: boolean;
  $delay: number;
  $y: number;
}>`
  opacity: ${({ $in }) => ($in ? 1 : 0)};
  transform: translateY(${({ $in, $y }) => ($in ? "0" : `${$y}px`)});
  will-change: opacity, transform;

  ${({ $animate, $delay }) =>
    $animate
      ? css`
          transition:
            opacity 1s ease,
            transform 1s cubic-bezier(0.22, 1, 0.36, 1);
          transition-delay: ${$delay}ms;
        `
      : css`
          transition: none;
        `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;
