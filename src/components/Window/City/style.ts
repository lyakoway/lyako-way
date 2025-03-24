import styled from "styled-components";

export const CityWrapper = styled.div<{ $climateControl: string }>`
  position: absolute;
  width: 500px;
  height: 300px;
  top: 0;
  left: -14px;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    width: 800px;
    height: 120px;
    background-color: ${({ $climateControl }) =>
      $climateControl === "snowy" ? "#fff" : "#918686"};
    transition: background 4s ease;
    bottom: -180px;
    border-radius: 10px;
    z-index: 200;
  }
`;
