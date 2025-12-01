import React, { FC } from "react";

import ButtonLang from "src/ui/ButtonLang";
import ButtonHeart from "src/ui/ButtonHeart";
import ThemeDarkLight from "src/ui/ThemeDarkLight";
const PagesSettings: FC = () => {
  return (
    <>
      <ButtonHeart />
      <ThemeDarkLight />
      <ButtonLang />
    </>
  );
};

export default PagesSettings;
