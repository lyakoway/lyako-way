import React, { FC, useEffect, useState } from "react";
import { SnowWrapper, SnowFlake, SnowFlakeL, SnowFlakeR } from "./style";
import { getRandomArra } from "src/common/utils";

const randomSnowConst = {
  dropAmount: 40,
  leftMin: 0,
  leftMax: 220,
  fallTimeMin: 10,
  fallTimeMax: 40,
};

interface SnowItem {
  top: number;
  left: number;
  animationDuration: number;
}

const Snow: FC = () => {
  const [randomSnow, setRandomSnow] = useState<SnowItem[]>([]);

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

      {/* Символьные снежинки */}
      <SnowFlakeL $left={10} $delay={0.5} $duration={6}>
        ❅
      </SnowFlakeL>
      <SnowFlakeR $left={20} $delay={2} $duration={7}>
        ❅
      </SnowFlakeR>
      <SnowFlakeL $left={30} $delay={4} $duration={8}>
        ❆
      </SnowFlakeL>
      <SnowFlakeR $left={40} $delay={3} $duration={6}>
        ❄
      </SnowFlakeR>
      <SnowFlakeL $left={50} $delay={4} $duration={9}>
        ❅
      </SnowFlakeL>
      <SnowFlakeR $left={60} $delay={3} $duration={8}>
        ❆
      </SnowFlakeR>
      <SnowFlakeL $left={70} $delay={2} $duration={10}>
        ❄
      </SnowFlakeL>
      <SnowFlakeR $left={80} $delay={2} $duration={7}>
        ❅
      </SnowFlakeR>
      <SnowFlakeL $left={90} $delay={5} $duration={8}>
        ❆
      </SnowFlakeL>
      <SnowFlakeR $left={55} $delay={4} $duration={7}>
        ❄
      </SnowFlakeR>
    </SnowWrapper>
  );
};

export default Snow;
