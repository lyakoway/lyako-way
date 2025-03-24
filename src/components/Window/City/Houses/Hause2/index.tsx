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
import { House3WindowShades } from "src/components/Window/City/Houses/Hause3/style";

interface HousesProps {
  themeLight?: boolean;
  climateControl: string;
}
const House2: FC<HousesProps> = ({ themeLight, climateControl }) => {
  return (
    <Wrapper $climateControl={climateControl}>
      <Tank $climateControl={climateControl}>
        <TankDetails $climateControl={climateControl} />
      </Tank>
      <House2Sign $climateControl={climateControl} />

      <Houses2Windows>
        <HousesWindowsRow>
          <HousesWindows
            $themeLight={themeLight}
            $climateControl={climateControl}
          />
          <HousesWindows
            $themeLight={themeLight}
            $climateControl={climateControl}
          />
          <HousesWindows
            $themeLight={themeLight}
            $climateControl={climateControl}
          >
            <House3WindowShades $themeLight={themeLight} />
          </HousesWindows>
        </HousesWindowsRow>
        <HousesWindowsRow>
          <HousesWindows
            $themeLight={themeLight}
            $climateControl={climateControl}
          />
          <HousesWindows
            $themeLight={themeLight}
            $climateControl={climateControl}
          >
            <House3WindowShades $themeLight={themeLight} />
          </HousesWindows>
          <HousesWindows
            $themeLight={themeLight}
            $climateControl={climateControl}
          />
        </HousesWindowsRow>
        <HousesWindowsRow>
          <HousesDoor />
          <HousesWindows
            $themeLight={themeLight}
            $climateControl={climateControl}
          />
          <HousesWindows
            $themeLight={themeLight}
            $climateControl={climateControl}
          />
        </HousesWindowsRow>
      </Houses2Windows>

      <House2Rack />
    </Wrapper>
  );
};

export default House2;
