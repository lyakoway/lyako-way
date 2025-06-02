import React, { FC, useCallback, useEffect, useState } from "react";

import ButtonLang from "src/ui/ButtonLang";
import ButtonHeart from "src/ui/ButtonHeart";
import ThemeDarkLight from "src/ui/ThemeDarkLight";

import { useDispatchTyped, useSelectorTyped } from "src/store";
import { setThemeList } from "src/reducers";

const PagesSettings: FC = () => {
  const {
    theme: { name },
  } = useSelectorTyped(({ theme }) => theme);
  const [openedTheme, setOpenedTheme] = useState(false);
  const dispatch = useDispatchTyped();

  const handleClickTheme = useCallback(() => {
    setOpenedTheme(!openedTheme);
    dispatch(setThemeList(!openedTheme));
  }, [setOpenedTheme, dispatch, openedTheme]);

  useEffect(() => {
    setOpenedTheme(name === "light");
  }, [name]);

  return (
    <>
      <ButtonHeart />
      <ThemeDarkLight
        handleClickTheme={handleClickTheme}
        openedTheme={openedTheme}
      />
      <ButtonLang />
    </>
  );
};

export default PagesSettings;
