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
import { House3WindowShades } from "src/components/Window/City/Houses/Hause3/style";

interface HousesProps {
  themeLight?: boolean;
  climateControl: string;
}
const House5: FC<HousesProps> = ({ themeLight, climateControl }) => {
  return (
    <Wrapper $climateControl={climateControl}>
      <HouseRoof $climateControl={climateControl}>
        <Tank $climateControl={climateControl}>
          <TankDetails $climateControl={climateControl} />
        </Tank>
      </HouseRoof>
      <Houses5Windows>
        <HousesWindowsRowTop>
          <HousesWindowsTop $themeLight={themeLight}>
            <House3WindowShades $themeLight={themeLight} />
          </HousesWindowsTop>
          <HousesWindowsTop $themeLight={themeLight} />
          <HousesWindowsTop $themeLight={themeLight} />
          <Antenna />
        </HousesWindowsRowTop>
        <HousesWindowsRow>
          <HousesWindows $themeLight={themeLight} />
          <HousesWindows $themeLight={themeLight} />
          <HousesWindows $themeLight={themeLight}>
            <House3WindowShades $themeLight={themeLight} />
          </HousesWindows>
        </HousesWindowsRow>
        <HousesWindowsRow>
          <HousesWindows $themeLight={themeLight} />
          <HousesDoor />
          <HousesWindows $themeLight={themeLight} />
        </HousesWindowsRow>
      </Houses5Windows>
    </Wrapper>
  );
};

export default House5;
