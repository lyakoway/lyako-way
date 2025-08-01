import React, { useEffect, useState } from "react";
import { getRandomArra } from "src/common/utils";
import { RainWrapper, Rain } from "./style";
import Drop from "./Drop";

interface WeatherRainProps {
  dropAmount: number;
  leftMin: number;
  leftMax: number;
  fallTimeMin: number;
  fallTimeMax: number;
  top: number;
}

interface DropItem {
  left: number;
  animationDuration: number;
}

const WeatherRain: React.FC<WeatherRainProps> = ({
  dropAmount,
  leftMin,
  leftMax,
  fallTimeMin,
  fallTimeMax,
  top,
}) => {
  const [randomDrops, setRandomDrops] = useState<DropItem[]>([]);
  const show = top > 40;

  useEffect(() => {
    const randomRainValue = getRandomArra(
      dropAmount,
      leftMin,
      leftMax,
      fallTimeMin,
      fallTimeMax
    );
    setRandomDrops(randomRainValue);
  }, [dropAmount, leftMin, leftMax, fallTimeMin, fallTimeMax]);

  return (
    <RainWrapper $show={show}>
      <Rain>
        {randomDrops.map((itemDrop, i) => (
          <Drop
            key={i}
            left={itemDrop.left}
            animationDuration={itemDrop.animationDuration / 8}
          />
        ))}
      </Rain>
    </RainWrapper>
  );
};

export default WeatherRain;
