import styled from "styled-components";

import { ReactComponent as AvatarArt } from "./avatar.svg";

// SVG-портрет заполняет плашку целиком (со скруглением углов от AvatarBox).
export const Portrait = styled(AvatarArt)`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: inherit;
`;
