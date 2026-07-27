import React, { useCallback, useEffect, useState } from "react";

import { ThemeButton, Bulb } from "./style";
import { useDispatchTyped, useSelectorTyped } from "src/store";
import { setThemeList } from "src/reducers";

const ThemeDarkLight = () => {
  const {
    theme: { name },
  } = useSelectorTyped(({ theme }) => theme);
  const [openedTheme, setOpenedTheme] = useState(name === "light");
  const dispatch = useDispatchTyped();

  const handleClickTheme = useCallback(() => {
    setOpenedTheme(!openedTheme);
    dispatch(setThemeList(!openedTheme));
  }, [setOpenedTheme, dispatch, openedTheme]);

  useEffect(() => {
    setOpenedTheme(name === "light");
  }, [name]);

  const isLight = name === "light";

  return (
    <ThemeButton
      id="themeDarkLight"
      type="button"
      onClick={handleClickTheme}
      aria-label={isLight ? "Светлая тема" : "Тёмная тема"}
    >
      {/* Лампочка: горит в тёмной теме, гаснет в светлой (плавно). */}
      <Bulb $on={!isLight} viewBox="0 0 24 24" aria-hidden focusable="false">
        <path
          className="bulb-glass"
          d="M12 2a7 7 0 0 0-4 12.74c.62.46 1 1.18 1 1.95V17a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-.31c0-.77.38-1.49 1-1.95A7 7 0 0 0 12 2z"
        />
        <rect className="bulb-base" x="9" y="19" width="6" height="1.6" rx="0.8" />
        <rect
          className="bulb-base"
          x="9.5"
          y="21.2"
          width="5"
          height="1.4"
          rx="0.7"
        />
      </Bulb>
    </ThemeButton>
  );
};

export default ThemeDarkLight;
