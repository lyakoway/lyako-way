import React, { FC } from "react";

import Cloud from "src/components/Window/Сloud";
import Rain from "src/components/Window/Rain";
import Snow from "src/components/Window/Snow";
import Lightning from "src/components/Window/Lightning";
import { useForceUpdate } from "src/features/customHooks/useForceUpdate";
import {
  HeavenlyBodyParallax,
  WindowLightLeftLightning,
  WindowLightRightLightning,
} from "src/components/Window/style";
import styled from "styled-components";

export const WeatherWrapper = styled.div`
  display: flex;
`;

interface WindowLightProps {
  climateControl?: string;
  trigger: number;
}

const Weather: FC<WindowLightProps> = ({ climateControl, trigger }) => {
  return (
    <WeatherWrapper key={trigger}>
      {(climateControl === "rainy" ||
        climateControl === "cloudyWithRainAndLightning") && (
        <Rain climateControl={climateControl} />
      )}
      {climateControl === "cloudyWithRainAndLightning" && (
        <Lightning climateControl={climateControl} />
      )}
      {climateControl === "snowy" && <Snow climateControl={climateControl} />}
      <HeavenlyBodyParallax data-parallax-cloud="30">
        <Cloud climateControl={climateControl} />
      </HeavenlyBodyParallax>
    </WeatherWrapper>
  );
};

export default Weather;
