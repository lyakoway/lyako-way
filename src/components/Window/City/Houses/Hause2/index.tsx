import React, { FC } from "react";
import {
  Wrapper,
  Tank,
  TankDetails,
  House2Sign,
  Houses2Windows,
  HousesWindowsRow,
  HousesWindows,
  HousesDoor,
  House2Rack,
} from "src/components/Window/City/Houses/Hause2/style";

const House2: FC = () => {
  return (
    <Wrapper>
      <Tank>
        <TankDetails />
      </Tank>
      <House2Sign />

      <Houses2Windows>
        <HousesWindowsRow>
          <HousesWindows />
          <HousesWindows />
          <HousesWindows />
        </HousesWindowsRow>
        <HousesWindowsRow>
          <HousesWindows />
          <HousesWindows />
          <HousesWindows />
        </HousesWindowsRow>
        <HousesWindowsRow>
          <HousesDoor />
          <HousesWindows />
          <HousesWindows />
        </HousesWindowsRow>
      </Houses2Windows>

      <House2Rack />
    </Wrapper>
  );
};

export default House2;
