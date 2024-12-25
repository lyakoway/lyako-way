import styled from "styled-components";
import { MOBILE_660 } from "src/common/lib/media";

export const PopupWrapper = styled.div<{
  $positionStyle: boolean;
  $topStyle: string;
  $leftStyle: string;
  $topArrowStyle: string;
  $leftArrowStyle: string;
  $rotateArrowStyle: string;
}>`
  display: flex;
  flex-direction: ${({ $positionStyle }) =>
    $positionStyle ? "row" : "column"};
  align-items: center;
  position: absolute;
  inset: 0 auto auto 0;
  z-index: 1900;
  transform: translate(-6px, 56px);
  border: 1px solid #d4d4d5;
  border-radius: 0.5rem;
  background: #464a53;
  top: ${({ $topStyle }) => $topStyle};
  left: ${({ $leftStyle }) => $leftStyle};
  padding: 0.8rem;
  gap: 18px;

  &:before {
    position: absolute;
    content: "";
    width: 0.7em;
    height: 0.7em;
    background: #464a53;
    transform: ${({ $rotateArrowStyle }) => `rotate(${$rotateArrowStyle})`};
    z-index: 2;
    box-shadow: 1px 1px 0 0 #bababc;
    margin-left: -0.3em;
    top: ${({ $topArrowStyle }) => $topArrowStyle};
    left: ${({ $leftArrowStyle }) => $leftArrowStyle};
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
  justify-content: center;
  position: relative;
  width: 100%;
`;
