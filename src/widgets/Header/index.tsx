import React from "react";

import { HeaderWrapper } from "./style";

import { observer } from "mobx-react";
import { store } from "src/store";

import HeaderNav from "src/components/HeaderNav";
import HeaderSection from "src/components/HeaderSection";

const Header = observer(() => {
  const { propsHeaderTopMenu } = store.getToggleLang();
  return (
    <HeaderWrapper>
      <HeaderNav propsList={propsHeaderTopMenu} />
      <HeaderSection />
    </HeaderWrapper>
  );
});

export default Header;
