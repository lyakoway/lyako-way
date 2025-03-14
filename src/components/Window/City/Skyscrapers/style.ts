import styled from "styled-components";

export const SkyscrapersWrapper = styled.div`
  position: absolute;
  height: auto;
  width: 100%;
  left: 0;
  //bottom: 10px;
  bottom: -60px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1;
`;

export const Skyscraper1 = styled.div`
  border-top: 12px solid transparent;
  border-bottom: none;
  border-right: 66px solid #d6d6d6;
  height: 160px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    border-top: 15px solid transparent;
    border-bottom: none;
    border-right: 45px solid #d6d6d6;
    height: 30px;
    transform: scaleX(-1);
    top: -30px;
    left: 7px;
  }
  &:after {
    content: "";
    position: absolute;
    width: 2px;
    height: 24px;
    background-color: #d6d6d6;
    top: -50px;
    left: 15px;
  }
`;

export const Skyscraper2 = styled.div`
  background-color: #d6d6d6;
  width: 50px;
  height: 183px;
  margin-left: 33px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 2px;
    height: 24px;
    background-color: #d6d6d6;
    top: -24px;
    left: 7px;
  }
`;
export const Skyscraper3 = styled.div`
  background-color: #d6d6d6;
  width: 70px;
  height: 240px;
  margin-left: 39px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 8px;
    height: 4px;
    background-color: #d6d6d6;
    top: -4px;
  }
`;

export const Skyscraper4 = styled.div`
  background-color: #d6d6d6;
  width: 47px;
  height: 175px;
  margin-left: 10px;
  position: relative;
`;

export const Skyscraper5 = styled.div`
  background-color: #d6d6d6;
  width: 47px;
  height: 211px;
  margin-left: 5px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 6px;
    height: 2px;
    background-color: #d6d6d6;
    top: -2px;
    right: 5px;
  }
`;

export const Skyscraper6 = styled.div`
  background-color: #d6d6d6;
  width: 70px;
  height: 189px;
  margin-left: 38px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 5px;
    height: 11px;
    background-color: #d6d6d6;
    top: -8px;
    left: 6px;
  }
  &:after {
    content: "";
    position: absolute;
    width: 2px;
    height: 30px;
    background-color: #d6d6d6;
    top: -37px;
    left: 6px;
  }
`;
