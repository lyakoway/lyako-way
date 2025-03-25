import styled, { keyframes } from "styled-components";

const truck = keyframes` 
    0% {
        right: -78px;
    }
    69% {
        right: 80%;
    }
    70% {
        right: 79.5%;
    }
    71% {
        right: 79%;
    }
    85% {
        right: 79%;
    }
    100% {
        right: 100%;
    }
`;
export const MailTruckWrapper = styled.div`
  position: absolute;
  background-color: #e9ebea;
  width: 50px;
  height: 40px;
  bottom: -54px;
  border-radius: 2px;
  border-top: 3px solid #cacccb;
  right: -78px;
  transform: scaleX(-1);
  z-index: 200;

  animation: ${truck} 10s linear;

  &:before {
    content: "";
    position: absolute;
    background-color: #e9ebea;
    width: 15px;
    height: 30px;
    bottom: 0;
    right: -15px;
    border-top-right-radius: 2px;
    border-left: 1px solid #4d4d4b;
    border-top: 3px solid #cacccb;
  }

  &:after {
    content: "";
    position: absolute;
    background-color: #e9ebea;
    width: 7px;
    height: 14px;
    bottom: 3px;
    right: -22px;
    border-top-right-radius: 7px;
    border-right: 1px solid #cacccb;
  }
`;

export const MailTruckLetter = styled.div`
  width: 25px;
  height: 17px;
  background-color: #4497bd;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: skewX(10deg);
  margin-left: 12px;
  margin-top: 2px;
`;

export const Letter = styled.div`
  transform: scale(0.6) skewX(-10deg);
  background-color: #e9ebea;
  position: relative;
  height: 17px;
  width: 25px;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    left: 50%;
    transform: rotate(45deg) skew(-5deg, -5deg);
    margin-left: -12px;
    height: 25px;
    width: 25px;
    background-color: #e9ebea;
    bottom: -100%;
    box-shadow: -1px -1px 0 0 #4497bd;
  }

  &:after {
    content: "";
    position: absolute;
    left: 50%;
    transform: rotate(45deg) skew(-5deg, -5deg);
    margin-left: -12px;
    height: 25px;
    width: 25px;
    background-color: #e9ebea;
    top: -95%;
    box-shadow: 1px 1px 0 0 #4497bd;
  }
`;

export const MailTruckWheels = styled.div`
  width: 77px;
  height: 3px;
  background-color: #4d4d4b;
  bottom: 0;
  position: absolute;
  left: -2px;
  border-radius: 1px;

  &:before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: gray;
    border-radius: 50%;
    border: 5px solid #4d4d4b;
    top: -6px;
    z-index: 102;
    left: 7px;
  }

  &:after {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: gray;
    border-radius: 50%;
    border: 5px solid #4d4d4b;
    top: -6px;
    z-index: 102;
    right: 7px;
  }
`;

export const MailTruckDetails = styled.div`
  background-color: #8bcfde;
  width: 10px;
  height: 7px;
  right: -12px;
  top: 12px;
  position: absolute;

  &:before {
    content: "";
    position: absolute;
    width: 50px;
    height: 6px;
    left: -52px;
    top: 10px;
    z-index: 101;
    border-top: 2px solid #4497bd;
    border-bottom: 2px solid #db353c;
  }

  &:after {
    content: "";
    position: absolute;
    background-color: #4d4d4b;
    width: 5px;
    height: 2px;
    bottom: -4px;
    border-radius: 1px;
  }
`;

export const Headlights = styled.div`
  background-color: #dfab3e;
  width: 3px;
  height: 4px;
  position: absolute;
  border-left: #4d4d4b solid 1px;
  left: 18px;
  z-index: 101;
  top: 14px;
`;
