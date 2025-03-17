import styled from "styled-components";

export const StreetlampWrapper = styled.div<{ left: string }>`
  position: absolute;
  bottom: -60px;
  width: 2px;
  height: 61px;
  background-color: #677575;
  margin: 0 85px;
  cursor: pointer;
  z-index: 200;
  left: ${({ left }) => left};
  display: flex;

  &:before {
    content: "";
    position: absolute;
    width: 4px;
    height: 12px;
    background-color: #809191;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    bottom: 0;
    left: -1px;
  }
  &:after {
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: #809191;
    border-radius: 50%;
    left: -2px;
    top: -5px;
  }
`;

export const StreetlampGlow = styled.div`
  position: absolute;
  z-index: 102;
  width: 12px;
  height: 12px;
  top: -10px;
  left: -4px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 0 60px 30px #fff;
  opacity: 0;
`;
