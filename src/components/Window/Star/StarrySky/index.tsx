import React, { FC } from "react";
import { SkyContainer, Star } from "src/components/Window/Star/StarrySky/style";
import { starValue } from "src/components/Window/Star/constants";

const StarrySky: FC = () => {
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
