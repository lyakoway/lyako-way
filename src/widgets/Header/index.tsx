import React from "react";

import { useSelectorTyped } from "src/store";

import { HeaderWrapper } from "./style";

import HeaderNav from "src/components/HeaderNav";
import HeaderSection from "src/components/HeaderSection";

const Header = () => {
  const { lang } = useSelectorTyped(({ lang }) => lang);
  return (
    <HeaderWrapper>
      <HeaderNav propsList={lang.propsHeaderTopMenu} />
      <HeaderSection />
    </HeaderWrapper>
  );
};

export default Header;
