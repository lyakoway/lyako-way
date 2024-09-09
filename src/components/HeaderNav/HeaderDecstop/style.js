import styled from "styled-components";
import { TABLET_1024, MOBILE_660 } from "src/common/constants/media";

export const HeaderTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 74px;
  width: 960px;
  margin: 0 auto;
  position: relative;

  @media ${TABLET_1024} {
    flex-direction: column;
    height: auto;
    width: 100%;
    align-items: center;
  }

  @media ${MOBILE_660} {
    display: none;
  }
`;

export const Link = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
`;

export const HeaderMenu = styled.div`
  padding-top: 10px;
  position: relative;
`;

export const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const Li = styled.li`
  display: inline-block;
  vertical-align: top;
  text-align: center;
  margin-bottom: 16px;

  & :hover {
    cursor: pointer;
  }
`;

export const LinkA = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 8px;
  color: palevioletred;

  position: relative;
  &:hover:before {
    position: absolute;
    content: "";
    width: calc(100% - (1px * 2));
    height: 2px;
    bottom: 0;
    background: #ff8560;
  }
`;

export const LinkDiv = styled.div`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 8px;
  color: palevioletred;

  position: relative;
  &:hover:before {
    position: absolute;
    content: "";
    width: calc(100% - (1px * 2));
    height: 2px;
    bottom: 0;
    background: #ff8560;
  }
`;

export const Label = styled.span`
  display: flex;
  align-items: center;
  color: white;
  line-height: 17px;
  font-size: 14px;
  font-family: "Exo 2", sans-serif;
  font-weight: 400;
  text-decoration: none;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  margin-top: 10px;
  white-space: nowrap;
`;
