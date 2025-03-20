import styled, { css } from "styled-components";

export const CityWrapper = styled.div`
  position: absolute;
  width: 600px;
  height: 300px;
  top: 0;
  left: -14px;
  z-index: 1;
`;

export const SkyscrapersWrapper = styled.div`
  position: absolute;
  height: auto;
  width: 100%;
  left: 0;
  bottom: -60px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1;
`;

export const SkyscraperWindowsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8px, 1fr));
  gap: 0.2rem;
  margin: 10px 4px 4px 4px;
`;

export const SkyscraperWindowsWrapper7 = styled.div`
  width: 58px;
  position: absolute;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8px, 1fr));
  gap: 0.2rem;
  margin: 10px 4px 4px 4px;
`;

export const Skyscraper1 = styled.div<{ $color: string }>`
  border-top: 12px solid transparent;
  border-bottom: none;
  border-right: ${({ $color }) => $color} 66px solid;
  transition: border-right 2s ease;
  height: 160px;
  width: 50px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    border-top: 15px solid transparent;
    border-bottom: none;
    border-right: ${({ $color }) => $color} 45px solid;
    transition: border-right 2s ease;
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
    background-color: ${({ $color }) => $color};
    transition: background 2s ease;
    top: -50px;
    left: 15px;
  }
`;

export const Skyscraper2 = styled.div<{ $color: string }>`
  background-color: ${({ $color }) => $color};
  transition: background 2s ease;
  width: 50px;
  height: 183px;
  margin-left: 33px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 2px;
    height: 24px;
    background-color: ${({ $color }) => $color};
    transition: background 2s ease;
    top: -24px;
    left: 7px;
  }
`;
export const Skyscraper3 = styled.div<{ $color: string }>`
  background-color: ${({ $color }) => $color};
  transition: background 2s ease;
  width: 70px;
  height: 240px;
  margin-left: 39px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 8px;
    height: 4px;
    background-color: ${({ $color }) => $color};
    transition: background 2s ease;
    top: -4px;
  }
`;

export const Skyscraper4 = styled.div<{ $color: string }>`
  background-color: ${({ $color }) => $color};
  transition: background 2s ease;
  width: 47px;
  height: 175px;
  margin-left: 10px;
  position: relative;
`;

export const Skyscraper5 = styled.div<{ $color: string }>`
  background-color: ${({ $color }) => $color};
  transition: background 2s ease;
  width: 47px;
  height: 211px;
  margin-left: 5px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 6px;
    height: 2px;
    background-color: ${({ $color }) => $color};
    transition: background 2s ease;
    top: -2px;
    right: 5px;
  }
`;

export const Skyscraper6 = styled.div<{ $color: string }>`
  background-color: ${({ $color }) => $color};
  transition: background 2s ease;
  width: 70px;
  height: 189px;
  margin-left: 38px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 5px;
    height: 11px;
    background-color: ${({ $color }) => $color};
    transition: background 2s ease;
    top: -8px;
    left: 6px;
  }
  &:after {
    content: "";
    position: absolute;
    width: 2px;
    height: 30px;
    background-color: ${({ $color }) => $color};
    transition: background 2s ease;
    top: -37px;
    left: 6px;
  }
`;

export const Skyscraper7 = styled.div<{ $color: string }>`
  border-top: 12px solid transparent;
  border-bottom: none;
  border-right: ${({ $color }) => $color} 66px solid;
  transition: border-right 2s ease;
  height: 130px;
  position: relative;
  margin-left: 4px;

  &:before {
    content: "";
    position: absolute;
    border-top: 15px solid transparent;
    border-bottom: none;
    border-right: ${({ $color }) => $color} 45px solid;
    transition: border-right 2s ease;
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
    background-color: ${({ $color }) => $color};
    transition: background 2s ease;
    top: -50px;
    left: 15px;
  }
`;

export const Skyscraper8 = styled.div<{ $color: string }>`
  background-color: ${({ $color }) => $color};
  transition: background 2s ease;
  width: 80px;
  height: 150px;
  margin-left: 4px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 2px;
    height: 24px;
    background-color: ${({ $color }) => $color};
    transition: background 2s ease;
    top: -24px;
    left: 7px;
  }
`;
