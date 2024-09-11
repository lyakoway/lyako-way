import React, { FC } from "react";

import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

import LogoLook from "src/ui/LogoLook";
import { HeaderTopMenuProps } from "src/common/types/lang";

const HeaderNav = ({ propsList = [] }: { propsList: HeaderTopMenuProps[] }) => {
  return (
    <>
      <HeaderDesktop propsList={propsList} />
      <HeaderMobile propsList={propsList} header>
        <LogoLook />
      </HeaderMobile>
    </>
  );
};

export default HeaderNav;
