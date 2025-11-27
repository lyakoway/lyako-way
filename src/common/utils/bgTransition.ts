import { css } from "styled-components";

import { TABLET_959 } from "src/common/lib/media";

export const bgTransition = css`
  transition: background 4s ease;

  @media ${TABLET_959} {
    transition: background 1s ease;
  }
`;
