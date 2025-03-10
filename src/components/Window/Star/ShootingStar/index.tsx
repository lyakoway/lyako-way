import React, { FC, useEffect, useState } from "react";
import {
  SkyContainer,
  Star,
} from "src/components/Window/Star/ShootingStar/style";
import { propsStar } from "src/components/Window/Star/constants";
import { getRandomArra } from "src/common/utils";

const ShootingStar: FC = () => {
  const [randomStar, setRandomStar] = useState([]);
  const {
    starAmount,
    minRandomTopAndLeft,
    maxRandomTopAndLeft,
    timeMinRandomAnimationDelay,
    timeMaxRandomAnimationDelay,
  } = propsStar;

  useEffect(() => {
    const randomStarValue = getRandomArra(
      starAmount,
      minRandomTopAndLeft,
      maxRandomTopAndLeft,
      timeMinRandomAnimationDelay,
      timeMaxRandomAnimationDelay
    );
    setRandomStar(randomStarValue);
  }, []);

  return (
    <SkyContainer>
      {randomStar.length &&
        randomStar.map((item, index) => (
          <Star
            key={index}
            $top={item.top}
            $left={item.left}
            $animationDuration={item.animationDuration}
            $animationDelay={item.animationDuration - 2}
          />
        ))}
    </SkyContainer>
  );
};

export default ShootingStar;
