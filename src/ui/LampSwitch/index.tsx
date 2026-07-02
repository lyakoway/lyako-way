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
      />
    </>
  );
};

export default LampSwitch;
