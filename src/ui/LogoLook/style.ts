import styled from "styled-components";
import { MOBILE_660, MOBILE_480 } from "src/common/constants/media";

export const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  vertical-align: top;
  padding-top: 12px;
  letter-spacing: 3px;

  @media ${MOBILE_660} {
    padding: 10px 12px;
    justify-content: center;
  }

  @media ${MOBILE_480} {
    padding-left: 0;
  }
`;

export const LogoSign = styled.div`
  display: flex;
  align-items: center;
  color: #ff8560;
  line-height: 52px;
  font-size: 38px;
  font-family: "Exo 2", sans-serif;
  // font-weight: 800;
  white-space: nowrap;
  // margin-left: 20px;
  text-transform: uppercase;
  // text-shadow: -1px 0 1px white, 0 -1px 1px white, 0 1px 1px white,
  //   1px 0 1px white, 0 0 8px white, 0 0 8px white, 0 0 8px white,
  //   2px 2px 3px black;
  text-shadow: 1px 1px white, 1px -1px white, -1px 1px white, -1px -1px white,
    3px 3px 6px rgba(0, 0, 0, 0.5);

  @media ${MOBILE_660} {
    margin-left: 0;
  }

  @media ${MOBILE_480} {
    font-size: 32px;
    // margin-right: 8px;
  }
`;

export const LaykoWayWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 6px;
`;
