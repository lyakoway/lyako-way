import React from "react";

import { Logo, LogoSign, LaykoWayWrapper } from "./style";
import { ReactComponent as LaykoWayLightIcon } from "src/common/icon/LaykoWayLightIcon.svg";
import Link from "src/ui/Link";

const LogoLook = () => (
  <Link href="/">
    <Logo>
      <LogoSign>
        {`${"lyak"}`}
        <LaykoWayWrapper>
          <LaykoWayLightIcon width={42} height={42} />
        </LaykoWayWrapper>
        {`${"way"}`}
      </LogoSign>
    </Logo>
  </Link>
);

export default LogoLook;
