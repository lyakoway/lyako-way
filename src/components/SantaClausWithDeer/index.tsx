import React from "react";
import styled, { keyframes } from "styled-components";
import { useSelectorTyped } from "src/store";
import { isNewYearPeriod } from "src/common/utils/isNewYearPeriod";

export type SantaProps = {
  width?: number | string; // e.g. 120 or "120px" or "6rem"
  className?: string;
  themeLight?: boolean;
};

const Wrapper = styled.div<{ w?: number | string }>`
  position: absolute;
  z-index: 4;
  display: grid;
  place-items: center;
  width: ${(p) => (typeof p.w === "number" ? `${p.w}px` : p.w || "120px")};
  height: 120px;

  animation: sleigh-move 12s linear infinite;

  @keyframes sleigh-move {
    0% {
      transform: translateX(-120px); /* старт слева */
    }
    33.33% {
      transform: translateX(110px); /* середина */
    }
    66.66% {
      transform: translateX(110px); /* пауза 2 сек */
    }
    100% {
      transform: translateX(220px); /* уход вправо */
    }
  }

  svg {
    display: block;
    width: 100%;
    height: auto;
  }

  .christmas-loader__santa {
    animation: 1.5s ease-in-out infinite alternate santa-bounce;
    transform-origin: center;
  }
  .christmas-loader__lead {
    animation: 1.5s ease-in-out infinite alternate lead-tighten;
    transform-origin: left;
  }
  .christmas-loader__sleigh {
    animation: 1.5s ease-in-out infinite alternate sleigh-ride;
    transform-origin: center;
  }
  .christmas-loader__reindeer {
    animation: 3s ease-in-out infinite alternate reindeer-fly;
    transform-origin: center;
  }
  .christmas-loader__shoe {
    animation: 1.5s cubic-bezier(0.5, 0.55, 0.5, 0.7) infinite alternate fly;
    transform-origin: center;
  }
  .christmas-loader__green-package {
    animation: 1.5s cubic-bezier(0.7, 0.5, 0.5, 0.75) infinite alternate fly;
    transform-origin: center;
  }
  .christmas-loader__yellow-package {
    animation: 1.5s cubic-bezier(0.6, 0.45, 0.5, 0.8) infinite alternate fly;
    transform-origin: center;
  }

  @keyframes reindeer-fly {
    0% {
      transform: translate(0, 5%) rotate(-2deg);
    }
    50% {
      transform: translate(-3%, -5%) rotate(2deg);
    }
    100% {
      transform: translate(-3%, 15%) rotate(-2deg);
    }
  }

  @keyframes santa-bounce {
    0% {
      transform: translateY(15%) scale(1.05, 0.95) rotate(-1deg);
    }
    100% {
      transform: translateY(-20%);
    }
  }

  @keyframes lead-tighten {
    0% {
      transform: translate(0, 10%) scaleX(1.05);
    }
    100% {
      transform: translate(0, -32%) rotate(12deg) scaleX(1.1);
    }
  }

  @keyframes fly {
    0% {
      transform: translateY(16%) scaleX(1.05);
    }
    33% {
      transform: translateY(2%);
    }
    100% {
      transform: translateY(-20%);
    }
  }

  @keyframes sleigh-ride {
    0% {
      transform: translateY(15%) rotate(-4deg);
    }
    100% {
      transform: translateY(-15%);
    }
  }
`;

