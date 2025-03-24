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
  climateControl: string;
}
const House4: FC<HousesProps> = ({ themeLight, climateControl }) => {
  return (
    <Wrapper $climateControl={climateControl}>
      <HouseWindowCircle $themeLight={themeLight} />
      <Houses4Windows>
        <HousesWindowsRow>
          <HousesWindows
            $themeLight={themeLight}
            $climateControl={climateControl}
          >
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
