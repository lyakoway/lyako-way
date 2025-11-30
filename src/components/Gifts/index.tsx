import React from "react";
import styled from "styled-components";

const GiftsWrapper = styled.div`
  position: absolute;
  bottom: -41px;
  left: 176px;
`;

const Square = styled.div`
  width: 40px;
  height: 40px;
  background: #ff54cf;
  box-shadow: -15px 0 0 0 #ed00aa;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    width: 100%;
    height: 5px;
    background: yellow;
    box-shadow: -15px 0 0 0 #d6d600;
    display: block;
    position: relative;
    top: 17px;
  }
  &::after {
    content: "";
    width: 5px;
    height: inherit;
    background: yellow;
    display: block;
    position: relative;
    top: -5px;
    margin: auto;
  }
`;

const TieWrap = styled.div`
  position: absolute;
  top: -10px;
  left: -3px;
  min-width: 41px;

  &::before {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 0 solid transparent;
    border-bottom: 20px solid yellow;
    left: 10px;
    top: 2px;
  }
  &::after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 0 solid transparent;
    border-bottom: 20px solid yellow;
    top: 2px;
    transform: rotateY(180deg);
    left: 27px;
  }
`;

const Tie = styled.div`
  width: 20px;
  height: 10px;
  background: yellow;
  border-radius: 50% 50% 20% 20%;
  float: left;
  z-index: 1;
  position: relative;

  &::before {
    content: "";
    background: #cccc00;
    transform: scale(0.5) translateX(15px) translateY(8px);
    width: 20px;
    height: 10px;
    border-radius: 50% 50% 20% 20%;
    float: left;
    z-index: 1;
    position: relative;
  }
`;

const Reflected = styled.div`
  width: 20px;
  height: 10px;
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
    width: 20px;
    height: 10px;
    border-radius: 50% 50% 20% 20%;
    float: left;
    z-index: 1;
    position: relative;
  }
`;

const Rectangular = styled.div`
  width: 30px;
  height: 60px;
  background: #0ebeff;
  box-shadow: -15px 0 0 0 #008dc1;
  position: absolute;
  left: 50px;
  bottom: 0;

  &::before {
    content: "";
    width: 100%;
    height: 5px;
    background: yellow;
    box-shadow: -15px 0 0 0 #d6d600;
    display: block;
    position: relative;
    top: 17px;
  }
  &::after {
    content: "";
    width: 5px;
    height: inherit;
    background: yellow;
    display: block;
    position: relative;
    top: -5px;
    margin: auto;
  }
`;

const TieWrapRectangular = styled(TieWrap)`
  left: -8px;
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
