import React, { FC, useEffect, useState } from "react";

import { RainWrapper, Drop } from "./style";
import { getRandomArra } from "src/common/utils";
interface CloudProps {
  climateControl: string;
}

const randomRainConst = {
  dropAmount: 100,
  leftMin: 0,
  leftMax: 32,
  fallTimeMin: 10,
  fallTimeMax: 20,
};

const Rain: FC<CloudProps> = ({ climateControl }) => {
  const [randomRain, setRandomRain] = useState([]);

  useEffect(() => {
    const randomRainValue = getRandomArra(
      randomRainConst.dropAmount,
      randomRainConst.leftMin,
      randomRainConst.leftMax,
      randomRainConst.fallTimeMin,
      randomRainConst.fallTimeMax
    );
    setRandomRain(randomRainValue);
  }, []);

  return (
    <RainWrapper>
      {randomRain.map((itemDrop, i) => (
        <Drop
          key={i}
          $left={itemDrop.left}
          $animationDuration={itemDrop.animationDuration / 10}
        />
      ))}
    </RainWrapper>
  );
};

export default Rain;
