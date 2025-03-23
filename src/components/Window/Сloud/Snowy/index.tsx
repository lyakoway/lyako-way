import React, { useEffect, useState } from "react";

import { getRandomArra } from "src/common/utils";

import { SnowyWrapper, Rain, SnowFlake } from "./style";

interface WeatherRainProps {
  dropAmount: number;
  leftMin: number;
  leftMax: number;
  fallTimeMin: number;
  fallTimeMax: number;
  top: number;
}

const Snowy = ({
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
    <SnowyWrapper $show={show}>
      <Rain>
        {randomSnow.map((itemDrop, i) => (
          <SnowFlake
            key={i}
            $left={itemDrop.left}
            $animationDelay={itemDrop.animationDuration / 8}
            $animationDuration={itemDrop.animationDuration}
          >
            ❄
          </SnowFlake>
        ))}
      </Rain>
    </SnowyWrapper>
  );
};

export default Snowy;
