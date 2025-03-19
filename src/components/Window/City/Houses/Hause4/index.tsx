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

interface HousesProps {
  themeLight?: boolean;
}
const House4: FC<HousesProps> = ({ themeLight }) => {
  return (
    <Wrapper>
      <HouseWindowCircle $themeLight={themeLight} />
      <Houses4Windows>
        <HousesWindowsRow>
          <HousesWindows $themeLight={themeLight}>
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
