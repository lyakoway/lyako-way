import React, { useEffect, useState } from "react";
import { SnowyWrapper, Rain, SnowFlake } from "./style";
import { getRandomArra } from "src/common/utils";

interface SnowItem {
  left: number;
  animationDuration: number;
}

interface WeatherRainProps {
  dropAmount: number;
  leftMin: number;
  leftMax: number;
  fallTimeMin: number;
  fallTimeMax: number;
  top: number;
}

const Snowy: React.FC<WeatherRainProps> = ({
  dropAmount,
  leftMin,
  leftMax,
  fallTimeMin,
  fallTimeMax,
  top,
}) => {
  const [randomSnow, setRandomSnow] = useState<SnowItem[]>([]);
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
  }, [dropAmount, leftMin, leftMax, fallTimeMin, fallTimeMax]);

  return (
    <SnowyWrapper $show={show}>
      <Rain>
        {randomSnow.map((item, i) => (
          <SnowFlake
            key={i}
            $left={item.left}
            $animationDelay={item.animationDuration / 8}
            $animationDuration={item.animationDuration}
          >
            ❄
          </SnowFlake>
        ))}
      </Rain>
    </SnowyWrapper>
  );
};

export default Snowy;
