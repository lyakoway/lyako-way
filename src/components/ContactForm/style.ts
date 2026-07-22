import styled, { css } from "styled-components";
import { TABLET_959, MOBILE_660, MOBILE_560 } from "src/common/lib/media";
import { PANEL_TEXT, PANEL_BORDER } from "src/common/lib/panelStyles";
// Контейнеры полей (фон = background.modal) — затемняем их во встроенной
// форме в тёмной теме через styled-селекторы, не трогая модалку.
import { SelectContainer as InputFieldBox } from "src/ui/Input/Input/style";
import { SelectContainer as SelectFieldBox } from "src/ui/Select/style";
import {
  SelectContainer as TextareaFieldBox,
  TextareaStyle,
} from "src/ui/Textarea/style";

// Тёмная заливка полей и кнопки для встроенной формы в тёмной теме.
const EMBEDDED_DARK_FIELD = "#1a1d22";
const EMBEDDED_DARK_BUTTON = "#2c333b";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.div<{ $embedded?: boolean }>`
  display: flex;
  align-items: center;
  white-space: pre-wrap;
  font-weight: 600;
  line-height: 24px;

  /* модалка: Inter, центр, капс, тёмный текст на светлом фоне модалки.
     встроенная форма: как остальные заголовки сайта — базовый шрифт
     (Poppins), слева, без капса, белый, размеры 18→24 как у ServiceTitle. */
  font-family: ${({ $embedded }) =>
    $embedded ? "var(--font-family-base), sans-serif" : "Inter"};
  justify-content: ${({ $embedded }) => ($embedded ? "flex-start" : "center")};
  text-transform: ${({ $embedded }) => ($embedded ? "none" : "uppercase")};
  font-size: ${({ $embedded }) => ($embedded ? "18px" : "20px")};
  color: ${({ $embedded, theme }) =>
    $embedded ? PANEL_TEXT : theme.color.text.primary};
  border-bottom: ${({ $embedded, theme }) =>
    $embedded
      ? `1px solid ${PANEL_BORDER}`
      : `2px solid ${theme.color.basic.borderModal}`};
  padding: ${({ $embedded }) => ($embedded ? "20px 24px" : "20px 50px 20px 20px")};

  ${({ $embedded }) =>
    $embedded
      ? css`
          @media (min-width: 580px) {
            font-size: 24px;
          }
        `
      : css`
          @media ${MOBILE_560} {
            flex-direction: column;
            font-size: 16px;
          }
        `}
`;

export const Content = styled.div<{ $embedded?: boolean }>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  /* встроенная форма растёт по контенту (без внутреннего скролла и без
     перераспределения полей при открытии клавиатуры); в модалке — скролл.
     Обе оси visible: если одна ось hidden, другая visible трактуется как
     auto и появляется лишний скроллбар. */
  overflow-x: ${({ $embedded }) => ($embedded ? "visible" : "hidden")};
  overflow-y: ${({ $embedded }) => ($embedded ? "visible" : "auto")};
  max-height: ${({ $embedded }) =>
    $embedded ? "none" : "calc(100vh - 160px)"};
  padding: 20px;
  gap: 20px;

  /* встроенная форма прозрачна — видна слейт-поверхность карточки */
  background-color: ${({ $embedded, theme }) =>
    $embedded ? "transparent" : theme.color.background.form};

  /* в тёмной теме встроенной формы делаем заливку полей темнее */
  ${({ $embedded, theme }) =>
    $embedded &&
    theme.name === "dark" &&
    css`
      ${InputFieldBox},
      ${SelectFieldBox},
      ${TextareaFieldBox},
      ${TextareaStyle} {
        background-color: ${EMBEDDED_DARK_FIELD};
      }
    `}

  /* Основная ширина полосы прокрутки. */
  &::-webkit-scrollbar {
    width: 16px;
  }

  /* Цвет дорожки, по которой двигается бегунок прокрутки. */
  &::-webkit-scrollbar-track {
    background: #464a5352;
    border-radius: 10px;
    background-clip: content-box;
    /* opacity: 0;
  background-color: transparent; */
  }

  /* Размер и цвет бегунка. */
  &::-webkit-scrollbar-thumb {
    background: #464a53;
    border: 6px solid #f1f1f1;
    border-radius: 10px;
  }
  /* Размер бегунка при наведении на него курсора. */
  &::-webkit-scrollbar-thumb:hover {
    border: 4px solid #ffff;
  }

  @media ${MOBILE_660} {
    max-height: ${({ $embedded }) =>
      $embedded ? "none" : "calc(100vh - 220px)"};
    border-radius: 0;
  }
`;

export const InputWrapper = styled.div<{ $embedded?: boolean }>`
  display: grid;
  gap: 20px;
  /* модалка — авто-заполнение; встроенная форма — ровные 2 колонки */
  grid-template-columns: ${({ $embedded }) =>
    $embedded ? "repeat(2, minmax(0, 1fr))" : "repeat(auto-fill, minmax(250px, 1fr))"};

  ${({ $embedded }) =>
    $embedded &&
    css`
      @media ${MOBILE_660} {
        grid-template-columns: 1fr;
      }
    `}
`;

export const Footer = styled.div<{ $embedded?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 20px;

  border-top: ${({ $embedded, theme }) =>
    $embedded
      ? `1px solid ${PANEL_BORDER}`
      : `2px solid ${theme.color.basic.borderModal}`};

  @media ${TABLET_959} {
    flex-direction: column-reverse;
  }

  @media ${MOBILE_660} {
    padding-top: 20px;
    /* в модалке большой нижний отступ (под клавиатуру/панель); встроенной не нужен */
    padding-bottom: ${({ $embedded }) => ($embedded ? "20px" : "220px")};
  }

  ${({ $embedded }) =>
    $embedded &&
    css`
      @media ${TABLET_959} {
        flex-direction: row;
      }
    `}

  /* тёмная кнопка «Отправить» во встроенной форме тёмной темы —
     темнее, но с рамкой и белым текстом, чтобы была хорошо видна;
     ховер остаётся оранжевым. */
  ${({ $embedded, theme }) =>
    $embedded &&
    theme.name === "dark" &&
    css`
      button {
        background-color: ${EMBEDDED_DARK_BUTTON};
        box-shadow: 0 1px rgba(255, 255, 255, 0.1) inset,
          0 3px 5px rgba(0, 1, 6, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.2);
      }
    `}
`;
