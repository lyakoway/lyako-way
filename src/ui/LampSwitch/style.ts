import styled, { css, keyframes } from "styled-components";

// Мягкое «дыхание» света включённой лампочки (в тёмной теме)
const glow = keyframes`
  0%,
  100% {
    box-shadow: 0 0 0 1.5px rgba(255, 205, 120, 0.95),
      0 0 6px 2px rgba(253, 234, 123, 0.55),
      0 0 12px 4px rgba(253, 234, 123, 0.25);
  }
  50% {
    box-shadow: 0 0 0 1.5px rgba(255, 215, 140, 1),
      0 0 8px 3px rgba(255, 240, 150, 0.75),
      0 0 16px 6px rgba(253, 234, 123, 0.35);
  }
`;

// Декоративная лампочка, встроенная в плафон: частично видна (верх-лево срезан
// краем плафона) и перекрывает запечённую жёлтую. Цвет зависит от темы:
// светлая — серая (как в ThemeDarkLight), тёмная — жёлтое свечение.
export const LampBulb = styled.div<{ $on: boolean }>`
  position: absolute;
  left: 18.51%;
  top: 14.64%;
  width: 16px;
  height: 16px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: 14;
  pointer-events: none;
  clip-path: polygon(71% 0, 100% 0, 100% 100%, 0 100%, 0 94%);
  transition: background 0.35s ease, box-shadow 0.35s ease;

  ${({ $on }) =>
    $on
      ? css`
          background: radial-gradient(
            circle at 40% 35%,
            #ffffff 0%,
            #d7d7d7 55%,
            #b9b9b9 100%
          );
          box-shadow: 0 0 0 1.5px rgba(255, 200, 120, 0.85);
        `
      : css`
          background: radial-gradient(
            circle at 40% 35%,
            #fff6cf 0%,
            #ffe07a 45%,
            #fdea7b 100%
          );
          animation: ${glow} 3s ease-in-out infinite;
        `};
`;

// Кнопка-переключатель на основании лампы (кнопка питания по центру купола).
export const LampSwitchButton = styled.button<{ $on: boolean }>`
  position: absolute;
  left: 5.24%;
  top: 69.78%;
  transform: translate(-50%, -50%);
  width: 22px;
  height: 22px;
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 15;
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: none;
  appearance: none;

  &:before {
    content: "";
    display: block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    transition: background 0.35s ease, box-shadow 0.35s ease,
      transform 0.2s ease;

    ${({ $on }) =>
      $on
        ? css`
            background: radial-gradient(
              circle at 36% 30%,
              #ffb488 0%,
              #f26b3a 55%,
              #d8471f 100%
            );
            box-shadow: 0 0 0 1px rgba(150, 40, 15, 0.35),
              0 0 5px 1px rgba(255, 120, 60, 0.5);
          `
        : css`
            background: radial-gradient(
              circle at 36% 30%,
              #9aa0aa 0%,
              #6b7280 70%,
              #545b66 100%
            );
            box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
          `};
  }

  &:hover:before {
    transform: scale(1.25);
  }

  &:active:before {
    transform: scale(0.9);
  }
`;
