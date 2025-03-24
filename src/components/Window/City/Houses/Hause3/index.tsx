import React, { FC } from "react";
import {
  Container,
  Wrapper,
  House3Chimney,
  Smoke,
  SmokeL,
  SmokeR,
  House3RoofWindow,
  House3WindowShades,
  Houses3Windows,
  HousesWindowsRow,
  HousesWindows,
  HousesDoor,
} from "src/components/Window/City/Houses/Hause3/style";

interface HousesProps {
  themeLight?: boolean;
  climateControl: string;
}
const House3: FC<HousesProps> = ({ themeLight, climateControl }) => {
  return (
    <Container>
      <Wrapper $climateControl={climateControl}>
        <House3Chimney>
          <Smoke>
            <SmokeL $animationDelay={0} />
            <SmokeR $animationDelay={1} />
            <SmokeL $animationDelay={2} />
            <SmokeR $animationDelay={3} />
            <SmokeL $animationDelay={4} />
            <SmokeR $animationDelay={5} />
            <SmokeL $animationDelay={6} />
            <SmokeR $animationDelay={7} />
            <SmokeL $animationDelay={8} />
            <SmokeR $animationDelay={9} />
          </Smoke>
        </House3Chimney>

        <House3RoofWindow
          $themeLight={themeLight}
          $climateControl={climateControl}
        >
          <House3WindowShades $themeLight={themeLight} />
        </House3RoofWindow>

        <Houses3Windows>
          <HousesWindowsRow>
            <HousesWindows $themeLight={themeLight}>
              <House3WindowShades $themeLight={themeLight} />
            </HousesWindows>
            <HousesWindows $themeLight={themeLight}>
              <House3WindowShades $themeLight={themeLight} />
            </HousesWindows>
          </HousesWindowsRow>
          <HousesWindowsRow>
            <HousesWindows $themeLight={themeLight}>
              <House3WindowShades $themeLight={themeLight} />
            </HousesWindows>
            <HousesDoor />
          </HousesWindowsRow>
        </Houses3Windows>
      </Wrapper>
    </Container>
  );
};

export default House3;
