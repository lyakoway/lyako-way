import React from "react";

import { ThemeDarkLightWrapper, ThemeDarkLightChecked } from "./style";

const ThemeDarkLight = ({ opened, handleClick, positionStyle }) => {
  return (
    <ThemeDarkLightWrapper id="themeDarkLight" positionStyle={positionStyle}>
      <ThemeDarkLightChecked opened={opened} onClick={handleClick} />
    </ThemeDarkLightWrapper>
  );
};

export default ThemeDarkLight;
