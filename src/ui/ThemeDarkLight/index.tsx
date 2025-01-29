import React from "react";

import { ThemeDarkLightChecked } from "./style";

const ThemeDarkLight = ({
  handleClickTheme,
  openedTheme,
}: {
  handleClickTheme: () => void;
  openedTheme: boolean;
}) => (
  <ThemeDarkLightChecked
    id="themeDarkLight"
    $opened={openedTheme}
    onClick={handleClickTheme}
  />
);

export default ThemeDarkLight;
