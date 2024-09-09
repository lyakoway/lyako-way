import React from "react";

import HeaderDecstop from "./HeaderDecstop";
import HeaderMobile from "./HeaderMobile";

import LogoLook from "src/ui/LogoLook";

const HeaderNav = ({ propsList }) => {
  return (
    <>
      <HeaderDecstop propsList={propsList} />
      <HeaderMobile propsList={propsList} header>
        <LogoLook />
      </HeaderMobile>
    </>
  );
};

export default HeaderNav;
