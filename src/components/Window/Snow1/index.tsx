import React, { FC, useEffect, useState } from "react";

import { SnowFlakeLWrapper, SnowFlakeL, SnowFlakeR } from "./style";
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

const Snow1: FC<SnowProps> = ({ climateControl }) => {
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
    <SnowFlakeLWrapper>
      <SnowFlakeL $left={10} $animationDelay={0.5} $animationDuration={6}>
        ❅
      </SnowFlakeL>
      <SnowFlakeR $left={20} $animationDelay={2} $animationDuration={7}>
        ❅
      </SnowFlakeR>
      <SnowFlakeL $left={30} $animationDelay={4} $animationDuration={8}>
        ❆
      </SnowFlakeL>
      <SnowFlakeR $left={40} $animationDelay={3} $animationDuration={6}>
        ❄
      </SnowFlakeR>
      <SnowFlakeL $left={50} $animationDelay={4} $animationDuration={9}>
        ❅
      </SnowFlakeL>
      <SnowFlakeR $left={60} $animationDelay={3} $animationDuration={8}>
        ❆
      </SnowFlakeR>
      <SnowFlakeL $left={70} $animationDelay={2} $animationDuration={10}>
        ❄
      </SnowFlakeL>
      <SnowFlakeR $left={80} $animationDelay={2} $animationDuration={7}>
        ❅
      </SnowFlakeR>
      <SnowFlakeL $left={90} $animationDelay={5} $animationDuration={8}>
        ❆
      </SnowFlakeL>
      <SnowFlakeR $left={55} $animationDelay={4} $animationDuration={7}>
        ❄
      </SnowFlakeR>
    </SnowFlakeLWrapper>
  );
};

export default Snow1;
