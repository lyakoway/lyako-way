import React from "react";
import styled, { keyframes, css } from "styled-components";

const starShine = keyframes`
  0% {
    filter: drop-shadow(0 0 6px rgba(255, 215, 0, 0.7))
            drop-shadow(0 0 12px rgba(255, 215, 0, 0.5))
            drop-shadow(0 0 20px rgba(255, 230, 100, 0.4));
  }
  50% {
    filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.9))
            drop-shadow(0 0 18px rgba(255, 215, 0, 0.7))
            drop-shadow(0 0 28px rgba(255, 230, 100, 0.6));
  }
  100% {
    filter: drop-shadow(0 0 6px rgba(255, 215, 0, 0.7))
            drop-shadow(0 0 12px rgba(255, 215, 0, 0.5))
            drop-shadow(0 0 20px rgba(255, 230, 100, 0.4));
  }
`;

// 🔴 Анимации мигания лампочек
const blinkRed = keyframes`
  0% { opacity: 1; }
  50% { opacity: .5; }
  100% { opacity: 1; }
`;
const blinkYew = keyframes`
  0% { opacity: 1; }
  50% { opacity: .5; }
  100% { opacity: 1; }
`;
const blinkPurple = keyframes`
  0% { opacity: 1; }
  50% { opacity: .5; }
  100% { opacity: 1; }
`;
const blinkBlue = keyframes`
  0% { opacity: 1; }
  50% { opacity: .5; }
  100% { opacity: 1; }
`;

// 🌲 Контейнер елки
const Tree = styled.div`
  position: relative;
  top: 80px;
  float: left;
`;

// ⭐ Звезда
const TreeStar = styled.div<{ $themeLight: boolean }>`
  position: absolute;
  top: 0;
  left: 40%;
  z-index: 4;

  /* ⭐ Анимация сияния */
  ${({ $themeLight }) =>
    !$themeLight &&
    css`
      animation: ${starShine} 2.2s ease-in-out infinite;
    `}

  /* Нижний луч — твоя звезда */
  &::before {
    content: "";
    position: absolute;
    bottom: -16px;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 25px solid #fcd000;

    /* Сияние от нижней части */
    ${({ $themeLight }) =>
      !$themeLight &&
      css`
        filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.8));
      `}
  }

  /* Верхний луч */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 25px solid #fcd000;

    /* Сияние от верхней части */
    filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.8));
  }
`;

// 🌿 Части елки с "иголками" общий компонент
const TreeLeaves = styled.div`
  position: relative;
`;

// Вехняя часть елки
const TreePart1 = styled.div<{ $themeLight: boolean }>`
  width: 0;
  height: 0;
  border-left: 80px solid transparent;
  border-right: 80px solid transparent;
  border-bottom: 100px solid #49bd55;
  position: relative;
  z-index: 3;

  ${({ $themeLight }) =>
    $themeLight &&
    css`
      border-bottom-color: #31883a;
    `}

  &::before {
    content: "";
    position: absolute;
    width: 160px;
    background-repeat: repeat;
    height: 15px;
    background-size: 20px 20px;
    background-image: radial-gradient(
      circle at 10px 15px,
      #3fae4a 12px,
      transparent 13px
    );
    top: 99px;
    left: -80px;
    transform: rotateX(180deg);
  }
`;

// Средняя часть елки
const TreePart2 = styled.div`
  width: 0;
  height: 0;
  border-left: 80px solid transparent;
  border-right: 80px solid transparent;
  border-bottom: 100px solid #49bd55;
  position: relative;
  border-bottom-color: #31883a;
  transform: scale(1.4);
  top: -45px;
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    width: 160px;
    background-repeat: repeat;
    height: 15px;
    background-size: 20px 20px;
    background-image: radial-gradient(
      circle at 10px 15px,
      #389b42 12px,
      transparent 13px
    );
    top: 99px;
    left: -80px;
    transform: rotateX(180deg);
  }
`;

// Нижняя часть елки
const TreePart3 = styled.div`
  width: 0;
  height: 0;
  border-left: 80px solid transparent;
  border-right: 80px solid transparent;
  border-bottom: 100px solid #49bd55;
  position: relative;
  border-bottom-color: #2b7532;
  transform: scale(1.8);
  top: -80px;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    width: 160px;
    background-repeat: repeat;
    height: 15px;
    background-size: 20px 20px;
    background-image: radial-gradient(
      circle at 10px 15px,
      #31883a 12px,
      transparent 13px
    );
    top: 99px;
    left: -80px;
    transform: rotateX(180deg);
  }
`;

// Вехняя часть елки провода
const TreeLightsLeft = styled.div`
  width: 120px;
  height: 20px;
  border-radius: 50%;
  box-shadow: 0 3px 0 -1px #000;

  transform: rotateZ(-20deg);
  position: relative;
  left: -73px;
  top: 41px;
`;

// Вехняя часть елки провода
const TreeLightsRight = styled.div`
  width: 120px;
  height: 20px;
  border-radius: 50%;
  box-shadow: 0 3px 0 -1px #000;

  transform: rotateY(180deg) rotateZ(-20deg);
  position: relative;
  left: -43px;
  top: 31px;
`;

