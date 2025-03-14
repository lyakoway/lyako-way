import React, { FC } from "react";
import {
  Wrapper,
  HouseWindowCircle,
  Houses4Windows,
  HousesWindowsRow,
  HousesWindows,
  HouseWindowFrame,
  HousesDoor,
  HouseDoorStairs,
  HouseDoorRail,
} from "src/components/Window/City/Houses/Hause4/style";

const House4: FC = () => {
  return (
    <Wrapper>
      <HouseWindowCircle />
      <Houses4Windows>
        <HousesWindowsRow>
          <HousesWindows>
            <HouseWindowFrame />
          </HousesWindows>
        </HousesWindowsRow>
        <HousesDoor>
          <HouseDoorStairs>
            <HouseDoorRail />
          </HouseDoorStairs>
        </HousesDoor>
      </Houses4Windows>
    </Wrapper>
  );
};

export default House4;
