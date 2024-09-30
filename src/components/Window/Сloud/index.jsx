import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";

// import { store } from '../../../../store';

import WeatherRain from "./WeatherRain";
import PuffCloud from "./PuffCloud";

import { CloudWrapper } from "./style";
// import "./style.css";
import { getRandomArra } from "../../../../common/utils";
import { propsClimateСontrol } from "./constants";
// import { identity } from "lodash";

const Cloud = observer(({ сlimateСontrol }) => {
  const [dataClimateСontrol, setDataClimateСontrol] = useState({});

  useEffect(() => {
    const propsClimateСontrolValue = propsClimateСontrol.find(
      (item) => item.id === сlimateСontrol
    );
    setDataClimateСontrol(propsClimateСontrolValue);
  }, [сlimateСontrol]);

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
  } = dataClimateСontrol;
  console.log("!!!dataClimateСontrol", dataClimateСontrol);

  return getRandomArra(
    cloudAmount,
    minRandomTopAndLeft,
    maxRandomTopAndLeft,
    timeMinRandomMovements,
    timeMaxRandomMovements
  ).map((item, index) => {
    console.log("top", item.top);
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
        top={item.top}
        left={item.left}
        animationDuration={item.animationDuration}
      >
        <PuffCloud
          dropAmount={numberCloudLayers}
          min={minRandomTopAndLeftLocationCloudLayers}
          max={maxRandomTopAndLeftLocationCloudLayers}
          fallTimeMin={timeMinRandomCloudLayers}
          fallTimeMax={timeMaxRandomCloudLayers}
          // nameClimateСontrol={id}
          // top={item.top}
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
});

export default Cloud;
