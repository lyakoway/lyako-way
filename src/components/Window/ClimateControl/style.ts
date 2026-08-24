import styled, { css } from "styled-components";
import { MOBILE_560 } from "src/common/lib/media";
import { PANEL_TEXT, PANEL_BORDER } from "src/common/lib/panelStyles";

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
`;
