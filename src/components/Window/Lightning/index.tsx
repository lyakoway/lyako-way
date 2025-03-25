import React, { FC, useCallback, useEffect, useState } from "react";

import { LightningWrapper } from "./style";

const getRandomFloat = (min: number, max: number) =>
  Math.random() * (max - min + 1) + min;

const createVector = (x: number, y: number) => {
  return { x, y };
};

interface CloudProps {
  climateControl: string;
}

const Lightning: FC<CloudProps> = ({ climateControl }) => {
  const [context, setContext] = useState(null);

  const canvasHeight = 400;
  const canvasWidth = 222;
  const lightningStrikeOffset = 5;
  const lightningStrikeLength = 100;
  const lightningBoltLength = 5;
  const lightningThickness = 4;
  const interval = 3000;

  useEffect(() => {
    if (document?.getElementById("canvas")) {
      const cvs = document?.getElementById("canvas");
      cvs?.setAttribute("height", `${canvasHeight}`);
      cvs?.setAttribute("width", `${canvasWidth}`);
      const canvas = document?.getElementById("canvas") as HTMLCanvasElement;
      const contextValue = canvas?.getContext("2d");
      setContext(contextValue);
    }
  }, [setContext]);

  const getRandomInteger = (min: number, max: number) =>
    Math.floor(getRandomFloat(min, max));

  const clearCanvas = useCallback(() => {
    if (context) {
      context?.clearRect(0, 0, canvasWidth, canvasHeight);
      context?.beginPath();
    }
  }, [context]);

  const line = useCallback(
    (start: number, end: number, thickness: number, opacity: number) => {
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
    },
    [context]
  );

  class Lightning {
    constructor(
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      thickness: number,
      opacity: number
    ) {
      this.start = createVector(x1, y1);
      this.end = createVector(x2, y2);
      this.thickness = thickness;
      this.opacity = opacity;
    }
    draw() {
      return line(this.start, this.end, this.thickness, this.opacity);
    }
  }

  let lightning = [];

  const createLightning = useCallback(() => {
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
  }, [getRandomInteger, context]);

  const setup = useCallback(() => {
    createLightning();
    for (let i = 0; i < lightning.length; i++) {
      lightning[i].draw();
    }
  }, [createLightning]);

  const animate = useCallback(() => {
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
  }, [lightning, clearCanvas]);

  useEffect(() => {
    setup();
    requestAnimationFrame(animate);
    const timer = setInterval(() => {
      createLightning();
    }, interval);

    return () => clearInterval(timer);
  }, [context]);

  return (
    <LightningWrapper>
      <canvas id="canvas"></canvas>
    </LightningWrapper>
  );
};

export default Lightning;
