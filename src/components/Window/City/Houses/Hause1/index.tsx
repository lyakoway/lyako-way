import React, { FC } from "react";
import {
  Wrapper,
  Houses1Windows,
  HousesWindowsRow,
  HousesWindows,
  HousesDoor,
} from "src/components/Window/City/Houses/Hause1/style";

interface HousesProps {
  themeLight?: boolean;
}
const House1: FC<HousesProps> = ({ themeLight }) => {
  return (
    <Wrapper>
      <Houses1Windows>
        <HousesWindowsRow>
          <HousesWindows $themeLight={themeLight} />
          <HousesWindows $themeLight={themeLight} />
        </HousesWindowsRow>
        <HousesWindowsRow>
          <HousesWindows $themeLight={themeLight} />
          <HousesWindows $themeLight={themeLight} />
        </HousesWindowsRow>
        <HousesWindowsRow>
          <HousesDoor />
          <HousesWindows $themeLight={themeLight} />
        </HousesWindowsRow>
      </Houses1Windows>
    </Wrapper>
  );
};

export default House1;
