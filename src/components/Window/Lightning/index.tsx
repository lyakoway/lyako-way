import React, { FC, useEffect, useState } from "react";

import { LightningWrapper } from "./style";

const Lightning: FC = () => {
  // const [context, setContext] = useState(null);
  // const [canvasHeight, setCanvasHeight] = useState(0);
  // const [canvasWidth, setCanvasWidth] = useState(0);

  const isBrowser = typeof window !== "undefined";

  // const canvas =
  //   isBrowser && (document?.getElementById("canvas") as HTMLCanvasElement);

  // useEffect(() => {
  //   const contextValue = canvas?.getContext("2d");
  //   const canvasHeightValue = canvas?.height;
  //   const canvasWidthValue = canvas?.width;
  //   setContext(contextValue);
  //   setCanvasHeight(canvasHeightValue);
  //   setCanvasWidth(canvasWidthValue);
  // }, [canvas]);

  if (!isBrowser) {
    return null;
  }

  // const height = document.body.offsetHeight;
  // const width = document.body.offsetWidth;
  const cvs = document.getElementById("canvas");
  cvs?.setAttribute("height", "400");
  cvs?.setAttribute("width", "222");

  const canvas = document?.getElementById("canvas") as HTMLCanvasElement;
  console.log("canvas", canvas);
  const context = canvas?.getContext("2d");
  const lightningStrikeOffset = 5;
  const lightningStrikeLength = 100;
  const lightningBoltLength = 5;
  const lightningThickness = 4;
  const canvasHeight = canvas?.height;
  const canvasWidth = canvas?.width;

  console.log("canvasHeight", canvasHeight);
  console.log("canvasWidth", canvasWidth);

  const createVector = function (x, y) {
    return { x, y };
  };

  const getRandomFloat = function (min, max) {
    const random = Math.random() * (max - min + 1) + min;
    return random;
  };

  const getRandomInteger = function (min, max) {
    return Math.floor(getRandomFloat(min, max));
  };

  const clearCanvas = function (x, y, height, width) {
    const rectX = x || 0;
    const rectY = y || 0;
    const rectHeight = height || canvasHeight;
    const rectWidth = width || canvasWidth;
    context?.clearRect(rectX, rectY, rectWidth, rectHeight);
    context?.beginPath();
  };

  const line = function (start, end, thickness, opacity) {
    if (context) {
      context.beginPath();
      context.moveTo(start.x, start.y);
      context.lineTo(end.x, end.y);
      context.lineWidth = thickness;
      context.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
      context.shadowBlur = 30;
      context.shadowColor = "#bd9df2";
      context.stroke();
      context.closePath();
    }
  };

  class Lightning {
    constructor(x1, y1, x2, y2, thickness, opacity) {
      this.start = createVector(x1, y1);
      this.end = createVector(x2, y2);
      this.thickness = thickness;
      this.opacity = opacity;
    }
    draw() {
      return line(this.start, this.end, this.thickness, this.opacity);
    }
  }

  const interval = 3000;
  // const lightningStrikeOffset = 5;
  // const lightningStrikeLength = 100;
  // const lightningBoltLength = Math.random() * 10;
  // const lightningThickness = 4;
  let lightning = [];

  const createLightning = function () {
    lightning = [];
    let lightningX1 = getRandomInteger(2, canvasWidth - 2);
    let lightningX2 = getRandomInteger(
      lightningX1 - lightningStrikeOffset,
      lightningX1 + lightningStrikeOffset
    );
    lightning[0] = new Lightning(
      lightningX1,
      0,
      lightningX2,
      lightningBoltLength,
      lightningThickness,
      1
    );
    for (let l = 1; l < lightningStrikeLength; l++) {
      let lastBolt = lightning[l - 1];
      let lx1 = lastBolt.end.x;
      let lx2 = getRandomInteger(
        lx1 - lightningStrikeOffset,
        lx1 + lightningStrikeOffset
      );
      lightning.push(
        new Lightning(
          lx1,
          lastBolt.end.y,
          lx2,
          lastBolt.end.y + lightningBoltLength,
          lastBolt.thickness,
          lastBolt.opacity
        )
      );
    }
  };

  const setup = function () {
    createLightning();
    for (let i = 0; i < lightning.length; i++) {
      lightning[i].draw();
    }
  };

  const animate = function () {
    clearCanvas();

    for (let i = 0; i < lightning.length; i++) {
      lightning[i].opacity -= 0.01;
      lightning[i].thickness -= 0.05;
      if (lightning[i].thickness <= 2) {
        lightning[i].end.y -= 0.05;
      }
      lightning[i].draw();
    }

    requestAnimationFrame(animate);
  };

  setup();
  requestAnimationFrame(animate);
  setInterval(function () {
    createLightning();
  }, interval);

  return (
    <LightningWrapper>
      <canvas id="canvas"></canvas>
    </LightningWrapper>
  );
};

export default Lightning;
