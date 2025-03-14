import React, { FC } from "react";
import {
  Wrapper,
  HouseRoof,
  Tank,
  TankDetails,
  Houses5Windows,
  HousesWindowsRowTop,
  HousesWindowsTop,
  Antenna,
  HousesWindowsRow,
  HousesWindows,
  HousesDoor,
} from "src/components/Window/City/Houses/Hause5/style";

const House5: FC = () => {
  return (
    <Wrapper>
      <HouseRoof>
        <Tank>
          <TankDetails />
        </Tank>
      </HouseRoof>
      <Houses5Windows>
        <HousesWindowsRowTop>
          <HousesWindowsTop />
          <HousesWindowsTop />
          <HousesWindowsTop />
          <Antenna />
        </HousesWindowsRowTop>
        <HousesWindowsRow>
          <HousesWindows />
          <HousesWindows />
          <HousesWindows />
        </HousesWindowsRow>
        <HousesWindowsRow>
          <HousesWindows />
          <HousesDoor />
          <HousesWindows />
        </HousesWindowsRow>
      </Houses5Windows>
    </Wrapper>
  );
};

export default House5;
