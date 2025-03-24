import React, { FC } from "react";
import {
  Wrapper,
  Houses1Windows,
  HousesWindowsRow,
  HousesWindows,
  HousesDoor,
} from "src/components/Window/City/Houses/Hause1/style";
import { House3WindowShades } from "src/components/Window/City/Houses/Hause3/style";

interface HousesProps {
  themeLight?: boolean;
  climateControl: string;
}
const House1: FC<HousesProps> = ({ themeLight, climateControl }) => {
  return (
    <Wrapper $climateControl={climateControl}>
      <Houses1Windows>
        <HousesWindowsRow>
          <HousesWindows
            $themeLight={themeLight}
            $climateControl={climateControl}
          />
          <HousesWindows
            $themeLight={themeLight}
            $climateControl={climateControl}
          />
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
        </HousesWindowsRow>
        <HousesWindowsRow>
          <HousesDoor />
          <HousesWindows
            $themeLight={themeLight}
            $climateControl={climateControl}
          />
        </HousesWindowsRow>
      </Houses1Windows>
    </Wrapper>
  );
};

export default House1;
