import React, { useCallback, useState, useEffect } from "react";

import { useDispatchTyped, useSelectorTyped } from "src/store";
import { setThemeList } from "src/reducers";

import { ThemeDarkLightChecked } from "./style";

const ThemeDarkLight = () => {
  const {
    theme: { name },
  } = useSelectorTyped(({ theme }) => theme);
  const [opened, setOpened] = useState(false);
  const dispatch = useDispatchTyped();

  const handleClickTheme = useCallback(() => {
    setOpened(!opened);
    dispatch(setThemeList(!opened));
  }, [setOpened, dispatch, opened]);

  useEffect(() => {
    setOpened(name === "light");
  }, [name]);

  return (
    <ThemeDarkLightChecked
      id="themeDarkLight"
      $opened={opened}
      onClick={handleClickTheme}
    />
  );
};

export default ThemeDarkLight;
