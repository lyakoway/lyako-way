import React, { useCallback } from "react";

import { LampBulb, LampSwitchButton } from "./style";
import { useDispatchTyped, useSelectorTyped } from "src/store";
import { setThemeList } from "src/reducers";

// Переключатель темы, связанный с лампой:
// — декоративная лампочка на плафоне (серая в светлой теме, жёлтая в тёмной);
// — клик-кнопка на основании лампы. Логика та же, что у ThemeDarkLight.
const LampSwitch = () => {
  const {
    theme: { name },
  } = useSelectorTyped(({ theme }) => theme);
  const dispatch = useDispatchTyped();
  const on = name === "light";

  const handleClick = useCallback(() => {
    dispatch(setThemeList(!on));
  }, [dispatch, on]);

  return (
    <>
      <LampBulb $on={on} aria-hidden />
      <LampSwitchButton
        type="button"
        $on={on}
        onClick={handleClick}
        aria-label="Переключить тему"
        title="Переключить тему"
      >
        <svg viewBox="0 0 24 24" aria-hidden focusable="false">
          <line x1="12" y1="3.5" x2="12" y2="11.5" />
          <path d="M7.4 6.8a7 7 0 1 0 9.2 0" />
        </svg>
      </LampSwitchButton>
    </>
  );
};

export default LampSwitch;
