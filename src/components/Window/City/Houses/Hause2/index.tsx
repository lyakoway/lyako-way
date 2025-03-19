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

interface HousesProps {
  themeLight?: boolean;
}
const House2: FC<HousesProps> = ({ themeLight }) => {
  return (
    <Wrapper>
      <Tank>
        <TankDetails />
      </Tank>
      <House2Sign />

      <Houses2Windows>
        <HousesWindowsRow>
          <HousesWindows $themeLight={themeLight} />
          <HousesWindows $themeLight={themeLight} />
          <HousesWindows $themeLight={themeLight} />
        </HousesWindowsRow>
        <HousesWindowsRow>
          <HousesWindows $themeLight={themeLight} />
          <HousesWindows $themeLight={themeLight} />
          <HousesWindows $themeLight={themeLight} />
        </HousesWindowsRow>
        <HousesWindowsRow>
          <HousesDoor />
          <HousesWindows $themeLight={themeLight} />
          <HousesWindows $themeLight={themeLight} />
        </HousesWindowsRow>
      </Houses2Windows>

      <House2Rack />
    </Wrapper>
  );
};

export default House2;
