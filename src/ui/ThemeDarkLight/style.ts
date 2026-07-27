import styled from "styled-components";
import { controlButtonBase } from "src/common/lib/controlButton";

// Переключатель темы в общем стиле контролов настроек.
export const ThemeButton = styled.button`
  ${controlButtonBase}
`;

// Лампочка ($on): горит тёплым жёлтым со свечением или плавно гаснет до серой.
// Переход мягкий: «загорается и гаснет постепенно» (в тёмной теме — горит).
export const Bulb = styled.svg<{ $on: boolean }>`
  width: 22px;
  height: 22px;

  .bulb-glass {
    /* Выключена — светло-серая (видна и на светлой панели #5b6774, и на тёмной),
       включена — тёплый жёлтый. */
    fill: ${({ $on }) => ($on ? "#ffe07a" : "rgba(255, 255, 255, 0.75)")};
    /* Свечение через alpha в drop-shadow — плавно затухает (от→до анимируется). */
    filter: drop-shadow(
      0 0 3px rgba(255, 214, 90, ${({ $on }) => ($on ? 0.9 : 0)})
    );
    transition: fill 0.45s ease, filter 0.45s ease;
  }

  .bulb-base {
    fill: ${({ $on }) => ($on ? "#c9a94a" : "rgba(255, 255, 255, 0.55)")};
    transition: fill 0.45s ease;
  }
`;
