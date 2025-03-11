import React, { FC } from "react";
import {
  Wrapper,
  Houses1Windows,
  HousesWindowsRow,
  HousesWindows,
  HousesDoor,
} from "src/components/Window/City/Houses/Hause1/style";

const House1: FC = () => {
  return (
    <Wrapper>
      <Houses1Windows>
        <HousesWindowsRow>
          <HousesWindows />
          <HousesWindows />
        </HousesWindowsRow>
        <HousesWindowsRow>
          <HousesWindows />
          <HousesWindows />
        </HousesWindowsRow>
        <HousesWindowsRow>
          <HousesDoor />
          <HousesWindows />
        </HousesWindowsRow>
      </Houses1Windows>
    </Wrapper>
  );
};

export default House1;
