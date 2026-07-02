import React, { useCallback } from "react";

import { LampBulb, LampSwitchLabel } from "./style";
import { useDispatchTyped, useSelectorTyped } from "src/store";
import { setThemeList } from "src/reducers";

// Переключатель темы, связанный с лампой:
// — декоративная лампочка на плафоне (серая в светлой теме, жёлтая в тёмной);
// — анимированный power-тумблер на основании (checked = светлая тема).
const LampSwitch = () => {
  const {
    theme: { name },
  } = useSelectorTyped(({ theme }) => theme);
  const dispatch = useDispatchTyped();
  const on = name === "light";

  const handleChange = useCallback(() => {
    dispatch(setThemeList(!on));
  }, [dispatch, on]);

  return (
    <>
      <LampBulb $on={on} aria-hidden />
      <LampSwitchLabel className="t" title="Переключить тему">
        <input
          className="t__checkbox"
          type="checkbox"
          checked={on}
          onChange={handleChange}
        />
        <svg
          className="t__svg"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
          focusable="false"
        >
          <circle
            className="t__svg-ring"
            cx="12"
            cy="12"
            r="6"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="0 5 27.7 5"
            strokeDashoffset="0.01"
            transform="rotate(-90,12,12)"
          />
          <line
            className="t__svg-line"
            x1="12"
            y1="6"
            x2="12"
            y2="15"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="9 9"
            strokeDashoffset="3"
          />
          <line
            className="t__svg-line"
            x1="12"
            y1="6"
            x2="12"
            y2="12"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="6 6"
            strokeDashoffset="6"
          />
        </svg>
        <span className="t__sr">Переключить тему</span>
      </LampSwitchLabel>
    </>
  );
};

export default LampSwitch;
