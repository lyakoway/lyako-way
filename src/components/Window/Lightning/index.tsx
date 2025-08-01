import React, { FC, useEffect, useRef } from "react";
import { LightningWrapper } from "./style";

const canvasWidth = 222;
const canvasHeight = 400;
// Параметры молнии
const lightningStrikeOffset = 5;
const lightningStrikeLength = 100;
const lightningBoltLength = 5;
const lightningThickness = 4;
const interval = 3000;

const getRandomFloat = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const getRandomInteger = (min: number, max: number) =>
  Math.floor(getRandomFloat(min, max));

interface Vector {
  x: number;
  y: number;
}

class LightningSegment {
  start: Vector;
  end: Vector;
  thickness: number;
  opacity: number;

  constructor(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    thickness: number,
    opacity: number
  ) {
    this.start = { x: x1, y: y1 };
    this.end = { x: x2, y: y2 };
    this.thickness = thickness;
    this.opacity = opacity;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.moveTo(this.start.x, this.start.y);
    ctx.lineTo(this.end.x, this.end.y);
    ctx.lineWidth = this.thickness;
    ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.shadowBlur = 40;
    ctx.shadowColor = "#bd9df2";
    ctx.stroke();
    ctx.closePath();
  }
}

const Lightning: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lightningRef = useRef<LightningSegment[]>([]);

  const createLightning = () => {
    const lightning: LightningSegment[] = [];
    let lightningX1 = getRandomInteger(2, canvasWidth - 2);
    let lightningX2 = getRandomInteger(
      lightningX1 - lightningStrikeOffset,
      lightningX1 + lightningStrikeOffset
    );
    lightning.push(
      new LightningSegment(
        lightningX1,
        0,
        lightningX2,
        lightningBoltLength,
        lightningThickness,
        1
      )
    );

    for (let i = 1; i < lightningStrikeLength; i++) {
      const lastBolt = lightning[i - 1];
      let lx1 = lastBolt.end.x;
      let lx2 = getRandomInteger(
        lx1 - lightningStrikeOffset,
        lx1 + lightningStrikeOffset
      );
      lightning.push(
        new LightningSegment(
          lx1,
          lastBolt.end.y,
          lx2,
          lastBolt.end.y + lightningBoltLength,
          lastBolt.thickness,
          lastBolt.opacity
        )
      );
    }
    lightningRef.current = lightning;
  };

  const clearCanvas = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    clearCanvas(ctx);

    lightningRef.current.forEach((segment) => {
      segment.opacity -= 0.006; // было 0.003 → быстрее растворяется
      segment.thickness -= 0.02; // было 0.01 → быстрее исчезает
      if (segment.thickness <= 2) {
        segment.end.y -= 0.05;
      }
      segment.draw(ctx);
    });

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      // Сделать canvas прозрачным (фон через LightningWrapper)
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      }
    }

    createLightning();
    animate();

    const timer = setInterval(() => {
      createLightning();
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <LightningWrapper>
      <canvas ref={canvasRef} id="canvas" />
    </LightningWrapper>
  );
};

export default Lightning;
