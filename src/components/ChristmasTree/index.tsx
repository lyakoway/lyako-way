import React from "react";
import styled, { keyframes, css } from "styled-components";

// // 🔴 Анимации мигания лампочек
// const blinkRed = keyframes`
//   20% { background: #de3939; }
// `;
// const blinkYew = keyframes`
//   60% { background: #69e622; }
// `;
// const blinkPurple = keyframes`
//   75% { background: #9c6aff; }
// `;
// const blinkBlue = keyframes`
//   100% { background: #0ebeFF; }
// `;

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
const TreeStar = styled.div`
  position: absolute;
  top: 0;
  left: 40%;
  z-index: 4;

  &::before {
    content: "";
    position: absolute;
    bottom: -16px;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 25px solid #fcd000;
    box-shadow: 1px 19px 20px -7px #1d5022;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 25px solid #fcd000;
  }
`;

// 🌿 Части елки с "иголками" общий компонент
const TreeLeaves = styled.div`
  position: relative;
`;

// Вехняя часть елки
const TreePart1 = styled.div`
  width: 0;
  height: 0;
  border-left: 80px solid transparent;
  border-right: 80px solid transparent;
  border-bottom: 100px solid #49bd55;
  position: relative;
  z-index: 3;

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
const LightBulbRed = styled(LightBulb)`
  background: #de3939;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.14), 0 2px 6px 2px #de3939;
  transform: rotateZ(-73deg);
  top: 2px;
  left: -9px;
  animation: ${blinkRed} 1s ease-in-out infinite alternate;
`;

// Зеленая лампочка на проводе
const LightBulbYew = styled(LightBulb)`
  background: #69e622;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.14), 0 2px 6px 2px #69e622;
  transform: rotateZ(-86deg);
  top: 6px;
  left: 20px;
  animation: ${blinkYew} 1.2s ease-in-out infinite alternate;
`;

// Фиолетовая лампочка на проводе
const LightBulbPurple = styled(LightBulb)`
  background: #9c6aff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.14), 0 2px 6px 2px #9c6aff;
  transform: rotateZ(-96deg);
  top: 6px;
  left: 50px;
  animation: ${blinkPurple} 1.4s ease-in-out infinite alternate;
`;

// Синяя лампочка на проводе
const LightBulbBlue = styled(LightBulb)`
  background: #0ebeff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.14), 0 2px 6px 2px #0ebeff;
  transform: rotateZ(-106deg);
  top: 3px;
  left: 75px;
  animation: ${blinkBlue} 1.1s ease-in-out infinite alternate;
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

// 🌲 Компонент елки
export const ChristmasTree: React.FC = () => {
  return (
    <Tree>
      <TreeStar />
      <TreeLeaves>
        <TreePart1>
          <TreeLightsLeft>
            <LightBulbRed />
            <LightBulbYew />
            <LightBulbPurple />
            <LightBulbBlue />
          </TreeLightsLeft>
          <TreeLightsRight>
            <LightBulbRed />
            <LightBulbYew />
            <LightBulbPurple />
            <LightBulbBlue />
          </TreeLightsRight>
        </TreePart1>
        <TreePart2>
          <TreeLightsLeft>
            <LightBulbRed />
            <LightBulbYew />
            <LightBulbPurple />
            <LightBulbBlue />
          </TreeLightsLeft>
          <TreeLightsRight>
            <LightBulbRed />
            <LightBulbYew />
            <LightBulbPurple />
            <LightBulbBlue />
          </TreeLightsRight>
        </TreePart2>
        <TreePart3>
          <TreeLightsLeft>
            <LightBulbRed />
            <LightBulbYew />
            <LightBulbPurple />
            <LightBulbBlue />
          </TreeLightsLeft>
          <TreeLightsRight>
            <LightBulbRed />
            <LightBulbYew />
            <LightBulbPurple />
            <LightBulbBlue />
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