// Лампочка
const LightBulb = styled.div`
  width: 8px;
  height: 3px;
  background: black;
  margin: 20px;
  border-radius: 20% 50%;
  position: absolute;
`;

// Красная лампочка на проводе
const LightBulbRed = styled(LightBulb)<{ $themeLight: boolean }>`
  background: #de3939;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.14), 0 2px 6px 2px #de3939;
  transform: rotateZ(-73deg);
  top: 2px;
  left: -9px;
  ${({ $themeLight }) =>
    !$themeLight &&
    css`
      animation: ${blinkRed} 1s ease-in-out infinite alternate;
    `}
`;

// Зеленая лампочка на проводе
const LightBulbYew = styled(LightBulb)<{ $themeLight: boolean }>`
  background: #69e622;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.14), 0 2px 6px 2px #69e622;
  transform: rotateZ(-86deg);
  top: 6px;
  left: 20px;
  ${({ $themeLight }) =>
    !$themeLight &&
    css`
      animation: ${blinkYew} 1.2s ease-in-out infinite alternate;
    `}
`;

// Фиолетовая лампочка на проводе
const LightBulbPurple = styled(LightBulb)<{ $themeLight: boolean }>`
  background: #9c6aff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.14), 0 2px 6px 2px #9c6aff;
  transform: rotateZ(-96deg);
  top: 6px;
  left: 50px;

  ${({ $themeLight }) =>
    !$themeLight &&
    css`
      animation: ${blinkPurple} 1.4s ease-in-out infinite alternate;
    `}
`;

// Синяя лампочка на проводе
const LightBulbBlue = styled(LightBulb)<{ $themeLight: boolean }>`
  background: #0ebeff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.14), 0 2px 6px 2px #0ebeff;
  transform: rotateZ(-106deg);
  top: 3px;
  left: 75px;

  ${({ $themeLight }) =>
    !$themeLight &&
    css`
      animation: ${blinkBlue} 1.1s ease-in-out infinite alternate;
    `}
`;

// 🌳 Подставка
const TreeBase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Stalk = styled.div`
  width: 25px;
  height: 75px;
  background: #7b652d;
  box-shadow: inset 0 22px 6px -1px #302812;
  position: relative;
  top: -40px;
`;
const Jar = styled.div`
  width: 80px;
  position: relative;
  top: -40px;
  left: -6px;
  margin: 0 auto;

  &::before {
    content: "";
    width: 96px;
    height: 20px;
    float: left;
    background: #584444;
    box-shadow: 0 3px 2px -1px #4a3939;
    position: relative;
    border-radius: 2px;
    left: -5px;
  }
  &::after {
    content: "";
    border-top: 50px solid #755a5a;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    height: 0;
    width: 88px;
    float: left;
  }
`;

interface ChristmasTreeProps {
  themeLight: boolean;
}

// 🌲 Компонент елки
export const ChristmasTree: React.FC<ChristmasTreeProps> = ({ themeLight }) => {
  return (
    <Tree>
      <TreeStar $themeLight={themeLight} />
      <TreeLeaves>
        <TreePart1 $themeLight={themeLight}>
          <TreeLightsLeft>
            <LightBulbRed $themeLight={themeLight} />
            <LightBulbYew $themeLight={themeLight} />
            <LightBulbPurple $themeLight={themeLight} />
            <LightBulbBlue $themeLight={themeLight} />
          </TreeLightsLeft>
          <TreeLightsRight>
            <LightBulbRed $themeLight={themeLight} />
            <LightBulbYew $themeLight={themeLight} />
            <LightBulbPurple $themeLight={themeLight} />
            <LightBulbBlue $themeLight={themeLight} />
          </TreeLightsRight>
        </TreePart1>
        <TreePart2>
          <TreeLightsLeft>
            <LightBulbRed $themeLight={themeLight} />
            <LightBulbYew $themeLight={themeLight} />
            <LightBulbPurple $themeLight={themeLight} />
            <LightBulbBlue $themeLight={themeLight} />
          </TreeLightsLeft>
          <TreeLightsRight>
            <LightBulbRed $themeLight={themeLight} />
            <LightBulbYew $themeLight={themeLight} />
            <LightBulbPurple $themeLight={themeLight} />
            <LightBulbBlue $themeLight={themeLight} />
          </TreeLightsRight>
        </TreePart2>
        <TreePart3>
          <TreeLightsLeft>
            <LightBulbRed $themeLight={themeLight} />
            <LightBulbYew $themeLight={themeLight} />
            <LightBulbPurple $themeLight={themeLight} />
            <LightBulbBlue $themeLight={themeLight} />
          </TreeLightsLeft>
          <TreeLightsRight>
            <LightBulbRed $themeLight={themeLight} />
            <LightBulbYew $themeLight={themeLight} />
            <LightBulbPurple $themeLight={themeLight} />
            <LightBulbBlue $themeLight={themeLight} />
          </TreeLightsRight>
        </TreePart3>
      </TreeLeaves>
      <TreeBase>
        <Stalk />
        <Jar />
      </TreeBase>
    </Tree>
  );
};
