import React, { useCallback } from "react";

import { useDispatchTyped } from "src/store";
import { setThemeList } from "src/reducers";

import { ThemeDarkLightChecked } from "./style";

const ThemeDarkLight = ({
  setOpenedTheme,
  openedTheme,
}: {
  setOpenedTheme: (value: boolean) => void;
  openedTheme: boolean;
}) => {
  const dispatch = useDispatchTyped();

  const handleClickTheme = useCallback(() => {
    setOpenedTheme(!openedTheme);
    dispatch(setThemeList(!openedTheme));
  }, [setOpenedTheme, dispatch, openedTheme]);

  return (
    <ThemeDarkLightChecked
      id="themeDarkLight"
      $opened={openedTheme}
      onClick={handleClickTheme}
    />
  );
};

export default ThemeDarkLight;
