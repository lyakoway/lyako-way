import React, { useCallback, useState, useEffect } from "react";

import { useDispatchTyped } from "src/store";
import { setThemeList } from "src/reducers/theme-slice";

import { getDayTime } from "src/common/utils";

import { ThemeDarkLightChecked } from "./style";

const ThemeDarkLight = () => {
  const [opened, setOpened] = useState(false);
  const dispatch = useDispatchTyped();

  const handleClickTheme = useCallback(() => {
    setOpened(!opened);
    // store.setCheckedTheme(dayTime ? !openedTheme : openedTheme);
    // store.setToggleTheme(!openedTheme);
    dispatch(setThemeList(!opened));
  }, []);

  const dayTime = getDayTime().dayTime;
  useEffect(() => {
    setOpened(!dayTime);
    dispatch(setThemeList(!dayTime));
  }, [dayTime]);

  return (
    <ThemeDarkLightChecked
      id="themeDarkLight"
      $opened={opened}
      onClick={handleClickTheme}
    />
  );
};

export default ThemeDarkLight;
