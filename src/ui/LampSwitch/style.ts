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
// Power-кнопка на основании лампы: металлический ободок, тёмное «стекло» и
// светящийся значок питания. Светлая тема — зелёный (ON), тёмная — красный (OFF).
export const LampSwitchButton = styled.button<{ $on: boolean }>`
  position: absolute;
  left: 5.24%;
  top: 69.78%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 15;
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: none;
  appearance: none;

  /* Металлический ободок */
  background: conic-gradient(
    from 220deg,
    #e9edf2,
    #9aa4b0,
    #f4f7fa,
    #838d99,
    #e9edf2
  );
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.45),
    inset 0 0 1px rgba(255, 255, 255, 0.9);
  transition: transform 0.15s ease;

  /* Тёмное «стекло» с цветным свечением-ободком */
  &:before {
    content: "";
    position: absolute;
    inset: 2px;
    border-radius: 50%;
    background: radial-gradient(circle at 50% 38%, #3a4048 0%, #14181d 100%);
    transition: box-shadow 0.35s ease;
    box-shadow: ${({ $on }) =>
      $on
        ? "0 0 0 1px rgba(55, 209, 58, 0.9), 0 0 5px 1px rgba(55, 209, 58, 0.55) inset"
        : "0 0 0 1px rgba(226, 59, 46, 0.9), 0 0 5px 1px rgba(226, 59, 46, 0.5) inset"};
  }

  /* Значок питания */
  & svg {
    position: relative;
    width: 9px;
    height: 9px;
    stroke: ${({ $on }) => ($on ? "#4be14e" : "#f0463a")};
    stroke-width: 2.6;
    stroke-linecap: round;
    fill: none;
    filter: drop-shadow(
      0 0 2px
        ${({ $on }) =>
          $on ? "rgba(75, 225, 78, 0.95)" : "rgba(240, 70, 58, 0.9)"}
    );
    transition: stroke 0.35s ease, filter 0.35s ease;
  }

  &:hover {
    transform: translate(-50%, -50%) scale(1.12);
  }

  &:active {
    transform: translate(-50%, -50%) scale(0.94);
  }
`;
