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

// Анимированный power-тумблер на основании лампы (адаптация примера).
// Светлая тема (checked) — зелёный «ON», тёмная — красный «OFF».
// Символ питания белый, при переключении «дорисовывается» кольцо и линия.
export const LampSwitchLabel = styled.label`
  position: absolute;
  left: 5.24%;
  top: 69.78%;
  transform: translate(-50%, -50%);
  z-index: 15;
  width: 1.5em;
  height: 1.5em;
  font-size: 12px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  --hue: 223;
  --offHue: 3;
  --onHue: 123;
  --off1: hsl(var(--offHue), 90%, 25%);
  --off2: hsl(var(--offHue), 90%, 40%);
  --off3: hsl(var(--offHue), 90%, 50%);
  --off4: hsl(var(--offHue), 90%, 65%);
  --on1: hsl(var(--onHue), 90%, 15%);
  --on2: hsl(var(--onHue), 90%, 30%);
  --on3: hsl(var(--onHue), 90%, 40%);
  --on4: hsl(var(--onHue), 90%, 55%);

  .t__checkbox,
  .t__svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .t__checkbox {
    margin: 0;
    background-color: var(--off2);
    border-radius: 50%;
    box-shadow: 0 0 0 0.1em var(--off1) inset, 0 0 0 0.2em var(--off4) inset,
      -0.3em 0.5em 0 var(--off3) inset, 0 0.15em 0 hsla(0, 0%, 0%, 0.2);
    filter: brightness(1);
    cursor: pointer;
    transition: background-color 0.15s linear, box-shadow 0.15s linear,
      filter 0.15s linear, transform 0.15s linear;
    -webkit-appearance: none;
    appearance: none;
  }
  .t__checkbox:active {
    box-shadow: 0 0 0 0.1em var(--off1) inset, 0 0 0 0.2em var(--off4) inset,
      -0.3em 0.5em 0 var(--off3) inset, 0 0.05em 0 hsla(0, 0%, 0%, 0.2);
  }
  .t__checkbox:active,
  .t__checkbox:active + .t__svg {
    transform: scale(0.9);
  }
  .t__checkbox:checked {
    background-color: var(--on2);
    box-shadow: 0 0 0 0.1em var(--on1) inset, 0 0 0 0.2em var(--on4) inset,
      -0.3em 0.5em 0 var(--on3) inset, 0 0.15em 0 hsla(0, 0%, 0%, 0.2);
  }
  .t__checkbox:checked:active {
    box-shadow: 0 0 0 0.1em var(--on1) inset, 0 0 0 0.2em var(--on4) inset,
      -0.3em 0.5em 0 var(--on3) inset, 0 0.05em 0 hsla(0, 0%, 0%, 0.2);
  }
  .t__checkbox:focus,
  .t__checkbox:hover {
    filter: brightness(1.2);
  }
  .t__checkbox:focus {
    outline: 0;
  }

  .t__sr {
    position: absolute;
    top: 0;
    left: 0;
    clip: rect(1px, 1px, 1px, 1px);
    overflow: hidden;
    width: 1px;
    height: 1px;
  }

  .t__svg {
    pointer-events: none;
    transition: transform 0.15s linear;
  }
  .t__svg-ring,
  .t__svg-line {
    stroke: hsl(var(--hue), 90%, 100%);
  }
  .t__svg-ring {
    stroke-dasharray: 0 5 27.7 5;
    transition: stroke 0.15s ease-in-out,
      stroke-dasharray 0.3s 0.25s ease-in-out;
  }
  .t__checkbox:checked + .t__svg .t__svg-ring {
    stroke-dasharray: 0 0 0 37.7;
    transition-delay: 0s;
  }
  .t__svg-line {
    stroke-dashoffset: 3;
    transition: stroke 0.15s linear, stroke-dashoffset 0.3s ease-in-out;
  }
  .t__svg-line:nth-of-type(1) {
    transition-delay: 0s, 0.25s;
  }
  .t__checkbox:checked + .t__svg .t__svg-line:nth-of-type(1) {
    stroke-dashoffset: -6;
    transition-delay: 0s;
  }
  .t__svg-line:nth-of-type(2) {
    stroke-dashoffset: 6;
  }
  .t__checkbox:checked + .t__svg .t__svg-line:nth-of-type(2) {
    stroke-dashoffset: -3;
    transition-delay: 0s, 0.25s;
  }
`;
