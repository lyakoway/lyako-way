import React from "react";
import styled from "styled-components";

const GiftsWrapper = styled.div`
  position: absolute;
  bottom: -41px;
  left: 176px;
`;

const Square = styled.div`
  width: 80px;
  height: 80px;
  background: #ff54cf;
  box-shadow: -30px 0 0 0 #ed00aa;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    width: 100%;
    height: 10px;
    background: yellow;
    box-shadow: -30px 0 0 0 #d6d600;
    display: block;
    position: relative;
    top: 35px;
  }
  &::after {
    content: "";
    width: 10px;
    height: inherit;
    background: yellow;
    display: block;
    position: relative;
    top: -10px;
    margin: auto;
  }
`;

const TieWrap = styled.div`
  position: absolute;
  top: -20px;
  left: -6px;
  min-width: 82px;

  &::before {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border-left: 17px solid transparent;
    border-right: 0 solid transparent;
    border-bottom: 40px solid yellow;
    left: 21px;
    top: 5px;
  }
  &::after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border-left: 17px solid transparent;
    border-right: 0 solid transparent;
    border-bottom: 40px solid yellow;
    top: 5px;
    transform: rotateY(180deg);
    left: 54px;
  }
`;

const Tie = styled.div`
  width: 40px;
  height: 20px;
  background: yellow;
  border-radius: 50% 50% 20% 20%;
  float: left;
  z-index: 1;
  position: relative;

  &::before {
    content: "";
    background: #cccc00;
    transform: scale(0.5) translateX(15px) translateY(8px);
    width: 40px;
    height: 20px;
    border-radius: 50% 50% 20% 20%;
    float: left;
    z-index: 1;
    position: relative;
  }
`;

const Reflected = styled.div`
  width: 40px;
  height: 20px;
  background: yellow;
  border-radius: 50% 50% 20% 20%;
  float: left;
  z-index: 1;
  position: relative;
  transform: rotateY(180deg);

  &::before {
    content: "";
    background: #cccc00;
    transform: scale(0.5) translateX(2px) translateY(8px);
    width: 40px;
    height: 20px;
    border-radius: 50% 50% 20% 20%;
    float: left;
    z-index: 1;
    position: relative;
  }
`;

const Rectangular = styled.div`
  width: 60px;
  height: 120px;
  background: #0ebeff;
  box-shadow: -30px 0 0 0 #008dc1;
  position: absolute;
  left: 100px;
  bottom: 0;

  &::before {
    content: "";
    width: 100%;
    height: 10px;
    background: yellow;
    box-shadow: -30px 0 0 0 #d6d600;
    display: block;
    position: relative;
    top: 35px;
  }
  &::after {
    content: "";
    width: 10px;
    height: inherit;
    background: yellow;
    display: block;
    position: relative;
    top: -10px;
    margin: auto;
  }
`;

const TieWrapRectangular = styled(TieWrap)`
  left: -16px;
`;

export const Gifts: React.FC = () => {
  return (
    <GiftsWrapper>
      <Square>
        <TieWrap>
          <Tie />
          <Reflected />
        </TieWrap>
      </Square>
      <Rectangular>
        <TieWrapRectangular>
          <Tie />
          <Reflected />
        </TieWrapRectangular>
      </Rectangular>
    </GiftsWrapper>
  );
};
