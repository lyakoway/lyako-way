import styled from "styled-components";

export const TreeWrapper = styled.div<{ $left: string }>`
  position: absolute;
  width: 37px;
  height: 74px;
  z-index: 200;
  bottom: -60px;
  left: ${({ $left }) => $left};
  display: flex;
`;

export const TreeTrunk = styled.div`
  width: 5px;
  height: 37px;
  background-color: #936161;
  margin-left: 4px;
  border-top: 2px solid #704a4a;
  bottom: 4px;
  position: absolute;
  left: 13px;

  &:before {
    content: "";
    position: absolute;
    background-color: #91dba6;
    width: 37px;
    height: 20px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 45px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 45px;
    left: -17px;
    margin-top: -22px;
  }
  &:after {
    content: "";
    position: absolute;
    background-color: #91dba6;
    width: 20px;
    height: 30px;
    border-top-left-radius: 30px;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 45px;
    margin-top: -35px;
    left: -7px;
    -webkit-transform: rotate(-5deg);
    -ms-transform: rotate(-5deg);
    transform: rotate(-5deg);
  }
`;

export const Leaf1 = styled.div`
  position: absolute;
  width: 5px;
  height: 1px;
  background-color: #91dba6;
  border-radius: 50%;
  margin-top: -5px;
  left: -5px;
`;

export const Leaf2 = styled.div`
  position: absolute;
  width: 5px;
  height: 1px;
  background-color: #91dba6;
  border-radius: 50%;
  margin-top: -5px;
  left: 1px;
  animation-duration: 0.8s;
`;

export const Leaf3 = styled.div`
  position: absolute;
  width: 5px;
  height: 1px;
  background-color: #91dba6;
  border-radius: 50%;
  margin-top: -5px;
  left: 12px;
  top: -6px;
  animation-duration: 1.5s;
`;

export const TreeBase = styled.div`
  position: relative;
  width: 13px;
  height: 2px;
  background-color: #bfb2b3;
  top: -7px;
  margin-top: 72px;
  left: 13px;

  &:before {
    content: "";
    position: absolute;
    background: repeating-linear-gradient(
      to right,
      #f4f7f2,
      #f4f7f2 3px,
      transparent 3px,
      transparent 5px
    );
    width: 18px;
    height: 7px;
    top: -2px;
    left: -2px;
  }
  &:after {
    content: "";
    position: absolute;
    width: 21px;
    height: 4px;
    background-color: #bfb2b3;
    top: 5px;
    left: -3px;
  }
`;
