import React from "react";
import styled, { keyframes, css } from "styled-components";

/* ================== CONFIG ================== */

const ELEMENTS = 128;
const LAYERS = 7;

/* ================== ANIMATION ================== */

const fadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

const swing = keyframes`
    0%, 100% {
        transform: rotate(-30deg);
        opacity: 1;
    }
    5%, 45% {
        opacity: 0.25;
    }
    50% {
        transform: rotate(30deg);
        opacity: 1;
    }
`;

/* ================== SCENE ================== */

const Scene = styled.div`
  position: relative;
  height: ${({ height }) => height}vh;
  overflow: visible;
  left: 150px;
  top: 170px;

  animation: ${({ themeLight }) => (themeLight ? fadeOut : fadeIn)} 4s
    ease-in-out forwards;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

/* ================== SUN ================== */

const Sun = styled.ul`
  position: absolute;
  top: ${({ height }) => height * 0.15}vh;
  left: 50%;
  width: 1rem;
  height: 1rem;
  transform: translateX(-50%);
`;

const Ray = styled.li`
  position: absolute;
  width: 0;
  height: 0;
  border-width: 0 0.5rem 1rem 0.5rem;
  border-style: solid;
  border-color: transparent;
  border-bottom-color: #ffce54;
  transform-origin: 0.5rem 1rem;

  ${({ index }) => css`
    transform: rotate(${index * 72}deg);
  `}
`;

/* ================== TREE ================== */

const Layers = styled.ul`
  position: relative;
`;

const Layer = styled.li`
  position: absolute;
  top: ${({ height }) => height * 0.25}vh;
  right: 50%;
  width: 0.0625rem;
  transform-origin: 50% 0;

  animation: ${swing} 4s ease-in-out infinite;

  background: linear-gradient(rgba(46, 204, 113, 0), rgba(46, 204, 113, 0.25));

  ${({ index, height }) => {
    const layerHeight = height * ((index + 4) / (ELEMENTS + 4));
    const delay = -4 * (index / (ELEMENTS / LAYERS));

    return css`
      height: ${layerHeight}vh;
      animation-delay: ${delay}s;
    `;
  }}

  &::before {
    content: "";
    position: absolute;
    left: -1px;
    bottom: 1px;
    width: 3px;
    height: 3px;
    background: ${({ index }) => {
      switch (index % 4) {
        case 0:
          return "#D8334A";
        case 1:
          return "#FFCE54";
        case 2:
          return "#2ECC71";
        default:
          return "#5D9CEC";
      }
    }};
  }
`;

/* ================== COMPONENT ================== */

export default function ChristmasTreeNew({
  height = 40, // высота ёлки в vh
  rays = 5, // количество лучей солнца
  themeLight = false,
}) {
  return (
    <Scene height={height} themeLight={themeLight}>
      <Sun height={height}>
        {Array.from({ length: rays }).map((_, i) => (
          <Ray key={i} index={i} />
        ))}
      </Sun>

      <Layers>
        {Array.from({ length: ELEMENTS }).map((_, i) => (
          <Layer key={i} index={i + 1} height={height} />
        ))}
      </Layers>
    </Scene>
  );
}
