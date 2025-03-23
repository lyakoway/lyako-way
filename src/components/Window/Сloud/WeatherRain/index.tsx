import React, { useEffect, useState } from "react";

import { getRandomArra } from "src/common/utils";

import { RainWrapper, Rain, Drop } from "./style";

interface WeatherRainProps {
  dropAmount: number;
  leftMin: number;
  leftMax: number;
  fallTimeMin: number;
  fallTimeMax: number;
  top: number;
}

const WeatherRain = ({
  dropAmount,
  leftMin,
  leftMax,
  fallTimeMin,
  fallTimeMax,
  top,
}: WeatherRainProps) => {
  const [randomSnow, setRandomSnow] = useState([]);
  const show = top > 40;

  useEffect(() => {
    const randomSnowValue = getRandomArra(
      dropAmount,
      leftMin,
      leftMax,
      fallTimeMin,
      fallTimeMax
    );
    setRandomSnow(randomSnowValue);
  }, []);

  return (
    <RainWrapper data-rain-wrapper $show={show}>
      <Rain data-rain>
        {randomSnow.map((itemDrop, i) => (
          <Drop
            key={i}
            $left={itemDrop.left}
            $animationDuration={itemDrop.animationDuration / 8}
          />
        ))}
      </Rain>
    </RainWrapper>
  );
};

export default WeatherRain;