export const SantaClausWithDeer: React.FC<SantaProps> = ({
  width = 120,
  className,
  themeLight,
}) => {
  // const santaShown = useSelectorTyped((state) => state.holidays.santaShown);
  const showTree = isNewYearPeriod();

  if (themeLight || !showTree) {
    return null;
  }
  return (
    <Wrapper w={width} className={className} aria-hidden="true">
      <svg
        viewBox="0 0 1709 1384"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 1.5,
        }}
      >
        <g id="santa" className="christmas-loader__santa">
          <path
            d="M250,458.333l83.333,0l0,83.334l166.667,-41.667l-83.333,-83.333l-166.667,41.666Z"
            fill="#f00"
          />
          <path
            d="M333.333,583.333l166.667,-41.666l0,-41.667l-166.667,41.667l0,41.666Z"
            fill="#fff"
          />
          <path
            d="M416.667,583.333l-83.334,0l0,83.334l208.334,41.666l-41.667,-41.666l-83.333,-41.667l-0,-41.667Z"
            fill="#fff"
          />
          <path
            d="M500,541.667l0,125l-83.333,-41.667l-0,-41.667l-83.334,0l166.667,-41.666Z"
            fill="#f8cab7"
          />
          <path
            d="M541.667,708.333l166.666,41.667l0,41.667l-166.666,-41.667l41.666,166.667l0,41.666l-291.666,0l-0,-166.666l41.666,-125l208.334,41.666Z"
            fill="#f00"
          />
        </g>

        <path
          className="christmas-loader__shoe"
          d="M166.667,416.667l83.333,-0l0,166.666l-166.667,0l83.334,-83.333l-0,-83.333Z"
          fill="#814825"
        />

        <rect
          className="christmas-loader__green-package"
          x="83.333"
          y="583.333"
          width="208.333"
          height="166.667"
          fill="#08ff8f"
        />

        <path
          className="christmas-loader__yellow-package"
          d="M166.667,500l-83.334,-83.333l-83.333,83.333l83.333,83.333l83.334,-83.333Z"
          fill="#ffeb3b"
        />

        <g id="sleigh" className="christmas-loader__sleigh">
          <path
            d="M666.667,833.333l41.666,83.334l-83.333,83.333l-458.333,0l-83.334,-208.333l291.667,-0l83.333,41.666l41.667,83.334l83.333,-0l41.667,-41.667l-0,-41.667l41.667,0Z"
            fill="#ac0000"
          />
          <path
            d="M208.333,1041.67l41.667,-41.667l41.667,0l-41.667,41.667l333.333,-0l-41.666,-41.667l41.666,0l41.667,41.667l83.333,-0l41.667,-41.667l41.667,41.667l-83.334,41.666l-666.666,0l-41.667,-41.666l41.667,-41.667l41.666,41.667l125,-0Z"
            fill="#ffa300"
          />
          <path
            d="M41.667,750l41.666,41.667l291.667,-0l83.333,41.666l-83.333,-83.333l-333.333,0Z"
            fill="#ffa300"
          />
        </g>

        <g id="reindeer" className="christmas-loader__reindeer">
          <path
            d="M1291.67,666.667l-125,-0l-0,-83.334l-41.667,0l0,83.334l41.667,41.666l-41.667,83.334l0,291.666l41.667,0l-0,-250l41.666,0l0,250l41.667,0l0,-250l250,-41.666l0,291.666l41.667,0l-0,-291.666l41.666,-0l0,291.666l41.667,0l0,-291.666l41.667,-166.667l-41.667,-41.667l-41.667,-125l83.334,0l41.666,-83.333l-83.333,0l-41.667,-41.667l-83.333,41.667l-83.333,-41.667l41.666,41.667l41.667,125l0,83.333l-83.333,41.667l-125,41.667Z"
            fill="#c8955e"
          />
          <path
            d="M1500,583.333l125,0l41.667,41.667l-166.667,0l0,170.833l-41.667,-170.833l-41.666,0l83.333,-41.667Z"
            fill="#f00"
          />
          <path
            d="M1333.33,250l41.667,41.667l41.667,-41.667l41.666,-0l-41.666,83.333l83.333,83.334l-83.333,-41.667l-83.334,-79.167l-83.333,-87.5l-41.667,-83.333l0,-41.667l41.667,-83.333l41.667,0l-0,125l41.666,-41.667l41.667,0l-83.333,83.334l41.666,83.333Z"
            fill="#4e2225"
          />
          <path
            d="M1375,0l41.667,0l-0,83.333l83.333,-83.333l41.667,0l-125,125l41.666,125l45.834,-41.667l37.5,0l-41.667,83.334l41.667,83.333l-83.334,-77.083l-83.333,-131.25l-41.667,-83.334l0,-41.666l41.667,-41.667Z"
            fill="#4e2225"
          />
          <path
            d="M1666.67,375l-0,41.667l41.666,-41.667l-41.666,0Z"
            fill="#f00"
          />
        </g>

        <path
          className="christmas-loader__lead"
          d="M708.333,750c380.556,94.444 750,-125 750,-125"
          stroke="#f00"
          strokeWidth="12.5"
          fill="none"
        />
      </svg>
    </Wrapper>
  );
};

export default SantaClausWithDeer;
