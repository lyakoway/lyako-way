import { css } from "styled-components";
import { PANEL_ELEVATED, PANEL_BORDER } from "src/common/lib/panelStyles";

// Единый вид кнопок панели «Настройки» (язык / тема / погода / лайк), чтобы
// контролы не выбивались из общего стиля проекта: полупрозрачный «приподнятый»
// фон с тонкой границей (как приподнятые блоки поверх панелей), белый глиф или
// текст, оранжевый (брендовый) акцент при наведении и нажатии.
export const controlButtonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  padding: 0;
  border: 1px solid ${PANEL_BORDER};
  border-radius: 10px;
  background: ${PANEL_ELEVATED};
  color: #ffffff;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.02em;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: color 0.2s ease, border-color 0.2s ease, transform 0.15s ease;

  svg {
    width: 22px;
    height: 22px;
  }

  /* Наведение: глиф и граница подсвечиваются оранжевым — тем же цветом, что и
     иконки телефона/мессенджеров выше (primaryLight). Только на устройствах с
     реальным курсором, чтобы на тач-экранах не «залипало». */
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: ${({ theme }) => theme.color.basic.primaryLight};
      border-color: ${({ theme }) => theme.color.basic.primaryLight};
    }
  }

  &:active {
    transform: scale(0.94);
    color: ${({ theme }) => theme.color.basic.primaryLight};
    border-color: ${({ theme }) => theme.color.basic.primaryLight};
  }
`;
