import React, { FC } from "react";
import { StarWrapper } from "src/components/Window/Star/style";
import StarrySky from "src/components/Window/Star/StarrySky";
import ShootingStar from "src/components/Window/Star/ShootingStar";

interface CloudProps {
  themeLight?: boolean;
}

const Star: FC<CloudProps> = ({ themeLight }) => {
  return (
    <StarWrapper $themeLight={themeLight}>
      <StarrySky />
      <ShootingStar />
    </StarWrapper>
  );
};

export default Star;
