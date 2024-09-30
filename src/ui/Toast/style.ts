import styled, { keyframes } from 'styled-components';
import { MOBILE_480, MOBILE_660 } from '../../../common/media';
import { Z_INDEX_TOAST } from '../../../common/constants/zIndex';

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

export const Notification = styled.div<{ backgroundColor?: string }>`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  border-radius: 4px;
  box-shadow: 0 0 10px #999;
  color: #000;
  transition: 0.3s ease;

  width: 365px;
  color: #fff;
  padding: 12px 40px 12px 12px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: relative;

  //transition: 1s; /*Скорость перехода состояния элемента*/
  animation: ${toastInRight} 0.7s 1; /* Указываем название анимации, её время и количество повторов*/
  animation-fill-mode: forwards; /* Чтобы элемент оставался в конечном состоянии анимации */
  //animation-delay: 1s; /* Задержка перед началом */

  @media ${MOBILE_480} {
    width: 100%;
  }

  &:hover {
    box-shadow: 0 0 12px #fff;
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
  border-left: 1px solid #fff;
  padding-left: 6px;
  margin-left: 12px;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 16px;
  text-align: left;
  margin-top: 0;
  margin-bottom: 6px;
  width: 300px;
  height: 18px;
`;

export const Text = styled.p`
  margin: 0;
  text-align: left;
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
  top: 12px;
  right: 12px;
  & > div {
    color: #fff;
  }
`;

export const Content = styled.div`
  max-height: calc(100vh - 160px);
  overflow: hidden auto;
  padding: 12px;

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
