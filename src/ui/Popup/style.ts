import styled from "styled-components";
import { MOBILE_660 } from "src/common/constants/media";

export const PopupWrapper = styled.div<{ $positionStyle: boolean }>`
  display: flex;
  flex-direction: ${({ $positionStyle }) => ($positionStyle ? "row" : "column")};
  align-items: center;
  position: absolute;
  inset: 0px auto auto 0px;
  z-index: 1900;
  transform: translate(-6px, 56px);
  border: 1px solid #d4d4d5;
  border-radius: 0.5rem;
  background: #464a53;
  top: -0.3rem;
  padding: 0.8rem;

  &:before {
    position: absolute;
    content: "";
    width: 0.71428571em;
    height: 0.71428571em;
    background: #464a53;
    transform: rotate(45deg);
    z-index: 2;
    box-shadow: 1px 1px 0 0 #bababc;
    margin-left: -0.30714286em;
    top: -0.30714286em;
    left: 50%;
    right: auto;
    bottom: auto;
    box-shadow: -1px -1px 0 0 #bababc;
  }

  @media ${MOBILE_660} {
    flex-direction: column;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
