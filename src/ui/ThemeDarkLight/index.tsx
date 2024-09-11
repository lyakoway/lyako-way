import React from "react";

import { ThemeDarkLightWrapper, ThemeDarkLightChecked } from "./style";

interface IThemeDarkLightProps {
  opened: boolean;
  handleClick: () => void;
  positionStyle: boolean;
}
const ThemeDarkLight = ({
  opened,
  handleClick,
  positionStyle,
}: IThemeDarkLightProps) => {
  return (
    <ThemeDarkLightWrapper id="themeDarkLight" $positionStyle={positionStyle}>
      <ThemeDarkLightChecked $opened={opened} onClick={handleClick} />
    </ThemeDarkLightWrapper>
  );
};

export default ThemeDarkLight;
