import styled, { css, keyframes } from "styled-components";
import { MOBILE_660 } from "src/common/lib/media";
import { controlButtonBase } from "src/common/lib/controlButton";

const bounce = keyframes`
  0% { transform: scale(1); }
  30% { transform: scale(1.3); }
  50% { transform: scale(1.1); }
  70% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

const heartFly = keyframes`
  0% { opacity: 1; transform: translateY(0) scale(1); }
  100% { opacity: 0; transform: translateY(-80px) scale(0.7); }
`;

export const confettiFly = (x: number, y: number, rotate: number) => keyframes`
  0% { transform: translate(0,0) rotate(0deg); opacity: 1; }
  100% { transform: translate(${x}px, ${y}px) rotate(${rotate}deg); opacity: 0; }
`;

// --- Стили ---
// Лайк в общем стиле контролов настроек (тёмный квадрат, белый глиф, оранжевый
// акцент). position:relative нужен для счётчика (Label) и частиц.
export const ButtonWrapper = styled.button<{ $animate?: boolean }>`
  ${controlButtonBase}
  position: relative;

  svg {
    width: 24px;
    height: 24px;
    animation: ${({ $animate }) =>
      $animate
        ? css`
            ${bounce} 0.7s ease
          `
        : "none"};
  }

  /* Сердце белое (оранжевое на акценте) — как остальные контролы. Инлайновый
     fill внутри svg перебиваем через !important. */
  svg path {
    fill: currentColor !important;
  }

  @media ${MOBILE_660} {
    margin: 0 auto;
  }
`;

export const Label = styled.div`
  /* Счётчик закреплён справа от сердца, по центру по вертикали. Левое
     выравнивание — точка привязки не смещается при смене числа (1→2 знака). */
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  /* Отступ счётчика от правой границы кнопки. */
  margin-left: 6px;
  margin-top: 9px;
  color: white;
  line-height: 1;
  font-size: 10px;
  font-weight: 400;
  font-family: "Exo 2", sans-serif;
  text-transform: uppercase;
  text-align: left;
`;

// Частицы сердечек
export const Particle = styled.div<{
  x: number;
  size: number;
  rotate: number;
  color: string;
  $fly?: boolean;
}>`
  position: absolute;
  top: -5px;
  left: 20px;
  pointer-events: none;
  transform: translateX(${(p) => p.x}px) rotate(${(p) => p.rotate}deg)
    scale(${(p) => p.size});
  color: ${(p) => p.color};
  font-size: 14px;
  animation: ${(p) =>
    p.$fly
      ? css`
          ${heartFly} 1.5s ease-out forwards
        `
      : css`
            none
          `};
`;

// Конфетти
export const ConfettiPiece = styled.div<{
  x: number;
  y: number;
  size: number;
  rotate: number;
  color: string;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(p) => p.size}px;
  height: ${(p) => p.size * 0.4}px;
  background-color: ${(p) => p.color};
  border-radius: 2px;
  pointer-events: none;
  animation: ${(p) => confettiFly(p.x, p.y, p.rotate)} 1.5s ease-out forwards;
`;

// Ключевая анимация вращения
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Лоадер вокруг числа
// Контейнер загрузки: центрирует маленькое сердечко, а кольцо-лоадер
// растягивается на весь контейнер (inset: 0) — сердечко ровно в центре кольца.
export const Loading = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  font-size: 9px;
  line-height: 1;
`;

export const Loader = styled.div`
  position: absolute;
  inset: 0;
  border: 2px solid rgba(255, 0, 0, 0.2); // светлый цвет
  border-top: 2px solid red; // яркий цвет
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

// Сердце в строке тоста (общее для глобального лайка и лайков проектов):
// размер — ровно в кегль цифр счётчика (1em от шрифта строки), посадка по
// центру через inline-block + vertical-align: middle и лёгкий подъём на
// уровень цифр, под ним — неразрывный пробел держит «❤ число» вместе.
export const ToastHeart = styled.span`
  display: inline-block;
  vertical-align: middle;
  transform: translateY(-1px);
  color: #ff3d6e;

  svg {
    display: block;
    width: 1em;
    height: 1em;
  }
`;

// Мини-версия фирменного знака «lyak◎way» для строки тоста: белые
// буквы (Exo 2), кольцо — цветом текста, искра — оранжевым акцентом,
// как у знака в сайдбаре (BrandMark). В кегль текста тоста, без обводки
// и выделения шрифта.
export const ToastLogo = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  vertical-align: middle;
  transform: translateY(-1px);
  color: #ffffff;
  font-family: "Exo 2", sans-serif;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  white-space: nowrap;

  svg {
    width: 1.1em;
    height: 1.1em;
  }

  svg circle {
    stroke-width: 2;
  }

  svg path {
    fill: ${({ theme }) => theme.color.basic.primaryLight};
  }
`;
