import styled, { css } from "styled-components";
import { TABLET_959, MOBILE_660, MOBILE_560 } from "src/common/lib/media";
import { PANEL_TEXT, PANEL_BORDER } from "src/common/lib/panelStyles";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.div<{ $embedded?: boolean }>`
  display: flex;
  align-items: center;
  white-space: pre-wrap;
  font-family: Inter;
  font-weight: 600;
  line-height: 24px;

  /* модалка: центр, капс, тёмный текст на светлом фоне модалки.
     встроенная форма: слева, без капса, белый текст под слейт-панель. */
  justify-content: ${({ $embedded }) => ($embedded ? "flex-start" : "center")};
  text-transform: ${({ $embedded }) => ($embedded ? "none" : "uppercase")};
  font-size: ${({ $embedded }) => ($embedded ? "20px" : "20px")};
  color: ${({ $embedded, theme }) =>
    $embedded ? PANEL_TEXT : theme.color.text.primary};
  border-bottom: ${({ $embedded, theme }) =>
    $embedded
      ? `1px solid ${PANEL_BORDER}`
      : `2px solid ${theme.color.basic.borderModal}`};
  padding: ${({ $embedded }) => ($embedded ? "20px 24px" : "20px 50px 20px 20px")};

  @media ${MOBILE_560} {
    flex-direction: column;
    align-items: ${({ $embedded }) => ($embedded ? "flex-start" : "center")};
    font-size: 16px;
  }
`;

export const Content = styled.div<{ $embedded?: boolean }>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  /* в модалке высота ограничена вьюпортом; встроенная форма растёт по контенту */
  max-height: ${({ $embedded }) =>
    $embedded ? "none" : "calc(100vh - 160px)"};
  padding: 20px;
  gap: 20px;

  /* встроенная форма прозрачна — видна слейт-поверхность карточки */
  background-color: ${({ $embedded, theme }) =>
    $embedded ? "transparent" : theme.color.background.form};

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
    max-height: calc(100vh - 220px);
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
`;
