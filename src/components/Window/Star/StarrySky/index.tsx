import React, { FC, useEffect, useState } from "react";
import {
  SkyContainer,
  Star,
  StarWrapper,
} from "src/components/Window/Star/StarrySky/style";
import { getRandomArra } from "src/common/utils";
import { propsStar, starValue } from "src/components/Window/Star/constants";

const StarrySky: FC = () => {
  console.log("starValue", starValue);
  return (
    <SkyContainer>
      {starValue.map((item) => {
        return (
          <Star
            key={item.id}
            $top={item.top}
            $left={item.left}
            $animationDuration={item.animationDuration}
            $animationDelay={item.animationDelay}
            $width={item.width}
            $height={item.height}
            $opacity={item.opacity}
            $background={item.background}
          />
        );
      })}
    </SkyContainer>
  );
};

export default StarrySky;
