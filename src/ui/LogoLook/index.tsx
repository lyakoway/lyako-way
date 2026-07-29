import React from "react";

import { Logo, LogoSign, MarkWrapper } from "./style";
import { ReactComponent as LyakoMark } from "src/common/icon/logo/LyakoMark.svg";
import Link from "src/ui/Link";

// Тот же знак, что в визитке (src/ui/BrandMark): круг с искрой вместо «O».
// Здесь кольцо наследует оранжевый цвет букв, искра — белая, как обводка букв.
const LogoLook = () => (
  <Link href="/">
    <Logo>
      <LogoSign>
        {`${"lyak"}`}
        <MarkWrapper>
          <LyakoMark width={42} height={42} aria-hidden="true" />
        </MarkWrapper>
        {`${"way"}`}
      </LogoSign>
    </Logo>
  </Link>
);

export default LogoLook;
