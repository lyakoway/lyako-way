import React, { FC, useEffect, useState } from "react";

import WeatherRain from "./WeatherRain";
import PuffCloud from "./PuffCloud";

import { CloudWrapper } from "./style";
import { getRandomArra } from "src/common/utils";
import { propsClimateControl } from "./constants";
import { IPropsClimateControl } from "./constants";

interface CloudProps {
  climateControl: string;
}

const Cloud: FC<CloudProps> = ({ climateControl }) => {
  const [dataClimateControl, setDataClimateControl] =
    useState<IPropsClimateControl>(null);

  useEffect(() => {
    const propsClimateControlValue = propsClimateControl.find(
      (item) => item.id === climateControl
    );
    setDataClimateControl(propsClimateControlValue);
  }, [climateControl]);

  if (!dataClimateControl) {
    return null;
  }

  const {
    id,
    cloudAmount,
    minRandomTopAndLeft,
    maxRandomTopAndLeft,
    timeMinRandomMovements,
    timeMaxRandomMovements,
    numberCloudLayers,
    minRandomTopAndLeftLocationCloudLayers,
    maxRandomTopAndLeftLocationCloudLayers,
    timeMinRandomCloudLayers,
    timeMaxRandomCloudLayers,
    amountRainClouds,
    minRandomLeftRain,
    maxRandomLeftRain,
    timeMinRandomRain,
    timeMaxRandomRain,
  } = dataClimateControl;

  return getRandomArra(
    cloudAmount,
    minRandomTopAndLeft,
    maxRandomTopAndLeft,
    timeMinRandomMovements,
    timeMaxRandomMovements
  ).map((item, index) => {
    let colorCloud = 100;
    let colorBorder = 50;
    if (
      id === "sunnyMoon" ||
      (item.top < 60 && (id === "cloudyWithSunMoon" || id === "cloudy"))
    ) {
      colorCloud = 100;
      colorBorder = 70;
    }
    if (item.top > 60 && (id === "cloudyWithSunMoon" || id === "cloudy")) {
      colorCloud = 80;
      colorBorder = 50;
    }
    if (item.top < 60 && id === "rainy") {
      colorCloud = 80;
      colorBorder = 50;
    }
    if (item.top > 60 && id === "rainy") {
      colorCloud = 60;
      colorBorder = 30;
    }
    if (id === "cloudyWithRainAndLightning") {
      colorCloud = 50;
      colorBorder = 12;
    }

    return (
      <CloudWrapper
        key={index}
        $top={item.top}
        $left={item.left}
        $duration={item.animationDuration}
      >
        <PuffCloud
          dropAmount={numberCloudLayers}
          min={minRandomTopAndLeftLocationCloudLayers}
          max={maxRandomTopAndLeftLocationCloudLayers}
          fallTimeMin={timeMinRandomCloudLayers}
          fallTimeMax={timeMaxRandomCloudLayers}
          colorCloud={colorCloud}
          colorBorder={colorBorder}
        />
        {amountRainClouds && (
          <WeatherRain
            dropAmount={amountRainClouds}
            leftMin={minRandomLeftRain}
            leftMax={maxRandomLeftRain}
            fallTimeMin={timeMinRandomRain}
            fallTimeMax={timeMaxRandomRain}
            top={item.top}
          />
        )}
      </CloudWrapper>
    );
  });
};

export default Cloud;
