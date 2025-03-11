import styled from "styled-components";

export const CityWrapper = styled.div`
  position: absolute;
  width: 500px;
  height: 300px;
  top: 0;
  left: 0;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 120px;
    background-color: #918686;
    bottom: -180px;
    border-radius: 10px;
    z-index: 200;
  }
`;
