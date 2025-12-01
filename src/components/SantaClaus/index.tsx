import React, { useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { useDispatchTyped, useSelectorTyped } from "src/store";
import { setSantaShown } from "src/reducers";
import { isNewYearPeriod } from "src/common/utils/isNewYearPeriod";

const swing = keyframes`
  0%, 100% {
    transform: rotateZ(-42deg);
  }
  50% {
    transform: rotateZ(0deg);
  }
`;

const santaClaus = keyframes`
  0%, 50% {
    transform: rotateZ(195deg) translateY(300px);
  }
  70%, 85% {
    transform: rotateZ(195deg)
    translateY(0);
  }
  100% {
    transform: rotateZ(195deg)
    translateY(300px);
  }
`;

const SantaClausWrapper = styled.div<{ $visible: boolean }>`
  position: absolute;
  right: 0;
  top: 20px;
  display: flex;
  margin: 40px;
  z-index: 5;
  transform: rotateZ(195deg) translateY(300px);
  ${({ $visible }) =>
    $visible &&
    css`
      animation: ${santaClaus} 24s ease-in forwards;
    `}
`;

const ScHead = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 40%;
  background: #f7caaf;
  position: relative;
  z-index: 2;
`;

const ScBody = styled.div`
  display: block;
  position: absolute;
  top: 80px;
  left: -70px;
  width: 200px;
  height: 200px;
  background: #de3939;
  border-radius: 30%;
`;

const ScHat = styled.div`
  position: absolute;
  top: -37px;
  left: -6px;
  width: calc(100% + 10px);
  height: 55px;
  background: #de3939;
  border-radius: 60px 80px 0 0;

  &::before {
    content: "";
    width: inherit;
    height: 20px;
    background: #fff;
    display: block;
    border-radius: 6px;
    position: absolute;
    bottom: -5px;
    left: -4px;
  }
`;

const HatTip = styled.div`
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 69px solid #de3939;
  position: absolute;
  top: -37px;
  animation: ${swing} 2s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
  left: 8px;

  &::before {
    content: "";
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 50%;
    display: block;
    position: absolute;
    left: -13px;
    top: -10px;
  }
`;

const Eyes = styled.div`
  position: absolute;
  left: 2px;
  top: 20px;
  display: table;
  margin: 0 auto;

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    background: #000;
    border-radius: 50%;
    display: inline-block;
    margin: 0 15px;
  }

  &::after {
    content: "";
    width: 8px;
    height: 8px;
    background: #000;
    border-radius: 50%;
    display: inline-block;
    margin: 0 15px;
  }
`;

const Nose = styled.div`
  width: 20px;
  height: 13px;
  border-radius: 50%;
  background: #d48c7e;
  top: 32px;
  position: relative;
  margin: 0 auto;
`;

const Beard = styled.div`
  display: block;
  position: absolute;
  bottom: -45px;
  left: -10px;
  background: #fff;
  width: calc(100% + 20px);
  height: 80px;
  border-radius: 20% 20% 60% 60%;

  &::before {
    content: "";
    display: table;
    margin: 0 auto;
    width: 20px;
    height: 20px;
    background: #000;
    border-radius: 0 0 50% 50%;
    margin-top: 6px;
  }
`;

const Ears = styled.div`
  width: calc(100% + 17px);
  position: absolute;
  top: 25px;
  left: -8px;
`;

const EarLeft = styled.div`
  width: 10px;
  height: 20px;
  background: #d48c7e;
  border-radius: 50% 0 0 50%;
  float: left;
`;

const EarRight = styled.div`
  width: 10px;
  height: 20px;
  background: #d48c7e;
  border-radius: 50% 0 0 50%;
  float: right;
  transform: rotateZ(180deg);
`;

interface SantaClausProps {
  themeLight?: boolean;
}

export const SantaClaus: React.FC<SantaClausProps> = ({ themeLight }) => {
  const dispatch = useDispatchTyped();
  const santaShown = useSelectorTyped((state) => state.holidays.santaShown);
  const showTree = isNewYearPeriod();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setSantaShown(true));
    }, 6000); // 6 секунд

    return () => clearTimeout(timer);
  }, [dispatch]);

  if (themeLight || !santaShown || !showTree) {
    return null;
  }

  return (
    <SantaClausWrapper $visible={santaShown}>
      <ScHead>
        <ScHat>
          <HatTip />
        </ScHat>
        <Eyes />
        <Nose />
        <Beard />
        <Ears>
          <EarLeft />
          <EarRight />
        </Ears>
      </ScHead>
      <ScBody />
    </SantaClausWrapper>
  );
};
