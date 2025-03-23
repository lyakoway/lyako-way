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
          top={item.top}
          idType={dataClimateControl?.id}
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
