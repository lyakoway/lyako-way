import React, { FC, useEffect, useState } from "react";
import {
  SkyContainer,
  Star,
  StarWrapper,
} from "src/components/Window/Star/ShootingStar/style";
import { propsStar } from "src/components/Window/Star/constants";
import { getRandomArra } from "src/common/utils";

const ShootingStar: FC = () => {
  const {
    starAmount,
    minRandomTopAndLeft,
    maxRandomTopAndLeft,
    timeMinRandomAnimationDelay,
    timeMaxRandomAnimationDelay,
  } = propsStar;

  return (
    <SkyContainer>
      {getRandomArra(
        starAmount,
        minRandomTopAndLeft,
        maxRandomTopAndLeft,
        timeMinRandomAnimationDelay,
        timeMaxRandomAnimationDelay
      ).map((item, index) => {
        return (
          <StarWrapper key={index}>
            <Star
              $top={item.top}
              $left={item.left}
              $animationDuration={item.animationDuration}
              $animationDelay={item.animationDuration - 2}
            />
          </StarWrapper>
        );
      })}
    </SkyContainer>
  );
};

export default ShootingStar;
