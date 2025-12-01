import styled, { css, keyframes } from "styled-components";
import { MOBILE_660 } from "src/common/lib/media";

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
export const ButtonWrapper = styled.button<{ $animate?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 10px;
  background: none;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  svg {
    width: 26px;
    height: 26px;
    animation: ${({ $animate }) =>
      $animate
        ? css`
            ${bounce} 0.7s ease
          `
        : "none"};
  }

  @media ${MOBILE_660} {
    margin: 0 auto;
    margin-top: 10px;
  }
`;

export const Label = styled.div`
  position: absolute;
  color: white;
  line-height: 17px;
  font-size: 10px;
  font-weight: 400;
  font-family: "Exo 2", sans-serif;
  text-transform: uppercase;
  text-align: center;
  margin-left: 28px;
  margin-top: 30px;
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
export const Loader = styled.div`
  position: absolute;
  left: -9px;
  top: -3px;
  display: inline-block;
  margin-left: 6px;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 0, 0, 0.2); // светлый цвет
  border-top: 2px solid red; // яркий цвет
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;
