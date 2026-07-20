import React, { useEffect, useId, useRef, useState } from "react";

import {
  Frame,
  BodyLayer,
  HeadTurn,
  HeadLayer,
  Overlay,
  IrisG,
  Eyelid,
} from "./style";

// Центры глаз в координатах viewBox головы (0..512).
const LEFT_EYE = { x: 220, y: 251 };
const RIGHT_EYE = { x: 292, y: 251 };
const SCLERA_RX = 24;
const SCLERA_RY = 18;
const IRIS_R = 15;
const PUPIL_R = 6.5;

// Диапазоны движения.
const PUPIL_RANGE_X = 5; // зрачок влево/вправо (ед. viewBox)
const PUPIL_RANGE_Y = 3; // зрачок вверх/вниз
const TURN_Y = 11; // поворот головы влево/вправо (°)
const TURN_X = 5; // наклон головы вверх/вниз (°)
const SHIFT_X = 3; // смещение головы к курсору (px)
const NORM_RADIUS = 420; // px, на котором поворот/взгляд максимальны

const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

type State = { turnX: number; turnY: number; shift: number; px: number; py: number };

const AvatarHead = () => {
  const uid = useId().replace(/:/g, "");
  const frameRef = useRef<HTMLDivElement>(null);
  const [motion, setMotion] = useState(false);
  const [s, setS] = useState<State>({ turnX: 0, turnY: 0, shift: 0, px: 0, py: 0 });

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const onMove = (event: MouseEvent) => {
      const el = frameRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const nx = clamp((event.clientX - (r.left + r.width / 2)) / NORM_RADIUS, -1, 1);
      const ny = clamp((event.clientY - (r.top + r.height / 2)) / NORM_RADIUS, -1, 1);

      setMotion(true);
      setS({
        turnY: nx * TURN_Y,
        turnX: -ny * TURN_X,
        shift: nx * SHIFT_X,
        px: nx * PUPIL_RANGE_X,
        py: ny * PUPIL_RANGE_Y,
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const gradId = `iris-${uid}`;
  const clipL = `clipL-${uid}`;
  const clipR = `clipR-${uid}`;

  const renderEye = (eye: { x: number; y: number }, clipId: string) => (
    <>
      {/* радужка + зрачок (обрезаны формой глаза) */}
      <g clipPath={`url(#${clipId})`}>
        <IrisG $motion={motion} transform={`translate(${s.px} ${s.py})`}>
          <circle cx={eye.x} cy={eye.y + 1} r={IRIS_R} fill={`url(#${gradId})`} />
          <circle cx={eye.x} cy={eye.y + 1} r={PUPIL_R} fill="#16100a" />
          <circle cx={eye.x - 6} cy={eye.y - 5} r="3.4" fill="#ffffff" />
          <circle cx={eye.x + 5} cy={eye.y + 6} r="1.7" fill="#ffffff" opacity="0.5" />
        </IrisG>
      </g>
      {/* веко для моргания */}
      <Eyelid cx={eye.x} cy={eye.y} rx={SCLERA_RX + 1} ry={SCLERA_RY + 1} fill="#f0c69a" />
    </>
  );

  return (
    <Frame ref={frameRef}>
      <BodyLayer role="img" aria-label="Аватар — Мазуренко Алексей" />

      <HeadTurn
        style={{
          transform: `translateX(${s.shift}px) rotateX(${s.turnX}deg) rotateY(${s.turnY}deg)`,
        }}
      >
        <HeadLayer aria-hidden="true" />

        <Overlay viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <defs>
            <radialGradient id={gradId} cx="50%" cy="62%" r="60%">
              <stop offset="0%" stopColor="#845c38" />
              <stop offset="65%" stopColor="#573b23" />
              <stop offset="100%" stopColor="#38271a" />
            </radialGradient>
            <clipPath id={clipL}>
              <ellipse cx={LEFT_EYE.x} cy={LEFT_EYE.y} rx={SCLERA_RX} ry={SCLERA_RY} />
            </clipPath>
            <clipPath id={clipR}>
              <ellipse cx={RIGHT_EYE.x} cy={RIGHT_EYE.y} rx={SCLERA_RX} ry={SCLERA_RY} />
            </clipPath>
          </defs>

          {renderEye(LEFT_EYE, clipL)}
          {renderEye(RIGHT_EYE, clipR)}
        </Overlay>
      </HeadTurn>
    </Frame>
  );
};

export default AvatarHead;
