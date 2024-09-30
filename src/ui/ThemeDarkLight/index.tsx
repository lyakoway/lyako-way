import React from "react";

import { ThemeDarkLightChecked } from "./style";

interface IThemeDarkLightProps {
  opened: boolean;
  handleClick: () => void;
}
const ThemeDarkLight = ({ opened, handleClick }: IThemeDarkLightProps) => {
  return (
    <ThemeDarkLightChecked
      id="themeDarkLight"
      $opened={opened}
      onClick={handleClick}
    />
  );
};

export default ThemeDarkLight;
