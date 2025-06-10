import React, { FC } from "react";

import Cloud from "src/components/Window/Сloud";
import Rain from "src/components/Window/Rain";
import Snow from "src/components/Window/Snow";
import Lightning from "src/components/Window/Lightning";
import { HeavenlyBodyParallax } from "src/components/Window/style";

interface WindowLightProps {
  climateControl?: string;
}

const Weather: FC<WindowLightProps> = ({ climateControl }) => (
  <>
    {(climateControl === "rainy" ||
      climateControl === "cloudyWithRainAndLightning") && <Rain />}
    {climateControl === "cloudyWithRainAndLightning" && <Lightning />}
    {climateControl === "snowy" && <Snow />}
    <HeavenlyBodyParallax data-parallax-cloud="30">
      <Cloud climateControl={climateControl} />
    </HeavenlyBodyParallax>
  </>
);

export default Weather;
