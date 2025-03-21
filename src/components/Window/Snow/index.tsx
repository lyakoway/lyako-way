import React, { FC, useEffect, useState } from "react";

import { SnowWrapper, SnowFlake } from "./style";
import { getRandomArra } from "src/common/utils";
interface SnowProps {
  climateControl: string;
}

const randomSnowConst = {
  dropAmount: 180,
  leftMin: 0,
  leftMax: 220,
  fallTimeMin: 10,
  fallTimeMax: 40,
};

const Snow: FC<SnowProps> = ({ climateControl }) => {
  const [randomSnow, setRandomSnow] = useState([]);

  useEffect(() => {
    const randomSnowValue = getRandomArra(
      randomSnowConst.dropAmount,
      randomSnowConst.leftMin,
      randomSnowConst.leftMax,
      randomSnowConst.fallTimeMin,
      randomSnowConst.fallTimeMax
    );
    setRandomSnow(randomSnowValue);
  }, []);

  console.log(randomSnow);

  return (
    <SnowWrapper>
      {randomSnow.map((itemDrop, i) => (
        <SnowFlake
          key={i}
          $top={itemDrop.top / 5}
          $left={itemDrop.left}
          $animationDelay={itemDrop.animationDuration / 10}
          $animationDuration={itemDrop.animationDuration}
          $opacity={itemDrop.animationDuration / 40}
          $size={itemDrop.animationDuration / 8}
        />
      ))}
    </SnowWrapper>
  );
};

export default Snow;
