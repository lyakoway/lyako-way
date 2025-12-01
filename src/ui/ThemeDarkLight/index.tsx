import React, { useCallback, useEffect, useState } from "react";

import { ThemeDarkLightChecked } from "./style";
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
  return (
    <ThemeDarkLightChecked
      id="themeDarkLight"
      $opened={openedTheme}
      onClick={handleClickTheme}
    />
  );
};

export default ThemeDarkLight;
