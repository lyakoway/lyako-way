import styled, { css, keyframes } from "styled-components";
import { TABLET_959, MOBILE_660 } from "src/common/lib/media";
import { Z_INDEX_MODAL } from "src/common/constants/zIndex";
import myIconComp from "src/common/icon/modal/fonIt.png";

const modalAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const overlayAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Overlay = styled.div<{ $backgroundOverlay?: string | null }>`
  display: flex;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background: url(${myIconComp.src}) no-repeat center;
  ${({ $backgroundOverlay }) =>
    $backgroundOverlay &&
    css`
      background: ${$backgroundOverlay};
    `}
  background-size: cover;
  align-items: center;
  justify-content: center;

  z-index: ${Z_INDEX_MODAL};

  transition: all 0.3s ease-in-out;
  animation: ${overlayAnimation} 0.3s 1; /* Указываем название анимации, её время и количество повторов*/
  animation-fill-mode: forwards; /* Чтобы элемент оставался в конечном состоянии анимации */
`;

export const ModalComponent = styled.div<{
  width?: string | null;
  $background?: string | null;
}>`
  position: relative; /* якорь для крестика закрытия (IconClose) */
  display: flex;
  flex-direction: column;
  width: ${({ width }) => (width ? width : "824px")};
  //background-color: rgb(255, 255, 255);
  /* Фон окна: переданный (напр. тёмная панель проекта) либо светлый из темы. */
  background-color: ${({ $background, theme }) =>
    $background || theme.color.background.modal};
  box-shadow: 0 1.2px 18px rgba(0, 0, 0, 0.08), 0 6.4px 29px rgba(0, 0, 0, 0.12);
  border-radius: 8px;

  /* Ограничиваем высоту окна вьюпортом и прячем внешний overflow — сам бокс
     (и крестик закрытия) остаётся на месте, а длинный контент прокручивается
     внутри (см. Content). Короткий контент — бокс сжимается по нему как раньше. */
  max-height: 100vh;
  overflow: hidden;

  @media ${TABLET_959} {
    width: 84%;
  }

  @media ${MOBILE_660} {
    height: 100vh;
    width: 100vw;
    border-radius: 0;
  }

  transition: all 0.3s ease-in-out;
  animation: ${modalAnimation} 0.7s 1; /* Указываем название анимации, её время и количество повторов*/
  animation-fill-mode: forwards; /* Чтобы элемент оставался в конечном состоянии анимации */
`;

export const IconClose = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: calc(22px);
  /* Выше закреплённой (sticky) шапки контента, чтобы крестик не прятался
     под неё при скролле (см. Header в ClimateControl). */
  z-index: 3;

  &:hover {
    cursor: pointer;
  }

  &:hover:before {
    content: "";
    position: absolute;
    top: -6px;
    left: -6px;
    bottom: -6px;
    right: -6px;
    border-radius: 50%;
    background-color: ${({ theme }) =>
      theme.name === "light" ? "rgba(98, 108, 119, 0.25)" : "#d4d4d559"};
  }

  & svg {
    fill: ${({ theme }) => (theme.name === "light" ? "#7b7e86" : "#fff")};
  }

  &:hover svg {
    fill: red;
  }
`;

export const Content = styled.div`
  /* Прокручиваемая область модалки: занимает оставшуюся высоту и скроллит
     содержимое, если оно не помещается (min-height:0 обязателен, иначе
     flex-элемент не даёт себя сжать и скролл не появляется). */
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  /* Изолируем стековый контекст: любые z-index внутри контента не могут
     перекрыть крестик закрытия (IconClose), который лежит снаружи Content. */
  isolation: isolate;
`;
