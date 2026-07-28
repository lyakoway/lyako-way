import styled, { keyframes } from "styled-components";
import { MOBILE_480, MOBILE_660 } from "src/common/lib/media";
import { Z_INDEX_TOAST } from "src/common/constants/zIndex";

const toastInRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  font-size: 14px;
  position: fixed;
  z-index: ${Z_INDEX_TOAST};
  bottom: 1rem;
  right: 1rem;

  @media ${MOBILE_660} {
    left: 1rem;
    bottom: 6rem;
  }

  @media ${MOBILE_480} {
    left: 1rem;
    bottom: 6rem;
  }
`;

export const Notification = styled.div<{ $borderColor?: string }>`
  display: flex;
  align-items: center;
  gap: 10px;
  transition: 0.3s ease;

  box-sizing: border-box;
  /* Ширина по содержимому (на десктопе короткие тосты компактные), но не уже
     min-width — чтобы текст было видно по центру рядом с иконкой слева. */
  width: fit-content;
  min-width: 240px;
  max-width: calc(100vw - 2rem);
  color: #fff;
  /* Слева меньше, справа место под крестик. */
  padding: 9px 38px 9px 14px;
  /* Тёмная панель в стиле сайта + скруглённые углы; тонкая рамка цвета статуса. */
  background: var(--panel-bg);
  border-radius: 12px;
  border: 1px solid ${({ $borderColor }) => $borderColor};
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.35);
  position: relative;

  animation: ${toastInRight} 0.7s 1; /* Указываем название анимации, её время и количество повторов*/
  animation-fill-mode: forwards; /* Чтобы элемент оставался в конечном состоянии анимации */

  @media ${MOBILE_660} {
    width: 100%;
  }

  svg {
    width: 20px;
    height: 20px;
    min-width: 20px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Занимает оставшуюся ширину и центрирует текст (иконка — слева по центру). */
  flex: 1 1 auto;
  min-width: 0;
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 15px;
  text-align: center;
  margin: 0;
  overflow-wrap: anywhere;
  word-break: break-word;
`;

export const Text = styled.p`
  margin: 4px 0 0;
  text-align: center;
  overflow-wrap: anywhere;
  word-break: break-word;
`;

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  margin-right: 8px;
  flex-direction: row-reverse;

  & > div {
    color: red;
    font-size: 34px;
    width: 26px;
    height: 26px;
  }
`;

export const WrapperClose = styled.div`
  position: absolute;
  /* Строго по центру по вертикали — вровень с текстом. */
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  & > div {
    color: #fff;
    /* убираем отступы кнопки, иначе глиф смещается вверх от центра */
    margin: 0;
  }
`;

export const Content = styled.div`
  max-height: calc(100vh - 160px);
  overflow: hidden auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.75rem;

  /* Основная ширина полосы прокрутки. */
  ::-webkit-scrollbar {
    width: 16px;
  }

  /* Цвет дорожки, по которой двигается бегунок прокрутки. */
  ::-webkit-scrollbar-track {
    background: #464a5352;
    border-radius: 10px;
    background-clip: content-box;
    /* opacity: 0;
  background-color: transparent; */
  }

  /* Размер и цвет бегунка. */
  ::-webkit-scrollbar-thumb {
    background: #464a53;
    border: 6px solid #f1f1f1;
    border-radius: 10px;
  }
  /* Размер бегунка при наведении на него курсора. */
  ::-webkit-scrollbar-thumb:hover {
    border: 4px solid #ffff;
  }
`;
