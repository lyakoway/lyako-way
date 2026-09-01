import styled, { css } from "styled-components";
import { MOBILE_560 } from "src/common/lib/media";
import {
  PANEL_TEXT,
  PANEL_BORDER,
  PANEL_ELEVATED,
} from "src/common/lib/panelStyles";
import {
  pressedFill,
} from "src/common/lib/usePressAnimation";
import { runningBorder } from "src/common/lib/runningBorder";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.div<{ $section?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: pre-wrap;
  color: ${PANEL_TEXT};
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-transform: uppercase;
  border-bottom: 2px solid ${PANEL_BORDER};

  /* Верхний заголовок: правый отступ под крестик закрытия. Секционный
     («Выбрать погоду») — симметричный, чтобы текст был строго по центру. */
  padding: ${({ $section }) =>
    $section ? "20px" : "20px 50px 20px 20px"};

  /* Верхнюю шапку (не секционную) закрепляем сверху скролл-области модалки —
     она остаётся на месте вместе с крестиком закрытия, скроллится только
     содержимое ниже. Непрозрачный фон, чтобы контент не просвечивал под ней. */
  ${({ $section }) =>
    !$section &&
    css`
      position: sticky;
      top: 0;
      /* Выше любого содержимого, что уезжает под шапку при скролле
         (выпадашка поиска z-index:15 и пр.). */
      z-index: 20;
      background: var(--panel-bg);
    `}

  @media ${MOBILE_560} {
    flex-direction: column;
    font-size: 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px 12px;
  margin: 20px;
  justify-content: center;

  /* <436px — ограничиваем ширину под 3 иконки в ряд → раскладка 3 + 3. */
  @media (max-width: 435px) {
    max-width: 210px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const WeatherIconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  z-index: 1000;
  bottom: 0;
  left: 0;
  border: solid 4px #ffff;
  cursor: pointer;
  background: linear-gradient(to bottom, #57c1eb 0%, #246fa8 100%);
  border-radius: 50%;
  ${({ $active }) =>
    $active &&
    css`
      border: solid 4px #ff8560;
    `}
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  gap: 20px;
`;

// Обёртка поля города без собственной рамки: рамка (и ревил-анимация) — у
// самого поля (SelectContainer), вторая рамка сверху давала «двойную линию».
export const SearchInputWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: stretch;

  /* Поле города тянется, гео-кнопка — компактная иконка справа. */
  & > :first-child {
    flex: 1;
    min-width: 0;
  }
`;

// Кнопка «моё местоположение»: точная геолокация по явному клику (браузерный
// диалог разрешения показывается только на это действие). Стилистика — как у
// кнопки «Найти»: приподнятый фон, граница панели, оранжевый на наведении.
export const GeoButton = styled.button<{
  disabled?: boolean;
  $pressed?: boolean;
  $scaling?: boolean;
}>`
  /* Прожатие — в точности как у кнопки «Найти»: runningBorder (заливка и
     бегущая оранжевая рамка на hover/active) + закраска через $pressed и
     продавливание через $scaling (usePressAnimation). */
  ${runningBorder}
  ${pressedFill}
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  padding: 0;
  /* Радиус — как у поля города рядом (SearchInput, 12px). */
  border-radius: 12px;
  cursor: pointer;
  background: ${PANEL_ELEVATED};
  border: 1px solid ${PANEL_BORDER};
  color: ${PANEL_TEXT};
  -webkit-tap-highlight-color: transparent;
  transition: transform 0.15s cubic-bezier(0.22, 1, 0.36, 1),
    background-color 1s ease-in-out, border-color 1s ease-in-out,
    color 0.4s ease;

  ${({ $scaling }) =>
    $scaling &&
    css`
      transform: scale(0.94);
    `}

  svg {
    width: 18px;
    height: 18px;
  }

  &:disabled {
    cursor: default;
    opacity: 0.6;
  }
`;
