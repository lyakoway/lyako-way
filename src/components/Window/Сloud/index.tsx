import React, { FC, useEffect, useState } from "react";

import WeatherRain from "./WeatherRain";
import PuffCloud from "./PuffCloud";

import { CloudWrapper } from "./style";
import { getRandomArra } from "src/common/utils";
import { propsClimateControl } from "./constants";
import { IPropsClimateControl } from "./constants";
import Snowy from "src/components/Window/Сloud/Snowy";

interface CloudProps {
  climateControl: string;
}

const Cloud: FC<CloudProps> = ({ climateControl }) => {
  const [dataClimateControl, setDataClimateControl] =
    useState<IPropsClimateControl>(null);
  const [randomCloud, setRandomCloud] = useState([]);

  useEffect(() => {
    const propsClimateControlValue = propsClimateControl.find(
      (item) => item.id === climateControl
    );
    setDataClimateControl(propsClimateControlValue);
  }, [climateControl]);

  useEffect(() => {
    const randomCloudValue = getRandomArra(
      dataClimateControl?.cloudAmount,
      dataClimateControl?.minRandomTopAndLeft,
      dataClimateControl?.maxRandomTopAndLeft,
      dataClimateControl?.timeMinRandomMovements,
      dataClimateControl?.timeMaxRandomMovements
    );
    setRandomCloud(randomCloudValue);
  }, [dataClimateControl]);

  if (!dataClimateControl) {
    return null;
  }

  return randomCloud.map((item, index) => {
    let colorCloud = 100;
    let colorBorder = 50;
    if (
      dataClimateControl?.id === "sunnyMoon" ||
      (item.top < 40 &&
        (dataClimateControl?.id === "cloudyWithSunMoon" ||
          dataClimateControl?.id === "cloudy"))
    ) {
      colorCloud = 100;
      colorBorder = 70;
    }
    if (
      item.top > 40 &&
      (dataClimateControl?.id === "cloudyWithSunMoon" ||
        dataClimateControl?.id === "cloudy")
    ) {
      colorCloud = 80;
      colorBorder = 50;
    }
    if (item.top < 40 && dataClimateControl?.id === "rainy") {
      colorCloud = 80;
      colorBorder = 50;
    }
    if (item.top > 40 && dataClimateControl?.id === "rainy") {
      colorCloud = 60;
      colorBorder = 30;
    }
    if (dataClimateControl?.id === "cloudyWithRainAndLightning") {
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
          dropAmount={dataClimateControl?.numberCloudLayers}
          min={dataClimateControl?.minRandomTopAndLeftLocationCloudLayers}
          max={dataClimateControl?.maxRandomTopAndLeftLocationCloudLayers}
          fallTimeMin={dataClimateControl?.timeMinRandomCloudLayers}
          fallTimeMax={dataClimateControl?.timeMaxRandomCloudLayers}
          colorCloud={colorCloud}
          colorBorder={colorBorder}
        />
        {(dataClimateControl?.id === "rainy" ||
          dataClimateControl?.id === "cloudyWithRainAndLightning") &&
          dataClimateControl?.amountRainClouds && (
            <WeatherRain
              dropAmount={dataClimateControl?.amountRainClouds}
              leftMin={dataClimateControl?.minRandomLeftRain}
              leftMax={dataClimateControl?.maxRandomLeftRain}
              fallTimeMin={dataClimateControl?.timeMinRandomRain}
              fallTimeMax={dataClimateControl?.timeMaxRandomRain}
              top={item.top}
            />
          )}
        {dataClimateControl?.id === "snowy" &&
          dataClimateControl?.amountRainClouds && (
            <Snowy
              dropAmount={dataClimateControl?.amountRainClouds}
              leftMin={dataClimateControl?.minRandomLeftRain}
              leftMax={dataClimateControl?.maxRandomLeftRain}
              fallTimeMin={dataClimateControl?.timeMinRandomRain}
              fallTimeMax={dataClimateControl?.timeMaxRandomRain}
              top={item.top}
            />
          )}
      </CloudWrapper>
    );
  });
};

export default Cloud;
